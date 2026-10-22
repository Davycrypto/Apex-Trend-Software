/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Container } from '../common/Container.tsx';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { MediaPlaceholder } from '../common/MediaPlaceholder.tsx';
import { BookOpen, Video, Users } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="bg-slate-50 text-slate-900 py-16 sm:py-20 md:py-24 border-t border-slate-200">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              align="left"
              theme="light"
              kicker="Beginner Friendly"
              title="New to trading? Everything you need to get started is included."
              subtitle="You do not need years of market experience. Apex Trend Signal includes step-by-step video tutorials, chart navigation guides, and risk management principles."
              className="mb-6 sm:mb-8"
            />

            <div className="space-y-4 text-slate-700">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-slate-950 mb-0.5">
                    Step-by-step video installation
                  </h4>
                  <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                    Watch our setup video showing how to add the script to TradingView in less than 2 minutes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-slate-950 mb-0.5">
                    Signal confirmation &amp; risk discipline guide
                  </h4>
                  <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                    Learn proper stop-loss placement, risk-to-reward ratios, and how to avoid taking trades during major news releases.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-slate-950 mb-0.5">
                    Priority onboarding assistance
                  </h4>
                  <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                    Have questions during setup? Get direct assistance so you never feel stuck at any point.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <MediaPlaceholder
              slotId="installation-tutorial-video"
              type="video"
              label="TradingView Installation & Onboarding Guide"
              caption="Guided walkthrough showing how to add Apex Trend Signal to your TradingView account."
              aspectRatio="16:9"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
