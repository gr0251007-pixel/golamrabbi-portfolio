import React, { useState } from 'react';
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Calendar,
  User,
  Layers,
  Clock,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenTalk: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenTalk,
}) => {
  if (!project) return null;

  const isVideo = project.category === 'video';
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(35);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#120d0b] border border-orange-500/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-neutral-800/80 flex items-center justify-between bg-[#150f0c]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
            <h3 className="font-bold text-base sm:text-lg text-white truncate max-w-md">
              {project.title}
            </h3>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-neutral-900 border border-neutral-700 text-neutral-300">
              {isVideo ? 'Video Showcase' : 'Design Artboard'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 hover:border-orange-500/50 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-7 flex flex-col gap-6">
          {/* Main Media Preview Frame */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-xl group">
            <img
              src={project.thumbnail}
              alt={project.title}
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover ${
                isVideo && isPlaying ? 'scale-105 filter brightness-105' : ''
              } transition-all duration-700`}
            />

            {/* Video Player Controls Simulation */}
            {isVideo && (
              <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-90 group-hover:opacity-100 transition-opacity">
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-white/90 bg-black/50 px-2.5 py-1 rounded backdrop-blur-xs">
                    4K ULTRA HD · 60 FPS
                  </span>
                  <span className="text-xs font-mono text-orange-400 bg-orange-950/60 border border-orange-500/30 px-2.5 py-1 rounded">
                    Golam Rabbi Cut
                  </span>
                </div>

                {/* Central Play/Pause button */}
                <div className="flex items-center justify-center">
                  <button
                    onClick={togglePlay}
                    className="w-16 h-16 rounded-full bg-orange-500 hover:bg-orange-400 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95"
                  >
                    {isPlaying ? (
                      <Pause className="w-7 h-7 fill-white" />
                    ) : (
                      <Play className="w-7 h-7 fill-white ml-1" />
                    )}
                  </button>
                </div>

                {/* Bottom Control Bar */}
                <div className="flex flex-col gap-2 bg-black/60 p-3 rounded-xl backdrop-blur-md border border-white/5">
                  {/* Progress Bar */}
                  <div
                    className="w-full h-1.5 bg-neutral-700 rounded-full cursor-pointer relative overflow-hidden"
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickPos = (e.clientX - rect.left) / rect.width;
                      setProgress(Math.round(clickPos * 100));
                    }}
                  >
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-neutral-300">
                    <div className="flex items-center gap-3">
                      <button onClick={togglePlay} className="hover:text-white">
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                      <button onClick={() => setIsMuted(!isMuted)} className="hover:text-white">
                        {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                      <span className="font-mono text-[11px] text-neutral-400">
                        {isPlaying ? '00:45' : '00:00'} / {project.duration || '02:00'}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-emerald-400 font-mono">1080p</span>
                      <Maximize2 className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left 2 Cols: Description & Context */}
            <div className="md:col-span-2 flex flex-col gap-4">
              <h4 className="text-lg font-bold text-white tracking-tight">
                Project Overview
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {project.description ||
                  'Professional creative project executed with attention to visual hierarchy, pacing, color grading, and maximum audience engagement.'}
              </p>

              {/* Tagline / Subtitle */}
              {project.tagline && (
                <div className="p-3.5 rounded-xl bg-[#1b1411] border border-orange-500/20 text-xs sm:text-sm text-amber-200/90 font-medium">
                  "{project.tagline}"
                </div>
              )}
            </div>

            {/* Right 1 Col: Metadata info */}
            <div className="p-5 rounded-2xl bg-[#17110f] border border-neutral-800 flex flex-col gap-4">
              {/* Client */}
              {project.client && (
                <div className="flex items-start gap-2.5">
                  <User className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[11px] text-neutral-500 uppercase tracking-wider font-semibold">
                      Client / Org
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-neutral-200">
                      {project.client}
                    </div>
                  </div>
                </div>
              )}

              {/* Tools / Software */}
              {project.software && project.software.length > 0 && (
                <div className="flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[11px] text-neutral-500 uppercase tracking-wider font-semibold">
                      Software Tools
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {project.software.map((sw) => (
                        <span
                          key={sw}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-neutral-900 border border-neutral-700 text-neutral-300"
                        >
                          {sw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Duration if video */}
              {project.duration && (
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[11px] text-neutral-500 uppercase tracking-wider font-semibold">
                      Runtime
                    </div>
                    <div className="text-xs sm:text-sm font-mono text-neutral-200">
                      {project.duration}
                    </div>
                  </div>
                </div>
              )}

              {/* Project CTA */}
              <button
                onClick={() => {
                  onClose();
                  onOpenTalk();
                }}
                className="mt-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-orange-600/30 transition-transform active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Commission Similar Project</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
