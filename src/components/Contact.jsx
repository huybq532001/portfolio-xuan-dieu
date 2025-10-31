// src/components/Contact.jsx
import React from 'react';
import Section from './Section';
import { personalInfo } from '../data/xuandieuData.js';
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle } from 'lucide-react';

const Panel = ({ children }) => (
  <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-primary/20">
    {children}
  </div>
);

const Contact = () => {
  const socials = Object.entries(personalInfo.social)
    .filter(([_, href]) => href !== '#')
    .map(([platform, href]) => ({ label: platform, href }));

  return (
    <Section id="contact" title="Nói Chuyện Với Mình Nhé" subtitle="Mình trả lời siêu nhanh luôn" bg="bg-gradient-to-t from-cream to-white">
      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        <Panel>
          <h3 className="text-2xl font-bold text-text mb-6 flex items-center gap-2">
            <MessageCircle size={24} className="text-secondary" /> Liên hệ
          </h3>
          <div className="space-y-5 text-gray-700">
            <div className="flex items-center gap-3">
              <MapPin size={22} className="text-primary" />
              <span className="font-medium">{personalInfo.location}</span>
            </div>
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 hover:text-primary transition font-medium">
              <Mail size={22} className="text-primary" />
              <span>{personalInfo.email}</span>
            </a>
            <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-3 hover:text-primary transition font-medium">
              <Phone size={22} className="text-primary" />
              <span>{personalInfo.phone}</span>
            </a>
          </div>
        </Panel>

        <Panel>
          <h3 className="text-2xl font-bold text-text mb-6">Mạng xã hội</h3>
          <div className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary rounded-full hover:from-primary hover:to-secondary hover:text-white transition font-medium"
              >
                {s.label === 'linkedin' ? <Linkedin size={20} /> : <Github size={20} />}
                {s.label}
              </a>
            ))}
          </div>
        </Panel>
      </div>

      <div className="mt-16 text-center">
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition transform hover:scale-110"
        >
          Gửi Tin Nhắn Ngay
        </a>
      </div>
    </Section>
  );
};

export default Contact;