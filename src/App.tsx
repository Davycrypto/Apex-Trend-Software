/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SiteHeader } from './components/layout/SiteHeader.tsx';
import { HeroSection } from './components/sections/HeroSection.tsx';
import { WhatYouGetSection } from './components/sections/WhatYouGetSection.tsx';
import { TradingShowcaseSection } from './components/sections/TradingShowcaseSection.tsx';
import { ResultsProofSection } from './components/sections/ResultsProofSection.tsx';
import { HowItWorksSection } from './components/sections/HowItWorksSection.tsx';
import { MarketsShowcaseSection } from './components/sections/MarketsShowcaseSection.tsx';
import { VideoWalkthroughSection } from './components/sections/VideoWalkthroughSection.tsx';
import { EducationSection } from './components/sections/EducationSection.tsx';
import { FAQSection } from './components/sections/FAQSection.tsx';
import { PricingSection } from './components/sections/PricingSection.tsx';
import { SiteFooter } from './components/layout/SiteFooter.tsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Top Navigation */}
      <SiteHeader />

      {/* Main Commercial Landing Page */}
      <main className="flex-1">
        {/* Section 1: Hero (White Background) */}
        <HeroSection />

        {/* Section 2: What You Get with ATS (Soft Light Background) */}
        <WhatYouGetSection />

        {/* Section 3: Trading Image Showcase (White Background) */}
        <TradingShowcaseSection />

        {/* Section 3B: ATS Results & Proof Gallery (White Background, Individual Soft Containers) */}
        <ResultsProofSection />

        {/* Section 4: How It Works & Capabilities (Dark Background) */}
        <HowItWorksSection />

        {/* Section 4: Supported Markets Showcase (Dark Background) */}
        <MarketsShowcaseSection />

        {/* Section 5: Video Demonstration (White Background) */}
        <VideoWalkthroughSection />

        {/* Section 6: Education & Beginner Onboarding (Soft Gray Background) */}
        <EducationSection />

        {/* Section 7: Frequently Asked Questions (White Background) */}
        <FAQSection />

        {/* Section 8: Commercial Pricing & Lifetime Offer (Dark Background) */}
        <PricingSection />
      </main>

      {/* Site Footer with Risk Disclosure (Deep Black Background) */}
      <SiteFooter />
    </div>
  );
}
