import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, Canvas, extend, useThree } from '@react-three/fiber';
import { useInView } from 'framer-motion';

const ParticleField = ({ count = 5000 }) => {
  const mesh = useRef();
  const { mouse, viewport } = useThree();
  
  // Create particles
  const particleGeometry = new THREE.BufferGeometry();
  const particleCount = count;
  
  const positions = new Float32Array(particleCount * 3);
  const scales = new Float32Array(particleCount);
  
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 10;
    positions[i3 + 1] = (Math.random() - 0.5) * 10;
    positions[i3 + 2] = (Math.random() - 0.5) * 10;
    scales[i] = Math.random();
  }
  
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particleGeometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));
  
  // Animation
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    
    mesh.current.rotation.x = time * 0.05;
    mesh.current.rotation.y = time * 0.03;
    
    // Subtle mouse interaction
    mesh.current.rotation.x += (mouse.y * viewport.height * 0.005 - mesh.current.rotation.x) * 0.05;
    mesh.current.rotation.y += (mouse.x * viewport.width * 0.005 - mesh.current.rotation.y) * 0.05;
  });
  
  return (
    <points ref={mesh}>
      <bufferGeometry attach="geometry" {...particleGeometry} />
      <pointsMaterial 
        attach="material"
        size={0.03}
        sizeAttenuation
        color="#ffffff"
        transparent
        opacity={0.6}
      />
    </points>
  );
};

const BackgroundCanvas = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  
  return (
    <div ref={ref} className="canvas-container" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.1} />
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default BackgroundCanvas;
