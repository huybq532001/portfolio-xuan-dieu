import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '/#hero' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Education', href: '/#education' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const scrollTo = (href) => {
    setOpen(false);
    if (href === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
    else document.getElementById(href.slice(2))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-primary/90 backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <a href="/" onClick={(e) => { e.preventDefault(); scrollTo('/'); }} className="flex items-center gap-2 text-white font-bold">
          <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
            <span className="text-primary text-lg font-serif">X</span>
          </div>
          <span className="text-xl">Xuân Diệu</span>
        </a>

        <div className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
              className="text-white/90 hover:text-white font-medium">
              {item.label}
            </a>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-primary/95">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
              className="block py-2 px-4 text-white/90 hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;