import clsx from 'clsx';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Chip from '../Chip';
import type { ChipsInputProps } from './types';

const MDBChipsInput: React.FC<ChipsInputProps> = ({
  className,
  value,
  id,
  labelId,
  labelClass,
  label,
  onChange,
  labelRef,
  labelStyle,
  inputRef,
  onBlur,
  readonly,
  editable,
  initialValues,
  ...props
}) => {
  const labelEl = useRef<HTMLLabelElement>(null);
  const inputEl = useRef<HTMLInputElement>(null);

  const labelReference = labelRef ? labelRef : labelEl;
  const inputReference = inputRef ? inputRef : inputEl;

  const [chips, setChips] = useState(initialValues);
  const [chipToEdit, setChipToEdit] = useState<null | number>(null);
  const [oldValue, setNewValue] = useState(value);
  const [labelWidth, setLabelWidth] = useState(0);
  const [active, setActive] = useState(chips.length > 0 || (value !== undefined && value.length > 0));

  const placeholderClasses = clsx('chips', 'chips-placeholder');
  const wrapperClasses = clsx(
    'form-outline',
    'chips-input-wrapper',
    chips.length > 0 && 'chips-padding chips-transition'
  );
  const inputClasses = clsx('form-control', active && 'active', className);
  const labelClasses = clsx('form-label', labelClass);

  useEffect(() => {
    if (labelReference.current) {
      if (labelReference.current?.clientWidth !== 0) setLabelWidth(labelReference.current.clientWidth * 0.8 + 8);
    }
  }, [labelReference, labelReference.current?.clientWidth]);

  const setWidth = () => {
    if (labelReference.current) {
      setLabelWidth(labelReference.current.clientWidth * 0.8 + 8);
    }
  };

  useEffect(() => {
    if (value === undefined) return;
    value.length > 0 || chips.length > 0 ? setActive(true) : setActive(false);
  }, [value, chips]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewValue(e.currentTarget.value);
    onChange && onChange(e);
  };

  const handleBlur = useCallback(
    (e: any) => {
      if (
        (oldValue !== undefined && oldValue.length > 0) ||
        (value !== undefined && value.length > 0) ||
        chips.length > 0
      ) {
        setActive(true);
      } else {
        setActive(false);
      }
      onBlur && onBlur(e);
    },
    [oldValue, value, chips, onBlur]
  );

  const handleKeyboard = ({ key, target }: { key: any; target: any }) => {
    if (key !== 'Enter') return;

    target.value.length > 0 && setChips([...chips, { tag: target.value }]);
    target.value = '';
  };

  const handleClose = (currentIndex: any) => {
    const newChips = chips.filter((chip: any, index: any) => currentIndex !== index);
    setChips(newChips);

    newChips.length <= 0 && setActive(false);
  };

  const handleDoubleClick = (e: any, index: number) => {
    if (!editable) return;

    setChipToEdit(index);
    setTimeout(() => {
      e.target.focus();
    }, 0);
  };

  const handleChipBlur = (e: any, index: number) => {
    if (!editable) return;
    setChipToEdit(null);

    const newChips = chips.map((el: any, i: number) => {
      if (i === index) return { tag: e.target.textContent };
      return el;
    });

    setChips(newChips);
  };

  const handleChipKeyboard = (e: any, index: number) => {
    if (e.key !== 'Enter' || !editable || chipToEdit === null) return;
    handleChipBlur(e, index);
  };

  return (
    <div className={placeholderClasses}>
      <div className={wrapperClasses}>
        {chips?.map((chip: any, index: any) => (
          <Chip
            contentEditable={chipToEdit === index}
            suppressContentEditableWarning={true}
            onDoubleClick={(e: any) => handleDoubleClick(e, index)}
            onClose={() => handleClose(index)}
            onBlur={(e: any) => handleChipBlur(e, index)}
            onKeyDown={(e: any) => handleChipKeyboard(e, index)}
            key={`${index}-${chip.tag}`}
            closeIcon={chipToEdit !== index}
            className='btn'
          >
            {chip.tag}
          </Chip>
        ))}
        <input
          type='text'
          readOnly={readonly}
          className={inputClasses}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={setWidth}
          onKeyDown={handleKeyboard}
          value={value}
          id={id}
          ref={inputReference}
          {...props}
        />
        {label && (
          <label className={labelClasses} style={labelStyle} id={labelId} htmlFor={id} ref={labelReference}>
            {label}
          </label>
        )}
        <div className='form-notch'>
          <div className='form-notch-leading'></div>
          <div className='form-notch-middle' style={{ width: labelWidth }}></div>
          <div className='form-notch-trailing'></div>
        </div>
      </div>
    </div>
  );
};

MDBChipsInput.defaultProps = { initialValues: [] };

export default MDBChipsInput;
