/* eslint-disable @typescript-eslint/ban-ts-comment */
import clsx from 'clsx';
import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { usePopper } from 'react-popper';
import MDBInput from '../../../../free/core/forms/Input/Input';
import MDBSelectDropdown from './SelectDropdown/SelectDropdown';
import MDBSelectIconContainer from './SelectIconContainer/SelectIconContainer';
import MDBSelectOption from './SelectOptionsList/SelectOption/SelectOption';
import MDBSelectOptionGroup from './SelectOptionsList/SelectOptionGroup/SelectOptionGroup';
import MDBSelectOptionGroupLabel from './SelectOptionsList/SelectOptionGroup/SelectOptionGroupLabel/SelectOptionGroupLabel';
import MDBSelectOptionIcon from './SelectIconContainer/SelectOptionIcon/SelectOptionIcon';
import MDBSelectOptionsList from './SelectOptionsList/SelectOptionsList';
import MDBSelectOptionsWrapper from './SelectOptionsWrapper/SelectOptionsWrapper';
import ReactDOM from 'react-dom';
import type { SelectProps } from './types';
import './style.css';

interface iconMainDataInf {
  src?: string;
  className?: string;
  text?: string;
}

interface mainDataInf {
  disabled?: boolean;
  className?: string;
  text: string;
  height?: string | number;
  selected?: boolean;
  secondaryText?: React.ReactNode;
  value?: string | number;
  style?: React.CSSProperties;
  revert?: boolean;
  icon?: iconMainDataInf;
  active?: boolean;
}
interface groupDataInf {
  group?: { data: mainDataInf[]; text: string; height?: string | number };
  height?: string | number;
}

