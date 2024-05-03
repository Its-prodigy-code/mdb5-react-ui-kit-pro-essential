import clsx from 'clsx';
import React from 'react';
import type { DatatableInnerProps } from './types';
import MDBScrollbar from '../../../methods/PerfectScrollbar/PerfectScrollbar';

const MDBDatatableInner: React.FC<DatatableInnerProps> = React.forwardRef<HTMLAllCollection, DatatableInnerProps>(
  ({ className, maxWidth, maxHeight, children, ...props }, ref) => {
    const classes = clsx('datatable-inner', 'table-responsive', 'ps', className);

    return (
      <MDBScrollbar
        style={{ overflow: 'auto', position: 'relative', width: maxWidth, height: maxHeight }}
        className={classes}
        ref={ref}
        {...props}
      >
        {children}
      </MDBScrollbar>
    );
  }
);

MDBDatatableInner.defaultProps = { tag: 'div' };

export default MDBDatatableInner;
