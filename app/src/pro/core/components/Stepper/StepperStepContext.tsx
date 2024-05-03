import React from 'react';

interface StepperStepProps {
  itemId: number;
}

const StepperStepContext = React.createContext<StepperStepProps>({
  itemId: 0,
});

export { StepperStepContext };
