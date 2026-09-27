import React from 'react';
import {
  Download,
  Youtube,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUp,
  Sparkles,
} from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenCV: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCV }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'My Projects', href: '#projects' },
    { label: 'Core Expertise & Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-transparent border-t border-neutral-800/60 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12 border-b border-neutral-800/80">
          {/* Logo Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-[#161210] to-[#251b16] border border-orange-500/40 p-0.5 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#120e0c] flex items-center justify-center border border-white/5">
                <span className="text-base font-black bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
                  GR
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-white font-bold text-base leading-tight tracking-tight group-hover:text-orange-400 transition-colors">
                Golam Rabbi
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-emerald-400 uppercase leading-none mt-0.5">
                VISUALIZER & VIDEO EDITOR
              </span>
            </div>
          </a>

          {/* Center Nav Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-neutral-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={onOpenCV}
              className="flex items-center gap-1.5 text-neutral-300 hover:text-orange-400 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-orange-400" />
              <span>Download CV</span>
            </button>
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-2.5">
            {/* YouTube */}
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-full bg-[#140e0c] border border-neutral-800 hover:border-orange-500/60 flex items-center justify-center text-neutral-400 hover:text-orange-400 transition-all active:scale-95"
            >
              <Youtube className="w-4 h-4" />
            </a>

            {/* Facebook */}
            <a
              href={CONTACT_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-[#140e0c] border border-neutral-800 hover:border-orange-500/60 flex items-center justify-center text-neutral-400 hover:text-orange-400 transition-all active:scale-95"
            >
              <Facebook className="w-4 h-4" />
            </a>

            {/* Instagram */}
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-[#140e0c] border border-neutral-800 hover:border-orange-500/60 flex items-center justify-center text-neutral-400 hover:text-orange-400 transition-all active:scale-95"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-[#140e0c] border border-neutral-800 hover:border-orange-500/60 flex items-center justify-center text-neutral-400 hover:text-orange-400 transition-all active:scale-95"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-9 h-9 rounded-full bg-[#1b1411] border border-orange-500/50 hover:bg-orange-500 hover:text-white flex items-center justify-center text-orange-400 transition-all active:scale-95 shadow-md shadow-orange-950/40 ml-1"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © 2026 Golam Rabbi | All Right Reserved.
          </div>
          <div className="flex items-center gap-1.5 text-neutral-400 font-medium">
            <span>Crafting visual stories that connect, convert & elevate brands</span>
            <span className="text-orange-500">💥</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
