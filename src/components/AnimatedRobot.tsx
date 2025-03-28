import React from 'react';

const AnimatedRobot = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 flex items-center justify-center animate-float">
        <img
          src="https://i.postimg.cc/Qxzz2tpX/replicate-prediction-ygd7jhjn5hrj60cnmjgvjfb8wc.png"
          alt="RiO KI Assistant"
          className="w-48 h-48 object-contain"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-blue-500/20 rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default AnimatedRobot;