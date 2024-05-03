import clsx from 'clsx';
import React, { useContext } from 'react';
import type { StepperFormProps } from './types';
import MDBValidation from '../../../../../free/core/forms/Validation/Validation';
import { StepperContext } from '../StepperContext';
import { validateStep } from './utils';

const MDBStepperForm: React.FC<StepperFormProps> = React.forwardRef<HTMLAllCollection, StepperFormProps>(
  ({ className, children, onSubmit, ...props }, ref) => {
    const classes = clsx('stepper-form', className);
    const { steps, activeItem, linear } = useContext(StepperContext);

    const handleSubmit = (event: any) => {
      const form = event.target;
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      steps.forEach((el, i) => {
        linear && validateStep(i, steps, activeItem, linear);
      });

      onSubmit && onSubmit(event);
    };

    return (
      <MDBValidation className={classes} ref={ref} {...props} noValidate onSubmit={handleSubmit}>
        {children}
      </MDBValidation>
    );
  }
);

MDBStepperForm.defaultProps = {};

export default MDBStepperForm;
