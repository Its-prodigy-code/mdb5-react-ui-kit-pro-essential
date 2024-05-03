import React from 'react';

type SideNavProps = {
  className?: string;
  color?: string;
  bgColor?: string;
  isOpen?: boolean;
  light?: boolean;
  relative?: boolean;
  absolute?: boolean;
  right?: boolean;
  slim?: boolean;
  slimCollapsed?: boolean;
  backdrop?: boolean;
  mode?: 'over' | 'side' | 'push' | string;
  accordion?: boolean;
  closeOnEsc?: boolean;
  constant?: boolean;
  [rest: string]: any;
};

export { SideNavProps };
