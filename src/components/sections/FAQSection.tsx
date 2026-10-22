/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Container } from '../common/Container.tsx';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { ChevronDown } from 'lucide-react';
import { EXTRACTED_FAQS } from '../../constants/contentInventory.ts';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-white text-slate-900 py-16 sm:py-20 md:py-24 border-t border-slate-200">
      <Container size="narrow">
        <SectionHeading
          theme="light"
          kicker="Common Inquiries"
          title="Frequently asked questions"
          subtitle="Everything you need to know about setting up Apex Trend Signal, supported markets, and how the indicator works on TradingView."
        />

        <div className="space-y-3 sm:space-y-3.5 mt-8 sm:mt-10">
          {EXTRACTED_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-heading-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-150 ${
                  isOpen
                    ? 'border-slate-300 bg-slate-50/70 shadow-sm'
                    : 'border-slate-200/90 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  id={headingId}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full flex items-center justify-between p-5 sm:p-5.5 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-xl"
                >
                  <span className="text-base sm:text-[17px] font-bold text-slate-950 pr-4 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-blue-600 text-white rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    className="px-5 pb-5 sm:px-5.5 pt-0.5 text-[15px] sm:text-[16px] text-slate-600 leading-[1.65] border-t border-slate-200/60"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
