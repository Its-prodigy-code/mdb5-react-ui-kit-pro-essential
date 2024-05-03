import clsx from 'clsx';
import React from 'react';
import type { DatatablePaginationProps } from './types';

const MDBDatatablePagination: React.FC<DatatablePaginationProps> = React.forwardRef<
  HTMLAllCollection,
  DatatablePaginationProps
>(({ className, tag: Tag, children, ...props }, ref) => {
  const classes = clsx('datatable-pagination', className);

  return (
    <Tag className={classes} ref={ref} {...props}>
      {children}
    </Tag>
  );
});

MDBDatatablePagination.defaultProps = { tag: 'div' };

export default MDBDatatablePagination;
