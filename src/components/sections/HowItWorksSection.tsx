/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Container } from '../common/Container.tsx';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { MediaPlaceholder } from '../common/MediaPlaceholder.tsx';
import { CheckCircle } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-[#090d16] text-white py-16 sm:py-20 md:py-24 border-t border-slate-900">
      <Container>
        <SectionHeading
          theme="dark"
          kicker="How It Works"
          title="Three pillars of structured trend analysis"
          subtitle="Engineered to provide institutional-grade trend identification in a clean, visual format that any trader can follow."
        />

        {/* Feature Row 1: Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
              Pillar 01
            </div>

            <h3 className="text-2xl sm:text-[28px] font-bold text-white tracking-tight leading-[1.22]">
              Multi-timeframe trend confirmation
            </h3>

            <p className="text-[16px] sm:text-[17px] text-slate-300 leading-[1.65]">
              Trading in the direction of the dominant macro trend significantly improves trade execution. Apex Trend Signal continuously verifies higher timeframe momentum (e.g. 1H and 4H) so you avoid taking counter-trend positions that fight institutional flow.
            </p>

            <ul className="space-y-3 pt-1 text-[15px] text-slate-300">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Synchronizes intraday entries with daily macro bias</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Adaptable for scalping, day trading, and swing trading</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Dynamic volatility ribbon keeps you on the right side of the trend</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <MediaPlaceholder
              slotId="feature-dashboard-overview"
              symbol="EUR/USD"
              timeframe="4H / 1H"
              label="Multi-Timeframe Trend Confirmation"
              caption="Higher timeframe ribbon validation confirming trend continuation before triggering signals."
              aspectRatio="16:9"
            />
          </div>
        </div>

        {/* Feature Row 2: Reversed Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 lg:order-1">
            <MediaPlaceholder
              slotId="feature-mobile-tradingview"
              symbol="USD/JPY"
              timeframe="15m"
              label="TradingView Mobile & Desktop Sync"
              caption="Instant buy/sell push notifications delivered to smartphone, tablet, or smartwatch."
              aspectRatio="16:9"
            />
          </div>

          <div className="lg:col-span-5 lg:order-2 space-y-5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
              Pillar 02
            </div>

            <h3 className="text-2xl sm:text-[28px] font-bold text-white tracking-tight leading-[1.22]">
              Real-time alerts delivered to any device
            </h3>

            <p className="text-[16px] sm:text-[17px] text-slate-300 leading-[1.65]">
              You do not need to spend your entire day glued to multiple monitors. Apex Trend Signal connects natively to TradingView's alert infrastructure, dispatching instant push notifications to your phone or desktop the moment a valid setup develops.
            </p>

            <ul className="space-y-3 pt-1 text-[15px] text-slate-300">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Instant push alerts via official TradingView mobile app</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Desktop audio chime and visual pop-up banners</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Works on free TradingView plan with zero additional server cost</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
