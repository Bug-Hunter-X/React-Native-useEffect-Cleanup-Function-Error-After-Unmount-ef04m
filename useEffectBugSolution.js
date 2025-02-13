// useEffectBugSolution.js
import React, { useState, useEffect, useRef } from 'react';

const MyComponent = () => {
  const [someState, setSomeState] = useState(0);
  const mountedRef = useRef(true);

  useEffect(() => {
    let interval;
    if (mountedRef.current) {
      interval = setInterval(() => {
        setSomeState(prev => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
      mountedRef.current = false; // Added for cleanup
    };
  }, []);

  return (
    <View>
      <Text>{someState}</Text>
    </View>
  );
};
export default MyComponent; 