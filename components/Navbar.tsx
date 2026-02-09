
import React, { useState } from 'react';
import { AnimatedCat } from './AnimatedCat';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

interface NavbarProps {
  onCatClick: () => void;
  isCatTalking: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onCatClick, isCatTalking }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/90 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Side: Logo & Owl Mascot Standing on Bottom */}
          <div className="flex items-end gap-2 h-full pb-0">
            <button 
              onClick={onCatClick}
              className="focus:outline-none transition-transform hover:scale-105 active:scale-95 flex items-end justify-center mb-[-2px]"
              title="Chat with Tangerine"
            >
              <AnimatedCat isTalking={isCatTalking} />
            </button>
            <span className="text-2xl font-black font-heading tracking-tighter text-white select-none flex items-center mb-5">
              TANGERINE<span className="text-orange">.</span>
            </span>
          </div>

          {/* Right Side: Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-5 py-2 text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,123,0,0.8)] transition-all duration-300 active:scale-95"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-1 pl-4 border-l border-white/10">
              <a 
                href="https://github.com/Kaustubh2k5" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-full hover:drop-shadow-[0_0_12px_rgba(255,123,0,0.9)] transition-all duration-300 group"
              >
                <Github size={18} className="text-white/40 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://linkedin.com/in/kaustubh-sardesai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-full hover:drop-shadow-[0_0_12px_rgba(255,123,0,0.9)] transition-all duration-300 group"
              >
                <Linkedin size={18} className="text-white/40 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/70 hover:text-white transition-colors p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#111111] border-b border-white/5 py-8 px-4 space-y-2 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-6 py-4 text-2xl font-black font-heading uppercase tracking-tighter text-white/50 hover:text-white hover:drop-shadow-[0_0_15px_rgba(255,123,0,0.6)] transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-6 pt-4 border-t border-white/5">
             <a 
               href="https://github.com/Kaustubh2k5" 
               target="_blank" 
               rel="noopener noreferrer"
               className="p-4 group"
             >
                <Github size={28} className="text-white/40 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,123,0,0.8)] transition-all" />
             </a>
             <a 
               href="https://linkedin.com/in/kaustubh-sardesai" 
               target="_blank" 
               rel="noopener noreferrer"
               className="p-4 group"
             >
                <Linkedin size={28} className="text-white/40 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,123,0,0.8)] transition-all" />
             </a>
          </div>
        </div>
      )}
    </nav>
  );
};
