/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Container } from '../common/Container.tsx';
import { Logo } from '../common/Logo.tsx';

export const SiteFooter: React.FC = () => {
  return (
    <footer className="w-full bg-[#05070c] border-t border-slate-900 pt-16 pb-12 sm:pt-20 sm:pb-14 text-slate-400">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-14">
          {/* Brand Info with Real Logo */}
          <div className="md:col-span-6 space-y-4">
            <Logo theme="dark" sizeClass="w-[140px] sm:w-[170px] h-auto object-contain" />
            <p className="text-sm sm:text-[15px] text-slate-400 max-w-md leading-relaxed">
              Custom-built technical trend indicator for the TradingView platform. Engineered to help market participants filter noise and identify high-probability trend momentum.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#overview" className="hover:text-white transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#markets" className="hover:text-white transition-colors">
                  Supported Markets
                </a>
              </li>
              <li>
                <a href="#video-demo" className="hover:text-white transition-colors">
                  Video Demonstration
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-white transition-colors">
                  Beginner Education
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing &amp; License
                </a>
              </li>
            </ul>
          </div>

          {/* Platform Compatibility */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4 font-mono">
              Platform Support
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>TradingView Web Platform</li>
              <li>TradingView Desktop (macOS / Windows)</li>
              <li>TradingView iOS &amp; Android Apps</li>
              <li>Free &amp; Paid TradingView Accounts</li>
              <li>Instant Script Delivery</li>
            </ul>
          </div>
        </div>

        {/* Responsible Trading Risk Disclosure (At least 13px readable text) */}
        <div className="border-t border-slate-900 pt-8 text-[13px] sm:text-[13.5px] text-slate-400 leading-relaxed">
          <div className="p-5 sm:p-6 rounded-xl bg-slate-900/50 border border-slate-800 mb-6">
            <h5 className="font-semibold text-slate-300 uppercase tracking-wider text-xs mb-2 font-mono">
              High Risk Financial Disclosure
            </h5>
            <p className="mb-2">
              Trading foreign exchange, stocks, indices, commodities, and cryptocurrencies carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to participate in any financial market, carefully consider your financial objectives, level of experience, and risk appetite.
            </p>
            <p>
              Apex Trend Signal is a technical decision-support indicator developed for analytical and educational purposes. It does not provide personalized investment advice or guaranteed return forecasts. Past performance is no guarantee of future results. Never trade with money you cannot afford to lose.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-sans">
            <div>
              &copy; {new Date().getFullYear()} Apex Trend Signal. All rights reserved.
            </div>
            <div>
              TradingView™ is a registered trademark of TradingView, Inc.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
