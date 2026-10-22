/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FAQItem, MVPSectionItem, TestimonialItem } from '../types/index.ts';

/**
 * Ordered content inventory extracted from https://easytrendsignal.systeme.io/ets
 * Analyzed during Phase 1 for structured mapping into Apex Trend Signal development phases.
 */
export const MVP_CONTENT_SECTIONS: MVPSectionItem[] = [
  {
    id: 'sec-01-hero-opening',
    originalIndex: 1,
    originalTitle: 'Turn Your Smartphone into a Profit Machine / ETS Trading Software Scans the Market For You',
    summary: 'Opening proposition stating mobile-friendly trading signals built on technical tools with zero experience required.',
    phaseAssigned: 2,
    verificationStatus: 'unconfirmed_verification_needed',
    notes: 'Rewrite to eliminate hype ("Profit Machine") and replace with clear, professional trend analysis proposition.',
  },
  {
    id: 'sec-02-core-deliverables',
    originalIndex: 2,
    originalTitle: 'What You Get with ETS (4 key deliverables)',
    summary: 'Bullet list: Software installed directly on TradingView, video tutorials, real-time buy/sell alerts, mobile-friendly access, priority support.',
    phaseAssigned: 2,
    verificationStatus: 'approved',
    notes: 'Preserve key product deliverable pillars: TradingView indicator script, setup guides, signal alerts, mobile/desktop compatibility.',
  },
  {
    id: 'sec-03-market-examples-stats',
    originalIndex: 3,
    originalTitle: 'Trade Smarter, Profit Faster / Market Examples (GBPUSD, USDJPY) & Stat Counters',
    summary: 'Chart screenshots for GBPUSD and USDJPY paired with stat counters: "5000+ Total Users" and "8.5/10 Winning Accuracy".',
    phaseAssigned: 2,
    verificationStatus: 'unconfirmed_verification_needed',
    notes: 'Statistical claims (5000+ users, 8.5/10 accuracy) are unverified. Keep as editable variables and mark for explicit client verification.',
  },
  {
    id: 'sec-04-social-proof-swipe',
    originalIndex: 4,
    originalTitle: 'Real Traders. Real Profits / Members Are Winning Daily',
    summary: 'Swipeable image gallery containing WhatsApp chat screenshots and Telegram account growth screenshots.',
    phaseAssigned: 3,
    verificationStatus: 'unconfirmed_verification_needed',
    notes: 'Screenshots from third-party chat apps require verification. Use structured placeholder gallery in Phase 1.',
  },
  {
    id: 'sec-05-pain-points-empathy',
    originalIndex: 5,
    originalTitle: 'Can You Relate? (The Traditional 9-5 vs Financial Struggles)',
    summary: 'Four relatable frustrations: Years in school stuck in low pay, 40-year daily grind, rising cost of living, inadequate retirement.',
    phaseAssigned: 3,
    verificationStatus: 'approved',
    notes: 'Preserve the problem-led empathy narrative, but reframe from generic "escape the matrix" tropes into realistic financial empowerment and time-tested market discipline.',
  },
  {
    id: 'sec-06-technical-mechanism',
    originalIndex: 6,
    originalTitle: 'More About Easy Trend Signal / How It Works',
    summary: 'Technical explanation of multi-indicator combination: ATR (Average True Range), Moving Averages, RSI, Stochastic, trend filters, volatility measures.',
    phaseAssigned: 3,
    verificationStatus: 'approved',
    notes: 'Key technical substance: Explain multi-confirmation filtering logic that separates real momentum from market noise.',
  },
  {
    id: 'sec-07-assistant-concept',
    originalIndex: 7,
    originalTitle: 'A Powerful Trading Assistant for All Levels',
    summary: 'Explains how the indicator functions like an automated assistant showing directional bias and entries on free TradingView charts.',
    phaseAssigned: 3,
    verificationStatus: 'approved',
    notes: 'Highlight TradingView integration simplicity—works on standard free TradingView accounts.',
  },
  {
    id: 'sec-08-education-hub',
    originalIndex: 8,
    originalTitle: 'Are You New to Trading? / 100+ Lessons Beginner Course Included',
    summary: 'Explains the bundled beginner-friendly course, video guides, books, and step-by-step examples.',
    phaseAssigned: 4,
    verificationStatus: 'unconfirmed_verification_needed',
    notes: 'Confirm whether Apex Trend Signal will include the full 100+ lesson course or indicator-specific onboarding tutorials.',
  },
  {
    id: 'sec-09-lifestyle-benefits',
    originalIndex: 9,
    originalTitle: 'Imagine Waking Up Every Morning Knowing That... (6 lifestyle points)',
    summary: 'Points: 24/7 market opportunities, control over schedule, independence from a boss, portable business anywhere, multiple income streams, building for family.',
    phaseAssigned: 4,
    verificationStatus: 'approved',
    notes: 'Frame realistically around flexibility and process rather than guaranteed passive income.',
  },
  {
    id: 'sec-10-written-testimonials',
    originalIndex: 10,
    originalTitle: 'Participants Can\'t Stop Talking About ETS (4 Detailed Case Studies)',
    summary: 'Named reviews: Mark Roberts (USA), Mike Lee (USA), Javier M. (Spain), Isaac Adeleke (Nigeria).',
    phaseAssigned: 4,
    verificationStatus: 'unconfirmed_verification_needed',
    notes: 'Performance percentage returns (+200%, doubled capital, +75%, 15% monthly) must be marked unverified and accompanied by risk disclosures.',
  },
  {
    id: 'sec-11-decision-fork-cta',
    originalIndex: 11,
    originalTitle: 'Which Path Will You Choose? / Get Yours TODAY!',
    summary: 'Two-choice closing argument urging action over stagnation with immediate purchase button.',
    phaseAssigned: 5,
    verificationStatus: 'approved',
    notes: 'Classic direct-response fork in the road; cleanly formatted.',
  },
  {
    id: 'sec-12-faq-accordion',
    originalIndex: 12,
    originalTitle: 'Frequently Asked Questions (14 Q&As)',
    summary: '14 comprehensive FAQs covering brokers, forex basics, profit expectations, accuracy, beginner suitability, lifetime access, support, mobile use, markets, account sizing, and technical differentiation.',
    phaseAssigned: 4,
    verificationStatus: 'approved',
    notes: 'Retain the 14 core questions while elevating tone to mature, regulatory-compliant language.',
  },
  {
    id: 'sec-13-pricing-checkout',
    originalIndex: 13,
    originalTitle: 'Reserve Your Spot / Final Checkout',
    summary: 'Lifetime license offer with one-time payment, reserve button linking to checkout (original link: selar.com/easytrendsignal).',
    phaseAssigned: 5,
    verificationStatus: 'unconfirmed_verification_needed',
    notes: 'Pricing, discount amounts, and checkout URL must remain configurable until confirmed by client.',
  },
  {
    id: 'sec-14-footer-compliance',
    originalIndex: 14,
    originalTitle: 'Footer & Navigation Mirror',
    summary: 'Brand title, About, Services, Contact links, spam disclaimer.',
    phaseAssigned: 1,
    verificationStatus: 'approved',
    notes: 'Elevate with mandatory Trading Risk Disclosure and clean semantic navigation.',
  },
];

