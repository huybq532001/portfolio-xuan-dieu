// src/components/WaveDivider.jsx
import React from 'react';

const WaveDivider = ({ colorFrom, colorTo, flip = false }) => {
  return (
    <div className={`w-full ${flip ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-24 md:h-32"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C360,100 1080,20 1440,0 V120 H0 Z"
          fill={`url(#gradient-${flip ? 'flip' : 'normal'})`}
        />
        <defs>
          <linearGradient id={`gradient-${flip ? 'flip' : 'normal'}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={colorFrom} stopOpacity="0.8" />
            <stop offset="100%" stopColor={colorTo} stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default WaveDivider;