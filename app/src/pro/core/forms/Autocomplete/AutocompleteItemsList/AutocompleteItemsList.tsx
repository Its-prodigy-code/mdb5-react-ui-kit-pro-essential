import clsx from 'clsx';
import React from 'react';
import type { AutocompleteItemsListProps } from './types';

const MDBAutocompleteItemsList: React.FC<AutocompleteItemsListProps> = React.forwardRef<
  HTMLAllCollection,
  AutocompleteItemsListProps
>(({ className, tag: Tag, children, ...props }, ref) => {
  const classes = clsx('autocomplete-items-list', className);

  return (
    <Tag className={classes} ref={ref} {...props}>
      {children}
    </Tag>
  );
});

MDBAutocompleteItemsList.defaultProps = { tag: 'ul' };

export default MDBAutocompleteItemsList;
