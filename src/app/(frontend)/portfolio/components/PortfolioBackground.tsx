'use client'

import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { useTheme } from '@/providers/Theme'

export const PortfolioBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!containerRef.current) return

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
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)

    // Create particles
    const particleCount = 1000
    const particles = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      // Position particles in a 3D space
      positions[i * 3] = (Math.random() - 0.5) * 100 // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100 // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100 // z

      // Random sizes
      sizes[i] = Math.random() * 0.5 + 0.1
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    // Material for particles
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6,
      color: theme === 'dark' ? 0x3d9eff : 0x9a39ff,
    })

    // Create the particle system
    const particleSystem = new THREE.Points(particles, particleMaterial)
    scene.add(particleSystem)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Slowly rotate the particle system
      particleSystem.rotation.x += 0.0003
      particleSystem.rotation.y += 0.0005

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
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      scene.remove(particleSystem)
      particles.dispose()
      particleMaterial.dispose()
      renderer.dispose()
    }
  }, [theme])

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true" />
  )
}
