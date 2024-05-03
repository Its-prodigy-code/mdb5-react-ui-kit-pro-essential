import React from 'react';
import clsx from 'clsx';
import type { ModalDialogProps } from './types';

const MDBModalDialog: React.FC<ModalDialogProps> = React.forwardRef<HTMLAllCollection, ModalDialogProps>(
  ({ className, centered, children, frame, position, side, size, tag: Tag, ...props }, ref) => {
    const classes = clsx(
      'modal-dialog',
      centered && 'modal-dialog-centered',
      side && 'modal-side',
      frame && 'modal-frame',
      position && `modal-${position}`,
      size && `modal-${size}`,
      className
    );

    return (
      <Tag className={classes} {...props} ref={ref}>
        {children}
      </Tag>
    );
  }
);

MDBModalDialog.defaultProps = { tag: 'div' };

export default MDBModalDialog;
