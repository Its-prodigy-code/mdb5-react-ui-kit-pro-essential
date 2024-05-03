import * as React from 'react';

declare const MDBDatepicker: React.FunctionComponent<{
  className?: string;
  format?: string;
  inline?: boolean;
  isOpen?: boolean;
  value?: string;
  okBtnText?: string;
  labelText?: string;
  clearBtnText?: string;
  cancelBtnText?: string;
  inputClasses?: string;
  title?: string;
  startDate?: Date;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
}>;

export default MDBDatepicker;
