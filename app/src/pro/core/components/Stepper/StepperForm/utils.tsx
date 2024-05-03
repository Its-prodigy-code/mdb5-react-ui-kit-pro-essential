function toggleStepClass(index: number, action: string, className: string, steps: Array<any>): void {
  // condition to prevent errors if the user has not set any custom classes like active, disabled etc.
  if (className) {
    steps[index].classList[action](className);
  }
}

export function toggleInvalid(index: number, steps: Array<any>): void {
  toggleStepClass(index, 'add', 'stepper-invalid', steps);
  toggleStepClass(index, 'remove', 'stepper-completed', steps);
  toggleStepClass(index, 'add', '', steps);
  toggleStepClass(index, 'remove', '', steps);
}

export function validateStep(
  index: number,
  steps: Array<any>,
  activeStepIndex: number,
  stepperLinear: boolean
): boolean {
  const numberOfSteps = steps.length;
  let result = true;

  // prevent any actions if the same step is chosen
  if (index === activeStepIndex - 1) {
    result = false;
  }

  // prevent toggleSteps if next/prev step don't exist
  if (index >= numberOfSteps || index < 0) {
    result = false;
  }

  if (stepperLinear) {
    // prevent toggleStep if one of the steps is skipped
    if (index > activeStepIndex) {
      result = false;
    }

    if (index > activeStepIndex - 1 || index === numberOfSteps - 1) {
      const activeStep = steps[activeStepIndex - 1];
      const requiredElements = Array.prototype.slice.call(activeStep.querySelectorAll('input[required]'));

      const isValid = requiredElements.every((el: any) => {
        return el.checkValidity() === true;
      });

      if (!isValid) {
        toggleInvalid(activeStepIndex - 1, steps);
        result = false;
      }
    }
  }

  return result;
}
