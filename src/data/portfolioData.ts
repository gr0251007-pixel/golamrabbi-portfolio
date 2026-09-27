import portraitImg from '../assets/images/rabbi_new_portrait.png';
import sbmcThumb from '../assets/images/sbmc_promo_thumbnail_1790486435974.jpg';
import nashrusThumb from '../assets/images/nashrus_sirah_thumbnail_1790486524670.jpg';
import mirathThumb from '../assets/images/mirath_promo_thumbnail_1790486448356.jpg';
import amraThumb from '../assets/images/amra_poster_thumbnail_1790486537918.jpg';
import anuaThumb from '../assets/images/anua_skincare_thumbnail_1790486460597.jpg';
import brandArtboardThumb from '../assets/images/brand_artboard_thumbnail_1790486549188.jpg';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'video' | 'design';
  thumbnail: string;
  tagline?: string;
  duration?: string;
  client?: string;
  software?: string[];
  description?: string;
  hasPlayButton?: boolean;
  highlighted?: boolean;
}

export const PORTRAIT_IMAGE = portraitImg;

export const VIDEO_PROJECTS: ProjectItem[] = [
  {
    id: 'vid-1',
    title: 'SBMC Final Promo',
    category: 'video',
    thumbnail: sbmcThumb,
    tagline: 'যখন সবচেয়ে আপন মানুষগুলো...',
    duration: '01:45',
    client: 'As-Sunnah Skill Development Institute',
    software: ['Premiere Pro', 'After Effects', 'Audition'],
    description: 'High-impact commercial promotional video for Small Business Management Course (SBMC) Batch culmination, featuring kinetic typography, sound design, and emotional storytelling.',
    hasPlayButton: true
  },
  {
    id: 'vid-2',
    title: 'Nashrus Sirah Registration Promo',
    category: 'video',
    thumbnail: nashrusThumb,
    tagline: 'نشر السيرة — Conference Registration Campaign',
    duration: '02:15',
    client: 'Nashrus Sirah Academy',
    software: ['Premiere Pro', 'After Effects', 'Photoshop'],
    description: 'Cinematic promotional video with glowing calligraphy, 3D camera sweeps, and engaging call-to-action for the flagship conference registration.',
    hasPlayButton: true,
    highlighted: true
  },
  {
    id: 'vid-3',
    title: 'Mirath Final Promo',
    category: 'video',
    thumbnail: mirathThumb,
    tagline: 'উপমহাদেশের মুসলমানদের যে সাংস্কৃতিক ঐতিহ্য...',
    duration: '03:10',
    client: 'Mirath Cultural Initiative',
    software: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    description: 'Historical documentary promo exploring Islamic cultural heritage in the subcontinent with custom parchment paper animations, calligraphy, and orchestral scoring.',
    hasPlayButton: true
  },
  {
    id: 'vid-4',
    title: 'Modern Brand Identity Showreel',
    category: 'video',
    thumbnail: sbmcThumb,
    duration: '01:15',
    client: 'Creative Studio BD',
    software: ['After Effects', 'Premiere Pro'],
    description: 'Fast-paced kinetic typography and motion reel showcasing visual identity transitions and energetic rhythm cuts.',
    hasPlayButton: true
  },
  {
    id: 'vid-5',
    title: 'Islamic Educational Series Teaser',
    category: 'video',
    thumbnail: nashrusThumb,
    duration: '01:30',
    client: 'Al-Huda Media',
    software: ['Premiere Pro', 'Audition'],
    description: 'Atmospheric teaser designed for social media reels, with subtitling, dynamic sound effects, and color grading.',
    hasPlayButton: true
  },
  {
    id: 'vid-6',
    title: 'Social Media Viral Ad Campaign',
    category: 'video',
    thumbnail: mirathThumb,
    duration: '00:55',
    client: 'E-commerce Brand',
    software: ['Premiere Pro', 'CapCut Pro'],
    description: 'Short-form vertical video cut optimized for high retention rate and Facebook/Instagram algorithm conversion.',
    hasPlayButton: true
  }
];

