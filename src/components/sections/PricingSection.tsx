/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Container } from '../common/Container.tsx';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { Check, ShieldCheck, ArrowRight, Lock } from 'lucide-react';

interface PricingSectionProps {
  /**
   * Price string. Editable per instructions.
   */
  price?: string;
  originalPrice?: string;
  /**
   * Real checkout URL configured from MVP reference.
   */
  checkoutUrl?: string;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  price = '$97',
  originalPrice = '$197',
  checkoutUrl = 'https://selar.com/easytrendsignal',
}) => {
  return (
    <section id="pricing" className="bg-[#090d16] text-white py-16 sm:py-20 md:py-24 border-t border-slate-800 scroll-mt-12">
      <Container size="narrow">
        <SectionHeading
          theme="dark"
          kicker="Pricing &amp; Access"
          title="Get lifetime access to Apex Trend Signal"
          subtitle="One simple payment for lifetime TradingView indicator script access, video tutorials, and ongoing indicator updates. No recurring subscriptions."
        />

        {/* Commercial Offer Container */}
        <div className="rounded-2xl border border-slate-700/80 bg-[#0e1320] p-5 sm:p-8 lg:p-10 shadow-2xl shadow-slate-950/60 max-w-[700px] mx-auto">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border-b border-slate-800 pb-6 mb-6 sm:pb-8 sm:mb-8">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 block mb-1">
                TradingView Technical Suite
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Lifetime License
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Full script access for desktop, tablet, and mobile charts
              </p>
            </div>

            <div className="text-left sm:text-right shrink-0">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                  {price}
                </span>
                {originalPrice && (
                  <span className="text-lg text-slate-500 line-through font-mono">
                    {originalPrice}
                  </span>
                )}
              </div>
              <span className="text-xs text-slate-400 block mt-0.5">
                One-time payment · Lifetime access
              </span>
            </div>
          </div>

          {/* Included Deliverables List */}
          <div className="space-y-3.5 mb-8 text-slate-200 text-sm sm:text-[15px]">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-950/80 text-blue-400 border border-blue-800/80 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>
                <strong className="text-white font-semibold">Apex Trend Signal script</strong> installed directly on your TradingView account
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-950/80 text-blue-400 border border-blue-800/80 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>
                <strong className="text-white font-semibold">Real-time buy &amp; sell alerts</strong> delivered to your smartphone and desktop
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-950/80 text-blue-400 border border-blue-800/80 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>
                <strong className="text-white font-semibold">Multi-timeframe trend ribbon</strong> and dynamic ATR volatility filter
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-950/80 text-blue-400 border border-blue-800/80 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>
                <strong className="text-white font-semibold">Step-by-step video tutorials</strong> walking you through installation and strategy
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-950/80 text-blue-400 border border-blue-800/80 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>
                <strong className="text-white font-semibold">Works on free TradingView accounts</strong> — no paid monthly TradingView plan needed
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-950/80 text-blue-400 border border-blue-800/80 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>
                <strong className="text-white font-semibold">Dedicated setup assistance</strong> to guide you through any questions
              </span>
            </div>
          </div>

          {/* Primary Purchase Button */}
          <div className="space-y-3 pt-1">
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 text-base sm:text-[17px] font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-150 cursor-pointer whitespace-nowrap active:translate-y-px"
            >
              <span>Get Instant Lifetime Access</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="flex items-center justify-center gap-4 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>256-bit encrypted checkout</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                <span>Instant script delivery</span>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
