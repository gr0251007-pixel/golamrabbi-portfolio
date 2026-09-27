import React, { useState } from 'react';
import {
  X,
  Send,
  MessageSquare,
  MessageCircle,
  Mail,
  CheckCircle,
} from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

interface TalkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TalkModal: React.FC<TalkModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Video Editing');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare WhatsApp message
    const formattedText = `Hi Golam Rabbi! My name is ${name} (${email}). I would like to inquire about: ${service}. Details: ${message}`;
    const encoded = encodeURIComponent(formattedText);
    const waUrl = `https://wa.me/8801324191064?text=${encoded}`;

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#140f0c] border border-orange-500/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between bg-[#19120e]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-white">
                Let's Talk
              </h3>
              <p className="text-[11px] text-neutral-400">
                Discuss your next creative visual project
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 hover:border-orange-500/50 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content / Form */}
        <div className="p-6">
          {submitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                Thank You, {name}!
              </h4>
              <p className="text-sm text-neutral-400 max-w-xs">
                Redirecting to WhatsApp with your project brief. Golam Rabbi usually responds within 2 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Shakib Ahmed"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1b1411] border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              {/* Email / Contact */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Your Email or WhatsApp
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. you@example.com or 017xxxxxxxx"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1b1411] border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              {/* Service Requested */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Service You Need
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1b1411] border border-neutral-800 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="Video Editing">Video Editing (Commercials, Promos, Reels)</option>
                  <option value="Graphic Design">Graphic Design (Posters, Banners, Thumbnails)</option>
                  <option value="Creative Visualization">Creative Visualization & Concept</option>
                  <option value="Script Writing">Script Writing & Voiceover Direction</option>
                  <option value="Complete Brand Package">Complete Brand Media Package</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Project Details / Brief
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe your goals, deadline, and reference videos/styles..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1b1411] border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-400 hover:to-amber-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-600/30 transition-transform active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send via WhatsApp</span>
                </button>

                <a
                  href={`mailto:${CONTACT_INFO.email}?subject=Project%20Inquiry%20from%20Portfolio&body=${encodeURIComponent(
                    `Hi Golam Rabbi,\n\nName: ${name}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`
                  )}`}
                  className="py-3 px-4 rounded-xl bg-[#1c1512] hover:bg-[#251b17] border border-neutral-700 text-neutral-200 hover:text-white text-sm font-medium flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Mail className="w-4 h-4 text-orange-400" />
                  <span>Email Instead</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
