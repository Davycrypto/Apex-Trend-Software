/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Container } from '../common/Container.tsx';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { MediaPlaceholder } from '../common/MediaPlaceholder.tsx';

export const MarketsShowcaseSection: React.FC = () => {
  const [activeMarket, setActiveMarket] = useState<'forex' | 'indices' | 'crypto' | 'commodities'>('forex');

  const marketData = {
    forex: {
      name: 'Forex Pairs',
      symbol: 'GBP/USD',
      timeframe: '1H',
      slotId: 'market-example-gbpusd',
      title: 'GBP/USD Trend Momentum Example',
      description: 'Clear trend continuation signals on major and minor currency pairs. Filters out noisy European session overlaps.',
      instruments: 'GBP/USD, EUR/USD, USD/JPY, AUD/USD, USD/CAD',
    },
    indices: {
      name: 'Global Indices',
      symbol: 'US500 (S&P)',
      timeframe: '15m',
      slotId: 'market-example-usdjpy',
      title: 'S&P 500 & Nasdaq Trend Structure',
      description: 'Filters out pre-market consolidation and highlights high-volume cash session momentum on index futures and CFDs.',
      instruments: 'S&P 500, Nasdaq 100, Dow Jones 30, DAX 40',
    },
    crypto: {
      name: 'Cryptocurrencies',
      symbol: 'BTC/USD',
      timeframe: '4H',
      slotId: 'market-example-gbpusd',
      title: 'Bitcoin & Ethereum Trend Cycles',
      description: 'Adapts to high-volatility 24/7 digital asset markets without false whipsaws during consolidation phases.',
      instruments: 'BTC/USD, ETH/USD, SOL/USD, BNB/USD',
    },
    commodities: {
      name: 'Commodities',
      symbol: 'XAU/USD (Gold)',
      timeframe: '1H',
      slotId: 'market-example-usdjpy',
      title: 'Gold & Crude Oil Trend Tracking',
      description: 'Accurate momentum detection on metals and energy instruments driven by macroeconomic volatility.',
      instruments: 'Gold (XAU/USD), Silver (XAG/USD), US Crude Oil (WTI)',
    },
  };

  const current = marketData[activeMarket];

  return (
    <section id="markets" className="bg-[#0c101a] text-white py-16 sm:py-20 md:py-24 border-t border-slate-800/80">
      <Container>
        <SectionHeading
          theme="dark"
          kicker="Market Versatility"
          title="Engineered for every liquid market on TradingView"
          subtitle="Because Apex Trend Signal calculates dynamic volatility rather than fixed price levels, it operates reliably across any asset class on your charts."
        />

        {/* Clean Segmented Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
          {(Object.keys(marketData) as Array<keyof typeof marketData>).map((key) => {
            const isActive = activeMarket === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveMarket(key)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {marketData[key].name}
              </button>
            );
          })}
        </div>

        {/* Market Visual Display - Balanced Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-8">
            <MediaPlaceholder
              slotId={current.slotId}
              symbol={current.symbol}
              timeframe={current.timeframe}
              label={current.title}
              caption={`TradingView chart demonstration displaying ${current.title}`}
              aspectRatio="16:9"
            />
          </div>

          <div className="lg:col-span-4 space-y-5">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-400">
              Active Demonstration
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
              {current.title}
            </h3>
            <p className="text-slate-300 text-[15px] sm:text-[16px] leading-[1.65]">
              {current.description}
            </p>
            <div className="pt-4 border-t border-slate-800">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1.5 font-mono">
                Supported Instruments
              </span>
              <div className="text-sm font-mono text-slate-200">
                {current.instruments}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
