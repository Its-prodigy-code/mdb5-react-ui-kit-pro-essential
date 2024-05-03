import clsx from 'clsx';
import React, { useState } from 'react';
import type { SideNavLinkProps } from './types';
import MDBIcon from '../../../../../free/core/styles/Icon/Icon';

const MDBSideNavLink: React.FC<SideNavLinkProps> = React.forwardRef<HTMLAnchorElement, SideNavLinkProps>(
  ({ className, icon, iconClasses, iconAngle, onClick, children, ...props }, ref) => {
    const classes = clsx('sidenav-link', className);
    const iconClass = clsx('rotate-icon', iconClasses);

    const [angle, setAngle] = useState(iconAngle);

    const handleClick = () => {
      if (icon) {
        const innerAngle = angle === 0 ? 180 : 0;

        setAngle(innerAngle);
      }

      onClick && onClick();
    };

    return (
      <a className={classes} onClick={handleClick} ref={ref} {...props}>
        {children}
        {icon && <MDBIcon icon={icon} style={{ transform: `rotate(${angle}deg)` }} className={iconClass} />}
      </a>
    );
  }
);

MDBSideNavLink.defaultProps = { iconAngle: 0 };

export default MDBSideNavLink;
