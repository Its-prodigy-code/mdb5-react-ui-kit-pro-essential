import clsx from 'clsx';
import React from 'react';
import type { SideNavCollapseProps } from './types';
import MDBCollapse from '../../../../../free/core/components/Collapse/Collapse';

const MDBSideNavCollapse: React.FC<SideNavCollapseProps> = React.forwardRef<HTMLUListElement, SideNavCollapseProps>(
  ({ className, children, ...props }, ref) => {
    const classes = clsx('sidenav-collapse', className);

    return (
      <MDBCollapse tag='ul' className={classes} ref={ref} {...props}>
        {children}
      </MDBCollapse>
    );
  }
);

export default MDBSideNavCollapse;
