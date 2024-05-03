import clsx from 'clsx';
import React from 'react';
import type { DatepickerMainProps } from './types';

const DatepickerMain: React.FC<DatepickerMainProps> = React.forwardRef<HTMLAllCollection, DatepickerMainProps>(
  ({ className, tag: Tag, children, ...props }, ref) => {
    const classes = clsx('datepicker-main', className);

    return (
      <Tag className={classes} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

DatepickerMain.defaultProps = { tag: 'div' };

export default DatepickerMain;
