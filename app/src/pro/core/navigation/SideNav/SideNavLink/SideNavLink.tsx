import clsx from 'clsx';
import React, { useState, useEffect, useContext } from 'react';
import type { SideNavLinkProps } from './types';
import { SideNavContext } from '../context';
import MDBIcon from '../../../../../free/core/styles/Icon/Icon';
import MDBRipple from '../../../../../free/core/methods/Ripple/Ripple';

const MDBSideNavLink: React.FC<SideNavLinkProps> = React.forwardRef<HTMLAnchorElement, SideNavLinkProps>(
  ({ className, icon, iconClasses, iconAngle, shouldBeExpanded, children, active, ...props }, ref) => {
    const { color } = useContext(SideNavContext);

    const classes = clsx('sidenav-link', active && 'active', className);
    const iconClass = clsx('rotate-icon', iconClasses);

    const [angle, setAngle] = useState(shouldBeExpanded ? iconAngle : 0);

    useEffect(() => {
      setAngle(shouldBeExpanded ? iconAngle : 0);
    }, [shouldBeExpanded, iconAngle]);

    return (
      <MDBRipple
        tag='a'
        onKeyDown={(e: any) => {
          if (e.key === 'Enter') {
            e.target.click();
          }
        }}
        tabIndex={1}
        rippleColor={color}
        className={classes}
        ref={ref}
        {...props}
      >
        {children}
        {icon && <MDBIcon icon={icon} style={{ transform: `rotate(${angle}deg)` }} className={iconClass} />}
      </MDBRipple>
    );
  }
);

MDBSideNavLink.defaultProps = { iconAngle: 180 };

export default MDBSideNavLink;
