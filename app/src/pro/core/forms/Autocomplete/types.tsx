import React from 'react';

type AutocompleteProps = {
  className?: string;
  customContent?: any;
  dataFilter: any;
  displayValue?: any;
  inputValue?: string;
  itemContent?: any;
  noResults?: string;
  setInputValue?: React.SetStateAction<any>;
  threshold?: number;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
};

export { AutocompleteProps };
