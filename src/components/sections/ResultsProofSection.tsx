/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Container } from '../common/Container.tsx';
import { ImageViewerModal, ShowcaseImage } from '../common/ImageViewerModal.tsx';
import { Maximize2 } from 'lucide-react';

/**
 * Six Verified Proof Assets in Exact Specified Order:
 * Image 1: 68a198d6d0649_Picsart_25-07-16_02-25-48-100.png (1062x796)
 * Image 2: 68a198fd681e7_Picsart_25-07-16_02-27-58-270.png (1080x1155)
 * Image 3: 68a199329c47c_Picsart_25-07-16_02-28-34-036.png (1080x921)
 * Image 4: 68a19955e8213_Picsart_25-07-16_02-29-14-960.png (1080x1068)
 * Image 5: 68a1996e690c8_Picsart_25-07-16_02-30-05-044.png (1080x1289)
 * Image 6: 68a1e360422fd_-5809666012507916263_121.jpg (828x717)
 */
interface ProofItem extends ShowcaseImage {
  bgToneClass: string;
}

const PROOF_ASSETS: ProofItem[] = [
  {
    url: 'https://d1yei2z3i6k35z.cloudfront.net/14036079/68a198d6d0649_Picsart_25-07-16_02-25-48-100.png',
    fallbackUrl: '/assets/proof/proof_1.png',
    alt: 'Apex Trend Signal verified trade execution and account performance proof 1',
    title: 'Verified Trading Result 1',
    bgToneClass: 'bg-slate-50/95 border-slate-200/80',
  },
  {
    url: 'https://d1yei2z3i6k35z.cloudfront.net/14036079/68a198fd681e7_Picsart_25-07-16_02-27-58-270.png',
    fallbackUrl: '/assets/proof/proof_2.png',
    alt: 'Apex Trend Signal verified trade execution and account performance proof 2',
    title: 'Verified Trading Result 2',
    bgToneClass: 'bg-zinc-50/95 border-zinc-200/80',
  },
  {
    url: 'https://d1yei2z3i6k35z.cloudfront.net/14036079/68a199329c47c_Picsart_25-07-16_02-28-34-036.png',
    fallbackUrl: '/assets/proof/proof_3.png',
    alt: 'Apex Trend Signal verified trade execution and account performance proof 3',
    title: 'Verified Trading Result 3',
    bgToneClass: 'bg-neutral-50/95 border-neutral-200/80',
  },
  {
    url: 'https://d1yei2z3i6k35z.cloudfront.net/14036079/68a19955e8213_Picsart_25-07-16_02-29-14-960.png',
    fallbackUrl: '/assets/proof/proof_4.png',
    alt: 'Apex Trend Signal verified trade execution and account performance proof 4',
    title: 'Verified Trading Result 4',
    bgToneClass: 'bg-stone-50/95 border-stone-200/80',
  },
  {
    url: 'https://d1yei2z3i6k35z.cloudfront.net/14036079/68a1996e690c8_Picsart_25-07-16_02-30-05-044.png',
    fallbackUrl: '/assets/proof/proof_5.png',
    alt: 'Apex Trend Signal verified trade execution and account performance proof 5',
    title: 'Verified Trading Result 5',
    bgToneClass: 'bg-[#f8f9fa] border-slate-200/80',
  },
  {
    url: 'https://d1yei2z3i6k35z.cloudfront.net/14036079/68a1e360422fd_-5809666012507916263_121.jpg',
    fallbackUrl: '/assets/proof/proof_6.jpg',
    alt: 'Apex Trend Signal verified trade execution and account performance proof 6',
    title: 'Verified Trading Result 6',
    bgToneClass: 'bg-[#f4f6f9] border-slate-200/80',
  },
];

export const ResultsProofSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openViewer = (index: number) => {
    setActiveImageIndex(index);
    setModalOpen(true);
  };

  return (
    <section className="bg-white text-slate-900 py-16 sm:py-20 md:py-24 border-t border-slate-200/80">
      <Container size="wide">
        {/* Exact Section Heading: Centered on desktop & mobile */}
        <div className="max-w-[850px] mx-auto text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-[26px] sm:text-3xl md:text-[34px] lg:text-[36px] font-bold tracking-tight text-slate-950 leading-[1.2] [text-wrap:balance]">
            Consistent Wins. Growing Accounts. Real Results.
          </h2>
        </div>

        {/* 6-Image Responsive Gallery Grid: 3 cols (desktop), 2 cols (tablet), 1 col (mobile) */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {PROOF_ASSETS.map((item, index) => (
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
              aria-label={`View enlarged proof: ${item.title}`}
              className={`group relative flex flex-col p-3 sm:p-4 rounded-2xl border shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${item.bgToneClass}`}
            >
              {/* Enlarge Affordance Badge (restrained, clear) */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/75 text-white text-[11px] font-medium backdrop-blur-sm border border-white/10 group-hover:bg-black/90 group-hover:scale-105 transition-all">
                <Maximize2 className="w-3 h-3 text-blue-400" />
                <span className="hidden sm:inline">Enlarge</span>
              </div>

              {/* Inner Image Framing: Preserves native aspect ratio with zero distortion or cropping */}
              <div className="w-full flex-1 flex items-center justify-center rounded-xl bg-slate-950/95 border border-black/10 overflow-hidden p-2 sm:p-3 min-h-[240px] sm:min-h-[280px]">
                <img
                  src={item.url}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (item.fallbackUrl && target.src !== item.fallbackUrl) {
                      target.src = item.fallbackUrl;
                    }
                  }}
                  className="w-full h-auto max-h-[340px] sm:max-h-[380px] object-contain block mx-auto select-none group-hover:opacity-95 transition-opacity"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Fullscreen & Full-Viewport Lightbox Modal */}
      <ImageViewerModal
        isOpen={modalOpen}
        images={PROOF_ASSETS}
        currentIndex={activeImageIndex}
        onClose={() => setModalOpen(false)}
        onNavigate={(newIdx) => setActiveImageIndex(newIdx)}
      />
    </section>
  );
};
