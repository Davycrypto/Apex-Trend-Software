/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Container } from '../common/Container.tsx';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { Monitor, PlayCircle, Bell, Smartphone } from 'lucide-react';

interface BenefitItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const BENEFITS: BenefitItem[] = [
  {
    icon: Monitor,
    title: 'ATS TradingView Installation',
    description: 'ATS software installed directly on your TradingView platform',
  },
  {
    icon: PlayCircle,
    title: 'Step-by-Step Video Tutorials',
    description: 'Video Tutorials showing you exactly how to use the trading tools',
  },
  {
    icon: Bell,
    title: 'Real-Time Buy & Sell Alerts',
    description: 'Real-Time Buy & Sell Alerts delivered straight to your chart',
  },
  {
    icon: Smartphone,
    title: 'Mobile-Friendly Access',
    description: 'Mobile-Friendly Access so you can trade anywhere, anytime',
  },
];

export const WhatYouGetSection: React.FC = () => {
  return (
    <section className="bg-slate-50 text-slate-900 py-16 sm:py-20 md:py-24 border-t border-slate-200/80">
      <Container>
        <SectionHeading
          theme="light"
          kicker="WHAT YOU GET WITH ATS"
          title="What You Get with ATS"
          className="mb-12 sm:mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
          {BENEFITS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 lg:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-slate-300 transition-colors flex flex-col items-start text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50/90 border border-blue-100 flex items-center justify-center text-blue-600 mb-5 shrink-0">
                  <Icon className="w-5 h-5 stroke-[1.8]" />
                </div>

                <h3 className="text-lg sm:text-[19px] font-bold text-slate-950 tracking-tight leading-snug mb-2.5">
                  {item.title}
                </h3>

                <p className="text-[15px] sm:text-[16px] text-slate-600 leading-[1.6]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
