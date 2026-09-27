import React from 'react';
import {
  X,
  Printer,
  Download,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Award,
  CheckCircle,
  Briefcase,
  Layers,
  Sparkles,
} from 'lucide-react';
import {
  CONTACT_INFO,
  ACADEMIC_BACKGROUND,
  PROFESSIONAL_TRAINING,
} from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate text/pdf simulation trigger
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#120e0c] border border-orange-500/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between bg-[#16100d]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
            <h3 className="font-bold text-base sm:text-lg text-white">
              Curriculum Vitae — Golam Rabbi
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-orange-500/50 text-xs font-medium text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-orange-400" />
              <span>Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 text-xs font-semibold text-white flex items-center gap-1.5 shadow-md shadow-orange-600/30 transition-transform active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 hover:border-orange-500/50 flex items-center justify-center text-neutral-400 hover:text-white ml-2 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CV Document Content */}
        <div className="overflow-y-auto p-6 sm:p-9 text-neutral-200 flex flex-col gap-8 bg-[#0f0b09]">
          {/* Header */}
          <div className="pb-6 border-b border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                GOLAM RABBI
              </h1>
              <p className="text-orange-400 font-semibold text-sm tracking-wide uppercase mt-0.5">
                Visualizer & Video Editor
              </p>
              <p className="text-xs text-neutral-400 mt-1 max-w-md">
                Cutting Raw Moments into Timeless Stories. Creative visual storytelling, professional post-production, motion graphics, and high-impact branding.
              </p>
            </div>

            <div className="flex flex-col gap-1.5 text-xs font-mono text-neutral-400 sm:text-right shrink-0">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-orange-400" />
                <span>{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Section: Academic Background */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-4 h-4 text-orange-400" />
              <h3 className="font-bold text-sm uppercase tracking-wider text-neutral-300">
                Academic Qualifications
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {ACADEMIC_BACKGROUND.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-[#16100d] border border-neutral-800"
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-white">{item.title}</span>
                    <span className="text-[11px] font-mono text-orange-400">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 mb-2">
                    {item.description}
                  </p>
                  <div className="text-[10px] text-emerald-400 font-medium">
                    {item.statusLabel} {item.statusValue}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Professional Training */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-4 h-4 text-orange-400" />
              <h3 className="font-bold text-sm uppercase tracking-wider text-neutral-300">
                Professional Skill Development
              </h3>
            </div>

            <div className="p-4 rounded-xl bg-[#16100d] border border-neutral-800">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="font-bold text-white text-sm">
                  {PROFESSIONAL_TRAINING.institutionName}
                </div>
                <div className="flex gap-1.5">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30">
                    SBMC Batch 36
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 pt-3 border-t border-neutral-800/80">
                {PROFESSIONAL_TRAINING.competencies.map((comp) => (
                  <div key={comp.title} className="text-xs">
                    <div className="font-semibold text-white">{comp.title}</div>
                    <div className="text-[10px] text-neutral-400">{comp.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section: Core Skills & Software Tools */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-orange-400" />
              <h3 className="font-bold text-sm uppercase tracking-wider text-neutral-300">
                Technical Stack & Capabilities
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-[#16100d] border border-neutral-800 text-xs">
                <div className="font-semibold text-orange-400 mb-1">Video Editing & Motion</div>
                <div className="text-neutral-400 text-[11px]">
                  Adobe Premiere Pro, After Effects, Kinetic Typography, Sound Engineering, Audio Scrubbing.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#16100d] border border-neutral-800 text-xs">
                <div className="font-semibold text-orange-400 mb-1">Graphic Design & Branding</div>
                <div className="text-neutral-400 text-[11px]">
                  Adobe Photoshop, Adobe Illustrator, Canva Pro, Social Ad Campaigns, Poster Artboards.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#16100d] border border-neutral-800 text-xs">
                <div className="font-semibold text-orange-400 mb-1">Marketing & Modern AI</div>
                <div className="text-neutral-400 text-[11px]">
                  Meta Advertising (FB/IG Ads), Creative Prompt Engineering, AI Generative Tools & Visual workflows.
                </div>
              </div>
            </div>
          </div>

          {/* Languages & Soft Skills */}
          <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-400">
            <div>
              <span className="font-semibold text-neutral-300">Languages: </span>
              Bengali (Native), Arabic (Classical & Qur'anic), English (Working Proficiency)
            </div>
            <div>
              <span className="font-semibold text-neutral-300">Work Model: </span>
              Remote & On-site Available Worldwide
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
