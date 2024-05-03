import React from 'react';

interface StepperProps {
  activeItem: number;
  setActiveItem: React.SetStateAction<any>;
  stepperHeight: number;
  setStepperHeight: React.SetStateAction<any>;
  prevState: number;
  setPrevState: React.SetStateAction<any>;
  steps: Array<any>;
  linear: boolean | undefined;
  visited: Array<number>;
  setVisited: React.SetStateAction<any>;
  noEditable: boolean | undefined;
  vertical: boolean | undefined;
  mobile: boolean | undefined;
  verticalBreakpoint: boolean;
}

const StepperContext = React.createContext<StepperProps>({
  activeItem: 1,
  setActiveItem: null,
  stepperHeight: 0,
  setStepperHeight: null,
  prevState: 1,
  setPrevState: null,
  steps: [],
  linear: false,
  visited: [],
  setVisited: null,
  noEditable: false,
  vertical: false,
  mobile: false,
  verticalBreakpoint: false,
});

export { StepperContext };
