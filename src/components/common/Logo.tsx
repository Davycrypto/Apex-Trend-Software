/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  /**
   * Theme context of the parent container ('light' for white surfaces, 'dark' for dark surfaces).
   */
  theme?: 'light' | 'dark';
  className?: string;
  /**
   * Responsive size classes for width and height.
   * Target: Desktop 150–180px wide, Mobile 120–150px wide.
   */
  sizeClass?: string;
  /**
   * Logo height in pixels or Tailwind classes for backwards compatibility.
   */
  heightClass?: string;
  /**
   * Whether to wrap in a clickable home link. Defaults to true.
   */
  asLink?: boolean;
}

/**
 * Official Apex Trend Signal Logo Asset
 * Location: /assets/aistudio/Apex_Trend_Signal_Logo_610e97c9.png
 * Proportions: 1774 x 887 (2:1 aspect ratio)
 */
export const LOGO_ASSET_PATH = '/assets/aistudio/Apex_Trend_Signal_Logo_610e97c9.png';

export const Logo: React.FC<LogoProps> = ({
  theme = 'light',
  className = '',
  sizeClass = 'w-[135px] sm:w-[165px] h-auto object-contain',
  heightClass,
  asLink = true,
}) => {
  const isDark = theme === 'dark';
  const effectiveSize = heightClass ? `${heightClass} w-auto object-contain` : sizeClass;

  const imageElement = (
    <div
      className={`inline-flex items-center transition-opacity hover:opacity-95 ${
        isDark ? 'bg-white px-3 py-1.5 rounded-lg shadow-sm' : ''
      } ${className}`}
    >
      <img
        src={LOGO_ASSET_PATH}
        alt="Apex Trend Signal"
        className={`${effectiveSize} select-none`}
        loading="eager"
        decoding="async"
      />
    </div>
  );

  if (asLink) {
    return (
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg shrink-0"
        aria-label="Apex Trend Signal – Home"
      >
        {imageElement}
      </a>
    );
  }

  return imageElement;
};
