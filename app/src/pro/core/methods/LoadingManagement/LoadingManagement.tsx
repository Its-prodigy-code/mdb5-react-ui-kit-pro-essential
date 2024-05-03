import clsx from 'clsx';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import type { LoadingManagementProps } from './types';

const MDBLoadingManagement: React.FC<LoadingManagementProps> = React.forwardRef<
  HTMLAllCollection,
  LoadingManagementProps
>(
  (
    {
      backdrop,
      backdropColor,
      backdropOpacity,
      className,
      loadingText,
      icon,
      isOpen,
      fullScreen,
      overflow,
      parentRef,
      spinnerClassName,
      textClassName,
      tag: Tag,
      ...props
    },
    ref
  ) => {
    const textClasses = clsx('loading-text', textClassName);
    const spinnerClasses = clsx(icon, 'loading-icon', spinnerClassName);
    const classes = clsx(
      fullScreen ? 'loading-full' : 'loading',
      'loading-spinner',
      fullScreen ? 'position-fixed' : 'position-absolute',
      className
    );

    useEffect(() => {
      if (parentRef) {
        parentRef.current.classList.add('position-relative');
      }
    }, [parentRef]);

    useEffect(() => {
      if (fullScreen && overflow) {
        isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
      }
    }, [fullScreen, isOpen, overflow]);

    return (
      <>
        {isOpen !== false && (
          <>
            {fullScreen ? (
              ReactDOM.createPortal(
                <>
                  <Tag className={classes} ref={ref} {...props}>
                    <div className={spinnerClasses} role='status'></div>
                    <span className={textClasses}>{loadingText}</span>
                  </Tag>
                  <div
                    className='loading-backdrop'
                    id=''
                    style={{ opacity: backdropOpacity, backgroundColor: backdropColor }}
                  ></div>
                </>,
                document.body
              )
            ) : (
              <>
                <Tag className={classes} ref={ref} {...props}>
                  <div className={spinnerClasses} role='status'></div>
                  <span className={textClasses}>{loadingText}</span>
                </Tag>
                {backdrop && (
                  <div
                    className='loading-backdrop position-absolute'
                    id=''
                    style={{ opacity: backdropOpacity, backgroundColor: backdropColor }}
                  ></div>
                )}
              </>
            )}
          </>
        )}
      </>
    );
  }
);

MDBLoadingManagement.defaultProps = {
  tag: 'div',
  backdrop: true,
  loadingText: 'Loading...',
  backdropColor: 'black',
  backdropOpacity: 0.4,
  icon: 'spinner-border',
  overflow: true,
};

export default MDBLoadingManagement;
