import React from 'react';

type TouchProps = {
  tag?: React.ComponentProps<any>;
  type?: 'swipe' | 'tap' | 'press' | 'pinch' | 'rotate' | 'pan';
  threshold?: number;
  allDirections?: boolean;
  pointers?: number;
  interval?: number;
  taps?: number;
  time?: number;
  [rest: string]: any;
};

export { TouchProps };
