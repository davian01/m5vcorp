'use client';

import Image from 'next/image';
import { useState, useCallback } from 'react';

const StickyHeader = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setIsAboutOpen(true);
  }, [closeTimeout]);

  const handleMouseLeave = useCallback(() => {
    const timeout = setTimeout(() => {
      setIsAboutOpen(false);
    }, 300); // 300ms delay before closing
    setCloseTimeout(timeout);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top ticker with gradient background */}
      <div className="h-8 bg-gradient-to-r from-black-primary to-accent-blue flex items-center px-6">
        <p className="text-off-white text-small">
          Latest: M5V DEVELOPMENTS HAS A CORPORATE WEBSITE (in development)
        </p>
      </div>

      {/* Main navigation */}
      <nav className="h-20 bg-black-primary flex items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="relative w-32 h-12">
          <Image
            src="/images/logo.svg"
            alt="M5V Corp Logo"
            fill
            className="object-contain"
            priority
          />
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {/* About Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className="text-off-white hover:text-accent-blue flex items-center gap-1 py-2"
            >
              About
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Dropdown Menu */}
            <div 
              className={`absolute top-full left-0 mt-2 w-48 bg-black-primary border border-accent-blue/20 rounded-sm shadow-lg py-2 transition-all duration-200 ${
                isAboutOpen 
                  ? 'opacity-100 translate-y-0 visible' 
                  : 'opacity-0 -translate-y-2 invisible'
              }`}
            >
              <a href="/company" className="block px-4 py-3 text-off-white hover:bg-accent-blue/10 hover:text-accent-blue">
                Company
              </a>
              <a href="/team" className="block px-4 py-3 text-off-white hover:bg-accent-blue/10 hover:text-accent-blue">
                Team
              </a>
            </div>
          </div>
          <a href="/projects" className="text-off-white hover:text-accent-blue">Projects</a>
          <a href="/careers" className="text-off-white hover:text-accent-blue">Careers</a>
          <a href="/news" className="text-off-white hover:text-accent-blue">News</a>
          <a href="/contact" className="text-off-white hover:text-accent-blue">Contact</a>
        </div>

        {/* Right side - Social + Login */}
        <div className="flex items-center gap-6">
          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://instagram.com/m5v_developments" target="_blank" rel="noopener noreferrer" className="text-off-white hover:text-accent-blue">
              <span className="sr-only">Instagram</span>
              <Image
                src="/images/icons/instagram-icon.svg"
                alt="Instagram"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </a>
            <a href="https://youtube.com/m5v_developments" target="_blank" rel="noopener noreferrer" className="text-off-white hover:text-accent-blue">
              <span className="sr-only">YouTube</span>
              <Image
                src="/images/icons/youtube-icon.svg"
                alt="YouTube"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </a>
          </div>

          {/* Login Button */}
          <a 
            href="/contact" 
            className="border border-off-white text-off-white hover:bg-accent-blue hover:border-accent-blue px-6 py-2 rounded-sm transition-colors"
          >
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
};

export default StickyHeader; 