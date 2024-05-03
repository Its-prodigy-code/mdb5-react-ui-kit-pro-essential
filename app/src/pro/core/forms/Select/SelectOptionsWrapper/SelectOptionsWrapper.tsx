import clsx from 'clsx';
import React from 'react';
import type { SelectOptionsWrapperProps } from './types';

const MDBSelectOptionsWrapper: React.FC<SelectOptionsWrapperProps> = React.forwardRef<
  HTMLElement,
  SelectOptionsWrapperProps
>(
  ({ className, tag: Tag, children, maxHeight, ...props }, ref): JSX.Element => {
    const classes = clsx('select-options-wrapper', className);

    return (
      <Tag className={classes} style={{ maxHeight }} {...props} ref={ref}>
        {children}
      </Tag>
    );
  }
);

MDBSelectOptionsWrapper.defaultProps = {
  tag: 'div',
};

export default MDBSelectOptionsWrapper;
