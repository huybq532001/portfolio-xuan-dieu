// src/components/Education.jsx
import React from 'react';
import Section from './Section';
import { education } from '../data/xuandieuData.js';
import { GraduationCap, Calendar } from 'lucide-react';

const Panel = ({ children }) => (
  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-primary/20 hover:shadow-xl transition">
    {children}
  </div>
);

const Education = () => {
  return (
    <Section id="education" title="Học Vấn" subtitle="Nền tảng học thuật vững chắc" bg="bg-gradient-to-br from-sky/50 to-white">
      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {education.map((edu, i) => (
          <Panel key={i}>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <GraduationCap size={22} />
                <h3 className="text-xl font-bold">{edu.degree}</h3>
              </div>
              <div className="text-lg font-medium text-text">{edu.school}</div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar size={16} />
                <span>{edu.period}</span>
              </div>
              <p className="text-gray-600">{edu.description}</p>
            </div>
          </Panel>
        ))}
      </div>
    </Section>
  );
};

export default Education;