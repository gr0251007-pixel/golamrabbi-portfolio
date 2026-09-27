import React, { useState } from 'react';
import {
  Video,
  Palette,
  Zap,
} from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { YouTubeCarousel, YOUTUBE_VIDEOS } from './YouTubeCarousel';
import {
  GraphicDesignCarousel,
  GRAPHIC_DESIGN_ITEMS,
  GraphicDesignItem,
} from './GraphicDesignCarousel';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<'video' | 'design'>('video');

  const totalVideos = YOUTUBE_VIDEOS.length;
  const totalDesigns = GRAPHIC_DESIGN_ITEMS.length;

  const handleSelectDesignItem = (item: GraphicDesignItem) => {
    onSelectProject({
      id: item.id,
      title: item.title,
      category: 'design',
      thumbnail: item.url,
      tagline: item.tagline,
      client: item.category,
      software: ['Photoshop', 'Illustrator'],
      description: item.tagline,
    });
  };

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none -z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          {/* Section Kicker Pill */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#18120e] border border-orange-500/40 text-orange-400 shadow-sm mb-4">
            <Zap className="w-3.5 h-3.5 text-orange-400 fill-orange-400/20" />
            <span className="text-[11px] font-bold tracking-widest uppercase">
              MY PROJECTS
            </span>
          </div>

          {/* Section Title */}
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-3">
            My <span className="text-orange-500">Projects</span>
          </h2>

          {/* Subtitle */}
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl">
            Switch between Video Editing and Graphic Design tabs to view selected works.
          </p>

          {/* Segmented Switcher Controls */}
          <div className="mt-8 p-1.5 rounded-full bg-[#17110f] border border-neutral-800 shadow-xl inline-flex items-center gap-1">
            {/* Video Editing Tab */}
            <button
              onClick={() => setActiveTab('video')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2.5 transition-all duration-200 ${
                activeTab === 'video'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-600/30'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>Video Editing</span>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  activeTab === 'video'
                    ? 'bg-black/30 text-white'
                    : 'bg-neutral-800 text-neutral-400'
                }`}
              >
                {totalVideos}
              </span>
            </button>

            {/* Graphic Design Tab */}
            <button
              onClick={() => setActiveTab('design')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2.5 transition-all duration-200 ${
                activeTab === 'design'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-600/30'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>Graphic Design</span>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  activeTab === 'design'
                    ? 'bg-black/30 text-white'
                    : 'bg-neutral-800 text-neutral-400'
                }`}
              >
                {totalDesigns}
              </span>
            </button>
          </div>
        </div>

        {/* Category Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pt-4 pb-4 border-b border-neutral-800/80">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#1b1411] border border-orange-500/30 flex items-center justify-center text-orange-400 shadow-inner">
              {activeTab === 'video' ? (
                <Video className="w-5 h-5" />
              ) : (
                <Palette className="w-5 h-5" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <h3 className="text-white font-bold text-lg sm:text-xl tracking-tight">
                  {activeTab === 'video' ? 'Video Editing' : 'Graphic Design'}
                </h3>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#1b1411] border border-orange-500/40 text-orange-400">
                  {activeTab === 'video' ? `${totalVideos} Videos` : `${totalDesigns} Designs`}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                {activeTab === 'video'
                  ? 'Commercial video ads, viral social reels, and YouTube longforms'
                  : 'YouTube thumbnails, social ad banners, and cinematic poster designs'}
              </p>
            </div>
          </div>

          <div className="text-xs font-mono text-neutral-400 tracking-wide self-end sm:self-center">
            Showing:{' '}
            <span className="text-neutral-200 font-semibold">
              {activeTab === 'video'
                ? `3 per page (${totalVideos} Total)`
                : `3 per page (${totalDesigns} Total)`}
            </span>
          </div>
        </div>

        {/* Video Projects Tab Content */}
        {activeTab === 'video' && (
          <div className="flex flex-col gap-6">
            {/* Auto-playing YouTube Video Carousel showing 3 videos per page */}
            <YouTubeCarousel />
          </div>
        )}

        {/* Graphic Design Projects Tab Content */}
        {activeTab === 'design' && (
          <div className="flex flex-col gap-6">
            {/* Auto-playing Graphic Design Image Carousel showing 3 images per page */}
            <GraphicDesignCarousel onPreviewImage={handleSelectDesignItem} />
          </div>
        )}
      </div>
    </section>
  );
};
