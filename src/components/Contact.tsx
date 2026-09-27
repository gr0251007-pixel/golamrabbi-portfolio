import React, { useState } from 'react';
import {
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
  Copy,
  Check,
  ExternalLink,
  Zap,
} from 'lucide-react';
import { CONTACT_INFO, PORTRAIT_IMAGE } from '../data/portfolioData';

interface ContactProps {
  onOpenTalk: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenTalk }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Section Kicker Pill */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#18120e] border border-orange-500/40 text-orange-400 shadow-sm mb-4">
            <Zap className="w-3.5 h-3.5 text-orange-400 fill-orange-400/20" />
            <span className="text-[11px] font-bold tracking-widest uppercase">
              CONTACT ME
            </span>
          </div>

          {/* Section Title */}
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-3">
            Contact <span className="text-orange-500">Me</span>
          </h2>

          {/* Subtitle */}
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl">
            Feel free to connect directly for video editing, graphic design, or creative collaboration.
          </p>
        </div>

        {/* 2x2 Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 max-w-5xl mx-auto mb-10">
          {/* Card 1: Email Address */}
          <div className="rounded-2xl p-6 sm:p-7 bg-[#140e0c] border border-neutral-800 hover:border-orange-500/50 transition-all duration-200 flex flex-col justify-between">
            <div>
              {/* Header: Icon + Title + Copy Button */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-white">
                    Email Address
                  </h3>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1 text-xs font-medium rounded-lg bg-neutral-900 border border-neutral-700/80 text-neutral-300 hover:text-white hover:border-orange-500/50 flex items-center gap-1.5 transition-colors active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Email Text */}
              <div className="font-mono text-sm sm:text-base font-semibold text-neutral-200 mb-1 break-all">
                {CONTACT_INFO.email}
              </div>

              {/* Subtext */}
              <p className="text-xs text-neutral-400 mb-6">
                Official inquiries & project briefs
              </p>
            </div>

            {/* Action Button */}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="w-full py-2.5 px-4 rounded-xl bg-[#1b1411] hover:bg-[#251b17] border border-neutral-800 hover:border-orange-500/40 text-neutral-200 hover:text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200"
            >
              <span>Send Email</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
            </a>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="rounded-2xl p-6 sm:p-7 bg-[#140e0c] border border-neutral-800 hover:border-emerald-500/50 transition-all duration-200 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-white">
                  WhatsApp
                </h3>
              </div>

              {/* Number */}
              <div className="font-mono text-sm sm:text-base font-semibold text-neutral-200 mb-1">
                {CONTACT_INFO.phone}
              </div>

              {/* Subtext */}
              <p className="text-xs text-neutral-400 mb-6">
                Fastest response for direct chats
              </p>
            </div>

            {/* Action Button */}
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-[#121b16] hover:bg-[#16251e] border border-neutral-800 hover:border-emerald-500/40 text-neutral-200 hover:text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200"
            >
              <span>Chat on WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
            </a>
          </div>

          {/* Card 3: Facebook */}
          <div className="rounded-2xl p-6 sm:p-7 bg-[#140e0c] border border-neutral-800 hover:border-blue-500/50 transition-all duration-200 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Facebook className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-white">
                  Facebook
                </h3>
              </div>

              {/* Handle */}
              <div className="font-mono text-sm sm:text-base font-semibold text-neutral-200 mb-1">
                {CONTACT_INFO.facebookHandle}
              </div>

              {/* Subtext */}
              <p className="text-xs text-neutral-400 mb-6">
                Connect on Facebook profile
              </p>
            </div>

            {/* Action Button */}
            <a
              href={CONTACT_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-[#111622] hover:bg-[#151e2e] border border-neutral-800 hover:border-blue-500/40 text-neutral-200 hover:text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200"
            >
              <span>Visit Facebook</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
            </a>
          </div>

          {/* Card 4: Instagram */}
          <div className="rounded-2xl p-6 sm:p-7 bg-[#140e0c] border border-pink-500/40 shadow-[0_0_20px_rgba(236,72,153,0.15)] hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-200 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
                  <Instagram className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-white">
                  Instagram
                </h3>
              </div>

              {/* Handle */}
              <div className="font-mono text-sm sm:text-base font-semibold text-neutral-200 mb-1">
                {CONTACT_INFO.instagramHandle}
              </div>

              {/* Subtext */}
              <p className="text-xs text-neutral-400 mb-6">
                Visual reels & design carousels
              </p>
            </div>

            {/* Action Button */}
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-[#1f1219] hover:bg-[#2a1723] border border-pink-500/30 hover:border-pink-500/60 text-neutral-200 hover:text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200"
            >
              <span>Visit Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
