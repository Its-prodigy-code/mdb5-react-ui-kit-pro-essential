import clsx from 'clsx';
import React from 'react';
import type { DatepickerModalContainerProps } from './types';
import MDBAnimation from '../../../styles/Animation/Animation';

const MDBDatepickerModalContainer: React.FC<DatepickerModalContainerProps> = React.forwardRef<
  HTMLAllCollection,
  DatepickerModalContainerProps
>(({ className, dropdown, tag: Tag, children, isOpen, styles, attributes, setPopperElement, ...props }, ref) => {
  const dropdownClasses = clsx(
    'datepicker-dropdown-container',
    isOpen ? 'fade-out' : 'fade-in',
    'animation',
    className
  );
  const modalClasses = clsx('datepicker-modal-container', className);

  return (
    <>
      {dropdown ? (
        <Tag
          style={{ position: 'absolute', zIndex: 1065, ...styles.popper, animationDuration: '500ms' }}
          {...props}
          {...attributes.popper}
          ref={setPopperElement}
          className={dropdownClasses}
          tabIndex={-1}
        >
          {children}
        </Tag>
      ) : (
        <MDBAnimation
          tag={Tag}
          start='onLoad'
          animation={isOpen ? 'fade-out' : 'fade-in'}
          className={modalClasses}
          ref={ref}
          {...props}
        >
          {children}
        </MDBAnimation>
      )}
    </>
  );
});

MDBDatepickerModalContainer.defaultProps = { tag: 'div' };

export default MDBDatepickerModalContainer;