export const DESIGN_PROJECTS: ProjectItem[] = [
  {
    id: 'des-1',
    title: 'Amra Poster Design',
    category: 'design',
    thumbnail: amraThumb,
    client: 'Islamic Scholar Assembly',
    software: ['Photoshop', 'Illustrator'],
    description: 'Arch-inspired classical banner poster design highlighting six distinguished Islamic scholars with architectural framing and typography.'
  },
  {
    id: 'des-2',
    title: 'Anua Skincare Ad',
    category: 'design',
    thumbnail: anuaThumb,
    client: 'Anua Skincare',
    software: ['Photoshop', 'Canva Pro'],
    description: 'Commercial product banner advertisement design for Anua Niacinamide 10% + TXA 4% Dark Spot Serum with minimalist pastel pink aesthetic.'
  },
  {
    id: 'des-3',
    title: 'Brand Artboard',
    category: 'design',
    thumbnail: brandArtboardThumb,
    client: 'Independent Creative Art',
    software: ['Photoshop', 'Illustrator'],
    description: 'Artistic landscape typography artboard featuring bold Bengali customized lettering "কারেন হবে" over dramatic stormscape photograph.'
  },
  {
    id: 'des-4',
    title: 'Cinematic YouTube Thumbnail',
    category: 'design',
    thumbnail: amraThumb,
    client: 'Content Creator',
    software: ['Photoshop'],
    description: 'High click-through rate YouTube thumbnail with high contrast facial expressions and custom stroke effects.'
  },
  {
    id: 'des-5',
    title: 'Educational Course Banner',
    category: 'design',
    thumbnail: anuaThumb,
    client: 'Online Academy',
    software: ['Photoshop', 'Illustrator'],
    description: 'Comprehensive promotional banner suite for social media marketing campaigns across Facebook and Instagram.'
  },
  {
    id: 'des-6',
    title: 'Islamic Conference Poster',
    category: 'design',
    thumbnail: brandArtboardThumb,
    client: 'Da\'wah Association',
    software: ['Illustrator', 'Photoshop'],
    description: 'Elegant typographic poster utilizing geometric symmetry and traditional gold and deep teal palettes.'
  },
  {
    id: 'des-7',
    title: 'Product Launch Social Carousel',
    category: 'design',
    thumbnail: anuaThumb,
    client: 'Cosmetic Brand',
    software: ['Photoshop', 'Canva Pro'],
    description: '7-slide engaging educational carousel breaking down active ingredients and skincare benefits.'
  },
  {
    id: 'des-8',
    title: 'Typography Quote Art',
    category: 'design',
    thumbnail: brandArtboardThumb,
    client: 'Art & Calligraphy Club',
    software: ['Illustrator'],
    description: 'Custom Bengali typographic lettering composition expressing spiritual reflection and tranquility.'
  },
  {
    id: 'des-9',
    title: 'Corporate Rollup Banner',
    category: 'design',
    thumbnail: amraThumb,
    client: 'Enterprise Client',
    software: ['Illustrator'],
    description: '6ft x 2.5ft exhibition roll-up banner prepared for high-resolution offset printing.'
  },
  {
    id: 'des-10',
    title: 'Book Cover Concept Design',
    category: 'design',
    thumbnail: mirathThumb,
    client: 'Publishing House',
    software: ['Photoshop', 'InDesign'],
    description: 'Embossed vintage book cover design with golden foiled typography and antique parchment texture.'
  },
  {
    id: 'des-11',
    title: 'Social Media Feed Aesthetic Grid',
    category: 'design',
    thumbnail: anuaThumb,
    client: 'Lifestyle Brand',
    software: ['Canva Pro', 'Photoshop'],
    description: 'Unified 9-post Instagram grid layout maintaining strict brand color palette and typography rules.'
  },
  {
    id: 'des-12',
    title: 'Podcast Cover Artwork',
    category: 'design',
    thumbnail: brandArtboardThumb,
    client: 'Youth Voice Podcast',
    software: ['Photoshop'],
    description: '3000x3000px high-contrast audio show artwork optimized for Spotify and Apple Podcasts.'
  },
  {
    id: 'des-13',
    title: 'Festival Greeting Card',
    category: 'design',
    thumbnail: amraThumb,
    client: 'Community Organization',
    software: ['Photoshop', 'Illustrator'],
    description: 'Festive digital greeting creative with intricate arabesque flourishes and customized greetings.'
  }
];

