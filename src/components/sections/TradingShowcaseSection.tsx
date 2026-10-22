/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Container } from '../common/Container.tsx';
import { ImageViewerModal, ShowcaseImage } from '../common/ImageViewerModal.tsx';
import { Maximize2 } from 'lucide-react';

/**
 * Verified Trading Showcase Assets:
 * 1. GBP/USD Multi-Timeframe Chart (1499x778, ~1.93 aspect ratio)
 * 2. ATS Signal Execution Screenshot (1500x788, ~1.90 aspect ratio)
 */
const SHOWCASE_IMAGES: ShowcaseImage[] = [
  {
    url: 'https://d1yei2z3i6k35z.cloudfront.net/14036079/689f388156eb4_GBPUSD_2025-08-15_14-21-13_440ed.png',
    fallbackUrl: '/assets/showcase/gbpusd_chart.png',
    alt: 'Apex Trend Signal – GBP/USD TradingView Chart Analysis',
    title: 'GBP/USD Trading Chart',
  },
  {
    url: 'https://d1yei2z3i6k35z.cloudfront.net/14036079/68a19a276d3c9_Picsart_25-06-16_15-30-50-892.png',
    fallbackUrl: '/assets/showcase/ats_signals_chart.png',
    alt: 'Apex Trend Signal – TradingView Indicator Execution Screenshot',
    title: 'Apex Trend Signal Execution',
  },
];

export const TradingShowcaseSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openViewer = (index: number) => {
    setActiveImageIndex(index);
    setModalOpen(true);
  };

  return (
    <section className="bg-white text-slate-900 py-16 sm:py-20 md:py-24 border-t border-slate-200/80">
      <Container>
        {/* Exact Section Heading: 30–36px Desktop, 26–32px Mobile, Centered */}
        <div className="max-w-[800px] mx-auto text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-[26px] sm:text-3xl md:text-[34px] lg:text-[36px] font-bold tracking-tight text-slate-950 leading-[1.2] [text-wrap:balance]">
            Your Market Edge, Every Time
          </h2>
        </div>

        {/* Showcase Images Area with Soft Neutral Treatment */}
        <div className="max-w-[1100px] mx-auto p-3.5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-slate-50/85 border border-slate-200/70 shadow-[0_2px_12px_rgba(15,23,42,0.03)]">
          <div className="flex flex-col gap-5 sm:gap-6 md:gap-8">
            {SHOWCASE_IMAGES.map((img, index) => (
              <div
                key={index}
                onClick={() => openViewer(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openViewer(index);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View enlarged image: ${img.title}`}
                className="group relative w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 border border-slate-200/80 shadow-md shadow-slate-200/50 hover:border-slate-300 hover:shadow-lg transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                {/* Expand Visual Cue Badge (top-right, restrained, unobtrusive) */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/75 text-white text-xs font-medium backdrop-blur-sm border border-white/10 group-hover:bg-black/90 group-hover:scale-105 transition-all">
                  <Maximize2 className="w-3.5 h-3.5 text-blue-400" />
                  <span className="hidden sm:inline">Click to enlarge</span>
                  <span className="sm:hidden">Enlarge</span>
                </div>

                {/* Trading Chart Image: Natural Aspect Ratio, No Cropping */}
                <img
                  src={img.url}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (img.fallbackUrl && target.src !== img.fallbackUrl) {
                      target.src = img.fallbackUrl;
                    }
                  }}
                  className="w-full h-auto object-contain block select-none group-hover:opacity-95 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Fullscreen & Full-Viewport Reusable Modal Viewer */}
      <ImageViewerModal
        isOpen={modalOpen}
        images={SHOWCASE_IMAGES}
        currentIndex={activeImageIndex}
        onClose={() => setModalOpen(false)}
        onNavigate={(newIdx) => setActiveImageIndex(newIdx)}
      />
    </section>
  );
};
