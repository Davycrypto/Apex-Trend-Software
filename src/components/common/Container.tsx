/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide' | 'full';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'default',
}) => {
  const maxWidths = {
    narrow: 'max-w-[820px]',
    default: 'max-w-[1160px]',
    wide: 'max-w-[1300px]',
    full: 'max-w-none',
  };

  return (
    <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${maxWidths[size]} ${className}`}>
      {children}
    </div>
  );
};
