import React from 'react';

type InfiniteScrollProps = {
  tag?: React.ComponentProps<any>;
  windowParent?: boolean;
  infiniteDirection?: string;
  [rest: string]: any;
};

export { InfiniteScrollProps };
