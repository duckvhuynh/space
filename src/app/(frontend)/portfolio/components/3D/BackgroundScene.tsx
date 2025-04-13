'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { motion } from 'framer-motion'

function ParticleField({ count = 2000 }) {
  const pointsRef = useRef()

  // Generate random positions for particles
  const particlesPosition = useRef(new Float32Array(count * 3))
  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    particlesPosition.current[i3] = (Math.random() - 0.5) * 10
    particlesPosition.current[i3 + 1] = (Math.random() - 0.5) * 10
    particlesPosition.current[i3 + 2] = (Math.random() - 0.5) * 10
  }

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()

    if (pointsRef.current) {
      pointsRef.current.rotation.x = elapsedTime * 0.05
      pointsRef.current.rotation.y = elapsedTime * 0.03
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition.current}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#ffffff"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.4}
        fog={true}
      />
    </points>
  )
}

export function BackgroundScene() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 2 }}
      className="fixed inset-0 -z-10 opacity-50 pointer-events-none"
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <ParticleField />
      </Canvas>
    </motion.div>
  )
}
