import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  Share2,
  Facebook,
  Linkedin,
  MessageCircle,
  Twitter,
} from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);
  const currentUrl = window.location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareText = "Check out Golam Rabbi's Portfolio - Visualizer & Video Editor!";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-[#140f0c] border border-orange-500/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between bg-[#19120e]">
          <div className="flex items-center gap-2">
            <Share2 className="w-4 h-4 text-orange-400" />
            <h3 className="font-bold text-base text-white">
              Share Portfolio
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 hover:border-orange-500/50 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col gap-5">
          <p className="text-xs text-neutral-400">
            Share Golam Rabbi's visual storytelling portfolio with clients, colleagues, and creators:
          </p>

          {/* Social buttons grid */}
          <div className="grid grid-cols-4 gap-3">
            {/* WhatsApp */}
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                `${shareText} ${currentUrl}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-[#121c16] border border-emerald-500/30 hover:border-emerald-500/60 flex flex-col items-center justify-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-all active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-[11px] font-medium text-neutral-300">WhatsApp</span>
            </a>

            {/* Facebook */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                currentUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-[#121622] border border-blue-500/30 hover:border-blue-500/60 flex flex-col items-center justify-center gap-1.5 text-blue-400 hover:text-blue-300 transition-all active:scale-95"
            >
              <Facebook className="w-5 h-5" />
              <span className="text-[11px] font-medium text-neutral-300">Facebook</span>
            </a>

            {/* LinkedIn */}
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                currentUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-[#111922] border border-sky-500/30 hover:border-sky-500/60 flex flex-col items-center justify-center gap-1.5 text-sky-400 hover:text-sky-300 transition-all active:scale-95"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-[11px] font-medium text-neutral-300">LinkedIn</span>
            </a>

            {/* Twitter */}
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                shareText
              )}&url=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-[#15131b] border border-neutral-700 hover:border-neutral-500 flex flex-col items-center justify-center gap-1.5 text-neutral-300 hover:text-white transition-all active:scale-95"
            >
              <Twitter className="w-5 h-5" />
              <span className="text-[11px] font-medium text-neutral-300">Twitter / X</span>
            </a>
          </div>

          {/* Direct Link Copy Box */}
          <div>
            <label className="block text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">
              Or copy link directly
            </label>
            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#1b1411] border border-neutral-800">
              <input
                type="text"
                readOnly
                value={currentUrl}
                className="flex-1 bg-transparent px-2 text-xs font-mono text-neutral-300 focus:outline-none"
              />
              <button
                onClick={handleCopy}
                className="px-3.5 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-400 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
