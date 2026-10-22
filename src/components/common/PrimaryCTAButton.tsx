/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface PrimaryCTAButtonProps {
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark' | 'accent' | 'white' | 'outline';
  className?: string;
  fullWidth?: boolean;
}

export const PrimaryCTAButton: React.FC<PrimaryCTAButtonProps> = ({
  children = 'Get Apex Trend Signal',
  href = '#pricing',
  onClick,
  size = 'md',
  variant = 'dark',
  className = '',
  fullWidth = false,
}) => {
  const sizeStyles = {
    sm: 'px-5 py-2.5 text-xs font-semibold min-h-[42px]',
    md: 'px-7 py-3.5 text-sm sm:text-[15px] font-semibold min-h-[48px]',
    lg: 'px-8 sm:px-9 py-4 text-base sm:text-[17px] font-semibold min-h-[54px]',
  };

  const variantStyles = {
    dark:
      'bg-slate-950 hover:bg-slate-900 text-white shadow-md shadow-slate-950/10 active:translate-y-px',
    accent:
      'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 active:translate-y-px',
    white:
      'bg-white hover:bg-slate-100 text-slate-950 shadow-md active:translate-y-px border border-slate-200',
    outline:
      'bg-transparent hover:bg-slate-100 text-slate-900 border border-slate-300 active:translate-y-px',
  };

  const baseStyles =
    'inline-flex items-center justify-center rounded-xl transition-all duration-150 font-sans tracking-[-0.01em] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 whitespace-nowrap shrink-0 text-center select-none';

  const widthStyle = fullWidth ? 'w-full' : 'w-auto';
  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        onClick={(e) => {
          if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
            }
          }
          if (onClick) onClick();
        }}
        className={combinedClass}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combinedClass}>
      {children}
    </button>
  );
};
