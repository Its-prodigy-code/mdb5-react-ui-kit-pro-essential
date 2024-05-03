import React from 'react';

type DatepickerProps = {
  className?: string;
  format?: string;
  inline?: boolean;
  isOpen?: boolean;
  value?: string;
  okBtnText?: string;
  labelText?: string;
  clearBtnText?: string;
  cancelBtnText?: string;
  startDate?: Date;
  inputClasses?: string;
  title?: string;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
};

export { DatepickerProps };
