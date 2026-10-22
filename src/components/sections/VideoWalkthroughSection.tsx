/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Container } from '../common/Container.tsx';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { MediaPlaceholder } from '../common/MediaPlaceholder.tsx';
import { CheckCircle2 } from 'lucide-react';

export const VideoWalkthroughSection: React.FC = () => {
  return (
    <section id="video-demo" className="bg-white text-slate-900 py-16 sm:py-20 md:py-24 border-t border-slate-200">
      <Container size="default">
        <SectionHeading
          theme="light"
          kicker="Demonstration"
          title="Watch Apex Trend Signal in action"
          subtitle="A practical, straightforward walkthrough showing how the indicator is applied to live TradingView charts and how buy and sell signals are interpreted."
        />

        {/* Video Player Presentation Frame */}
        <div className="max-w-[960px] mx-auto mb-12 sm:mb-14 shadow-xl rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 p-1.5 sm:p-2.5">
          <MediaPlaceholder
            slotId="product-demo-video"
            type="video"
            label="Apex Trend Signal Video Demonstration"
            caption="Full video walkthrough of live indicator execution and signal interpretation on TradingView."
            aspectRatio="16:9"
          />
        </div>

        {/* Key Takeaways from the Walkthrough */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-[960px] mx-auto text-left">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-base font-bold text-slate-950">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Simple 60-Second Setup</span>
            </div>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-[1.6]">
              Paste the custom script directly into TradingView's indicator panel. No complicated installation required.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-base font-bold text-slate-950">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Clear Entry Cues</span>
            </div>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-[1.6]">
              Learn how to verify signal candles against the multi-timeframe trend ribbon before placing stop-loss orders.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-base font-bold text-slate-950">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Mobile Alert Setup</span>
            </div>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-[1.6]">
              Configure automated push alerts so you receive real-time notifications on your smartphone anywhere, anytime.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
