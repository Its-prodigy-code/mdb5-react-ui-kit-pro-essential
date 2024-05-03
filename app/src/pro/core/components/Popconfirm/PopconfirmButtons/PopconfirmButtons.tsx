import clsx from 'clsx';
import React from 'react';
import type { PopconfirmButtonsProps } from './types';

const MDBPopconfirmButtons: React.FC<PopconfirmButtonsProps> = React.forwardRef<
  HTMLAllCollection,
  PopconfirmButtonsProps
>(({ className, tag: Tag, children, ...props }, ref) => {
  const classes = clsx('popconfirm-buttons-container', className);

  return (
    <Tag className={classes} ref={ref} {...props}>
      {children}
    </Tag>
  );
});

MDBPopconfirmButtons.defaultProps = { tag: 'div' };

export default MDBPopconfirmButtons;
