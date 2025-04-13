import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/CreativeGrid.module.css';

const CreativeGrid = ({ children, columns = 12 }) => {
  return (
    <div 
      className={styles.creativeGrid}
      style={{ 
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '1rem',
        width: '100%'
      }}
    >
      {children}
    </div>
  );
};

export const GridItem = ({ 
  colStart = 'auto',
  colEnd = 'auto',
  rowStart = 'auto',
  rowEnd = 'auto',
  children,
  animate = true
}) => {
  return (
    <motion.div 
      className={styles.gridItem}
      initial={animate ? { opacity: 0, y: 20 } : {}}
      whileInView={animate ? { opacity: 1, y: 0 } : {}}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      style={{
        gridColumnStart: colStart,
        gridColumnEnd: colEnd,
        gridRowStart: rowStart,
        gridRowEnd: rowEnd
      }}
    >
      {children}
    </motion.div>
  );
};

export default CreativeGrid;
