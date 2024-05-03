import clsx from 'clsx';
import React, { useContext, useEffect, useState, useRef, useCallback } from 'react';
import { StepperContext } from '../StepperContext';
import { StepperStepContext } from '../StepperStepContext';
import type { StepperStepProps } from './types';

const MDBStepperStep: React.FC<StepperStepProps> = ({
  className,
  itemId,
  tag: Tag,
  children,
  stepperRef,
  ...props
}) => {
  const { activeItem, setStepperHeight, prevState, linear, visited, noEditable, mobile } = useContext(StepperContext);
  const [completed, setCompleted] = useState(false);
  const [isValidated, setIsValidated] = useState(false);

  const stepperInnerRef = useRef<HTMLElement>(null);

  const stepperReference = stepperRef ? stepperRef : stepperInnerRef;

  const classes = clsx(
    'stepper-step',
    activeItem === itemId && 'stepper-active',
    isValidated && 'was-validated',
    completed && (noEditable ? 'stepper-disabled' : 'stepper-completed'),
    className
  );

  useEffect(() => {
    if (visited.includes(itemId) && linear) {
      setIsValidated(true);
    }
  }, [itemId, visited, linear]);

  const setHeight = useCallback(() => {
    const element = stepperReference.current;

    const stepContent = element.querySelector('.stepper-content');
    const stepFooter = element.parentNode.querySelector(`.stepper-mobile-footer`);
    const contentStyle = stepContent && getComputedStyle(stepContent);
    const footerStyle = stepFooter ? getComputedStyle(stepFooter) : '';
    let stepHead;

    if (mobile) {
      stepHead = element.parentNode.querySelector('.stepper-mobile-head');
    } else {
      stepHead = element.querySelector('.stepper-head');
    }

    const headStyle = stepHead && getComputedStyle(stepHead);

    if (stepContent && contentStyle) {
      const stepContentHeight =
        stepContent.offsetHeight + parseFloat(contentStyle.marginTop) + parseFloat(contentStyle.marginBottom);

      const stepHeadHeight =
        stepHead.offsetHeight + parseFloat(headStyle.marginTop) + parseFloat(headStyle.marginBottom);

      const stepFooterHeight = footerStyle
        ? stepFooter.offsetHeight + parseFloat(footerStyle.marginTop) + parseFloat(footerStyle.marginBottom)
        : 0;

      setStepperHeight(stepHeadHeight + stepContentHeight + stepFooterHeight);
    }
  }, [setStepperHeight, stepperReference, mobile]);

  useEffect(() => {
    if (activeItem === itemId) {
      setTimeout(() => {
        setHeight();
      }, 20);

      if (isValidated) {
        setTimeout(() => {
          setHeight();
        }, 250);
      }
    }
  }, [itemId, activeItem, setHeight, isValidated]);

  useEffect(() => {
    if (prevState === itemId) {
      setCompleted(true);
    }
  }, [prevState, itemId]);

  useEffect(() => {
    window.addEventListener('resize', setHeight);

    return () => {
      window.removeEventListener('resize', setHeight);
    };
  }, [setHeight]);

  return (
    <StepperStepContext.Provider value={{ itemId: itemId }}>
      <Tag className={classes} ref={stepperReference} {...props}>
        {children}
      </Tag>
    </StepperStepContext.Provider>
  );
};

MDBStepperStep.defaultProps = { tag: 'li' };

export default MDBStepperStep;