/**
 * Full 14 FAQs extracted from reference MVP
 */
export const EXTRACTED_FAQS: FAQItem[] = [
  {
    id: 'faq-01',
    question: 'What is Apex Trend Signal?',
    answer: 'Apex Trend Signal is a custom-built TradingView indicator designed to help traders identify high-probability trend opportunities across forex, crypto, indices, and commodities. It synthesizes multiple technical filters—including ATR volatility, Moving Averages, and momentum algorithms—into clear visual trend signals.',
    verificationStatus: 'approved',
  },
  {
    id: 'faq-02',
    question: 'Which broker is recommended to trade using this indicator?',
    answer: 'You can use any regulated broker that provides competitive spreads and integrates with or executes alongside your TradingView charts. We provide detailed setup guides to assist with connecting your broker.',
    verificationStatus: 'approved',
  },
  {
    id: 'faq-03',
    question: 'What financial markets are supported?',
    answer: 'Because Apex Trend Signal runs natively on TradingView, it functions on any market accessible in TradingView—including Forex pairs, major stock indices, commodities, and digital assets.',
    verificationStatus: 'approved',
  },
  {
    id: 'faq-04',
    question: 'How much money can I make using Apex Trend Signal?',
    answer: 'Individual results depend on your trading capital, risk management discipline, and market conditions. We do not make guaranteed profit claims. The indicator is a technical decision-support tool engineered to help you execute structured, higher-probability setups.',
    verificationStatus: 'approved',
  },
  {
    id: 'faq-05',
    question: 'What is the accuracy of the indicator?',
    answer: 'The indicator uses multi-confirmation filtering logic to minimize false breakouts and market noise. However, no trading system is 100% predictive. Strict risk-to-reward ratios and capital preservation rules should always accompany its use.',
    verificationStatus: 'unconfirmed_verification_needed',
  },
  {
    id: 'faq-06',
    question: 'I have no previous trading experience. Can I still use it?',
    answer: 'Yes. The indicator visually plots clear directional cues directly onto your charts, removing complex indicator overload. In addition, step-by-step video tutorials guide you through setup and reading signals.',
    verificationStatus: 'approved',
  },
  {
    id: 'faq-07',
    question: 'Is there training and ongoing documentation after purchase?',
    answer: 'Yes. You receive access to setup guides, video walkthroughs, and indicator documentation detailing how to optimize timeframes and interpret multi-confirmation signals.',
    verificationStatus: 'approved',
  },
  {
    id: 'faq-08',
    question: 'How long do I have access to the software?',
    answer: 'Access terms are configured as lifetime access upon purchase, without recurring monthly subscription fees unless otherwise stated.',
    verificationStatus: 'unconfirmed_verification_needed',
  },
  {
    id: 'faq-09',
    question: 'Is customer support provided for installation?',
    answer: 'Yes, technical support is available to guide you through activating the script on your TradingView account and resolving any display or alert configuration questions.',
    verificationStatus: 'approved',
  },
  {
    id: 'faq-10',
    question: 'Can I use Apex Trend Signal on my mobile phone?',
    answer: 'Yes. Once added to your TradingView account, the indicator synchronizes across the TradingView web app, desktop app, and iOS/Android mobile apps with push alert capability.',
    verificationStatus: 'approved',
  },
  {
    id: 'faq-11',
    question: 'Does the indicator work on different timeframes?',
    answer: 'Yes. Apex Trend Signal is adaptable for scalping (M1/M5), intraday swing trading (M15/H1), and macro position trading (H4/D1).',
    verificationStatus: 'approved',
  },
  {
    id: 'faq-12',
    question: 'Do I need a large trading account to get started?',
    answer: 'No. You can start testing the indicator on a demo account or small live account using conservative position sizing (such as 1% risk per trade).',
    verificationStatus: 'approved',
  },
  {
    id: 'faq-13',
    question: 'Will I still need to analyze the market myself?',
    answer: 'Apex Trend Signal performs the heavy computational filtering and trend identification. While it provides clear entries and exits, maintaining sound risk management and awareness of major economic news releases remains essential.',
    verificationStatus: 'approved',
  },
  {
    id: 'faq-14',
    question: 'What makes Apex Trend Signal different from standard free indicators?',
    answer: 'Most single-line indicators (such as a basic Moving Average or single RSI) produce frequent whipsaws during consolidation. Apex Trend Signal combines volatility measures (ATR), trend direction, and volume momentum filters to validate price movements before signaling.',
    verificationStatus: 'approved',
  },
];

