import React from 'react';

type SelectOptionProps = {
  className?: string;
  tag?: React.ComponentProps<any>;
  height?: number | string;
  disabled?: boolean;
  [rest: string]: any;
};

export { SelectOptionProps };
