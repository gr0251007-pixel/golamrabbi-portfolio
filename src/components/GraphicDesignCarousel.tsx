import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Maximize2,
  ExternalLink,
  Sparkles,
  Layers,
  Palette,
} from 'lucide-react';

export interface GraphicDesignItem {
  id: string;
  url: string;
  title: string;
  category: string;
  tagline: string;
}

export const GRAPHIC_DESIGN_ITEMS: GraphicDesignItem[] = [
  {
    id: 'gd-1',
    url: 'https://i.ibb.co.com/tfzMmr3/air.jpg',
    title: 'Air Commercial Poster',
    category: 'Commercial Art',
    tagline: 'Dynamic product poster composition & lighting',
  },
  {
    id: 'gd-2',
    url: 'https://i.ibb.co.com/JR8Pyy8M/golam-rabbi-3838-as-1.jpg',
    title: 'Visual Identity & Branding Art',
    category: 'Brand Identity',
    tagline: 'Signature art direction and aesthetic geometry',
  },
  {
    id: 'gd-3',
    url: 'https://i.ibb.co.com/mCmLfCkX/taipograpi-Golam-Rabbi-3838.jpg',
    title: 'Kinetic Typography Artboard',
    category: 'Typography',
    tagline: 'Experimental typography layout & contrast',
  },
  {
    id: 'gd-4',
    url: 'https://i.ibb.co.com/TD5Mxq7n/rabbi-10.png',
    title: 'Creative Editorial Design',
    category: 'Editorial',
    tagline: 'Modern layout with clean visual hierarchy',
  },
  {
    id: 'gd-5',
    url: 'https://i.ibb.co.com/QvCXRZ89/Untitled-1.jpg',
    title: 'Cinematic Concept Artwork 01',
    category: 'Concept Art',
    tagline: 'Atmospheric depth and rich color grading',
  },
  {
    id: 'gd-6',
    url: 'https://i.ibb.co.com/Gf9xxCt6/Untitled-3.jpg',
    title: 'Atmospheric Creative Visual 02',
    category: 'Visual Design',
    tagline: 'High-contrast creative photo manipulation',
  },
  {
    id: 'gd-7',
    url: 'https://i.ibb.co.com/gMqS7PsY/project-3.jpg',
    title: 'Key Visual Campaign Design',
    category: 'Ad Campaign',
    tagline: 'Commercial campaign visual with focal depth',
  },
  {
    id: 'gd-8',
    url: 'https://i.ibb.co.com/q3txvqrf/postterr.png',
    title: 'Cinematic Movie / Event Poster',
    category: 'Poster Design',
    tagline: 'Story-driven poster aesthetic and typography',
  },
  {
    id: 'gd-9',
    url: 'https://i.ibb.co.com/dxWFcRY/fast-celograpi-1.jpg',
    title: 'Fast Calligraphy & Cultural Art',
    category: 'Calligraphy',
    tagline: 'Traditional Arabic/Islamic calligraphy with modern touch',
  },
  {
    id: 'gd-10',
    url: 'https://i.ibb.co.com/7MWnPWg/golam-rabbi-3838.jpg',
    title: 'Signature Visual Artpiece',
    category: 'Featured Artwork',
    tagline: 'Balanced visual symmetry and signature style',
  },
  {
    id: 'gd-11',
    url: 'https://i.ibb.co.com/MxgL3n4v/Golam-Rabbi-3838-poster.jpg',
    title: 'Showcase Event Campaign Poster',
    category: 'Event Poster',
    tagline: 'Striking promotional composition and glowing highlights',
  },
];

interface GraphicDesignCarouselProps {
  onPreviewImage?: (item: GraphicDesignItem) => void;
}

