import clsx from 'clsx';
import React from 'react';
import type { AutocompleteDropdownProps } from './types';

const MDBAutocompleteDropdown: React.FC<AutocompleteDropdownProps> = React.forwardRef<
  HTMLAllCollection,
  AutocompleteDropdownProps
>(({ className, show, tag: Tag, children, ...props }, ref) => {
  const classes = clsx('autocomplete-dropdown', show && 'open', className);

  return (
    <Tag className={classes} ref={ref} {...props}>
      {children}
    </Tag>
  );
});

MDBAutocompleteDropdown.defaultProps = { tag: 'div' };

export default MDBAutocompleteDropdown;