export const SKILLS_DATA = [
  {
    id: 'video-editing',
    title: 'VIDEO EDITING',
    icon: 'Video',
    description: 'Professional editing, storytelling, motion graphics & post-production.',
    tags: ['Premiere Pro', 'After Effects'],
    isHighlighted: false
  },
  {
    id: 'graphic-design',
    title: 'GRAPHIC DESIGN',
    icon: 'Palette',
    description: 'Creative visual design, branding, social media & promotional materials.',
    tags: ['Photoshop', 'Illustrator', 'Canva Pro'],
    isHighlighted: false
  },
  {
    id: 'creative-visualization',
    title: 'CREATIVE VISUALIZATION',
    icon: 'Eye',
    description: 'Concept development, visual storytelling & information visualization.',
    tags: [],
    isHighlighted: false
  },
  {
    id: 'script-writing',
    title: 'SCRIPT WRITING',
    icon: 'FileText',
    description: 'Video scripts, promotional content, storytelling & voice-over scripts.',
    tags: [],
    isHighlighted: false
  },
  {
    id: 'public-speaking',
    title: 'PUBLIC SPEAKING',
    icon: 'Mic',
    description: 'Presentation, audience engagement & effective communication.',
    tags: [],
    isHighlighted: false
  },
  {
    id: 'leadership',
    title: 'LEADERSHIP',
    icon: 'Users',
    description: 'Team coordination, creative direction & project execution.',
    tags: [],
    isHighlighted: true
  }
];

export const ACADEMIC_BACKGROUND = [
  {
    id: 'dawra',
    icon: 'BookOpen',
    year: 'Completed',
    title: 'Dawra-e Hadith (Masters Equivalent)',
    description: 'Highest academic qualification in Islamic Studies & Hadith literature.',
    statusLabel: 'Status:',
    statusValue: 'Batch 2026',
    badgeType: 'completed'
  },
  {
    id: 'hsc',
    icon: 'GraduationCap',
    year: 'Ongoing',
    title: 'Higher Secondary Certificate (HSC)',
    description: 'Pursuing higher secondary educational curriculum.',
    statusLabel: 'Status:',
    statusValue: 'Currently Studying (Ongoing)',
    badgeType: 'ongoing'
  },
  {
    id: 'ssc',
    icon: 'Award',
    year: '2023-2024',
    title: 'Secondary School Certificate (SSC)',
    description: 'Secondary School Certificate examination curriculum.',
    statusLabel: 'Status:',
    statusValue: 'Batch 2023-2024',
    badgeType: 'year'
  }
];

export const PROFESSIONAL_TRAINING = {
  institutionSubtitle: 'SKILL TRAINING INSTITUTION',
  institutionName: 'As-Sunnah Skill Development Institute',
  badges: ['SBMC (Small Business Management Course)', 'Batch 36'],
  coreCompetenciesTitle: 'CORE COMPETENCIES ACQUIRED:',
  competencies: [
    {
      title: 'Video Editing',
      subtitle: 'Premiere Pro & After Effects'
    },
    {
      title: 'Graphic Design',
      subtitle: 'Photoshop, Illustrator & Canva Pro'
    },
    {
      title: 'Meta Marketing',
      subtitle: 'Facebook & Instagram Ads Strategy'
    },
    {
      title: 'Generative AI Tools',
      subtitle: 'Prompt Engineering, AI Visuals & Workflows'
    }
  ],
  footerLeft: 'Hands-on Real Project Execution',
  footerRight: 'Industry Ready'
};

export const CONTACT_INFO = {
  email: 'golamrabbi.sbmc.info@gmail.com',
  phone: '01324191064',
  whatsappUrl: 'https://wa.me/8801324191064',
  facebookHandle: 'Golam Rabbi',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61593770483480',
  instagramHandle: '@golamrabbi8218',
  instagramUrl: 'https://www.instagram.com/golamrabbi8218/?hl=en',
  permanentAddress: 'Dhaka, Bangladesh',
  locationDetails: 'Based in Dhaka, Bangladesh — Available worldwide for remote video editing and graphic design collaborations.',
  availabilityStatus: 'Available for Projects',
  responseTime: 'Response: Within 2 Hours'
};
