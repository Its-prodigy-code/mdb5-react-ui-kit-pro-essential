import React from 'react';

type LoadingManagementProps = {
  backdropColor?: string;
  backdropOpacity?: number;
  className?: string;
  loadingText?: string;
  isOpen?: boolean | undefined;
  fullScreen?: boolean;
  icon?: string;
  overflow?: boolean;
  spinnerClassName?: string;
  textClassName?: string;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
};

export { LoadingManagementProps };
