import React from 'react';

type DatepickerProps = {
  closeOnEsc?: boolean;
  filter?: (date: Date) => any;
  inline?: boolean;
  inputClasses?: string;
  format?: string;
  min?: Date;
  max?: Date;
  options?: any;
  value: string;
  setValue: React.SetStateAction<any>;
  clearBtnText?: string;
  cancelBtnText?: string;
  okBtnText?: string;
  inputToggle?: boolean;
  icon?: React.ReactChild;
  inputLabel?: string;
  inputStyle?: React.CSSProperties;
  startDay?: number;
  title?: string;
  weekdaysShort?: any;
  monthsShort?: any;
  monthsFull?: any;
  weekdaysNarrow?: any;
  weekdaysFull?: any;
  views?: 'days' | 'months' | 'years';
  style?: React.CSSProperties;
  [rest: string]: any;
};

export { DatepickerProps };
