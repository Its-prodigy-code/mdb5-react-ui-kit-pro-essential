import clsx from 'clsx';
import React from 'react';
import type { SelectOptionGroupProps } from './types';

const MDBSelectOptionGroup: React.FC<SelectOptionGroupProps> = ({
  className,
  tag: Tag,
  children,
  ...props
}): JSX.Element => {
  const classes = clsx('select-option-group', className);

  return (
    <Tag className={classes} {...props} role='group'>
      {children}
    </Tag>
  );
};

MDBSelectOptionGroup.defaultProps = {
  tag: 'div',
};

export default MDBSelectOptionGroup;
