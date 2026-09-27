import React from 'react';
import {
  Video,
  Palette,
  Eye,
  FileText,
  Mic,
  Users,
  Zap,
} from 'lucide-react';
import { SKILLS_DATA, PORTRAIT_IMAGE } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Video':
        return <Video className="w-5 h-5 text-orange-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-orange-400" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-orange-400" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-orange-400" />;
      case 'Mic':
        return <Mic className="w-5 h-5 text-orange-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-orange-400" />;
      default:
        return <Zap className="w-5 h-5 text-orange-400" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Section Kicker Pill */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#18120e] border border-orange-500/40 text-orange-400 shadow-sm mb-4">
            <Zap className="w-3.5 h-3.5 text-orange-400 fill-orange-400/20" />
            <span className="text-[11px] font-bold tracking-widest uppercase">
              CORE EXPERTISE & SKILLS
            </span>
          </div>

          {/* Section Title */}
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Core Expertise & <span className="text-orange-500">Skills</span>
          </h2>
        </div>

        {/* 2-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 max-w-5xl mx-auto">
          {SKILLS_DATA.map((skill) => {
            const isLeadership = skill.isHighlighted;

            return (
              <div
                key={skill.id}
                className={`relative rounded-2xl p-6 sm:p-7 transition-all duration-300 bg-[#140e0c]/90 backdrop-blur-sm flex flex-col justify-between ${
                  isLeadership
                    ? 'border-2 border-orange-500/80 shadow-[0_0_30px_rgba(249,115,22,0.25)] hover:shadow-[0_0_40px_rgba(249,115,22,0.4)]'
                    : 'border border-neutral-800/90 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-950/20'
                }`}
              >
                <div>
                  {/* Top Row: Icon + Title */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#1d1512] border border-orange-500/30 flex items-center justify-center shrink-0 shadow-inner">
                      {getIcon(skill.icon)}
                    </div>
                    <h3
                      className={`font-display font-bold text-base sm:text-lg tracking-wider uppercase ${
                        isLeadership ? 'text-orange-400' : 'text-white'
                      }`}
                    >
                      {skill.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Tags if present (Premiere Pro, After Effects, Photoshop, etc.) */}
                {skill.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-800/60 mt-2">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-3 py-1 rounded-full bg-[#1c1410] border border-orange-500/30 text-amber-200/90 hover:border-orange-500/60 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
