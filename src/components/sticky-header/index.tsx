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
          Latest: Slate Asset Management Completes Strategic Investment
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
            <a href="https://linkedin.com" className="text-off-white hover:text-accent-blue">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://twitter.com" className="text-off-white hover:text-accent-blue">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>

          {/* Login Button */}
          <a 
            href="/login" 
            className="border border-off-white text-off-white hover:bg-accent-blue hover:border-accent-blue px-6 py-2 rounded-sm transition-colors"
          >
            Login
          </a>
        </div>
      </nav>
    </header>
  );
};

export default StickyHeader; 