/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';

export interface ShowcaseImage {
  url: string;
  fallbackUrl?: string;
  alt: string;
  title: string;
  subtitle?: string;
}

interface ImageViewerModalProps {
  isOpen: boolean;
  images: ShowcaseImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const ImageViewerModal: React.FC<ImageViewerModalProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string>('');

  const activeImage = images[currentIndex];

  // Update current src when active image changes
  useEffect(() => {
    if (activeImage) {
      setCurrentSrc(activeImage.url);
    }
  }, [activeImage, currentIndex]);

  // Navigate functions
  const handlePrev = useCallback(() => {
    if (images.length <= 1) return;
    const nextIdx = (currentIndex - 1 + images.length) % images.length;
    onNavigate(nextIdx);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (images.length <= 1) return;
    const nextIdx = (currentIndex + 1) % images.length;
    onNavigate(nextIdx);
  }, [currentIndex, images.length, onNavigate]);

  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    const deltaY = e.changedTouches[0].clientY - touchStartYRef.current;

    // Check if horizontal swipe is dominant and above threshold
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.4) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  // Handle Fullscreen API
  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        if (modalRef.current?.requestFullscreen) {
          await modalRef.current.requestFullscreen();
          setIsFullscreen(true);
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
          setIsFullscreen(false);
        }
      }
    } catch {
      // Browser may reject fullscreen inside iframes or without explicit user permission
      // The modal remains full-viewport regardless.
    }
  }, []);

  // Sync fullscreen change events
  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  // Keyboard controls & scroll lock
  useEffect(() => {
    if (!isOpen) return;

    // Prevent background scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button on open
    const focusTimer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(focusTimer);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !activeImage) return null;

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Image viewer: ${activeImage.title}`}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-black/95 backdrop-blur-md select-none animate-in fade-in duration-200"
      onClick={(e) => {
        // Close if clicking the backdrop (outside the image container and control elements)
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Top Header Controls Bar */}
      <div className="w-full flex items-center justify-between px-4 sm:px-6 py-3.5 z-20 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-3 text-white">
          <span className="font-mono text-xs sm:text-sm px-2.5 py-1 rounded-md bg-white/10 text-slate-200 border border-white/10">
            {currentIndex + 1} / {images.length}
          </span>
          <span className="text-sm sm:text-base font-medium truncate max-w-[200px] sm:max-w-md text-slate-200">
            {activeImage.title}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Native Fullscreen Toggle Button */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className="w-11 h-11 flex items-center justify-center text-slate-300 hover:text-white rounded-lg hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors"
            aria-label={isFullscreen ? 'Exit native fullscreen' : 'Enter native fullscreen'}
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>

          {/* Close Button */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="w-11 h-11 flex items-center justify-center text-slate-300 hover:text-white rounded-lg hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors"
            aria-label="Close viewer (Escape)"
            title="Close (Esc)"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Center Image Display with Touch Swipe Support */}
      <div
        className="flex-1 w-full flex items-center justify-center px-3 sm:px-12 md:px-16 py-2 relative overflow-hidden touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        {/* Previous Navigation Button (Desktop & Tablet) */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            className="hidden sm:flex absolute left-3 md:left-6 z-20 w-12 h-12 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/90 hover:scale-105 active:scale-95 border border-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all shadow-xl"
            aria-label="Previous image (Left arrow)"
            title="Previous (Left arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* The Enlargeable Image */}
        <div className="relative max-w-[94vw] max-h-[80vh] flex items-center justify-center">
          <img
            src={currentSrc}
            alt={activeImage.alt}
            onError={() => {
              // Graceful fallback to local cached file if external CDN fails
              if (activeImage.fallbackUrl && currentSrc !== activeImage.fallbackUrl) {
                setCurrentSrc(activeImage.fallbackUrl);
              }
            }}
            className="max-w-[94vw] max-h-[78vh] sm:max-h-[82vh] w-auto h-auto object-contain rounded-lg shadow-2xl border border-white/10 select-none animate-in zoom-in-95 duration-150"
            draggable={false}
          />
        </div>

        {/* Next Navigation Button (Desktop & Tablet) */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={handleNext}
            className="hidden sm:flex absolute right-3 md:right-6 z-20 w-12 h-12 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/90 hover:scale-105 active:scale-95 border border-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all shadow-xl"
            aria-label="Next image (Right arrow)"
            title="Next (Right arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom Information & Mobile Navigation Bar */}
      <div className="w-full px-4 sm:px-6 py-3 z-20 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent text-slate-300 text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline text-slate-400">
            Use <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-slate-300 text-[11px]">←</kbd>{' '}
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-slate-300 text-[11px]">→</kbd> to navigate,{' '}
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-slate-300 text-[11px]">Esc</kbd> to close
          </span>
          <span className="sm:hidden text-slate-400">Tap anywhere outside to close</span>
        </div>

        {/* Mobile Prev/Next Controls */}
        {images.length > 1 && (
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium flex items-center gap-1 active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Prev</span>
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium flex items-center gap-1 active:scale-95"
              aria-label="Next image"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
