import React, { useEffect, useRef } from 'react';
import './animations.css'; // Import the CSS file

const Animation = ({ children, animationType }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.classList.add(animationType);
    }
    return () => {
      if (elementRef.current) {
        elementRef.current.classList.remove(animationType);
      }
    };
  }, [animationType]);

  return <div ref={elementRef}>{children}</div>;
};

export default Animation;
