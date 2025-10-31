// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/xuandieuData.js';
import Section from './Section';

const Skills = () => {
  return (
    <Section id="skills" title="Kỹ Năng Của Mình" subtitle="Mình giỏi mấy cái này nè" bg="bg-gradient-to-b from-mint to-white" >
      <div className="max-w-4xl mx-auto space-y-6 ">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-lg border border-primary/20"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-text">{skill.name}</h3>
              <span className="text-secondary font-bold text-sm">{skill.level}%</span>
            </div>
            <div className="h-4 bg-pink/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(to right, #A7E6D7, #F8B7CD)',
                }}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;