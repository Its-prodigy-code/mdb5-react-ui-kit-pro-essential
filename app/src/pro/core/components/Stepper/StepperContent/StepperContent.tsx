import clsx from 'clsx';
import React, { useContext, useEffect, useState, useRef, useCallback } from 'react';
import type { StepperContentProps } from './types';
import MDBAnimation from '../../../styles/Animation/Animation';
import { StepperContext } from '../StepperContext';
import { StepperStepContext } from '../StepperStepContext';

const MDBStepperContent: React.FC<StepperContentProps> = ({ className, children, tag: Tag, stepperRef, ...props }) => {
  const { activeItem, prevState, vertical } = useContext(StepperContext);
  const { itemId } = useContext(StepperStepContext);

  const [display, setDisplay] = useState(vertical ? true : itemId === activeItem);
  const [isReadyToHide, setIsReadyToHide] = useState(false);
  const [height, setHeight] = useState(0);
  const [verticalStepperStyles, setVerticalStepperStyles] = useState({ paddingTop: 0, paddingBottom: 0 });

  const stepperInnerRef = useRef<HTMLElement>(null);
  const stepperReference = stepperRef ? stepperRef : stepperInnerRef;

  const classes = clsx('stepper-content', 'py-3', vertical && !display && 'stepper-content-hide', className);

  const resize = useCallback(() => {
    const stepContent = stepperReference.current;
    if (stepContent) {
      const isActiveStep = activeItem === itemId;
      let stepContentHeight;

      if (!isActiveStep) {
        stepContentHeight =
          stepContent.scrollHeight + verticalStepperStyles.paddingTop + verticalStepperStyles.paddingBottom;
      } else {
        stepContent.style.height = '';
        stepContentHeight = stepContent.scrollHeight;
      }

      stepContent.style.height = `${stepContentHeight}px`;
    }
  }, [activeItem, itemId, stepperReference, verticalStepperStyles]);

  useEffect(() => {
    if (!vertical) {
      setDisplay(itemId === activeItem);
    }
  }, [itemId, activeItem, prevState, vertical]);

  useEffect(() => {
    if (!vertical) {
      if (itemId === prevState) {
        setIsReadyToHide(true);

        setTimeout(() => {
          setIsReadyToHide(false);
        }, 800);
      }
    }
  }, [itemId, prevState, vertical]);

  useEffect(() => {
    if (vertical) {
      if (height === 0) {
        const stepContent = stepperReference.current;
        const stepHeight = stepContent.scrollHeight;
        const stepComputed = window.getComputedStyle(stepContent);

        setVerticalStepperStyles({
          paddingTop: parseFloat(stepComputed.paddingTop),
          paddingBottom: parseFloat(stepComputed.paddingBottom),
        });
        setHeight(stepHeight);
      }
      setDisplay(itemId === activeItem);
    }
  }, [stepperReference, vertical, itemId, activeItem, height]);

  useEffect(() => {
    if (vertical) {
      window.addEventListener('resize', resize);

      return () => {
        window.removeEventListener('resize', resize);
      };
    }
  }, [vertical, resize]);

  useEffect(() => {
    dispatchEvent(new Event('resize'));
  }, [children]);

  return (
    <>
      {vertical ? (
        <Tag className={classes} ref={stepperReference} {...props} style={{ height: `${height}px` }}>
          {children}
        </Tag>
      ) : (
        <>
          {(display || isReadyToHide) && (
            <MDBAnimation
              start='onLoad'
              animation={
                isReadyToHide
                  ? activeItem > prevState
                    ? 'slide-out-left'
                    : activeItem < prevState
                    ? 'slide-out-right'
                    : ''
                  : prevState && activeItem > prevState
                  ? 'slide-in-right'
                  : activeItem < prevState
                  ? 'slide-in-left'
                  : ''
              }
              duration={800}
              className={classes}
              {...props}
            >
              <span>{children}</span>
            </MDBAnimation>
          )}
        </>
      )}
    </>
  );
};

MDBStepperContent.defaultProps = { tag: 'div' };

export default MDBStepperContent;
