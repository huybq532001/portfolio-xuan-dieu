// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/xuandieuData.js';
import { MapPin, Mail, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink/30 to-white py-24 px-6 snap-start">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-8 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-3xl blur-3xl -z-10"></div>
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl p-4 border-4 border-primary/30">
            <img
              src={personalInfo.photo}
              alt={personalInfo.name}
              className="w-full h-[520px] object-cover rounded-3xl"
            />
          </div>
          <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-primary text-sm font-medium flex items-center gap-1">
            <Heart size={14} className="text-secondary" /> Yêu công việc
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-secondary/10 text-secondary font-medium">
            <span role="img" aria-label="wave">Hi</span> Về mình nè
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-text">
            Mình là{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            {personalInfo.about}
          </p>

          <div className="space-y-3 text-gray-700">
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-primary" />
              <span>{personalInfo.location}</span>
            </div>
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 hover:text-primary transition">
              <Mail size={20} />
              <span>{personalInfo.email}</span>
            </a>
          </div>

          <div className="flex gap-4 pt-4">
            <a href="#skills" className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:shadow-lg transition">
              Xem Kỹ Năng
            </a>
            <a href="#contact" className="px-6 py-3 bg-white border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition">
              Chat với mình
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;