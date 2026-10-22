/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Container } from '../common/Container.tsx';
import { PrimaryCTAButton } from '../common/PrimaryCTAButton.tsx';
import { ArrowDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="overview" className="bg-white text-slate-900 pt-10 pb-16 sm:pt-14 sm:pb-20 md:pt-16 md:pb-24 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Value Proposition & Actions */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Small introductory label above the headline */}
            <div className="text-xs sm:text-[13.5px] font-semibold text-blue-600 mb-3 sm:mb-4 tracking-normal">
              Turn Your Smartphone 📱 into a Profit Machine
            </div>

            {/* Main Hero Headline: 42–52px Desktop, 32–38px Mobile */}
            <h1 className="text-[32px] sm:text-4xl lg:text-[46px] xl:text-[50px] font-bold tracking-tight text-slate-950 leading-[1.12] mb-5 [text-wrap:balance]">
              ATS Trading Software scans the market for you
            </h1>

            {/* Exact Hero Description: 16–18px Desktop, 16–17px Mobile */}
            <p className="text-base sm:text-[17px] lg:text-[18px] text-slate-600 leading-[1.65] mb-8 max-w-[540px]">
              Trade from anywhere with daily, high-accuracy signals built on proven technical tools No experience? No problem.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <PrimaryCTAButton size="md" variant="dark" href="#pricing">
                Get Apex Trend Signal
              </PrimaryCTAButton>
              <a
                href="#how-it-works"
                className="px-6 py-3.5 text-sm sm:text-[15px] font-semibold text-slate-700 hover:text-slate-950 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                <span>See How It Works</span>
                <ArrowDown className="w-4 h-4 text-slate-500" />
              </a>
            </div>

            <p className="text-xs text-slate-400 mt-4">
              Technical decision-support tool. Trading involves substantial risk of loss.
            </p>
          </div>

          {/* Right Column: Embedded YouTube Video Demonstration */}
          <div className="lg:col-span-6 w-full">
            <div className="relative w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-200/90 shadow-2xl shadow-slate-200/60 aspect-video">
              <iframe
                src="https://www.youtube.com/embed/MpKBoytJzZ0?autoplay=1&mute=1&playsinline=1&controls=1&rel=0"
                title="Apex Trend Signal product demonstration"
                className="w-full h-full border-0 absolute inset-0 rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="eager"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-slate-500 px-1">
              <span className="flex items-center gap-1.5 font-medium text-slate-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live ATS Software Overview &amp; Signal Demo
              </span>
              <span className="text-slate-400 font-mono text-[11px]">YouTube HD</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
