import React, { useState, useEffect } from 'react';
import { Download, Share2, MessageSquare, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenCV: () => void;
  onOpenShare: () => void;
  onOpenTalk: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCV,
  onOpenShare,
  onOpenTalk,
  activeSection,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'My Projects', href: '#projects' },
    { label: 'Core Expertise & Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0807]/90 backdrop-blur-md border-b border-orange-500/10 py-3 shadow-xl shadow-black/40'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo Zone */}
          <a
            href="#home"
            className="flex items-center gap-3 group transition-transform duration-200 hover:scale-[1.02]"
          >
            {/* GR Badge Icon */}
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-[#161210] to-[#251b16] border border-orange-500/40 p-0.5 flex items-center justify-center shadow-md shadow-orange-950/40">
              <div className="w-full h-full rounded-full bg-[#120e0c] flex items-center justify-center border border-white/5">
                <span className="text-base font-black tracking-tighter bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
                  GR
                </span>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-[#0b0807] rounded-full" />
            </div>

            {/* Brand Text */}
            <div className="flex flex-col">
              <span className="text-white font-bold text-base leading-tight tracking-tight group-hover:text-orange-400 transition-colors">
                Golam Rabbi
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-emerald-400 uppercase leading-none mt-0.5">
                VISUALIZER & VIDEO EDITOR
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links Pill */}
          <nav className="hidden xl:flex items-center bg-[#15100e]/80 border border-neutral-800/80 rounded-full px-2 py-1 shadow-inner backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-sm shadow-orange-500" />
                  )}
                  {item.label}
                </a>
              );
            })}

            {/* Download CV Nav Link */}
            <button
              onClick={onOpenCV}
              className="ml-1 px-3.5 py-1.5 text-xs font-medium text-neutral-300 hover:text-white border border-neutral-700/80 hover:border-orange-500/60 rounded-full transition-all duration-200 flex items-center gap-1.5 bg-neutral-900/50 hover:bg-orange-500/10 active:scale-95"
            >
              <Download className="w-3.5 h-3.5 text-orange-400" />
              <span>Download CV</span>
            </button>
          </nav>

          {/* Right Action Zone */}
          <div className="flex items-center gap-2.5">
            {/* Share Button */}
            <button
              onClick={onOpenShare}
              aria-label="Share Portfolio"
              className="w-9 h-9 rounded-full bg-[#18120f] border border-neutral-800 hover:border-orange-500/60 flex items-center justify-center text-neutral-300 hover:text-orange-400 transition-all duration-200 active:scale-95 shadow-sm"
            >
              <Share2 className="w-4 h-4" />
            </button>

            {/* Primary CTA: Let's Talk */}
            <button
              onClick={onOpenTalk}
              className="px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-400 hover:to-amber-500 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-lg shadow-orange-600/30 hover:shadow-orange-500/50 transition-all duration-200 active:scale-95 group"
            >
              <MessageSquare className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>Let's Talk</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-9 h-9 rounded-full bg-[#18120f] border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 p-4 bg-[#140e0c] border border-neutral-800 rounded-2xl shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  {activeSection === item.href.substring(1) && (
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                  )}
                </a>
              ))}
              <div className="pt-2 border-t border-neutral-800 flex gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCV();
                  }}
                  className="flex-1 py-2 px-3 text-xs font-medium rounded-xl border border-neutral-700 bg-neutral-900 text-neutral-200 flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-orange-400" />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
