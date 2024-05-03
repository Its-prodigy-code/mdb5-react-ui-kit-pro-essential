import React from 'react';

type LazyLoadingProps = {
  className?: string;
  video?: boolean;
  lazyOffset?: number;
  lazySrc?: string;
  lazyError?: string;
  lazyDelay?: number;
  lazyPlaceholder?: string;
  [rest: string]: any;
};

export { LazyLoadingProps };
