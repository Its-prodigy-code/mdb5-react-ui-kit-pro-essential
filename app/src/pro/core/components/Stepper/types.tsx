import React from 'react';

type StepperProps = {
  className?: string;
  linear?: boolean;
  noEditable?: boolean;
  formWizard?: boolean;
  mobileProgress?: boolean;
  mobile?: boolean;
  mobileBreakpoint?: any;
  outerState?: number;
  setOuterState?: React.SetStateAction<any>;
  prevOuterState?: number;
  setPrevOuterState?: React.SetStateAction<any>;
  vertical?: boolean;
  verticalBreakpoint?: any;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
};

export { StepperProps };
