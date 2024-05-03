import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import type { SideNavLinkProps } from './types';
import MDBIcon from '../../../../../free/core/styles/Icon/Icon';

const MDBSideNavLink: React.FC<SideNavLinkProps> = React.forwardRef<HTMLAnchorElement, SideNavLinkProps>(
  ({ className, icon, iconClasses, iconAngle, shouldBeExpanded, children, active, ...props }, ref) => {
    const classes = clsx('sidenav-link', active && 'active', className);
    const iconClass = clsx('rotate-icon', iconClasses);

    const [angle, setAngle] = useState(shouldBeExpanded ? iconAngle : 0);

    useEffect(() => {
      setAngle(shouldBeExpanded ? iconAngle : 0);
    }, [shouldBeExpanded, iconAngle]);

    return (
      <a className={classes} ref={ref} {...props}>
        {children}
        {icon && <MDBIcon icon={icon} style={{ transform: `rotate(${angle}deg)` }} className={iconClass} />}
      </a>
    );
  }
);

MDBSideNavLink.defaultProps = { iconAngle: 180 };

export default MDBSideNavLink;
