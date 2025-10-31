// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/xuandieuData.js';
import Section from './Section';

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-primary/20 hover:shadow-xl transition"
  >
    <h3 className="text-2xl font-bold text-text mb-3">{project.title}</h3>
    <p className="text-gray-600 mb-4">{project.description}</p>
    <a href={project.link} className="text-primary font-medium hover:underline">
      Xem chi tiết →
    </a>
  </motion.div>
);

const Projects = () => {
  return (
    <Section id="projects" title="Dự Án" subtitle="Các dự án thực tế trong lĩnh vực tài chính" bg="bg-gradient-to-b from-lavender/30 to-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;