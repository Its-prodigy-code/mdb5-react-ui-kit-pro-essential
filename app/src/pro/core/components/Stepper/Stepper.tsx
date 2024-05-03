import clsx from 'clsx';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import type { StepperProps } from './types';
import { StepperContext } from './StepperContext';
import MDBBtn from '../../../../free/core/components/Button/Button';
import { validateStep } from './StepperForm/utils';

const MDBStepper: React.FC<StepperProps> = ({
  className,
  outerState,
  linear,
  formWizard,
  setOuterState,
  prevOuterState,
  noEditable,
  setPrevOuterState,
  mobileProgress,
  stepperRef,
  vertical,
  mobile,
  mobileBreakpoint,
  verticalBreakpoint,
  tag: Tag,
  children,
  ...props
}) => {
  const [active, setActive] = useState(1);
  const [prevState, setPrevState] = useState(0);
  const [height, setHeight] = useState(0);
  const [steps, setSteps] = useState([]);
  const [validated, setValidated] = useState<Array<number>>([]);
  const [verticalState, setVerticalState] = useState(verticalBreakpoint ? true : vertical);
  const [mobileState, setMobileState] = useState(mobileBreakpoint ? mobileBreakpoint > window.innerWidth : mobile);

  const classes = clsx(
    'stepper',
    verticalState ? 'stepper-vertical' : mobileState ? 'stepper-mobile' : 'stepper-horizontal',
    mobileProgress && 'stepper-progress-bar',
    className
  );

  useEffect(() => {
    if (verticalBreakpoint < window.innerWidth) {
      setVerticalState(false);
    }
  }, [verticalBreakpoint]);

  const stepperInnerRef = useRef<HTMLElement>(null);
  const stepperReference = stepperRef ? stepperRef : stepperInnerRef;

  const breakpoint = useCallback(() => {
    const shouldBeHorizontal = verticalBreakpoint < window.innerWidth;
    const shouldBeVertical = verticalBreakpoint > window.innerWidth;
    const shouldBeMobile = mobileBreakpoint > window.innerWidth;

    if (shouldBeHorizontal) {
      setMobileState(false);
      setVerticalState(false);
    }

    if (shouldBeVertical && !shouldBeMobile) {
      setMobileState(false);
      setVerticalState(true);
    }

    if (shouldBeMobile) {
      setMobileState(true);
      setVerticalState(false);
    }
  }, [mobileBreakpoint, verticalBreakpoint]);

  useEffect(() => {
    if (mobileBreakpoint || verticalBreakpoint) {
      window.addEventListener('resize', breakpoint);

      return () => {
        window.removeEventListener('resize', breakpoint);
      };
    }
  }, [mobileBreakpoint, verticalBreakpoint, breakpoint]);

  useEffect(() => {
    const stepsQuery = stepperReference.current.querySelectorAll('.stepper-step');
    setSteps(stepsQuery);
  }, [stepperReference]);

  const handleClick = () => {
    if (active === steps.length) {
      return;
    }

    if (linear) {
      if (!validated.includes(active)) {
        setValidated([...validated, active]);
      }

      const isValid = validateStep(active, steps, active, linear);

      if (!isValid) {
        return;
      }
    }
    if (noEditable) {
      if (!validated.includes(active)) {
        setValidated([...validated, active]);
      }

      if (validated.includes(active + 1)) {
        return;
      }
    }

    setPrevState(active);
    setActive(active + 1);
  };

  return (
    <StepperContext.Provider
      value={{
        activeItem: outerState ? outerState : active,
        setActiveItem: setOuterState ? setOuterState : setActive,
        stepperHeight: height,
        setStepperHeight: setHeight,
        prevState: prevOuterState ? prevOuterState : prevState,
        setPrevState: setPrevOuterState ? setPrevOuterState : setPrevState,
        steps: steps,
        linear: linear,
        visited: validated,
        setVisited: setValidated,
        noEditable: noEditable,
        vertical: verticalState,
        mobile: mobileState,
        verticalBreakpoint: verticalBreakpoint ? true : false,
      }}
    >
      <>
        <Tag className={classes} ref={stepperReference} {...props} style={{ height: !verticalState && `${height}px` }}>
          {mobileState && (
            <div className='stepper-mobile-head bg-light'>
              step {active} of {steps.length}
            </div>
          )}
          {children}
          {mobileState && (
            <div className='stepper-mobile-footer bg-light'>
              <div className='stepper-back-btn'>
                <button
                  className='btn btn-link'
                  onClick={() => {
                    active !== 1 && setPrevState(active);
                    active >= 2 && setActive(active - 1);
                  }}
                >
                  <i className='fas fa-chevron-left'></i>
                  BACK
                </button>
              </div>

              {mobileProgress && (
                <div className='stepper-mobile-progress gray-500'>
                  <div
                    className='stepper-mobile-progress-bar bg-primary'
                    style={{ width: `${(active / steps.length) * 100}%` }}
                  ></div>
                </div>
              )}

              <div className='stepper-next-btn'>
                <button
                  className='btn btn-link ripple-surface'
                  onClick={() => {
                    active !== steps.length && setPrevState(active);
                    active <= steps.length - 1 && setActive(active + 1);
                  }}
                >
                  NEXT
                  <i className='fas fa-chevron-right'></i>
                </button>
              </div>
            </div>
          )}
        </Tag>

        {formWizard && (
          <div className='d-flex justify-content-center px-3'>
            <MDBBtn
              onClick={() => {
                active !== 1 && setPrevState(active);
                active >= 2 && setActive(active - 1);
              }}
              className='btn btn-primary w-100 me-2 ripple-surface'
            >
              Previous step
            </MDBBtn>
            <MDBBtn onClick={handleClick} className='btn btn-primary w-100'>
              Next step
            </MDBBtn>
          </div>
        )}
      </>
    </StepperContext.Provider>
  );
};

MDBStepper.defaultProps = { tag: 'ul' };

export default MDBStepper;