/**
 * 4 Original Testimonials with verification flags
 */
export const EXTRACTED_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-01',
    name: 'Mark Roberts',
    location: 'United States',
    quote: 'I’ve been using the indicator for six months. The multi-confirmation method gives me confidence to enter trades instead of second-guessing signals.',
    claimedReturn: 'Claimed ~200% return in original MVP copy',
    verificationStatus: 'unconfirmed_verification_needed',
  },
  {
    id: 'test-02',
    name: 'Mike Lee',
    location: 'United States',
    quote: 'As a beginner, charts were intimidating. The TradingView installation was intuitive, and the tutorials walked me through each step clearly.',
    claimedReturn: 'Claimed capital doubled in 2 months in original MVP copy',
    verificationStatus: 'unconfirmed_verification_needed',
  },
  {
    id: 'test-03',
    name: 'Javier M.',
    location: 'Spain',
    quote: 'Transitioned from manual strategies six weeks ago. The real-time alerts paired with the multi-timeframe dashboard let me capture high-probability moves.',
    claimedReturn: 'Claimed +75% account balance in original MVP copy',
    verificationStatus: 'unconfirmed_verification_needed',
  },
  {
    id: 'test-04',
    name: 'Isaac Adeleke',
    location: 'Nigeria',
    quote: 'I don’t need to monitor charts all day. Between the dashboard and clear alerts, I feel in control of my trading again.',
    claimedReturn: 'Claimed ~15% monthly in original MVP copy',
    verificationStatus: 'unconfirmed_verification_needed',
  },
];
