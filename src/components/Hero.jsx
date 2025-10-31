// src/components/Hero.jsx
import React from 'react';
import { personalInfo } from '../data/xuandieuData.js';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-accent to-cream/50 px-6 snap-start">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-primary/20 text-primary font-medium shadow-sm">
            <Sparkles size={16} className="animate-pulse" />
            <span>{personalInfo.title}</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-text leading-tight">
            Xin chào! <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {personalInfo.name}
            </span> đây
          </h1>

          <p className="text-lg text-gray-700 max-w-xl leading-relaxed">
            {personalInfo.description}
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="group px-7 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transform hover:scale-105 transition"
            >
              Xem Dự Án <ArrowRight className="group-hover:translate-x-1 transition" size={18} />
            </a>
            <a
              href="#contact"
              className="px-7 py-3 bg-white border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition shadow-md"
            >
              Nói Chuyện Nhé
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-3xl blur-3xl -z-10 animate-pulse"></div>
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl p-3 border-4 border-primary/20">
            <img
              src={personalInfo.photo}
              alt={personalInfo.name}
              className="w-full h-96 md:h-[520px] object-cover rounded-3xl"
            />
          </div>
          <div className="absolute -top-3 -right-3 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full text-primary font-medium text-sm flex items-center gap-1">
            5+ năm kinh nghiệm
          </div>
        </div>
      </div>
    </header>
    
  );
};

export default Hero;