/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
  titleAs?: 'h1' | 'h2' | 'h3';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
  titleAs: TitleTag = 'h2',
}) => {
  const alignmentClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const isDark = theme === 'dark';

  return (
    <div className={`max-w-[720px] mb-10 sm:mb-14 ${alignmentClasses} ${className}`}>
      {kicker && (
        <div
          className={`text-xs sm:text-[13px] font-semibold tracking-wider uppercase mb-3 ${
            isDark ? 'text-blue-400' : 'text-blue-600'
          }`}
        >
          {kicker}
        </div>
      )}
      <TitleTag
        className={`text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight leading-[1.2] [text-wrap:balance] ${
          isDark ? 'text-white' : 'text-slate-950'
        }`}
      >
        {title}
      </TitleTag>
      {subtitle && (
        <p
          className={`mt-3.5 text-base sm:text-[17px] leading-[1.65] max-w-[620px] ${
            align === 'center' ? 'mx-auto' : ''
          } ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
