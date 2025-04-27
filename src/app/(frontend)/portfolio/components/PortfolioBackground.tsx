'use client'

import React, { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { useTheme } from '@/providers/Theme'
// Change this import to avoid using export * from framer-motion
import { useInView as useFramerInView } from 'framer-motion'

export const PortfolioBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()
  // Use the renamed import
  const inView = useFramerInView(containerRef, { once: false, amount: 0.1 })
  const [isMounted, setIsMounted] = useState(false)

  // Performance optimization by reducing particle count on mobile
  const [particleCount, setParticleCount] = useState(1000)

  useEffect(() => {
    setIsMounted(true)

    // Adjust particle count based on screen size
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setParticleCount(500)
      } else if (width < 1280) {
        setParticleCount(800)
      } else {
        setParticleCount(1200)
      }
    }

    // Initial call
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!containerRef.current || !isMounted) return

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    )
    camera.position.z = 30

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance', // Optimize for performance
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) // Limit for performance
    containerRef.current.appendChild(renderer.domElement)

    // Create particles
    const particles = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)
    const colors = new Float32Array(particleCount * 3)

    const baseColor = theme === 'dark' ? new THREE.Color(0x3d9eff) : new THREE.Color(0x9a39ff)
    const colorVariation = 0.2 // Allow some color variation

    for (let i = 0; i < particleCount; i++) {
      // Position particles in a 3D space with more spread on X and Y
      const angle = Math.random() * Math.PI * 2
      const radius = 5 + Math.random() * 30

      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius
      const z = (Math.random() - 0.5) * 30

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      // Random sizes with more variation
      sizes[i] = Math.random() * 0.8 + 0.1

      // Slightly vary colors for more visual interest
      const particleColor = baseColor.clone()
      particleColor.r += (Math.random() * 2 - 1) * colorVariation
      particleColor.g += (Math.random() * 2 - 1) * colorVariation
      particleColor.b += (Math.random() * 2 - 1) * colorVariation

      colors[i * 3] = particleColor.r
      colors[i * 3 + 1] = particleColor.g
      colors[i * 3 + 2] = particleColor.b
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    // Create texture for particles
    const textureLoader = new THREE.TextureLoader()
    const particleTexture = textureLoader.load('/particles/particle.png')

    // Material for particles
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.7,
      vertexColors: true, // Use the colors we defined
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      map: particleTexture,
    })

    // Create the particle system
    const particleSystem = new THREE.Points(particles, particleMaterial)
    scene.add(particleSystem)

    // Interactive movement
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const windowHalfX = window.innerWidth / 2
    const windowHalfY = window.innerHeight / 2

    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX) / windowHalfX / 8
      mouseY = (event.clientY - windowHalfY) / windowHalfY / 8
    }

    const onDocumentTouchMove = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        mouseX = (event.touches[0].clientX - windowHalfX) / windowHalfX / 4
        mouseY = (event.touches[0].clientY - windowHalfY) / windowHalfY / 4
      }
    }

    document.addEventListener('mousemove', onDocumentMouseMove)
    document.addEventListener('touchmove', onDocumentTouchMove)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      targetX = mouseX * 0.5
      targetY = mouseY * 0.5

      // Smooth camera movement toward target
      particleSystem.rotation.x += 0.0003
      particleSystem.rotation.y += 0.0005

      // Gentle rotation and responsive to mouse/touch
      particleSystem.rotation.y += 0.1 * (targetX - particleSystem.rotation.y)
      particleSystem.rotation.x += 0.1 * (targetY - particleSystem.rotation.x)

      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Update particle color when theme changes
    if (theme === 'dark') {
      particleMaterial.color.set(0x3d9eff)
    } else {
      particleMaterial.color.set(0x9a39ff)
    }

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousemove', onDocumentMouseMove)
      document.removeEventListener('touchmove', onDocumentTouchMove)

      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      scene.remove(particleSystem)
      particles.dispose()
      particleMaterial.dispose()
      renderer.dispose()
    }
  }, [theme, isMounted, particleCount, inView])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-80 transition-opacity duration-500"
      style={{ opacity: inView ? 0.8 : 0.4 }}
      aria-hidden="true"
    />
  )
}
