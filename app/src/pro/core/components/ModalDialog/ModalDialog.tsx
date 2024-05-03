import React from 'react';
import clsx from 'clsx';
import type { ModalDialogProps } from './types';
import ModalDialogFree from '../../../../free/core/components/Modal/ModalDialog/ModalDialog';

const MDBModalDialog: React.FC<ModalDialogProps> = React.forwardRef<HTMLAllCollection, ModalDialogProps>(
  ({ className, side, frame, position, children, ...props }, ref) => {
    const classes = clsx(side && 'modal-side', frame && 'modal-frame', position && `modal-${position}`, className);

    return (
      <ModalDialogFree className={classes} {...props} ref={ref}>
        {children}
      </ModalDialogFree>
    );
  }
);

MDBModalDialog.defaultProps = { tag: 'div' };

export default MDBModalDialog;