export const GraphicDesignCarousel: React.FC<GraphicDesignCarouselProps> = ({
  onPreviewImage,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlayActive, setIsAutoPlayActive] = useState(true);
  const [previewItem, setPreviewItem] = useState<GraphicDesignItem | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const ITEMS_PER_PAGE = 3;
  const totalItems = GRAPHIC_DESIGN_ITEMS.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  // Auto-slide every 2000ms (2 seconds)
  useEffect(() => {
    if (!isAutoPlayActive || isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 2000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlayActive, isHovered, totalPages]);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const visibleItems = GRAPHIC_DESIGN_ITEMS.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div
      className="relative w-full my-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-orange-600/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Main Container Card */}
      <div className="relative rounded-3xl bg-[#140e0c]/90 border border-orange-500/30 shadow-2xl p-4 sm:p-6 lg:p-7 backdrop-blur-xl">
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-neutral-800/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-orange-600/15 border border-orange-500/30 flex items-center justify-center text-orange-400 shadow-inner">
              <Palette className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg sm:text-xl text-white">
                  Featured Graphic Design Showcase
                </h3>
                <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 font-semibold">
                  3 Designs / Page
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                প্রতি ২ সেকেন্ডে অটো-স্লাইড হচ্ছে • মাউস আনলে পজ থাকবে
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Auto-slide indicator badge */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1c1310] border border-neutral-800 text-[11px] font-mono text-neutral-300">
              <span
                className={`w-2 h-2 rounded-full ${
                  isHovered ? 'bg-amber-400' : 'bg-emerald-400 animate-pulse'
                }`}
              />
              <span>{isHovered ? 'Paused (Hover)' : 'Auto-sliding (2s)'}</span>
            </div>

            {/* Page Counter */}
            <div className="text-xs font-mono text-neutral-400 px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800">
              পৃষ্ঠা: <span className="text-orange-400 font-bold">{currentPage + 1}</span> / {totalPages}
            </div>
          </div>
        </div>

        {/* 3 Compact Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                if (onPreviewImage) onPreviewImage(item);
                else setPreviewItem(item);
              }}
              className="group flex flex-col rounded-2xl overflow-hidden bg-[#18110e] border border-neutral-800 hover:border-orange-500/60 hover:shadow-xl hover:shadow-orange-950/30 transition-all duration-300 cursor-pointer"
            >
              {/* Image Frame with Aspect Ratio */}
              <div className="relative w-full aspect-4/3 sm:aspect-square bg-neutral-950 overflow-hidden flex items-center justify-center">
                <img
                  src={item.url}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback in case of broken link
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80';
                  }}
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                {/* Category Pill Tag */}
                <span className="absolute top-2.5 left-2.5 text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-md backdrop-blur-md bg-black/70 text-orange-400 border border-orange-500/40 pointer-events-none">
                  {item.category}
                </span>

                {/* Center preview zoom button on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-12 h-12 rounded-full bg-orange-500/90 text-white flex items-center justify-center shadow-lg backdrop-blur-xs scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Details under image */}
              <div className="p-4 flex-1 flex flex-col justify-between gap-2.5 bg-[#140e0c]">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-orange-400 uppercase tracking-wider mb-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{item.category}</span>
                  </div>

                  <h4 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-orange-300 transition-colors line-clamp-1">
                    {item.title}
                  </h4>

                  <p className="text-[11px] text-neutral-400 mt-1 line-clamp-2 leading-relaxed">
                    {item.tagline}
                  </p>
                </div>

                {/* View Image Action Bar */}
                <div className="pt-2 border-t border-neutral-800/60 flex items-center justify-between text-xs text-neutral-400 group-hover:text-orange-400 transition-colors font-medium">
                  <span>View Full Artboard</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Carousel Controls & Pagination Dots */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-5 border-t border-neutral-800/70">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#1b1411] border border-neutral-800 hover:border-orange-500/50 text-neutral-300 hover:text-white transition-all text-xs font-medium active:scale-95"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          {/* Dots Indicator for Pages */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => {
              const isActive = idx === currentPage;
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    isActive
                      ? 'w-7 h-2 bg-gradient-to-r from-orange-500 to-amber-500 shadow-sm shadow-orange-500/40'
                      : 'w-2 h-2 bg-neutral-700 hover:bg-neutral-500'
                  }`}
                  aria-label={`Go to page ${idx + 1}`}
                />
              );
            })}
          </div>

          {/* Play / Pause Toggle & Next Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAutoPlayActive(!isAutoPlayActive)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#1b1411] border border-neutral-800 hover:border-orange-500/50 text-neutral-400 hover:text-white transition-all text-xs font-medium"
              title={isAutoPlayActive ? 'Pause auto-slide' : 'Resume auto-slide'}
            >
              {isAutoPlayActive ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>Play</span>
                </>
              )}
            </button>

            <button
              onClick={handleNext}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#1b1411] border border-neutral-800 hover:border-orange-500/50 text-neutral-300 hover:text-white transition-all text-xs font-medium active:scale-95"
              aria-label="Next page"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Internal Modal for Lightbox preview if clicked directly */}
      {previewItem && !onPreviewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
          onClick={() => setPreviewItem(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-[#120d0b] border border-orange-500/40 rounded-3xl overflow-hidden p-2 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3 border-b border-neutral-800">
              <h3 className="font-bold text-white text-base truncate">
                {previewItem.title}
              </h3>
              <button
                onClick={() => setPreviewItem(null)}
                className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="p-3 flex items-center justify-center overflow-auto max-h-[75vh]">
              <img
                src={previewItem.url}
                alt={previewItem.title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
