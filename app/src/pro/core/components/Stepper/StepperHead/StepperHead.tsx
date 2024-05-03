import clsx from 'clsx';
import React, { useContext } from 'react';
import { StepperContext } from '../StepperContext';
import { StepperStepContext } from '../StepperStepContext';
import type { StepperHeadProps } from './types';
import { validateStep } from '../StepperForm/utils';

const MDBStepperHead: React.FC<StepperHeadProps> = React.forwardRef<HTMLAllCollection, StepperHeadProps>(
  ({ className, tag: Tag, icon, text, ...props }, ref) => {
    const { activeItem, setActiveItem, setPrevState, steps, linear, visited, setVisited, noEditable } = useContext(
      StepperContext
    );
    const { itemId } = useContext(StepperStepContext);

    const classes = clsx('stepper-head', className);

    const handleClick = () => {
      if (linear) {
        setVisited([...visited, !visited.includes(activeItem) && activeItem]);
        const isValid = validateStep(itemId - 1, steps, activeItem, linear);

        if (!isValid) {
          return;
        }
      }
      if (noEditable) {
        setVisited([...visited, !visited.includes(activeItem) && activeItem]);
        if (visited.includes(itemId)) {
          return;
        }
      }

      itemId !== activeItem && setPrevState(activeItem);
      setActiveItem(itemId);
    };

    return (
      <Tag className={classes} onClick={handleClick} tabIndex={itemId === activeItem ? 0 : -1} ref={ref} {...props}>
        <span className='stepper-head-icon'>{icon}</span>
        <span className='stepper-head-text'>{text}</span>
      </Tag>
    );
  }
);

MDBStepperHead.defaultProps = { tag: 'div' };

export default MDBStepperHead;
