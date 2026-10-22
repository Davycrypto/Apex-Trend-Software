/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MediaSlot } from '../types/index.ts';

/**
 * Media Registry for Apex Trend Signal
 * Every image, video, and chart slot has a unique, deterministic ID.
 * To update an asset in later phases, simply replace the currentUrl property for that ID.
 */
export const MEDIA_REGISTRY: Record<string, MediaSlot> = {
  'hero-product-chart': {
    id: 'hero-product-chart',
    type: 'image',
    title: 'Hero Indicator Interface Preview',
    description: 'High-resolution TradingView chart view showcasing Apex Trend Signal on a primary market.',
    aspectRatio: '16:9',
    recommendedWidth: 1920,
    recommendedHeight: 1080,
    fallbackAlt: 'Apex Trend Signal custom indicator on TradingView multi-timeframe chart',
    category: 'hero',
    status: 'placeholder',
  },
  'market-example-gbpusd': {
    id: 'market-example-gbpusd',
    type: 'image',
    title: 'GBP/USD Market Signal Example',
    description: 'Chart screenshot illustrating buy and sell signal triggers on the GBP/USD currency pair.',
    aspectRatio: '16:9',
    recommendedWidth: 1600,
    recommendedHeight: 900,
    fallbackAlt: 'Apex Trend Signal GBP/USD trend detection example',
    category: 'market_example',
    status: 'placeholder',
  },
  'market-example-usdjpy': {
    id: 'market-example-usdjpy',
    type: 'image',
    title: 'USD/JPY Market Signal Example',
    description: 'Chart screenshot demonstrating trend confirmation and exit levels on USD/JPY.',
    aspectRatio: '16:9',
    recommendedWidth: 1600,
    recommendedHeight: 900,
    fallbackAlt: 'Apex Trend Signal USD/JPY trend detection example',
    category: 'market_example',
    status: 'placeholder',
  },
  'feature-dashboard-overview': {
    id: 'feature-dashboard-overview',
    type: 'image',
    title: 'Multi-Indicator Technical Dashboard',
    description: 'Visual breakdown of ATR, moving averages, and volatility filter components.',
    aspectRatio: '16:9',
    recommendedWidth: 1600,
    recommendedHeight: 900,
    fallbackAlt: 'Apex Trend Signal technical multi-confirmation dashboard',
    category: 'feature',
    status: 'placeholder',
  },
  'feature-mobile-tradingview': {
    id: 'feature-mobile-tradingview',
    type: 'image',
    title: 'TradingView Mobile App Interface',
    description: 'Mockup showing real-time mobile push notifications and chart display on smartphone.',
    aspectRatio: '4:3',
    recommendedWidth: 1200,
    recommendedHeight: 900,
    fallbackAlt: 'TradingView mobile alerts with Apex Trend Signal',
    category: 'feature',
    status: 'placeholder',
  },
  'product-demo-video': {
    id: 'product-demo-video',
    type: 'video',
    title: 'Apex Trend Signal Live Demonstration Video',
    description: 'Video walkthrough demonstrating indicator execution, setup, and trend interpretation.',
    aspectRatio: '16:9',
    recommendedWidth: 1920,
    recommendedHeight: 1080,
    fallbackAlt: 'Video demonstration of Apex Trend Signal',
    category: 'video',
    status: 'placeholder',
  },
  'installation-tutorial-video': {
    id: 'installation-tutorial-video',
    type: 'video',
    title: 'TradingView Step-by-Step Installation Tutorial',
    description: 'Guided walkthrough showing how to add Apex Trend Signal to any TradingView account.',
    aspectRatio: '16:9',
    recommendedWidth: 1920,
    recommendedHeight: 1080,
    fallbackAlt: 'Installation walkthrough video for TradingView',
    category: 'education',
    status: 'placeholder',
  },
  'customer-proof-gallery': {
    id: 'customer-proof-gallery',
    type: 'slideshow',
    title: 'Verified Member Results & Trade Log Gallery',
    description: 'Carousel of user trade logs and verified community chart setups.',
    aspectRatio: '16:9',
    recommendedWidth: 1600,
    recommendedHeight: 900,
    fallbackAlt: 'Member trade executions and chart analyses',
    category: 'proof',
    status: 'placeholder',
  },
  'education-course-preview': {
    id: 'education-course-preview',
    type: 'image',
    title: 'Beginner Trader Education Hub Preview',
    description: 'Overview display of the included structured beginner trading course modules.',
    aspectRatio: '16:9',
    recommendedWidth: 1600,
    recommendedHeight: 900,
    fallbackAlt: 'Comprehensive beginner trading course materials',
    category: 'education',
    status: 'placeholder',
  },
};

export function getMediaSlot(id: string): MediaSlot | undefined {
  return MEDIA_REGISTRY[id];
}

export function getAllMediaSlots(): MediaSlot[] {
  return Object.values(MEDIA_REGISTRY);
}
