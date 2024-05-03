import clsx from 'clsx';
import React from 'react';
import type { AutocompleteItemProps } from './types';

const MDBAutocompleteItem: React.FC<AutocompleteItemProps> = React.forwardRef<HTMLAllCollection, AutocompleteItemProps>(
  ({ className, activeItem, tag: Tag, children, ...props }, ref) => {
    const classes = clsx('autocomplete-item', activeItem && 'active', className);

    return (
      <Tag className={classes} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

MDBAutocompleteItem.defaultProps = { tag: 'li' };

export default MDBAutocompleteItem;
