import React from 'react';
import { Play, Send } from 'lucide-react';
import { PORTRAIT_IMAGE } from '../data/portfolioData';

interface HeroProps {
  onOpenTalk: () => void;
  isScrolledAway?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTalk, isScrolledAway = false }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 sm:pt-28 overflow-hidden bg-grid-pattern"
    >
      {/* Background ambient radial glow matching original */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] sm:w-[900px] sm:h-[900px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-orange-500/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid crosshair coordinates accents */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-30">
        <div className="absolute top-32 left-[15%] text-orange-500/40 text-xs font-mono">+</div>
        <div className="absolute top-32 right-[20%] text-orange-500/40 text-xs font-mono">+</div>
        <div className="absolute bottom-28 left-[25%] text-orange-500/40 text-xs font-mono">+</div>
        <div className="absolute bottom-28 right-[15%] text-orange-500/40 text-xs font-mono">+</div>
        <div className="absolute top-1/2 left-[8%] text-orange-500/40 text-xs font-mono">+</div>
        <div className="absolute top-1/2 right-[8%] text-orange-500/40 text-xs font-mono">+</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          {/* Left Column: Headline and Actions */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start text-left z-20">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18120e]/90 border border-neutral-800 shadow-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-xs shadow-orange-500" />
              <span className="text-[11px] font-bold tracking-wider text-neutral-300 uppercase">
                CREATIVE VISUALIZER
              </span>
              <span className="text-neutral-600">·</span>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-xs shadow-orange-500" />
              <span className="text-[11px] font-bold tracking-wider text-orange-400 uppercase">
                VIDEO EDITOR
              </span>
            </div>

            {/* Giant Name Headers */}
            <h1 className="font-display font-black tracking-tight leading-[0.9] text-left uppercase mb-4">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white">
                GOLAM
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                RABBI
              </span>
            </h1>

            {/* Slogan */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-200 mt-2 mb-8 tracking-tight max-w-xl">
              Cutting Raw Moments into{' '}
              <span className="text-orange-500 font-bold">Timeless Stories</span>
            </h2>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {/* My Projects */}
              <a
                href="#projects"
                className="px-7 py-3 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-400 hover:to-amber-500 text-white font-semibold text-sm sm:text-base flex items-center gap-2.5 shadow-xl shadow-orange-600/30 hover:shadow-orange-500/50 hover:scale-[1.02] transition-all duration-200 active:scale-95"
              >
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <Play className="w-3 h-3 fill-white text-white ml-0.5" />
                </div>
                <span>My Projects</span>
              </a>

              {/* Contact Me */}
              <button
                onClick={onOpenTalk}
                className="px-7 py-3 rounded-full bg-[#18120f]/80 hover:bg-[#221814] text-neutral-200 hover:text-white font-medium text-sm sm:text-base flex items-center gap-2.5 border border-neutral-800 hover:border-orange-500/50 backdrop-blur-sm transition-all duration-200 active:scale-95"
              >
                <Send className="w-4 h-4 text-orange-400" />
                <span>Contact Me</span>
              </button>
            </div>
          </div>

          {/* Right Column: Heroic Large Profile Portrait lifted above Contact Me button line with seamless soft feathered bottom edge */}
          <div
            className={`lg:col-span-7 xl:col-span-7 flex flex-col items-center lg:items-end justify-end relative mt-2 lg:mt-0 lg:-translate-y-16 xl:-translate-y-20 transition-all duration-700 ease-out ${
              isScrolledAway
                ? 'translate-x-24 sm:translate-x-32 opacity-0 pointer-events-none'
                : 'translate-x-0 opacity-100'
            }`}
          >
            {/* Ambient red aura behind portrait matching exact large photo size */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] sm:w-[580px] lg:w-[760px] xl:w-[860px] h-[440px] sm:h-[580px] lg:h-[720px] rounded-full bg-red-600/25 blur-[120px] pointer-events-none" />

            {/* Backlit Silhouette contour rim light */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[460px] lg:w-[580px] xl:w-[660px] h-[340px] sm:h-[460px] lg:h-[580px] rounded-full bg-red-500/20 blur-3xl pointer-events-none" />

            {/* Greatly Enlarged Portrait Image Container raised well above Contact Me */}
            <div className="relative w-full max-w-[480px] sm:max-w-[620px] lg:max-w-[760px] xl:max-w-[860px] h-[480px] sm:h-[600px] lg:h-[720px] xl:h-[780px] flex items-end justify-center lg:justify-end">
              {/* Profile Image with subtle red stroke rim effect and a feather mask on bottom hands edge */}
              <img
                src={PORTRAIT_IMAGE}
                alt="Golam Rabbi"
                referrerPolicy="no-referrer"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 82%, transparent 99%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 99%)',
                }}
                className="w-full h-full object-contain object-bottom select-none filter drop-shadow-[0_0_2px_rgba(239,68,68,0.9)] drop-shadow-[0_0_8px_rgba(220,38,38,0.55)] drop-shadow-[0_0_25px_rgba(239,68,68,0.3)] transform lg:scale-115 lg:origin-bottom-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
