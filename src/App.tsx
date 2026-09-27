/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CVModal } from './components/CVModal';
import { TalkModal } from './components/TalkModal';
import { ShareModal } from './components/ShareModal';
import { ProjectItem, PORTRAIT_IMAGE } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isTalkOpen, setIsTalkOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isPastProjects, setIsPastProjects] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      const projectsEl = document.getElementById('projects');
      if (projectsEl) {
        setIsPastProjects(window.scrollY + window.innerHeight * 0.35 >= projectsEl.offsetTop);
      }

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0807] text-neutral-100 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onOpenCV={() => setIsCVOpen(true)}
        onOpenShare={() => setIsShareOpen(true)}
        onOpenTalk={() => setIsTalkOpen(true)}
      />

      {/* Global Fixed Background Layer: Active and visible from My Projects all the way down to the bottom */}
      <div
        className={`fixed inset-0 pointer-events-none select-none -z-0 transition-all duration-1000 ease-out flex items-center justify-center overflow-hidden ${
          isPastProjects ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'
        }`}
      >
        {/* Centered Large Portrait Watermark with pure background integration */}
        <div className="relative w-full h-[90vh] flex items-center justify-center">
          <img
            src={PORTRAIT_IMAGE}
            alt=""
            aria-hidden="true"
            style={{
              maskImage: 'linear-gradient(to bottom, black 80%, transparent 98%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 98%)',
            }}
            className="w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl h-full object-contain filter grayscale contrast-125 brightness-110 opacity-30 drop-shadow-[0_0_100px_rgba(249,115,22,0.5)]"
          />
        </div>
        {/* Soft radial overlay keeping text super crisp while your photo stays undeniably visible */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#0b0807]/30 to-[#0b0807]/80" />
        {/* Gradient perimeter blend so no edge can show */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0807]/90 via-transparent to-[#0b0807]/90" />
      </div>

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col relative z-10">
        {/* Hero Section */}
        <Hero
          onOpenTalk={() => setIsTalkOpen(true)}
          isScrolledAway={isPastProjects}
        />

        {/* My Projects Section */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Core Expertise & Skills Section */}
        <Skills />

        {/* Education & Professional Training Section */}
        <Education />

        {/* Contact Me Section */}
        <Contact onOpenTalk={() => setIsTalkOpen(true)} />

        {/* Footer */}
        <Footer onOpenCV={() => setIsCVOpen(true)} />
      </main>

      {/* Interactive Project Lightbox / Video Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenTalk={() => setIsTalkOpen(true)}
      />

      {/* Curriculum Vitae Modal */}
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />

      {/* Quick Let's Talk Inquiry Modal */}
      <TalkModal isOpen={isTalkOpen} onClose={() => setIsTalkOpen(false)} />

      {/* Share Portfolio Modal */}
      <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
    </div>
  );
}
