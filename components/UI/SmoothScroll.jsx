import { useEffect, useRef } from 'react';
import { useScroll, useSpring, useTransform, motion } from 'framer-motion';

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const { scrollY } = useScroll();
  const [contentHeight, setContentHeight] = useState(0);
  
  const smoothY = useSpring(scrollY, {
    damping: 50,
    stiffness: 400,
    mass: 0.1
  });
  
  const transform = useTransform(smoothY, (value) => `translateY(${-value}px)`);
  
  useEffect(() => {
    const updateHeight = () => {
      if (scrollRef.current) {
        setContentHeight(scrollRef.current.getBoundingClientRect().height);
      }
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    
    return () => window.removeEventListener('resize', updateHeight);
  }, []);
  
  return (
    <>
      <div style={{ height: contentHeight }} />
      <motion.div
        ref={scrollRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          transform
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default SmoothScroll;
