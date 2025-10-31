// src/components/Section.jsx
import React from 'react';

import WaveDivider from './WaveDivider';

const Section = ({ id, title, subtitle, children, bg = "bg-white", waveColor }) => {
  return (
    <>
      {/* WAVE TRÊN (nếu có màu) */}
      {waveColor && <WaveDivider colorFrom={waveColor} colorTo="transparent" flip={true} />}

      <section id={id} className={`min-h-screen flex flex-col items-center justify-center py-20 px-6 snap-start ${bg}`}>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
        <div className="w-full">{children}</div>
      </section>

      {/* WAVE DƯỚI */}
      {waveColor && <WaveDivider colorFrom="transparent" colorTo={waveColor} />}
    </>
  );
};

export default Section;