/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PrimaryCTAButton } from '../common/PrimaryCTAButton.tsx';
import { Logo } from '../common/Logo.tsx';

interface SiteHeaderProps {
  onNavClick?: (href: string) => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({ onNavClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Markets', href: '#markets' },
    { label: 'Video Demo', href: '#video-demo' },
    { label: 'Education', href: '#education' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    if (onNavClick) onNavClick(href);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-colors">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
        {/* Real Brand Logo */}
        <Logo theme="light" sizeClass="w-[135px] sm:w-[165px] h-auto object-contain" />

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-6 lg:gap-7 text-[15px] font-medium text-slate-600"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Primary CTA */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <PrimaryCTAButton size="sm" variant="dark" href="#pricing">
            <span>Get Apex Signal</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1 inline-block" />
          </PrimaryCTAButton>
        </div>

        {/* Mobile Hamburger Toggle (minimum 44x44px touch target) */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="w-11 h-11 flex items-center justify-center text-slate-700 hover:text-slate-950 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-5 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-3.5 text-base font-medium text-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="py-1.5 hover:text-blue-600 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <PrimaryCTAButton
                size="md"
                variant="dark"
                href="#pricing"
                fullWidth
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Get Apex Signal</span>
                <ArrowUpRight className="w-4 h-4 ml-1 inline-block" />
              </PrimaryCTAButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
