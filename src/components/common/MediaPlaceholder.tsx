/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AspectRatio, MediaSlotType } from '../../types/index.ts';
import { getMediaSlot } from '../../constants/mediaRegistry.ts';
import { Play, TrendingUp, Maximize2 } from 'lucide-react';

interface MediaPlaceholderProps {
  slotId?: string;
  type?: MediaSlotType;
  label?: string;
  symbol?: string;
  timeframe?: string;
  caption?: string;
  aspectRatio?: AspectRatio;
  mediaUrl?: string;
  altText?: string;
  className?: string;
}

export const MediaPlaceholder: React.FC<MediaPlaceholderProps> = ({
  slotId,
  type = 'image',
  label,
  symbol = 'GBP/USD',
  timeframe = '1H',
  caption,
  aspectRatio = '16:9',
  mediaUrl,
  altText,
  className = '',
}) => {
  const registeredSlot = slotId ? getMediaSlot(slotId) : undefined;

  const resolvedType = registeredSlot?.type || type;
  const resolvedLabel = label || registeredSlot?.title || 'Apex Trend Signal';
  const resolvedRatio = registeredSlot?.aspectRatio || aspectRatio;
  const resolvedUrl = mediaUrl || registeredSlot?.currentUrl;
  const resolvedAlt = altText || registeredSlot?.fallbackAlt || resolvedLabel;

  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(Boolean(resolvedUrl));

  const ratioClasses: Record<AspectRatio, string> = {
    '16:9': 'aspect-[16/9] min-h-[300px] sm:min-h-[420px]',
    '4:3': 'aspect-[4/3] min-h-[280px] sm:min-h-[380px]',
    '1:1': 'aspect-square',
    '9:16': 'aspect-[9/16]',
    '21:9': 'aspect-[21/9] min-h-[280px]',
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Outer Browser/TradingView Desktop Enclosure */}
      <div className="w-full rounded-2xl overflow-hidden border border-slate-800 bg-[#0c101a] shadow-2xl shadow-slate-950/40">
        {/* TradingView-Style Window Header */}
        <div className="h-11 px-4 sm:px-5 bg-[#090d16] border-b border-slate-800/90 flex items-center justify-between text-xs text-slate-300 font-sans select-none">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            </div>
            <div className="h-4 w-px bg-slate-800" />
            <div className="flex items-center gap-2 font-mono text-[13px] font-semibold text-white">
              <span>{symbol}</span>
              <span className="text-[11px] px-1.5 py-0.5 rounded bg-slate-800 text-blue-400 font-sans font-medium">
                {timeframe}
              </span>
            </div>
            <span className="hidden sm:inline-block text-slate-500 font-mono text-xs">
              TradingView
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-xs font-mono">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-blue-400 font-semibold font-sans">Apex Trend Indicator</span>
              <span className="text-slate-600">·</span>
              <span className="text-emerald-400">Bullish Trend Active</span>
            </div>
            <Maximize2 className="w-3.5 h-3.5 text-slate-500" />
          </div>
        </div>

        {/* Viewport Area */}
        <div className={`relative w-full overflow-hidden ${ratioClasses[resolvedRatio]}`}>
          {resolvedUrl && !hasError ? (
            resolvedType === 'video' ? (
              <video
                src={resolvedUrl}
                controls
                className="w-full h-full object-cover"
                onLoadedData={() => setIsLoading(false)}
                onError={() => {
                  setHasError(true);
                  setIsLoading(false);
                }}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="relative w-full h-full">
                {isLoading && (
                  <div className="absolute inset-0 bg-[#0c101a] animate-pulse flex items-center justify-center text-xs text-slate-500 font-mono">
                    Loading chart visual...
                  </div>
                )}
                <img
                  src={resolvedUrl}
                  alt={resolvedAlt}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-contain bg-[#0c101a] transition-opacity duration-300 ${
                    isLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                  onLoad={() => setIsLoading(false)}
                  onError={() => {
                    setHasError(true);
                    setIsLoading(false);
                  }}
                />
              </div>
            )
          ) : resolvedType === 'video' ? (
            /* Pristine Video Showcase Frame */
            <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#0c101a] to-[#080b12] p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-2xl shadow-blue-600/40 transition-transform duration-200 hover:scale-105 cursor-pointer mb-5">
                <Play className="w-8 h-8 fill-white ml-1" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2 tracking-tight">
                Watch Apex Trend Signal Demonstration
              </h4>
              <p className="text-sm text-slate-400 max-w-md leading-relaxed">
                See live indicator installation, alert configuration, and real-time trend confirmation on TradingView.
              </p>
            </div>
          ) : (
            /* High-Fidelity Realistic TradingView Chart Frame */
            <div className="relative w-full h-full bg-[#0c101a] flex flex-col justify-between select-none">
              {/* Background Chart Grid */}
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(to right, #94a3b8 1px, transparent 1px),
                                    linear-gradient(to bottom, #94a3b8 1px, transparent 1px)`,
                  backgroundSize: '48px 48px',
                }}
              />

              {/* Price Axis on Right */}
              <div className="absolute right-0 top-0 bottom-0 w-16 border-l border-slate-800/80 bg-[#090d16]/70 flex flex-col justify-between py-6 px-2 text-[10px] font-mono text-slate-500 text-right z-10 pointer-events-none">
                <span>1.3120</span>
                <span>1.3080</span>
                <span className="text-blue-400 font-semibold bg-blue-950/60 py-0.5 rounded px-1">1.3045</span>
                <span>1.3010</span>
                <span>1.2960</span>
                <span>1.2920</span>
              </div>

              {/* Main SVG Candlesticks & Indicators */}
              <div className="flex-1 relative w-full h-full pr-16">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 900 420"
                  fill="none"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="cloudGreen" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563EB" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Guideline Overlays */}
                  <line x1="0" y1="100" x2="900" y2="100" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="200" x2="900" y2="200" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="300" x2="900" y2="300" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />

                  {/* Volatility Trend Cloud */}
                  <path
                    d="M 40 310 Q 180 290, 280 230 T 480 170 T 680 110 T 860 80 L 860 360 L 40 360 Z"
                    fill="url(#cloudGreen)"
                  />

                  {/* Primary Trend Wave Ribbon */}
                  <path
                    d="M 40 300 Q 180 280, 280 220 T 480 160 T 680 100 T 860 70"
                    stroke="#2563EB"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 40 320 Q 180 300, 280 240 T 480 180 T 680 120 T 860 90"
                    stroke="#38BDF8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeDasharray="6 3"
                    opacity="0.8"
                  />

                  {/* Candlestick Series (Sample Realistic Flow) */}
                  {/* Candle 1 */}
                  <line x1="70" y1="280" x2="70" y2="340" stroke="#64748b" strokeWidth="1" />
                  <rect x="66" y="295" width="8" height="30" fill="#ef4444" rx="1" />
                  {/* Candle 2 */}
                  <line x1="120" y1="270" x2="120" y2="325" stroke="#64748b" strokeWidth="1" />
                  <rect x="116" y="280" width="8" height="35" fill="#22c55e" rx="1" />
                  {/* Candle 3 */}
                  <line x1="170" y1="260" x2="170" y2="310" stroke="#64748b" strokeWidth="1" />
                  <rect x="166" y="270" width="8" height="25" fill="#ef4444" rx="1" />

                  {/* Candle 4 - Breakout Signal */}
                  <line x1="220" y1="230" x2="220" y2="295" stroke="#64748b" strokeWidth="1" />
                  <rect x="216" y="240" width="8" height="45" fill="#22c55e" rx="1" />

                  {/* Apex Buy Signal Badge Marker */}
                  <g transform="translate(220, 320)">
                    <rect x="-35" y="-12" width="70" height="24" rx="5" fill="#1D4ED8" />
                    <text x="0" y="4" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
                      ▲ BUY SIGNAL
                    </text>
                  </g>

                  {/* Candle 5 */}
                  <line x1="280" y1="200" x2="280" y2="260" stroke="#64748b" strokeWidth="1" />
                  <rect x="276" y="210" width="8" height="38" fill="#22c55e" rx="1" />
                  {/* Candle 6 */}
                  <line x1="330" y1="190" x2="330" y2="245" stroke="#64748b" strokeWidth="1" />
                  <rect x="326" y="200" width="8" height="30" fill="#22c55e" rx="1" />
                  {/* Candle 7 */}
                  <line x1="380" y1="180" x2="380" y2="235" stroke="#64748b" strokeWidth="1" />
                  <rect x="376" y="195" width="8" height="25" fill="#ef4444" rx="1" />
                  {/* Candle 8 */}
                  <line x1="430" y1="150" x2="430" y2="215" stroke="#64748b" strokeWidth="1" />
                  <rect x="426" y="160" width="8" height="42" fill="#22c55e" rx="1" />
                  {/* Candle 9 */}
                  <line x1="480" y1="140" x2="480" y2="195" stroke="#64748b" strokeWidth="1" />
                  <rect x="476" y="150" width="8" height="35" fill="#22c55e" rx="1" />
                  {/* Candle 10 */}
                  <line x1="540" y1="130" x2="540" y2="180" stroke="#64748b" strokeWidth="1" />
                  <rect x="536" y="140" width="8" height="25" fill="#ef4444" rx="1" />
                  {/* Candle 11 */}
                  <line x1="600" y1="100" x2="600" y2="160" stroke="#64748b" strokeWidth="1" />
                  <rect x="596" y="110" width="8" height="40" fill="#22c55e" rx="1" />
                  {/* Candle 12 */}
                  <line x1="660" y1="85" x2="660" y2="140" stroke="#64748b" strokeWidth="1" />
                  <rect x="656" y="95" width="8" height="35" fill="#22c55e" rx="1" />
                  {/* Candle 13 */}
                  <line x1="720" y1="75" x2="720" y2="130" stroke="#64748b" strokeWidth="1" />
                  <rect x="716" y="85" width="8" height="32" fill="#22c55e" rx="1" />
                  {/* Candle 14 */}
                  <line x1="780" y1="65" x2="780" y2="120" stroke="#64748b" strokeWidth="1" />
                  <rect x="776" y="75" width="8" height="30" fill="#22c55e" rx="1" />
                </svg>
              </div>

              {/* Bottom Trading Toolbar Status */}
              <div className="h-9 px-4 sm:px-5 bg-[#090d16] border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-blue-400">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>ATR Multi-Filter Active</span>
                  </span>
                  <span className="hidden sm:inline-block text-slate-600">|</span>
                  <span className="hidden sm:inline-block text-slate-400">No Re-Painting</span>
                </div>
                <div className="text-slate-500 text-[10px]">
                  Real-Time TradingView Engine
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {caption && (
        <p className="mt-3 text-xs sm:text-[13px] text-center text-slate-500 font-sans leading-normal">
          {caption}
        </p>
      )}
    </div>
  );
};