const MDBSelect: React.FC<SelectProps> = ({
  children,
  className,
  clearBtn,
  data,
  tag: Tag,
  tagWrapper: TagWrapper,
  visibleOptions,
  placeholder,
  disabled,
  search,
  optgroup,
  multiple,
  getSelectedValue,
  optionSelected,
  label,
  getData,
  selectAllLabel,
  validation,
  noResultLabel,
  searchLabel,
  ...props
}): JSX.Element => {
  const [focus, setFocus] = useState(false);
  const [widthInput, setWidthInput] = useState('');
  const [attachELements, setAttachELements] = useState(false);
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState<string | undefined>('');
  const refWrapper = useRef<HTMLDivElement>(null);
  const [optionListMaxHeight, setOptionListMaxHeight] = useState<null | string | number>(null);
  const [filteredData, setFilteredData] = useState<mainDataInf[]>(data);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [activeClassLabel, setActiveClassLabel] = useState(false);
  const [textMultiple, setTextMultiple] = useState<any>([]);
  const [checkedToSelectAll, setCheckedToSelectAll] = useState(false);
  const [testData, setTestData] = useState<mainDataInf[]>(data);
  const [referenceElement, setReferenceElement] = useState<HTMLElement>();
  const [popperElement, setPopperElement] = useState<HTMLElement>();

  const [indexOption, setIndexOption] = useState(filteredData.findIndex((e: any) => !e.disabled && e.selected));
  const inputRef = useRef<HTMLDivElement>(null);
  const [isFoucsed, setIsFocused] = useState(false);
  const serchInputRef = useRef<HTMLInputElement>(null);
  const [arrowFocus, setArrowFocus] = useState<any>(0);

  const [arrowUpPress, setArrowUpPrees] = useState(false);
  const [arrowDownPress, setArrowDownPrees] = useState(false);

  const optionsWrapperRef = useRef<HTMLDivElement>(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-start',
  });

  const classes = clsx('select-wrapper', className);
  const inputClasses = clsx(
    'select-input',
    placeholder && 'placeholder-active',
    activeClassLabel && label && 'active',
    focus && 'focused'
  );

  useEffect(() => {
    if (attachELements && search) {
      setTimeout(() => {
        serchInputRef.current?.focus();
      }, 100);
    }
  }, [attachELements, search]);

  const handeResize = useCallback(() => {
    if (referenceElement === null || referenceElement === undefined) return;

    if (attachELements) {
      setTimeout(() => {
        //@ts-ignore
        const style = getComputedStyle(referenceElement.parentNode?.parentNode);
        //@ts-ignore
        setWidthInput(style.webkitLogicalWidth);
      }, 100);
    }
  }, [referenceElement, attachELements]);

  useEffect(() => {
    handeResize();
  }, [handeResize]);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (popperElement && popperElement !== null && focus && referenceElement && referenceElement !== null) {
        if (!popperElement.contains(e.target as Node) && !referenceElement.contains(e.target as Node)) {
          setFocus(false);
          setActiveClassLabel(false);
          if (search) {
            setTimeout(() => {
              setSearchInputValue('');
            }, 100);
          }
        } else {
          setActiveClassLabel(true);
        }
      }
    },
    [focus, popperElement, referenceElement, search]
  );

  const handleInputClick = useCallback(() => {
    setFocus(!focus);

    if (search) setSearchInputValue('');
  }, [focus, search]);

  const handleClearBtn = () => {
    setInputValue('');
    setActiveClassLabel(false);

    setFilteredData(
      data.map((e: any) => {
        return { ...e, active: false, selected: false };
      })
    );

    setTestData(
      data.map((e: any) => {
        return { ...e, active: false, selected: false };
      })
    );
  };

  const handleSelectAllClick = () => {
    setCheckedToSelectAll(!checkedToSelectAll);

    if (!checkedToSelectAll) {
      setTestData(
        filteredData.map((e: any) => {
          return { ...e, active: false, selected: true };
        })
      );
    } else {
      setTestData(
        filteredData.map((e: any) => {
          return { ...e, selected: false };
        })
      );
    }
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isFoucsed && !attachELements && arrowFocus !== undefined) {
      if (!multiple) {
        const mappedFocusData = data
          .filter((e: mainDataInf) => !e.disabled)
          .map((e: mainDataInf, index: number) => {
            if (index === arrowFocus) {
              return { ...e, selected: true, active: true };
            } else {
              return { ...e, selected: false, active: false };
            }
          });

        if (arrowFocus <= 0) {
          setInputValue(mappedFocusData[0].text);
          getSelectedValue && getSelectedValue(mappedFocusData[0].value);
        } else if (arrowFocus >= mappedFocusData.length - 1) {
          setInputValue(mappedFocusData[mappedFocusData.length - 1].text);
          getSelectedValue && getSelectedValue(mappedFocusData[mappedFocusData.length - 1].value);
        } else {
          setInputValue(mappedFocusData[arrowFocus].text);
          getSelectedValue && getSelectedValue(mappedFocusData[arrowFocus].value);
        }

        const merged = [];

        for (let i = 0; i < data.length; i++) {
          merged.push({
            ...data[i],
            ...mappedFocusData.find((itm: any) => itm.text === data[i].text),
          });
        }

        getData && getData(merged);

        setTestData(merged);
        setFilteredData(merged);
      } else {
        setFocus(true);
      }
    }

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrowFocus]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let secondTimer: ReturnType<typeof setTimeout>;

    if (focus) {
      setAttachELements(true);

      if (label) {
        setActiveClassLabel(true);
      }

      secondTimer = setTimeout(() => {
        setShow(true);
      }, 100);
    } else {
      timer = setTimeout(() => {
        setAttachELements(false);
      }, 100);

      if (label) {
        setActiveClassLabel(false);
      }
      setShow(false);
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(secondTimer);
    };
  }, [focus, label]);

  useEffect(() => {
    if (!multiple) return;

    if (checkedToSelectAll) {
      const textSelected = testData.filter((e) => !e.disabled).map((e: any) => e.text);

      setFilteredData(
        testData.map((e) => {
          if (e.selected === undefined) {
            return { ...e, active: true, selected: true };
          } else {
            return e;
          }
        })
      );
      setTextMultiple(textSelected);
      setInputValue(`${textSelected.length} option${textSelected.length <= 1 ? '' : 's'} selected`);
    } else {
      const textSelected = testData.filter((e) => !e.disabled && e.selected).map((e: any) => e.text);

      setFilteredData(testData);
      setTextMultiple(textSelected);
      setInputValue(`${textSelected.length} option${textSelected.length <= 1 ? '' : 's'} selected`);
    }
  }, [checkedToSelectAll, multiple, testData]);

  useEffect(() => {
    if (!multiple) return;

    if (textMultiple.length >= Number(optionSelected)) {
      setInputValue(`${textMultiple.length} option${textMultiple.length <= 1 ? '' : 's'} selected`);
    } else {
      setInputValue(textMultiple.join(', '));
    }
  }, [textMultiple, multiple, optionSelected]);

  useEffect(() => {
    if (!optgroup) {
      if (!multiple) {
        const selectedData = filteredData.map((e: any) => {
          if (e.selected === undefined) {
            return { ...e, active: false, selected: false };
          } else {
            return { ...e, active: true };
          }
        });
        const selectedFiltered = selectedData.filter((e: any) => e.selected === true && !e.disabled);

        if (selectedFiltered.length > 0) {
          setFilteredData(selectedData);
          setInputValue(selectedFiltered[0].text);
          getSelectedValue && getSelectedValue(selectedFiltered[0].value);
        }
        getData && getData(selectedData);
      } else {
        const selectedData = data.map((e: any) => {
          if (e.selected === undefined) {
            return { ...e, active: false, selected: false };
          } else {
            return { ...e, active: true };
          }
        });
        setFilteredData(selectedData);
        const textSelected = testData.filter((e: any) => e.selected === true && !e.disabled).map((e) => e.text);
        setTextMultiple(textSelected);
        if (textMultiple.length >= Number(optionSelected)) {
          setInputValue(`${textMultiple.length} option${textMultiple.length <= 1 ? '' : 's'} selected`);
        } else {
          setInputValue(textMultiple.join(', '));
        }
      }
    } else {
      const reduced = data.reduce((acc: any, curr: any) => {
        const mapped = curr.group.data.map((e: any) => {
          if (e.selected === undefined) {
            return { ...e, selected: false };
          } else {
            return e;
          }
        });
        curr.group.data = mapped;
        acc.push(curr);
        return acc;
      }, []);
      const filteredData = reduced
        .map((e: any) => {
          return e.group.data.filter((el: any) => el.selected === true);
        })
        .flat();
      if (filteredData.length > 0) {
        setFilteredData(reduced);
        setInputValue(filteredData[0].text);
        getSelectedValue && getSelectedValue(filteredData[0].value);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (attachELements) {
      window.addEventListener('resize', handeResize);
    }
    return () => {
      window.removeEventListener('resize', handeResize);
    };
  }, [handeResize, attachELements]);

  useEffect(() => {
    if (attachELements) {
      window.addEventListener('click', handleClickOutside);
    }
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside, attachELements]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let secondTimer: ReturnType<typeof setTimeout>;

    if (focus) {
      setAttachELements(true);

      if (label) {
        setActiveClassLabel(true);
      }

      secondTimer = setTimeout(() => {
        setShow(true);
      }, 100);
    } else {
      timer = setTimeout(() => {
        setAttachELements(false);
      }, 100);

      if (label) {
        setActiveClassLabel(false);
      }
      setShow(false);
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(secondTimer);
    };
  }, [focus, label]);

  const handeStyleElements = useCallback(
    (array, arr: number[], visibile = visibleOptions) => {
      [...array].slice(0, visibile).forEach((e: any) => {
        const { height } = getComputedStyle(e);

        arr.push(parseFloat(height));
      });

      return arr;
    },
    [visibleOptions]
  );

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (attachELements) {
      const ref = refWrapper.current?.children;
      const arr: number[] = [];
      timer = setTimeout(() => {
        if (ref === undefined) return;

        if (!optgroup) {
          handeStyleElements(ref, arr);
        } else {
          const array: Element[] = [];

          //@ts-ignore
          [...ref].map((group) => {
            const children = group.children;
            array.push(...children);
          });

          handeStyleElements(array, arr);
        }

        setOptionListMaxHeight(arr.reduce((a, b) => a + b));
      }, 0);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [attachELements, visibleOptions, optgroup, handeStyleElements]);

  useEffect(() => {
    if (!multiple) return;

    if (textMultiple.length >= Number(optionSelected)) {
      setInputValue(`${textMultiple.length} option${textMultiple.length <= 1 ? '' : 's'} selected`);
    } else {
      setInputValue(textMultiple.join(', '));
    }
  }, [textMultiple, multiple, optionSelected]);

  const handleListClick = useCallback(
    ({ disabled, className, text, value, selected }: mainDataInf, index: number) => {
      if (disabled || (className !== undefined && className.includes('select-no-results'))) return;

      if (multiple) {
        const dataSelected = filteredData.map((el, i) => {
          if (i === index) {
            el.selected = !el.selected;
          }

          return el;
        });
        setFilteredData(dataSelected);
        setIndexOption(index);

        if (text !== undefined && (!selected || selected === undefined)) {
          setTextMultiple([...textMultiple, text]);
        } else if (text !== undefined && selected) {
          setTextMultiple(textMultiple.filter((t: string) => t !== text));
        }
      } else {
        setIndexOption(index);
        setInputValue(text);
        setFocus(false);
        getSelectedValue && getSelectedValue(value);

        const mapped = filteredData.map((d, i) => {
          if (i !== index) {
            d.selected = false;
            d.active = false;
          } else {
            d.selected = true;
            d.active = true;
          }
          return d;
        });

        const dataSelected = data.map((e: any) => {
          return { ...e, active: false, selected: false };
        });

        const merged = [];

        for (let i = 0; i < dataSelected.length; i++) {
          merged.push({
            ...dataSelected[i],
            ...mapped.find((itm: any) => itm.text === dataSelected[i].text),
          });
        }
        setFilteredData(merged);
        setTestData(merged);

        getData && getData(merged);
      }
    },
    [data, filteredData, getData, getSelectedValue, multiple, textMultiple]
  );

  const handleListGroupClick = (e: any) => {
    if (e.disabled || (e.className !== undefined && e.className.includes('select-no-results'))) return;

    setInputValue(e.text);
    setFocus(false);
    getSelectedValue && getSelectedValue(e.value);

    const reduced = data.reduce((acc: any, curr: any) => {
      const mapped = curr.group.data.map((elData: any) => {
        if (elData.text !== e.text) {
          elData.selected = false;
        } else {
          elData.selected = true;
        }

        return elData;
      });

      curr.group.data = mapped;
      acc.push(curr);
      return acc;
    }, []);

    setFilteredData(reduced);
    setTestData(reduced);
  };

  const handleKeyboard = useCallback(
    (e: KeyboardEvent) => {
      let timer: ReturnType<typeof setTimeout>;
      let secondTimer: ReturnType<typeof setTimeout>;
      let thirdTimer: ReturnType<typeof setTimeout>;

      const { key } = e;

      e.preventDefault();

      if (key === 'Escape') {
        timer = setTimeout(() => {
          setAttachELements(false);
          if (search) setSearchInputValue('');
        }, 100);

        setFocus(false);
        setShow(false);
      }

      if (key === 'ArrowDown') {
        const notDisabled = filteredData.filter((e) => !e.disabled);

        if (attachELements) {
          let index = notDisabled.findIndex((e) => e.active);

          index += 1;

          if (index > filteredData.length - 1) {
            index = 0;
          }
          setArrowUpPrees(false);
          setArrowDownPrees(true);

          setIndexOption(index);
        } else {
          let index = notDisabled.findIndex((e) => e.selected);

          if (index === notDisabled.length - 1) {
            index = notDisabled.length - 1;
          } else {
            index += 1;
          }

          setArrowFocus(index);
        }
      }

      if (key === 'ArrowUp') {
        const notDisabled = filteredData.filter((e) => !e.disabled);

        if (attachELements) {
          let index = notDisabled.findIndex((e) => e.active);

          index -= 1;

          if (index < 0) {
            index = notDisabled.length - 1;
          }
          setArrowUpPrees(true);
          setArrowDownPrees(false);

          setIndexOption(index);
        } else {
          let index = filteredData.filter((e) => !e.disabled).findIndex((e) => e.selected);

          index -= 1;

          if (index <= 0) {
            index = 0;
          }

          setArrowFocus(index);
        }
      }

      if (key === 'Enter') {
        if (!attachELements) {
          secondTimer = setTimeout(() => {
            setAttachELements(true);
            setFocus(true);
            setShow(true);
          }, 100);
        } else {
          if (!multiple) {
            thirdTimer = setTimeout(() => {
              setAttachELements(false);
              if (search) setSearchInputValue('');
            }, 100);
            setInputValue(filteredData.filter((e) => e.active && !e.disabled)[0].text);
            setTestData(
              filteredData.map((e) => {
                if (e.active) {
                  return { ...e, active: true, selected: true };
                } else {
                  return { ...e, active: false, selected: false };
                }
              })
            );
            setFocus(false);
            setShow(false);
          } else {
            console.log(filteredData);
          }
        }
      }
      return () => {
        clearTimeout(timer);
        clearTimeout(secondTimer);
        clearTimeout(thirdTimer);
      };
    },
    [search, filteredData, multiple, attachELements]
  );

  useEffect(() => {
    const ref1 = optionsWrapperRef.current;

    if (refWrapper === null) return;
    const arr: number[] = [];
    const arr1: number[] = [];

    if (attachELements) {
      const ref = refWrapper.current?.children;
      setTimeout(() => {
        handeStyleElements(ref, arr, data.length);
        handeStyleElements(ref, arr1, indexOption);

        if (arr1.length === 0) return;

        const optionHeight = arr1.reduce((a, b) => a + b);
        //@ts-ignore
        if (optionListMaxHeight === null || ref1 === null) return;

        if (optionHeight > optionListMaxHeight) {
          ref1.scrollTop = optionHeight;
        }
      }, 100);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attachELements, indexOption]);

  useEffect(() => {
    const ref1 = optionsWrapperRef.current;

    if (refWrapper === null) return;

    const arr: number[] = [];
    const arr1: number[] = [];

    if (attachELements && multiple) {
      const ref = refWrapper.current?.children;

      setTimeout(() => {
        handeStyleElements(ref, arr, data.length);
        handeStyleElements(ref, arr1, indexOption + 1);

        const allOptionsHeight = arr.reduce((a, b) => a + b);
        const optionHeight = arr1.reduce((a, b) => a + b);

        console.log({ allOptionsHeight }, { optionHeight }, { indexOption });

        const dataMapped = testData
          .filter((e) => !e.disabled)
          .map((e: any, index: number) => {
            if (index === indexOption) {
              return { ...e, active: true };
            } else {
              return { ...e, active: false };
            }
          });

        setFilteredData(dataMapped);
      }, 100);
    }
  }, [attachELements, data.length, handeStyleElements, testData, indexOption, multiple]);

  useEffect(() => {
    const ref1 = optionsWrapperRef.current;

    if (refWrapper === null) return;
    const arr: number[] = [];
    const arr1: number[] = [];

    if (attachELements && !multiple) {
      const ref = refWrapper.current?.children;
      setTimeout(() => {
        handeStyleElements(ref, arr, data.length);
        handeStyleElements(ref, arr1, indexOption + 2);

        const allOptionsHeight = arr.reduce((a, b) => a + b);
        const optionHeight = arr1.reduce((a, b) => a + b);

        const dataMapped = testData.map((e: any, index: number) => {
          if (index === indexOption) {
            return { ...e, active: true };
          } else {
            return { ...e, active: false };
          }
        });

        setFilteredData(dataMapped);

        //@ts-ignore
        if (optionListMaxHeight === null || ref1 === null) return;

        if (arrowDownPress) {
          if (optionHeight > optionListMaxHeight) {
            //@ts-ignore
            ref1.scrollTop = optionHeight - optionListMaxHeight;
          } else {
            ref1.scrollTop = 0;
          }
        }
        if (arrowUpPress) {
          if (optionHeight <= optionListMaxHeight) {
            //@ts-ignore
            ref1.scrollTop = optionHeight - 38 * 2;
          } else {
            ref1.scrollTop = allOptionsHeight;
          }
        }
      }, 100);
    }
  }, [
    multiple,
    attachELements,
    data,
    testData,
    arrowDownPress,
    arrowUpPress,
    handeStyleElements,
    indexOption,
    optionListMaxHeight,
  ]);

  useEffect(() => {
    if (isFoucsed) {
      window.addEventListener('keydown', handleKeyboard);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyboard);
    };
  }, [isFoucsed, handleKeyboard]);

  useEffect(() => {
    if (!multiple) return;

    const selected = filteredData.filter((e) => e.selected && !e.disabled);
    const notDisabled = filteredData.filter((e) => !e.disabled);

    if (selected.length !== notDisabled.length) {
      setCheckedToSelectAll(false);
    } else {
      setCheckedToSelectAll(true);
    }
  }, [filteredData, multiple]);

  const normalData = () => {
    return filteredData.map((e: mainDataInf, index: number) => {
      return (
        <MDBSelectOption
          onClick={() => handleListClick(e, index)}
          onChange={() => handleListClick(e, index)}
          data-value={e.value}
          active={e.active}
          className={e.className}
          height={e.height}
          style={e.style}
          selected={e.selected}
          key={e.text + index}
          disabled={e.disabled}
          secondaryText={e.secondaryText}
          text={e.text}
          revert={e.revert}
          multiple={multiple}
        >
          {e.icon && (
            <MDBSelectIconContainer>
              {typeof e.icon === 'object' && e.icon.constructor === Object && !React.isValidElement(e.icon) ? (
                <MDBSelectOptionIcon className={e.icon.className} src={e.icon.src ? e.icon.src : ''}>
                  {e.icon.text}
                </MDBSelectOptionIcon>
              ) : (
                e.icon
              )}
            </MDBSelectIconContainer>
          )}
        </MDBSelectOption>
      );
    });
  };

  const groupData = () => {
    return filteredData.map(({ group }: groupDataInf, index: number) => {
      if (group == undefined) return;
      return (
        <MDBSelectOptionGroup key={group.text + index}>
          <MDBSelectOptionGroupLabel height={group.height}>{group.text}</MDBSelectOptionGroupLabel>

          {group.data.map((el: mainDataInf, i: number) => {
            return (
              <MDBSelectOption
                onClick={() => handleListGroupClick(el)}
                active={el.active}
                data-value={el.value}
                style={el.style}
                className={el.className}
                height={el.height}
                selected={el.selected}
                key={el.text + i}
                disabled={el.disabled}
                secondaryText={el.secondaryText}
                text={el.text}
                revert={el.revert}
              />
            );
          })}
        </MDBSelectOptionGroup>
      );
    });
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };
  const handleKeyDownSearchInput = useCallback(
    (e: any) => {
      if (e.key === 'ArrowUp') {
        if (attachELements) {
          let index = filteredData.findIndex((e) => e.active) - 1;

          if (index < 0) {
            index = filteredData.length - 1;
          }
          setIndexOption(index);
        } else {
          let index = filteredData.filter((e) => !e.disabled).findIndex((e) => e.selected);

          if (index <= 0) {
            index = 0;
          }
          setArrowFocus(index - 1);
        }
      }

      if (e.key === 'ArrowDown') {
        if (attachELements) {
          let index = filteredData.findIndex((e) => e.active) + 1;

          if (index > filteredData.length - 1) {
            index = 0;
          }

          setIndexOption(index);
        } else {
          let index = filteredData.filter((e) => !e.disabled).findIndex((e) => e.selected);

          if (index === filteredData.length - 1) {
            index = filteredData.length - 1;
          } else {
            index += 1;
          }
          setArrowFocus(index);
        }
      }
    },
    [attachELements, filteredData]
  );

  useMemo(() => {
    if (attachELements && search && !optgroup) {
      const filter = testData.filter((el: any) => {
        const text = el.text.toLowerCase();
        return text.includes(searchInputValue.toLowerCase());
      });

      if (filter.length === 0) {
        //@ts-ignore
        setFilteredData([{ text: noResultLabel, className: 'select-no-results' }]);
      } else {
        setFilteredData(filter);
      }
    }
  }, [attachELements, testData, search, optgroup, noResultLabel, searchInputValue]);

  return (
    <Tag className={classes} ref={inputRef}>
      <MDBInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={inputValue}
        className={inputClasses}
        labelClass={focus ? 'select-input-label-active' : ''}
        ref={setReferenceElement}
        onClick={handleInputClick}
        readOnly
        placeholder={placeholder}
        disabled={disabled}
        wrapperStyle={{ zIndex: 0 }}
        label={label}
        tabIndex={0}
        aria-expanded={attachELements ? true : false}
        aria-disabled={disabled ? true : false}
        aria-haspopup={true}
        role='listbox'
        {...props}
      >
        {inputValue !== undefined && inputValue.length > 0 && clearBtn && (
          <span className='select-clear-btn d-block' role='button' onClick={handleClearBtn}>
            ✕
          </span>
        )}
        <span className='select-arrow' style={{ zIndex: -1 }} />
      </MDBInput>

      {attachELements &&
        ReactDOM.createPortal(
          <TagWrapper style={{ ...styles.popper, width: widthInput }} {...attributes.popper} ref={setPopperElement}>
            <MDBSelectDropdown open={show}>
              {search && (
                <div className='input-group'>
                  <MDBInput
                    className='select-filter-input placeholder-active'
                    placeholder={searchLabel}
                    role='searchbox'
                    type='text'
                    onKeyDown={handleKeyDownSearchInput}
                    onChange={handleSearchInput}
                    value={searchInputValue}
                    ref={serchInputRef}
                  />
                </div>
              )}
              <MDBSelectOptionsWrapper ref={optionsWrapperRef} maxHeight={optionListMaxHeight}>
                <MDBSelectOptionsList ref={refWrapper}>
                  {multiple && (
                    <MDBSelectOption
                      onClick={handleSelectAllClick}
                      selected={checkedToSelectAll}
                      height={38}
                      text={selectAllLabel}
                      multiple
                    />
                  )}
                  {optgroup ? groupData() : normalData()}
                  {children && <div className='select-custom-content'>{children}</div>}
                </MDBSelectOptionsList>
              </MDBSelectOptionsWrapper>
            </MDBSelectDropdown>
          </TagWrapper>,
          document.body
        )}
    </Tag>
  );
};

MDBSelect.defaultProps = {
  noResultLabel: 'No results',
  optionSelected: 5,
  searchLabel: 'Search...',
  selectAllLabel: 'Select all',
  tag: 'span',
  tagWrapper: 'div',
  validation: false,
  visibleOptions: 5,
};

export default MDBSelect;
