import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const ArtisticText = ({ 
  text, 
  className, 
  splitBy = "letter", // "letter", "word", or "line"
  staggerDelay = 0.03,
  fontSize = "inherit",
  fontWeight = "inherit",
  effect = "fade" // "fade", "slide", "wave"
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  const splitText = () => {
    if (splitBy === "letter") {
      return text.split("").map((letter, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={getVariants(effect)}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {letter}
        </motion.span>
      ));
    } else if (splitBy === "word") {
      return text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={getVariants(effect)}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {word}{' '}
        </motion.span>
      ));
    }
    // Default to whole text
    return (
      <motion.span variants={getVariants(effect)}>{text}</motion.span>
    );
  };
  
  const getVariants = (effectType) => {
    switch (effectType) {
      case "slide":
        return {
          hidden: { y: 50, opacity: 0 },
          visible: i => ({
            y: 0,
            opacity: 1,
            transition: {
              delay: i * staggerDelay,
              duration: 0.5
            }
          })
        };
      case "wave":
        return {
          hidden: { y: 0, opacity: 0 },
          visible: i => ({
            y: [0, -15, 0],
            opacity: 1,
            transition: {
              delay: i * staggerDelay,
              y: { duration: 0.5, times: [0, 0.5, 1] },
              opacity: { duration: 0.25 }
            }
          })
        };
      default: // fade
        return {
          hidden: { opacity: 0 },
          visible: i => ({
            opacity: 1,
            transition: {
              delay: i * staggerDelay,
              duration: 0.5
            }
          })
        };
    }
  };
  
  return (
    <motion.div
      ref={ref}
      style={{ fontSize, fontWeight }}
      className={className}
      initial="hidden"
      animate={controls}
    >
      {splitText()}
    </motion.div>
  );
};

export default ArtisticText;
