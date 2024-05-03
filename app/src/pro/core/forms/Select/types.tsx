import React from 'react';

type SelectProps = {
  className?: string;
  tag?: React.ComponentProps<any>;
  wrapperTag?: React.ComponentProps<any>;
  clearBtn?: boolean;
  searchLabel?: string;
  noResultLabel?: string;
  size?: 'default' | 'lg' | 'sm';
  validation?: boolean;
  validFeedback?: string;
  invalidFeedback?: string;
  optionSelected?: string;
  optionsSelectedLabel?: string;
  inputClassName?: string;
  searchAriaLabel?: string;
  [rest: string]: any;
};

export { SelectProps };
