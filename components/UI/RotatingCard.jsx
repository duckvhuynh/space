import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import styles from '../../styles/RotatingCard.module.css';

const RotatingCard = ({ 
  frontContent, 
  backContent, 
  className = '',
  aspectRatio = '3/4',
  perspective = 1000
}) => {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef(null);
  
  // For 3D tilt effect based on mouse position
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  
  const rotateX = useTransform(y, [0, 1], [15, -15]);
  const rotateY = useTransform(x, [0, 1], [-15, 15]);
  
  // Add spring physics
  const springConfig = { damping: 30, stiffness: 300 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);
  
  const handleMouseMove = (e) => {
    if (!cardRef.current || flipped) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const newX = (e.clientX - rect.left) / rect.width;
    const newY = (e.clientY - rect.top) / rect.height;
    
    x.set(newX);
    y.set(newY);
  };
  
  const handleMouseLeave = () => {
    if (!flipped) {
      x.set(0.5);
      y.set(0.5);
    }
  };
  
  const handleFlip = () => {
    setFlipped(!flipped);
  };
  
  return (
    <motion.div 
      className={`${styles.cardContainer} ${className}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleFlip}
      style={{
        perspective: `${perspective}px`,
        aspectRatio,
        cursor: 'pointer'
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className={styles.cardInner}
        style={{
          rotateX: flipped ? 180 : rotateXSpring,
          rotateY: flipped ? 180 : rotateYSpring,
          transformStyle: 'preserve-3d',
        }}
        transition={{ duration: 0.7 }}
      >
        <motion.div className={styles.cardFace}>
          {frontContent}
        </motion.div>
        <motion.div 
          className={styles.cardFace}
          style={{ 
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
          }}
        >
          {backContent}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RotatingCard;
