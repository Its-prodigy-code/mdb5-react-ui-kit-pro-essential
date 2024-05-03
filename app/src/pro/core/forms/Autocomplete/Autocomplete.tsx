import React, { useState, useEffect, useCallback } from 'react';
import type { AutocompleteProps } from './types';
import MDBInput from '../../../../free/core/forms/Input/Input';
import { usePopper } from 'react-popper';
import { flip } from '@popperjs/core';
import ReactDOM from 'react-dom';
import MDBAutocompleteDropdown from './AutocompleteDropdown/AutocompleteDropdown';
import MDBAutocompleteItemsList from './AutocompleteItemsList/AutocompleteItemsList';
import MDBAutocompleteItem from './AutocompleteItem/AutocompleteItem';
import { DOWN_ARROW, UP_ARROW, ENTER, HOME, END, TAB, ESCAPE } from './keycodes';

const MDBAutocomplete: React.FC<AutocompleteProps> = ({
  className,
  displayValue,
  dataFilter,
  options,
  threshold,
  itemContent,
  getFilteredData,
  listHeight,
  inputValue,
  noResults,
  setInputValue,
  tag: Tag,
  customContent,
  validation,
  required,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [popperWidth, setPopperWidth] = useState<string>();
  const [referenceElement, setReferenceElement] = useState<HTMLElement>();
  const [popperElement, setPopperElement] = useState<HTMLElement>();
  const [activeItem, setActiveItem] = useState(-1);
  const [filteredData, setFilteredData] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-start',
    modifiers: [flip],
    ...options,
  });

  useEffect(() => {
    const isPromise = (value: any) => {
      return !!value && typeof value.then === 'function';
    };

    if (isOpen) {
      const data = dataFilter(inputValue);

      if (isPromise(data)) {
        setShowLoader(true);
        data.then((items: any) => {
          setFilteredData(items);
          setShowLoader(false);
        });
      } else {
        setFilteredData(data);
      }
    }
  }, [inputValue, dataFilter, isOpen]);

  useEffect(() => {
    if (getFilteredData) {
      getFilteredData(filteredData);
    }
  }, [getFilteredData, filteredData]);

  const handleClick = useCallback(
    (event: any) => {
      const isInput = referenceElement === event.target;
      const isDropdown = event.target === popperElement;
      const isDropdownContent = popperElement && popperElement.contains(event.target);

      if (!isInput && !isDropdown && !isDropdownContent) {
        setShow(false);
      }
    },
    [referenceElement, popperElement]
  );

  const handleResize = useCallback(() => {
    if (referenceElement) {
      const width = window.getComputedStyle(referenceElement).getPropertyValue('width');
      setPopperWidth(width);
    }
  }, [referenceElement]);

  useEffect(() => {
    if (activeItem > -1) {
      const list = popperElement?.querySelector('ul');
      if (list) {
        const listHeight = list.offsetHeight;
        const listElements = popperElement?.querySelectorAll('li');
        if (listElements) {
          const item = listElements[activeItem];
          const itemHeight = item.offsetHeight;
          const scrollTop = list.scrollTop;

          const itemOffset = activeItem * itemHeight;
          const isBelow = itemOffset + itemHeight > scrollTop + listHeight;
          const isAbove = itemOffset < scrollTop;

          if (isAbove) {
            list.scrollTop = itemOffset;
          } else if (isBelow) {
            list.scrollTop = itemOffset - listHeight + itemHeight;
          } else {
            list.scrollTop = scrollTop;
          }
        }
      }
    }
  }, [activeItem, popperElement]);

  const handleOpenKeydown = useCallback(
    (event: KeyboardEvent) => {
      if (!isOpen) {
        return;
      }

      const key = event.key;
      const isCloseKey = key === ESCAPE || (key === UP_ARROW && event.altKey) || key === TAB;

      if (isCloseKey) {
        setShow(false);
        if (referenceElement) {
          referenceElement.focus();
        }
        return;
      }

      switch (key) {
        case DOWN_ARROW:
          activeItem < filteredData.length - 1 && setActiveItem(activeItem + 1);
          break;
        case UP_ARROW:
          activeItem > 0 && setActiveItem(activeItem - 1);
          break;
        case HOME:
          setActiveItem(0);
          break;
        case END:
          setActiveItem(filteredData.length - 1);
          break;

        case ENTER:
          if (activeItem > -1) {
            const item = filteredData[activeItem];
            setInputValue(displayValue ? displayValue(item) : item);
            setShow(false);
          }
          return;

        default:
          return;
      }
      event.preventDefault();
    },
    [activeItem, filteredData, referenceElement, setInputValue, isOpen, displayValue]
  );

  const handleInput = (e: any) => {
    setIsOpen(true);
    setActiveItem(-1);
    setInputValue(e.target.value);
  };

  useEffect(() => {
    window.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleOpenKeydown);

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleOpenKeydown);
    };
  }, [handleClick, handleResize, handleOpenKeydown]);

  useEffect(() => {
    if (isOpen) {
      setActiveItem(-1);
      setTimeout(() => {
        setShow(true);
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!show) {
      setTimeout(() => {
        setIsOpen(false);
      }, 100);
    }
  }, [show]);

  useEffect(() => {
    if (referenceElement) {
      const width = window.getComputedStyle(referenceElement).width;
      setPopperWidth(width);
    }
  }, [referenceElement, isOpen]);

  return (
    <>
      <MDBInput
        value={inputValue}
        onChange={handleInput}
        onFocus={() => setIsOpen(true)}
        className={className}
        inputRef={setReferenceElement}
        required={required}
        validation={validation}
        {...props}
      >
        {showLoader && (
          <div className='autocomplete-loader spinner-border'>
            <span className='sr-only'>Loading...</span>
          </div>
        )}
      </MDBInput>
      {isOpen &&
        threshold !== undefined &&
        inputValue !== undefined &&
        inputValue.length >= threshold &&
        ReactDOM.createPortal(
          <Tag
            className='autocomplete-dropdown-container'
            ref={setPopperElement}
            style={{ position: 'absolute', zIndex: 1065, ...styles.popper, width: popperWidth }}
            {...attributes.popper}
          >
            <MDBAutocompleteDropdown show={show}>
              <MDBAutocompleteItemsList role='listbox' style={{ maxHeight: `${listHeight}px` }}>
                {filteredData.length === 0 ? (
                  <MDBAutocompleteItem role='option'>{noResults}</MDBAutocompleteItem>
                ) : (
                  filteredData.map((element: string, index: number) => (
                    <MDBAutocompleteItem
                      activeItem={activeItem === index}
                      key={displayValue ? displayValue(element) + index : element + index}
                      onClick={() => {
                        referenceElement?.focus();
                        setInputValue(displayValue ? displayValue(element) : element);
                        setShow(false);
                      }}
                      role='option'
                    >
                      {itemContent ? itemContent(element) : displayValue ? displayValue(element) : element}
                    </MDBAutocompleteItem>
                  ))
                )}
              </MDBAutocompleteItemsList>
              {customContent && customContent}
            </MDBAutocompleteDropdown>
          </Tag>,
          document.body
        )}
    </>
  );
};

MDBAutocomplete.defaultProps = { tag: 'div', threshold: 0, noResults: 'No results found', listHeight: 190 };

export default MDBAutocomplete;
