import React, { useState, useEffect } from 'react';

const RotatingText: React.FC = () => {
  const words = ['Beratung', 'Chatbots', 'Voicebots', 'Automatisierung'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2">
      <span className="text-blue-500 text-3xl">KI</span>
      <span className="text-white text-3xl min-w-[200px] bg-blue-500/10 px-4 py-1 rounded-lg transition-opacity duration-500">
        {words[currentIndex]}
      </span>
    </div>
  );
};

export default RotatingText;