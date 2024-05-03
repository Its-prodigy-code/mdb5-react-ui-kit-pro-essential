import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import type { ChipProps } from './types';
const MDBChip: React.FC<ChipProps> = ({
  className,
  onClose,
  closeIcon,
  tag: Tag,
  chipRef,
  color,
  size,
  children,
  ...props
}) => {
  const [shouldBeRendered, setShouldBeRendered] = useState(true);

  const chipEl = useRef();
  const chipReference = chipRef ? chipRef : chipEl;

  const chipClasses = clsx('chip', size && `chip-${size}`, color && `chip-outline btn-outline-${color}`, className);

  const handleClick = () => {
    onClose && onClose();
    setShouldBeRendered(false);
  };

  return shouldBeRendered ? (
    <Tag ref={chipReference} className={chipClasses} {...props}>
      {children}
      {closeIcon && <i className='close fas fa-times' onClick={handleClick} />}
    </Tag>
  ) : null;
};

MDBChip.defaultProps = { tag: 'div', closeIcon: false };

export default MDBChip;
