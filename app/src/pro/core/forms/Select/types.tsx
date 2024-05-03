import React from 'react';

type SelectProps = {
  className?: string;
  tag?: React.ComponentProps<any>;
  wrapperTag?: React.ComponentProps<any>;
  clearBtn?: boolean;
  searchLabel?: string;
  noResultLabel?: string;
  [rest: string]: any;
};

export { SelectProps };
