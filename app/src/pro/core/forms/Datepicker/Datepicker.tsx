import React, { useCallback, useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import MDBInput from '../../../../free/core/forms/Input/Input';
import MDBIcon from '../../../../free/core/styles/Icon/Icon';
import MDBDatepickerModalContainer from './DatepickerModalContainer/DatepickerModalContainer';
import MDBDatepickerMain from './DatepickerMain/DatepickerMain';
import MDBAnimation from '../../styles/Animation/Animation';
import type { DatepickerProps } from './types';
import { usePopper } from 'react-popper';
import { flip } from '@popperjs/core';
import { LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, UP_ARROW, ENTER, PAGE_DOWN, PAGE_UP, HOME, END, SPACE } from './keycodes';
import clsx from 'clsx';

import {
  getMonth,
  addMonths,
  getYear,
  getDaysInMonth,
  getDate,
  getToday,
  getYearsOffset,
  isDateDisabled,
  isMonthDisabled,
  isYearDisabled,
  addDays,
  getDateWithLast,
  addYears,
  isSameDate,
  isValidDate,
  isNextDateDisabled,
  isPreviousDateDisabled,
  formatDate,
  parseDate,
} from './date-utils';
import { getDatesArray, getMonthsArray, getYearsArray } from './date-views';

const MDBDatepicker: React.FC<DatepickerProps> = ({
  inputRef,
  closeOnEsc,
  title,
  weekdaysShort,
  monthsShort,
  monthsFull,
  weekdaysNarrow,
  weekdaysFull,
  filter,
  inline,
  inputClasses,
  min,
  max,
  format,
  value,
  options,
  setValue,
  okBtnText,
  clearBtnText,
  cancelBtnText,
  inputToggle,
  icon,
  startDate,
  labelText,
  inputStyle,
  startDay,
  views,
  style,
}) => {
  const inputInnerRef = useRef<HTMLElement>(null);
  const inputReference = inputRef ? inputRef : inputInnerRef;
  const [isOpen, setIsOpen] = useState(false);
  const [isReadyToHide, setIsReadyToHide] = useState(false);
  const [activeDate, setActiveDate] = useState<Date>(startDate ? startDate : new Date());
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(startDate ? startDate : new Date());
  // dayView - 0, yearView - 1, monthView - 2
  const [view, setView] = useState(views === 'days' ? 0 : views === 'years' ? 1 : 2);
  const [yearScope, setYearScope] = useState([0, 0]);
  // popper
  const [popperElement, setPopperElement] = useState<HTMLElement>();
  const [referenceElement, setReferenceElement] = useState<HTMLInputElement>();
  const [startWeekdays, setStartWeekdays] = useState(weekdaysNarrow);

  const [tabCount, setTabCount] = useState(3);
  const backdropRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-start',
    modifiers: [flip],
    ...options,
  });

  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (closeOnEsc && e.key === 'Escape') {
        setIsReadyToHide(true);
      }
      e.preventDefault();

      if (e.key === 'Tab') {
        const focusableElemenets = modalRef.current?.querySelectorAll('[tabindex="0"]');
        if (focusableElemenets) {
          tabCount === focusableElemenets.length - 1 ? setTabCount(0) : setTabCount(tabCount + 1);
        }
      }

      if (e.key === 'Enter') {
        if (tabCount !== 3) {
          document.activeElement && (document.activeElement as HTMLElement).click();
        }
      }

      const focused = modalRef.current?.querySelector('.focused');

      if (focused && tabCount !== 4) {
        if (view === 0) {
          switch (e.key) {
            case LEFT_ARROW:
              setActiveDate(addDays(activeDate, -1));
              break;
            case RIGHT_ARROW:
              setActiveDate(addDays(activeDate, 1));
              break;
            case UP_ARROW:
              setActiveDate(addDays(activeDate, -7));
              break;
            case DOWN_ARROW:
              setActiveDate(addDays(activeDate, 7));
              break;
            case HOME:
              setActiveDate(addDays(activeDate, 1 - getDate(activeDate)));
              break;
            case END:
              setActiveDate(addDays(activeDate, getDaysInMonth(activeDate) - getDate(activeDate)));
              break;
            case PAGE_UP:
              setActiveDate(addMonths(activeDate, -1));
              break;
            case PAGE_DOWN:
              setActiveDate(addMonths(activeDate, 1));
              break;

            case ENTER:
              !isDateDisabled(activeDate, min, max, filter) && setSelectedDate(activeDate);
              break;

            case SPACE:
              if (!filter || filter(activeDate)) {
                setSelectedDate(activeDate);
              }
              return;

            default:
              return;
          }
        } else if (view === 1) {
          const yearsPerRow = 4;
          const yearsPerPage = 24;

          switch (e.key) {
            case LEFT_ARROW:
              setActiveDate(addYears(activeDate, -1));
              break;
            case RIGHT_ARROW:
              setActiveDate(addYears(activeDate, 1));
              break;
            case UP_ARROW:
              setActiveDate(addYears(activeDate, -yearsPerRow));
              break;
            case DOWN_ARROW:
              setActiveDate(addYears(activeDate, yearsPerRow));
              break;
            case HOME:
              setActiveDate(addYears(activeDate, -getYearsOffset(activeDate, yearsPerPage)));
              break;
            case END:
              setActiveDate(addYears(activeDate, yearsPerPage - getYearsOffset(activeDate, yearsPerPage) - 1));
              break;
            case PAGE_UP:
              setActiveDate(addYears(activeDate, -yearsPerPage));
              break;
            case PAGE_DOWN:
              setActiveDate(addYears(activeDate, yearsPerPage));
              break;
            case ENTER:
              !isYearDisabled(getYear(activeDate), min, max) && setView(2);
              break;
            case SPACE:
              !isYearDisabled(getYear(activeDate), min, max) && setSelectedDate(activeDate);
              return;
            default:
              return;
          }
        } else if (view === 2) {
          switch (e.key) {
            case LEFT_ARROW:
              setActiveDate(addMonths(activeDate, -1));
              break;
            case RIGHT_ARROW:
              setActiveDate(addMonths(activeDate, 1));
              break;
            case UP_ARROW:
              setActiveDate(addMonths(activeDate, -4));
              break;
            case DOWN_ARROW:
              setActiveDate(addMonths(activeDate, 4));
              break;
            case HOME:
              setActiveDate(addMonths(activeDate, -getMonth(activeDate)));
              break;
            case END:
              setActiveDate(addMonths(activeDate, 11 - getMonth(activeDate)));
              break;
            case PAGE_UP:
              setActiveDate(addYears(activeDate, -1));
              break;
            case PAGE_DOWN:
              setActiveDate(addYears(activeDate, 1));
              break;
            case ENTER:
              !isDateDisabled(activeDate, min, max, filter) && setView(0);
              break;
            case SPACE:
              !isDateDisabled(activeDate, min, max, filter) && setSelectedDate(activeDate);
              return;
            default:
              return;
          }
        }
      }
    },
    [activeDate, view, filter, max, min, closeOnEsc, tabCount]
  );

  const handleClickOutside = useCallback(
    (e: any) => {
      if (inline) {
        const shouldHidePicker =
          !popperElement?.contains(e.target as Node) &&
          !referenceElement?.parentNode?.contains(e.target as Node) &&
          !e.target.classList.contains('datepicker-view-change-button') &&
          !e.target.classList.contains('datepicker-large-cell-content');

        if (shouldHidePicker) {
          setIsReadyToHide(true);
        }
      } else {
        if (e.target === backdropRef.current) {
          setIsReadyToHide(true);
        }
      }
    },
    [popperElement, referenceElement, backdropRef, inline]
  );

  useEffect(() => {
    const focusableElemenets = modalRef.current?.querySelectorAll('[tabindex="0"]');

    if (focusableElemenets) {
      const focusedElement = focusableElemenets[tabCount];

      if (focusedElement.tagName !== 'TD') {
        (focusedElement as HTMLElement).focus();

        const focused = modalRef.current?.querySelector('.focused');
        focused?.classList.remove('focused');
      } else {
        (focusableElemenets[tabCount - 1] as HTMLElement).blur();
        focusedElement.classList.add('focused');
      }
    }
  }, [tabCount]);

  useEffect(() => {
    const hasVScroll = window.innerWidth > document.documentElement.clientWidth && window.innerWidth >= 576;
    if (!inline) {
      if (isOpen && hasVScroll) {
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = '17px';
      } else {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
      }
    }
  }, [isOpen, inline]);

  useEffect(() => {
    if (isReadyToHide) {
      setTimeout(() => {
        setIsOpen(false);
      }, 500);

      if (inputReference.current) {
        const btn = inputReference.current.parentNode.querySelector('button');

        btn ? btn.focus() : inputReference.current.focus();
      } else if (referenceElement?.parentNode) {
        const btn = referenceElement.parentNode.querySelector('button');

        btn ? btn.focus() : referenceElement.focus();
      }
    }
  }, [isReadyToHide, inputReference, referenceElement]);

  useEffect(() => {
    if (startDay) {
      const sortedWeekdays = weekdaysNarrow.slice(startDay).concat(weekdaysNarrow.slice(0, startDay));
      setStartWeekdays(sortedWeekdays);
    }
  }, [weekdaysNarrow, startDay]);

  useEffect(() => {
    const activeYear = getYear(activeDate);
    const yearsOffset = getYearsOffset(activeDate, 24);
    const firstYearInView = activeYear - yearsOffset;

    setYearScope([firstYearInView, firstYearInView + 23]);
  }, [activeDate]);

  useEffect(() => {
    if (!isOpen) {
      setIsReadyToHide(false);
      setView(views === 'days' ? 0 : views === 'years' ? 1 : 2);

      if (!value) {
        setActiveDate(startDate ? startDate : new Date());
        setSelectedDate(startDate ? startDate : undefined);
      } else if (selectedDate) {
        setActiveDate(selectedDate);
      }
    }
  }, [isOpen, startDate]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeydown);
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside, handleKeydown, isOpen, inline]);

  const confirmSelection = () => {
    if (format && selectedDate) {
      const dateString = formatDate(selectedDate, format, weekdaysShort, weekdaysFull, monthsShort, monthsFull);

      inputReference.current.value = dateString;
      setValue(dateString);
    }
    setIsReadyToHide(true);
  };

  const setActiveDay = (date: Date) => {
    const isNotDisabled = !isDateDisabled(date, min, max, filter);

    if (isNotDisabled) {
      setActiveDate(date);
      setSelectedDate(date);
    }
  };

  useEffect(() => {
    if (isOpen) {
      if (inputReference.current) {
        const btn = inputReference.current.parentNode.querySelector('button');

        btn && btn.blur();
      } else if (referenceElement?.parentNode) {
        const btn = referenceElement.parentNode.querySelector('button');

        btn && btn.blur();
      }
    }
  }, [isOpen, inputReference, referenceElement]);

  useEffect(() => {
    if (inputToggle) {
      inputReference.current?.addEventListener('click', () => setIsOpen(true));
    }
    return () => {
      inputReference.current?.removeEventListener('click', () => setIsOpen(true)); // eslint-disable-line react-hooks/exhaustive-deps
    };
  }, [inputToggle, inputReference]);

  useEffect(() => {
    if (inline && selectedDate && format) {
      const dateString = formatDate(selectedDate, format, weekdaysShort, weekdaysFull, monthsShort, monthsFull);
      if (referenceElement) {
        referenceElement.value = dateString;
        setValue(dateString);
        setIsReadyToHide(true);
      }
    }
  }, [selectedDate, inline, format, referenceElement, setValue]); // eslint-disable-line react-hooks/exhaustive-deps

  // false - left, true - right
  const handleArrows = (flag: boolean) => {
    if (view === 0) {
      const date = flag
        ? new Date(getYear(activeDate), getMonth(activeDate) + 1, getDateWithLast(activeDate))
        : new Date(getYear(activeDate), getMonth(activeDate) - 1, getDateWithLast(activeDate));

      if (flag) {
        !isNextDateDisabled(addMonths(date, -1), 'days', 1, min, max) && setActiveDate(date);
      } else {
        !isPreviousDateDisabled(addMonths(date, 1), 'days', 1, min, max) && setActiveDate(date);
      }
    } else if (view === 1) {
      const date = flag
        ? new Date(getYear(activeDate) + 24, getMonth(activeDate), getDate(activeDate))
        : new Date(getYear(activeDate) - 24, getMonth(activeDate), getDate(activeDate));

      if (flag) {
        max ? yearScope[0] + 24 < getYear(max) && setActiveDate(date) : setActiveDate(date);
      } else {
        min ? yearScope[1] - 24 > getYear(min) && setActiveDate(date) : setActiveDate(date);
      }
    } else if (view === 2) {
      const date = flag
        ? new Date(getYear(activeDate) + 1, getMonth(activeDate), getDate(activeDate))
        : new Date(getYear(activeDate) - 1, getMonth(activeDate), getDate(activeDate));

      if (flag) {
        !isNextDateDisabled(addYears(date, -1), 'months', 1, min, max) && setActiveDate(date);
      } else {
        !isPreviousDateDisabled(addYears(date, 1), 'months', 1, min, max) && setActiveDate(date);
      }
    }
  };

  const clearDate = (e: any) => {
    e.target.blur();

    setActiveDate(startDate ? startDate : new Date());
    setSelectedDate(undefined);
    setValue('');
    setTabCount(3);
  };

  const handleInput = (e: any) => {
    const date = parseDate(e.target.value, format, monthsFull, monthsShort);
    setValue(e.target.value);

    if (date && isValidDate(date)) {
      setActiveDate(date);
      setSelectedDate(date);
    } else {
      setActiveDate(new Date());
      setSelectedDate(undefined);
    }
  };

  const dayView = (
    <table className='datepicker-table'>
      <thead>
        <tr>
          {startWeekdays.map((row: string, i: number) => (
            <th key={i} className='datepicker-day-heading' scope='col'>
              {row}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className='datepicker-table-body'>
        {getDatesArray(activeDate, selectedDate, min, max, filter, startDay).map((week, weekNr) => (
          <tr key={weekNr}>
            {week.map((day, dayNr) => (
              <td
                key={dayNr}
                onClick={() => setActiveDay(day.date)}
                tabIndex={isSameDate(day.date, activeDate) ? 0 : undefined}
                className={clsx(
                  'datepicker-cell',
                  'datepicker-small-cell',
                  'datepicker-day-cell',
                  day.isToday && 'current',
                  day.isSelected && 'selected',
                  day.disabled && 'disabled',
                  tabCount === 3 && isSameDate(day.date, activeDate) && 'focused',
                  getMonth(activeDate) !== getMonth(day.date) && 'disabled'
                )}
              >
                <div
                  className='datepicker-cell-content datepicker-small-cell-content'
                  style={{ display: day.currentMonth ? 'block' : 'none' }}
                >
                  {day.dayNumber}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  const monthView = (
    <table className='datepicker-table'>
      <tbody className='datepicker-table-body'>
        {getMonthsArray(monthsShort).map((row, i) => (
          <tr key={i}>
            {row.map((month) => (
              <td
                key={monthsShort.indexOf(month)}
                onClick={() => {
                  setActiveDate(new Date(getYear(activeDate), monthsShort.indexOf(month), getDateWithLast(activeDate)));
                  setView(0);
                }}
                tabIndex={monthsShort.indexOf(month) === getMonth(activeDate) ? 0 : undefined}
                className={clsx(
                  'datepicker-cell',
                  'datepicker-large-cell',
                  'datepicker-month-cell',
                  selectedDate &&
                    monthsShort.indexOf(month) === getMonth(selectedDate) &&
                    getYear(activeDate) === getYear(selectedDate) &&
                    'selected',
                  tabCount === 3 && monthsShort.indexOf(month) === getMonth(activeDate) && 'focused',
                  getMonth(getToday()) === monthsShort.indexOf(month) &&
                    getYear(getToday()) === getYear(activeDate) &&
                    'current',
                  isMonthDisabled(monthsShort.indexOf(month), getYear(activeDate), min, max) && 'disabled'
                )}
              >
                <div className='datepicker-cell-content datepicker-large-cell-content'>{month}</div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  const yearView = (
    <table className='datepicker-table'>
      <tbody className='datepicker-table-body'>
        {getYearsArray(yearScope).map((row, i) => (
          <tr key={i}>
            {row.map((year) => (
              <td
                key={year}
                onClick={() => {
                  setActiveDate(new Date(year, getMonth(activeDate), getDate(activeDate)));
                  setView(2);
                }}
                tabIndex={year === getYear(activeDate) ? 0 : undefined}
                className={clsx(
                  'datepicker-cell',
                  'datepicker-large-cell',
                  'datepicker-year-cell',
                  selectedDate && year === getYear(selectedDate) && 'selected',
                  tabCount === 3 && year === getYear(activeDate) && 'focused',
                  isYearDisabled(year, min, max) && 'disabled',
                  getYear(getToday()) === year && 'current'
                )}
              >
                <div className='datepicker-cell-content datepicker-large-cell-content'>{year}</div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <>
      <MDBInput
        btnOnClick={() => setIsOpen(!isOpen)}
        btnClasses='datepicker-toggle-button'
        btn={!inputToggle && icon}
        className={clsx(value ? 'active' : '', inputClasses)}
        label={labelText}
        inputRef={inline ? setReferenceElement : inputReference}
        wrapperClass='datepicker'
        value={value}
        onChange={handleInput}
        style={inputStyle}
        wrapperStyle={style}
      />
      {isOpen &&
        ReactDOM.createPortal(
          <>
            <MDBDatepickerModalContainer
              dropdown={inline}
              isOpen={isReadyToHide}
              styles={styles}
              attributes={attributes}
              setPopperElement={setPopperElement}
            >
              {!inline && (
                <div className='datepicker-header'>
                  <div className='datepicker-title'>
                    <span className='datepicker-title-text'>{title}</span>
                  </div>
                  <div className='datepicker-date'>
                    <span className='datepicker-date-text'>
                      {weekdaysShort[selectedDate ? selectedDate.getDay() : new Date().getDay()]},{' '}
                      {monthsShort[selectedDate ? selectedDate.getMonth() : new Date().getMonth()]}{' '}
                      {selectedDate ? selectedDate.getDate() : new Date().getDate()}
                    </span>
                  </div>
                </div>
              )}
              <MDBDatepickerMain ref={modalRef}>
                <div className='datepicker-date-controls'>
                  {view === 0 && (
                    <button tabIndex={0} className='datepicker-view-change-button' onClick={() => setView(1)}>
                      {monthsFull[activeDate.getMonth()]} {activeDate.getFullYear()}
                    </button>
                  )}
                  {view === 1 && (
                    <button tabIndex={0} className='datepicker-view-change-button' onClick={() => setView(0)}>
                      {yearScope[0]} - {yearScope[1]}
                    </button>
                  )}
                  {view === 2 && (
                    <button tabIndex={0} className='datepicker-view-change-button' onClick={() => setView(0)}>
                      {getYear(activeDate)}
                    </button>
                  )}

                  <div className='datepicker-arrow-controls'>
                    <button
                      tabIndex={0}
                      className='datepicker-previous-button'
                      onClick={() => handleArrows(false)}
                    ></button>
                    <button tabIndex={0} className='datepicker-next-button' onClick={() => handleArrows(true)}></button>
                  </div>
                </div>
                <div className='datepicker-main'>
                  {view === 0 && dayView}
                  {view === 1 && yearView}
                  {view === 2 && monthView}
                </div>
                {!inline && (
                  <div className='datepicker-footer'>
                    <button
                      tabIndex={0}
                      onClick={(e) => clearDate(e)}
                      className='datepicker-footer-btn datepicker-clear-btn'
                    >
                      {clearBtnText}
                    </button>
                    <button
                      tabIndex={0}
                      onClick={() => setIsReadyToHide(true)}
                      className='datepicker-footer-btn datepicker-cancel-btn'
                    >
                      {cancelBtnText}
                    </button>
                    <button tabIndex={0} onClick={confirmSelection} className='datepicker-footer-btn datepicker-ok-btn'>
                      {okBtnText}
                    </button>
                  </div>
                )}
              </MDBDatepickerMain>
            </MDBDatepickerModalContainer>
            {!inline && (
              <MDBAnimation
                tag='div'
                animation={isReadyToHide ? 'fade-out' : 'fade-in'}
                start='onLoad'
                animationRef={backdropRef}
                className='datepicker-backdrop'
              />
            )}
          </>,
          document.body
        )}
    </>
  );
};

MDBDatepicker.defaultProps = {
  isOpen: false,
  closeOnEsc: true,
  title: 'Select date',
  inline: false,
  monthsFull: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  weekdaysFull: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  weekdaysNarrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  format: 'dd/mm/yyyy',
  okBtnText: 'Ok',
  clearBtnText: 'Clear',
  cancelBtnText: 'Cancel',
  inputToggle: false,
  icon: <MDBIcon far icon='calendar' className='datepicker-toggle-icon' />,
  labelText: 'Select a date',
  views: 'days',
  startDay: 0,
};

export default MDBDatepicker;
