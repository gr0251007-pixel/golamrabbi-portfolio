import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ExternalLink,
  Youtube,
  Sparkles,
} from 'lucide-react';

export interface YouTubeVideoItem {
  id: string;
  youtubeId: string;
  url: string;
  title: string;
  type: 'video' | 'short';
  tag: string;
  client?: string;
  description?: string;
}

export const YOUTUBE_VIDEOS: YouTubeVideoItem[] = [
  {
    id: 'yt-1',
    youtubeId: 'FghYRuv7Xlw',
    url: 'https://youtu.be/FghYRuv7Xlw',
    title: 'My Portfolio',
    type: 'video',
    tag: 'Portfolio Promo',
    client: 'Golam Rabbi Showcase',
    description: 'High-energy commercial promo with dynamic kinetic typography and audio mastering.',
  },
  {
    id: 'yt-2',
    youtubeId: 'fcUoYydJWek',
    url: 'https://youtu.be/fcUoYydJWek',
    title: 'SaaS Motion Video',
    type: 'video',
    tag: 'SaaS Motion',
    client: 'SaaS Product Animation',
    description: 'SaaS motion graphics showcase with fluid UI animation and kinetic typography.',
  },
  {
    id: 'yt-3',
    youtubeId: 'oo9o__CoJMA',
    url: 'https://youtu.be/oo9o__CoJMA',
    title: 'Nafis Salim Podcaster',
    type: 'video',
    tag: 'Podcast Promo',
    client: 'Nafis Salim Podcast',
    description: 'Historical documentary promo exploring Islamic cultural heritage with custom motion graphics.',
  },
  {
    id: 'yt-4',
    youtubeId: 'IwC8Amh1kmg',
    url: 'https://youtube.com/shorts/IwC8Amh1kmg?feature=share',
    title: 'Nazmul Huda Sir Premium Video Editing',
    type: 'short',
    tag: 'Premium Edit',
    client: 'Nazmul Huda Sir Project',
    description: 'Vertical format fast-paced reel with sound design and punchy color grading.',
  },
  {
    id: 'yt-5',
    youtubeId: 'QK56Dbo9nbQ',
    url: 'https://youtu.be/QK56Dbo9nbQ',
    title: 'SBMC Course Ad',
    type: 'video',
    tag: 'Course Ad',
    client: 'SBMC Course Ad',
    description: 'Comprehensive video editing showreel highlighting pacing, color craft, and transitions.',
  },
  {
    id: 'yt-6',
    youtubeId: 'DBgKMq6juDI',
    url: 'https://youtube.com/shorts/DBgKMq6juDI?feature=share',
    title: 'Nazmul Huda Sir',
    type: 'short',
    tag: 'Special Reel',
    client: 'Nazmul Huda Sir',
    description: 'Engaging vertical content tailored for viral audience retention and sound design.',
  },
  {
    id: 'yt-7',
    youtubeId: 'MnEOs1ZujuU',
    url: 'https://youtu.be/MnEOs1ZujuU',
    title: 'Nafis Sir Premium Video Editing',
    type: 'video',
    tag: 'Premium Edit',
    client: 'Nafis Sir Masterclass',
    description: 'Atmospheric video piece featuring cinematic mood, LUT grading, and sound atmosphere.',
  },
  {
    id: 'yt-8',
    youtubeId: 'n5DQZaUuvAI',
    url: 'https://youtu.be/n5DQZaUuvAI',
    title: 'Motion Video Editing',
    type: 'video',
    tag: 'Motion Edit',
    client: 'Motion Production',
    description: 'Multi-layer audio mixing with synchronized sound effects and smooth visual narrative.',
  },
  {
    id: 'yt-9',
    youtubeId: 'SGydFV1zLnI',
    url: 'https://youtube.com/shorts/SGydFV1zLnI?feature=share',
    title: 'Fanda Ad',
    type: 'short',
    tag: 'Commercial Ad',
    client: 'Fanda Ad Project',
    description: 'Snappy edits, screen shakes, and sound accents optimized for YouTube Shorts.',
  },
  {
    id: 'yt-10',
    youtubeId: 'skzXYfXDZxM',
    url: 'https://youtube.com/shorts/skzXYfXDZxM?feature=share',
    title: 'Premium Ad',
    type: 'short',
    tag: 'Premium Ad',
    client: 'Premium Ad Series',
    description: '3-second hook retention strategy edit with seamless loop pacing.',
  },
];

