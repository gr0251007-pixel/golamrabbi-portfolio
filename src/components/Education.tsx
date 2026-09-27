import React from 'react';
import {
  GraduationCap,
  BookOpen,
  Award,
  Sparkles,
  CheckCircle2,
  BookmarkCheck,
  Check,
} from 'lucide-react';
import {
  ACADEMIC_BACKGROUND,
  PROFESSIONAL_TRAINING,
  PORTRAIT_IMAGE,
} from '../data/portfolioData';

export const Education: React.FC = () => {
  const getAcademicIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-4 h-4 text-orange-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-4 h-4 text-orange-400" />;
      case 'Award':
        return <Award className="w-4 h-4 text-orange-400" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-orange-400" />;
      default:
        return <GraduationCap className="w-4 h-4 text-orange-400" />;
    }
  };

  return (
    <section id="education" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Section Kicker Pill */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#18120e] border border-orange-500/40 text-orange-400 shadow-sm mb-4">
            <GraduationCap className="w-4 h-4 text-orange-400" />
            <span className="text-[11px] font-bold tracking-widest uppercase">
              EDUCATION & PROFESSIONAL TRAINING
            </span>
          </div>

          {/* Section Title */}
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            My Education &{' '}
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Creative Learning
            </span>
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Academic Background (5 cols or 6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#1a1310] border border-orange-500/40 flex items-center justify-center text-orange-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Academic Background
              </h3>
            </div>

            {/* 2x2 Academic Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {ACADEMIC_BACKGROUND.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl p-5 bg-[#140e0c] border border-neutral-800/90 hover:border-orange-500/50 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Icon + Year Badge */}
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="w-8 h-8 rounded-lg bg-[#1b1411] border border-neutral-700/60 flex items-center justify-center">
                        {getAcademicIcon(item.icon)}
                      </div>
                      <span
                        className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full ${
                          item.badgeType === 'ongoing'
                            ? 'bg-orange-500/20 text-orange-400 border border-orange-500/50'
                            : item.badgeType === 'completed'
                            ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/40'
                            : 'bg-neutral-900 text-neutral-300 border border-neutral-700/80'
                        }`}
                      >
                        {item.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="font-bold text-sm sm:text-base text-white tracking-tight mb-2">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Status Bar */}
                  <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                    <span className="text-neutral-500">{item.statusLabel}</span>
                    <span className="font-medium text-emerald-400">
                      {item.statusValue}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Professional Skill Development (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#101b18] border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <BookmarkCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Professional Skill Development
              </h3>
            </div>

            {/* Featured Institute Card */}
            <div className="rounded-2xl p-6 sm:p-7 bg-[#140e0c] border border-neutral-800 hover:border-orange-500/60 shadow-xl transition-all duration-300">
              {/* Institution Subtitle */}
              <span className="text-[10px] font-bold tracking-widest text-orange-400 uppercase block mb-1">
                {PROFESSIONAL_TRAINING.institutionSubtitle}
              </span>

              {/* Institution Title */}
              <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                {PROFESSIONAL_TRAINING.institutionName}
              </h4>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/40">
                  {PROFESSIONAL_TRAINING.badges[0]}
                </span>
                <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-neutral-900 text-neutral-300 border border-neutral-700">
                  {PROFESSIONAL_TRAINING.badges[1]}
                </span>
              </div>

              {/* Competencies Section */}
              <div className="mb-6">
                <h5 className="text-[11px] font-bold tracking-widest text-neutral-400 uppercase mb-3">
                  {PROFESSIONAL_TRAINING.coreCompetenciesTitle}
                </h5>

                {/* 2x2 Competency Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PROFESSIONAL_TRAINING.competencies.map((comp) => (
                    <div
                      key={comp.title}
                      className="p-3.5 rounded-xl bg-[#1b1411] border border-neutral-800/90 flex items-start gap-2.5 hover:border-orange-500/40 transition-colors"
                    >
                      <div className="w-5 h-5 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-orange-400" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-white">
                          {comp.title}
                        </div>
                        <div className="text-[11px] text-neutral-400 mt-0.5">
                          {comp.subtitle}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{PROFESSIONAL_TRAINING.footerLeft}</span>
                </div>
                <div className="font-semibold text-orange-400 tracking-wide">
                  {PROFESSIONAL_TRAINING.footerRight}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
