'use client'
import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
    const [time, setTime] = useState(new Date());
    const [hydrated, setHydrated] = useState(false);
  
    useEffect(() => {
      setHydrated(true);
    }, []);
  
    useEffect(() => {
      if (!hydrated) return;
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(interval);
    }, [hydrated]);
  
    return (
        <div className="absolute bottom-0 flex flex-col items-start left-4">
        <span className="p-1 border-4 border-white rounded-lg border-opacity-40 text-opacity-40 opacity-40 text-[7vw]">
          {time.toLocaleTimeString()}
        </span>
        <p className="mb-4 text-white text-rm text-opacity-40">Dont forget, time is money!</p>
      </div>
    );
  };
  
  export default Clock;
  