export const YouTubeCarousel: React.FC = () => {
  // Page index for 3 videos per page
  const [currentPage, setCurrentPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlayActive, setIsAutoPlayActive] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const VIDEOS_PER_PAGE = 3;
  const totalVideos = YOUTUBE_VIDEOS.length;
  const totalPages = Math.ceil(totalVideos / VIDEOS_PER_PAGE);

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

  const startIndex = currentPage * VIDEOS_PER_PAGE;
  const visibleVideos = YOUTUBE_VIDEOS.slice(startIndex, startIndex + VIDEOS_PER_PAGE);

  return (
    <div
      className="relative w-full my-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-600/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Main Container Card */}
      <div className="relative rounded-3xl bg-[#140e0c]/90 border border-orange-500/30 shadow-2xl p-4 sm:p-6 lg:p-7 backdrop-blur-xl">
        {/* Header bar: status, timer, page counter */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-neutral-800/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500 shadow-inner">
              <Youtube className="w-5 h-5 fill-red-500 text-transparent" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg sm:text-xl text-white">
                  Featured YouTube Showreel
                </h3>
                <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 font-semibold">
                  3 Videos / Page
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                প্রতি ২ সেকেন্ডে অটোমেটিক পরিবর্তন হচ্ছে • মাউস আনলে পজ থাকবে
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Auto slide indicator badge */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1c1310] border border-neutral-800 text-[11px] font-mono text-neutral-300">
              <span
                className={`w-2 h-2 rounded-full ${
                  isHovered ? 'bg-amber-400' : 'bg-emerald-400 animate-pulse'
                }`}
              />
              <span>{isHovered ? 'Paused (Hover)' : 'Auto-sliding (2s)'}</span>
            </div>

            {/* Page counter */}
            <div className="text-xs font-mono text-neutral-400 px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800">
              পৃষ্ঠা: <span className="text-orange-400 font-bold">{currentPage + 1}</span> / {totalPages}
            </div>
          </div>
        </div>

        {/* 3 Compact Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {visibleVideos.map((video) => {
            const isShort = video.type === 'short';
            return (
              <div
                key={video.id}
                className="group flex flex-col rounded-2xl overflow-hidden bg-[#18110e] border border-neutral-800 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-950/20 transition-all duration-300"
              >
                {/* Compact Embed Container */}
                <div className="relative w-full aspect-video bg-black overflow-hidden flex items-center justify-center">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />

                  {/* Top-right badge for Shorts or Promo */}
                  <span
                    className={`absolute top-2 right-2 text-[10px] font-mono uppercase px-2 py-0.5 rounded-md backdrop-blur-md pointer-events-none ${
                      isShort
                        ? 'bg-rose-600/80 text-white border border-rose-400/40'
                        : 'bg-black/70 text-orange-400 border border-orange-500/40'
                    }`}
                  >
                    {isShort ? 'Shorts' : 'Video'}
                  </span>
                </div>

                {/* Details under video */}
                <div className="p-4 flex-1 flex flex-col justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-orange-400 uppercase tracking-wider mb-1">
                      <Sparkles className="w-3 h-3" />
                      <span>{video.tag}</span>
                    </div>

                    <h4 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-orange-300 transition-colors line-clamp-1">
                      {video.title}
                    </h4>

                    {video.client && (
                      <p className="text-[11px] text-neutral-400 mt-1 line-clamp-1">
                        {video.client}
                      </p>
                    )}
                  </div>

                  {/* YouTube direct watch button */}
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-900 hover:bg-red-600/20 border border-neutral-800 hover:border-red-500/50 text-neutral-300 hover:text-red-400 text-xs font-semibold transition-all duration-200"
                  >
                    <Youtube className="w-3.5 h-3.5 fill-red-500 text-transparent" />
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                  </a>
                </div>
              </div>
            );
          })}
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
    </div>
  );
};
