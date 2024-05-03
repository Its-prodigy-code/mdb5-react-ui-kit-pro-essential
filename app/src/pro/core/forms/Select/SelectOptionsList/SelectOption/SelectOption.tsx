/* eslint-disable @typescript-eslint/ban-ts-comment */
import clsx from 'clsx';
import { MDBCheckbox } from 'mdb-react-ui-kit';
import React, { useState, useEffect, useCallback } from 'react';
import type { SelectOptionProps } from './types';

const MDBSelectOption: React.FC<SelectOptionProps> = ({
  className,
  tag: Tag,
  disabled,
  height,
  active,
  children,
  selected,
  style,
  secondaryText,
  text,
  revert,
  onClick,
  multiple,
  ...props
}): JSX.Element => {
  const classes = clsx(
    className !== undefined && className?.includes('select-no-results') ? '' : 'select-option',
    selected && 'selected',
    disabled && 'disabled',
    active && 'active',
    className
  );
  const [heightOption, setHeightOption] = useState(height);
  const [checkedState, setCheckedState] = useState(false);

  useEffect(() => {
    if (secondaryText && height === undefined) {
      setHeightOption(44);
    } else if (height === undefined) {
      setHeightOption(38);
    }
  }, [secondaryText, height]);

  const onClickCheckbox = useCallback(
    (e: React.MouseEvent) => {
      if (disabled) return;

      onClick && onClick(e);

      setCheckedState(!checkedState);
    },
    [checkedState, disabled, onClick]
  );

  useEffect(() => {
    if (!multiple) return;

    if (selected && !disabled) {
      setCheckedState(true);
    } else {
      setCheckedState(false);
    }
  }, [selected, disabled, multiple]);

  return (
    <Tag
      className={classes}
      style={{ height: heightOption, ...style }}
      onClick={onClickCheckbox}
      {...props}
      role='option'
    >
      {revert ? (
        <>
          {children}
          <div className='select-option-text'>
            {multiple && (
              <MDBCheckbox
                label={text}
                onChange={(e: any) => e.preventDefault()}
                checked={checkedState}
                dsabled={disabled}
                i
              />
            )}
            {!multiple && text}
            {secondaryText && <span className='select-option-secondary-text'>{secondaryText}</span>}
          </div>
        </>
      ) : (
        <>
          <div className='select-option-text'>
            {multiple && (
              <MDBCheckbox
                label={text}
                onChange={(e: any) => e.preventDefault()}
                checked={checkedState}
                disabled={disabled}
              />
            )}
            {!multiple && text}
            {secondaryText && <span className='select-option-secondary-text'>{secondaryText}</span>}
          </div>
          {children}
        </>
      )}
    </Tag>
  );
};

MDBSelectOption.defaultProps = { tag: 'span', revert: false };

export default MDBSelectOption;
