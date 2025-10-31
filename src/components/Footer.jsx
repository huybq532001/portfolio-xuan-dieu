// src/components/Footer.jsx
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-pink/10 via-white to-white py-12 text-center text-gray-600">
      <div className="container mx-auto flex flex-col items-center gap-3">
        <p className="font-medium flex items-center gap-1">
          © 2025 <span className="text-primary font-semibold">Xuân Diệu</span>
          <Heart size={16} className="text-secondary inline animate-pulse" />
        </p>
        <p className="text-sm opacity-80">Làm portfolio với tất cả yêu thương</p>
      </div>
    </footer>
  );
};

export default Footer;