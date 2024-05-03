import React, { useEffect, useState, useRef } from 'react';
import type { DatatableProps } from './types';
import DatatableInner from './DatatableInner/DatatableInner';
import DatatablePagination from './DatatablePagination/DatatablePagination';
import Select from '../../forms/Select/Select';
import Icon from '../../../../free/core/styles/Icon/Icon';
import Table from '../../../../free/core/data/Tables/Table';
import TableHead from '../../../../free/core/data/Tables/TableHead/TableHead';
import TableBody from '../../../../free/core/data/Tables/TableBody/TableBody';
import Input from '../../../../free/core/forms/Input/Input';
import InputGroup from '../../../../free/core/forms/InputGroup/InputGroup';
import InputGroupElement from '../../../../free/core/forms/InputGroup/InputGroupElement/InputGroupElement';
import Checkbox from '../../../../free/core/forms/Checkbox/Checkbox';
import clsx from 'clsx';

const MDBDatatable: React.FC<DatatableProps> = ({
  advancedSearch,
  advancedData,
  className,
  bordered,
  borderless,
  borderColor,
  clickableRows,
  color,
  dark,
  datatableRef,
  entries,
  entriesOptions,
  fixedHeader,
  fullPagination,
  hover,
  format,
  loaderClass,
  loading,
  loadingMessage,
  maxWidth,
  maxHeight,
  multi,
  noFoundMessage,
  pagination,
  selectable,
  selectedRows,
  setSelectedRows,
  sortField,
  searchInputProps,
  sortOrder,
  sm,
  striped,
  rowsText,
  data,
  tag: Tag,
  search,
  ...props
}) => {
  const classes = clsx(
    'datatable',
    hover && 'datatable-hover',
    loading && 'datatable-loading',
    color && `bg-${color}`,
    dark && 'datatable-dark',
    bordered && 'datatable-bordered',
    borderless && 'datatable-borderless',
    borderColor && `border-${borderColor}`,
    striped && 'datatable-striped',
    sm && 'datatable-sm',
    className
  );
  const [activeData, setActiveData] = useState(data.rows);
  const [searchQuery, setSearchQuery] = useState({
    phrase: '',
    columns: undefined,
    clickedBtn: false,
  });
  const [activePage, setActivePage] = useState(0);

  const [selectValue, setSelectValue] = useState<number>(entries ? entries : 10);

  const [sortOptions, setSortOptions] = useState({ iconStyle: { transform: 'rotate(0deg)' }, activeColumn: '' });

  const datatableInnerRef = useRef<HTMLElement>(null);
  const datatableReference = datatableRef ? datatableRef : datatableInnerRef;

  const handleSearch = (e: any) => {
    setSearchQuery({ ...searchQuery, phrase: e.target.value });
  };

  const handleSelectValue = (e: any) => {
    setSelectValue(e.value);
  };

  const getUID = () => {
    return Math.floor(Math.random() * 1000);
  };

  const handleBodyCheckbox = (rowIndex: number) => {
    if (selectedRows) {
      if (multi) {
        selectedRows.includes(rowIndex)
          ? setSelectedRows(selectedRows.filter((element: number) => element !== rowIndex))
          : setSelectedRows([...selectedRows, rowIndex]);
      } else {
        selectedRows.includes(rowIndex) ? setSelectedRows([]) : setSelectedRows([rowIndex]);
      }
    }
  };

  const handleHeaderCheckbox = (e: any) => {
    e.target.checked ? setSelectedRows(Array.from({ length: data.rows.length }, (x, i) => i)) : setSelectedRows([]);
  };

  const handleTableRow = (e: any, row: any) => {
    if (e.target.nodeName !== 'INPUT' && !e.target.classList.contains('datatable-disable-onclick')) {
      clickableRows && clickableRows(row);
    }
  };

  const isOnThePage = (i: number) => {
    return activePage * selectValue <= i && i < (activePage + 1) * selectValue;
  };

  const paginationFooter = `${activePage * selectValue + 1} - ${
    (activePage + 1) * selectValue > data.rows.length ? data.rows.length : (activePage + 1) * selectValue
  } of ${data.rows.length}`;

  const handleSort = (column: string) => {
    const { activeColumn, iconStyle } = sortOptions;

    if (column === activeColumn && iconStyle.transform === 'rotate(0deg)') {
      setSortOptions({ activeColumn: column, iconStyle: { transform: 'rotate(180deg)' } });
    } else if (column === activeColumn && iconStyle.transform === 'rotate(180deg)') {
      setSortOptions({ activeColumn: '', iconStyle: { transform: 'rotate(0deg)' } });
    } else {
      setSortOptions({ activeColumn: column, iconStyle: { transform: 'rotate(0deg)' } });
    }
  };

  useEffect(() => {
    if (sortField) {
      sortOrder === 'desc'
        ? setSortOptions({ activeColumn: sortField, iconStyle: { transform: 'rotate(180deg)' } })
        : setSortOptions({ activeColumn: sortField, iconStyle: { transform: 'rotate(0deg)' } });
    }
  }, [sortField, sortOrder]);

  useEffect(() => {
    const searchFilter = (rows: Array<any>, search: string, column: Array<string> | string | undefined) => {
      if (!search) return rows;

      const match = (entry: any) => {
        return entry.toString().toLowerCase().match(search.toLowerCase());
      };

      return rows.filter((row) => {
        if (column && typeof column === 'string') {
          return match(row[column]);
        }

        let values = Object.values(row);

        if (column && Array.isArray(column)) {
          values = Object.keys(row)
            .filter((key) => column.includes(key))
            .map((key) => row[key]);
        }

        return (
          values.filter((value) => {
            return match(value);
          }).length > 0
        );
      });
    };

    const sort = (data: Array<any>, field: number | string, order: string) => {
      const sorted = Object.assign([], data).sort((a: any, b: any) => {
        const fieldA = a[field];
        const fieldB = b[field];

        if (fieldA < fieldB) {
          return order === 'desc' ? 1 : -1;
        }
        if (fieldA > fieldB) {
          return order === 'desc' ? -1 : 1;
        }
        return 0;
      });

      return sorted;
    };

    const { activeColumn, iconStyle } = sortOptions;
    const { phrase, columns, clickedBtn } = searchQuery;
    const index = advancedData
      ? data.columns.find((row: any) => row.label === activeColumn)
      : data.columns.indexOf(activeColumn);

    if (activeColumn) {
      const sortedData = sort(
        data.rows,
        advancedData ? index.field : index,
        iconStyle.transform === 'rotate(0deg)' ? 'asc' : 'desc'
      );

      if (phrase) {
        if (advancedSearch && clickedBtn) {
          setActiveData(searchFilter(sortedData, phrase, columns));
          setSearchQuery({ ...searchQuery, clickedBtn: false });
        } else if (!advancedSearch) {
          setActiveData(searchFilter(sortedData, phrase, columns));
        }
      } else {
        setActiveData(sortedData);
      }
    } else {
      if (phrase) {
        if (advancedSearch && clickedBtn) {
          setActiveData(searchFilter(data.rows, phrase, columns));
          setSearchQuery({ ...searchQuery, clickedBtn: false });
        } else if (!advancedSearch) {
          setActiveData(searchFilter(data.rows, phrase, columns));
        }
      } else {
        setActiveData(data.rows);
      }
    }
  }, [sortOptions, data.rows, searchQuery, advancedSearch, advancedData, data.columns]);

  useEffect(() => {
    setActivePage(0);
  }, [selectValue]);

  const basicHeader = (
    <>
      {data.columns.map((column: string, i: number) => (
        <th
          className={fixedHeader ? 'fixed-cell' : ''}
          key={`item-${getUID()}-${i}`}
          style={{ cursor: 'pointer' }}
          scope='row'
          onClick={() => handleSort(column)}
        >
          <Icon
            fas
            icon='arrow-up'
            className={clsx('datatable-sort-icon', `${column === sortOptions.activeColumn && 'active'}`)}
            style={column === sortOptions.activeColumn ? sortOptions.iconStyle : { transform: 'rotate(0deg)' }}
          />
          {column}
        </th>
      ))}
    </>
  );

  const advancedHeader = (
    <>
      {data.columns.map(
        (
          column: { label: string; field: string; sort: boolean; width: number; fixed: string; fixedValue: number },
          i: number
        ) => {
          const cursorStyle = { cursor: column.sort !== false ? 'pointer' : undefined };
          const fixedStyle = {
            left: column.fixed === 'left' ? (column.fixedValue ? column.fixedValue : 0) : undefined,
            right: column.fixed === 'right' ? (column.fixedValue ? column.fixedValue : 0) : undefined,
          };

          return (
            <th
              className={fixedHeader || column.fixed ? 'fixed-cell' : ''}
              key={`item-${getUID()}-${i}`}
              style={{ ...cursorStyle, ...fixedStyle }}
              scope='row'
              onClick={() => column.sort !== false && handleSort(column.label)}
            >
              {column.sort !== false && (
                <Icon
                  fas
                  icon='arrow-up'
                  className={clsx('datatable-sort-icon', `${column.label === sortOptions.activeColumn && 'active'}`)}
                  style={
                    column.label === sortOptions.activeColumn ? sortOptions.iconStyle : { transform: 'rotate(0deg)' }
                  }
                />
              )}

              {column.label}
            </th>
          );
        }
      )}
    </>
  );

  const basicBody = (row: Array<any>) => (
    <>
      {row.map((cell: string, j: number) => (
        <td key={`item-${getUID()}-${j}`}>{cell}</td>
      ))}
    </>
  );

  const advancedBody = (row: any) => (
    <>
      {data.columns.map(
        (
          column: { label: string; field: keyof typeof row; width: number; fixed: string; fixedValue: number },
          j: number
        ) => {
          const formatStyle = format && format(column.field, row[column.field]);
          const fixedStyle = {
            minWidth: column.width,
            maxWidth: column.width,
            left: column.fixed === 'left' && (column.fixedValue ? column.fixedValue : 0),
            right: column.fixed === 'right' && (column.fixedValue ? column.fixedValue : 0),
          };

          return (
            <td
              className={column.fixed && 'fixed-cell'}
              style={{ ...formatStyle, ...fixedStyle }}
              key={`item-${getUID()}-${j}`}
            >
              {row[column.field]}
            </td>
          );
        }
      )}
    </>
  );

  return (
    <>
      {search && (
        <Input
          value={searchQuery.phrase}
          onChange={handleSearch}
          label='Search'
          className='mb-4'
          {...searchInputProps}
        />
      )}
      {advancedSearch && (
        <InputGroup className='mb-4'>
          <InputGroupElement
            placeholder='phrase in:column1,column2'
            value={searchQuery.phrase}
            onChange={handleSearch}
            {...searchInputProps}
          />
          <button
            onClick={() => setSearchQuery({ ...advancedSearch(searchQuery.phrase), ...{ clickedBtn: true } })}
            className='btn btn-primary'
            type='button'
          >
            <Icon icon='search' />
          </button>
        </InputGroup>
      )}

      <Tag className={classes} ref={datatableReference} style={{ maxWidth: maxWidth && maxWidth }} {...props}>
        <DatatableInner maxWidth={maxWidth} maxHeight={maxHeight}>
          <Table className=' datatable-table'>
            <TableHead className='datatable-header'>
              <tr>
                {selectable && (
                  <th>
                    {multi && <Checkbox className={fixedHeader ? 'fixed-cell' : ''} onChange={handleHeaderCheckbox} />}
                  </th>
                )}
                {advancedData ? advancedHeader : basicHeader}
              </tr>
            </TableHead>
            <TableBody className='datatable-body'>
              {activeData.map((row: any, i: number) => {
                const rowIndex = data.rows.indexOf(row);
                if (isOnThePage(i)) {
                  return (
                    <tr
                      style={{ cursor: clickableRows && 'pointer' }}
                      onClick={(e: any) => handleTableRow(e, row)}
                      className={selectedRows && selectedRows.includes(rowIndex) ? 'active' : ''}
                      key={`item-${getUID()}-${i}`}
                    >
                      {selectable && (
                        <td>
                          <Checkbox
                            checked={selectedRows && selectedRows.includes(rowIndex)}
                            onChange={() => handleBodyCheckbox(rowIndex)}
                          />
                        </td>
                      )}
                      {advancedData ? advancedBody(row) : basicBody(row)}
                    </tr>
                  );
                }
              })}
              {activeData.length === 0 && !loading && (
                <tr className='datatable-results-info'>
                  <td colSpan={data.columns.length} className='text-center'>
                    {noFoundMessage}
                  </td>
                </tr>
              )}
            </TableBody>
          </Table>
        </DatatableInner>
        {loading && (
          <>
            <div className='datatable-loader bg-light}'>
              <span className='datatable-loader-inner'>
                <span className={clsx('datatable-progress', loaderClass)}></span>
              </span>
            </div>
            <p className='text-center text-muted my-4'>{loadingMessage}</p>
          </>
        )}
        {pagination && (
          <DatatablePagination>
            <div className='datatable-select-wrapper'>
              <p className='datatable-select-text'>{rowsText}</p>
              <Select
                getValue={handleSelectValue}
                data={
                  entriesOptions &&
                  entriesOptions.map((option: number, i: number) => ({
                    text: option.toString(),
                    value: option,
                    selected: entries === option,
                  }))
                }
                disabled={loading}
              />
            </div>

            <div className='datatable-pagination-nav'>{paginationFooter}</div>
            <div className='datatable-pagination-buttons'>
              {fullPagination && (
                <button
                  disabled={activePage === 0 || loading}
                  onClick={() => setActivePage(0)}
                  className='btn btn-link datatable-pagination-button datatable-pagination-start'
                >
                  <Icon icon='angle-double-left' />
                </button>
              )}

              <button
                disabled={activePage === 0 || loading}
                onClick={() => setActivePage(activePage - 1)}
                className='btn btn-link datatable-pagination-button datatable-pagination-left'
              >
                <Icon icon='chevron-left' />
              </button>
              <button
                disabled={activeData.length <= selectValue * (activePage + 1) || loading}
                onClick={() => setActivePage(activePage + 1)}
                className='btn btn-link datatable-pagination-button datatable-pagination-right'
              >
                <Icon icon='chevron-right' />
              </button>

              {fullPagination && (
                <button
                  disabled={activePage === Math.floor(activeData.length / selectValue)}
                  onClick={() => setActivePage(Math.floor(activeData.length / selectValue))}
                  className='btn btn-link datatable-pagination-button datatable-pagination-end'
                >
                  <Icon icon='angle-double-right' />
                </button>
              )}
            </div>
          </DatatablePagination>
        )}
      </Tag>
    </>
  );
};

MDBDatatable.defaultProps = {
  tag: 'div',
  bordered: false,
  borderless: false,
  borderColor: '',
  clickableRows: false,
  color: '',
  dark: false,
  defaultValue: '-',
  entries: 10,
  entriesOptions: [10, 25, 50, 200],
  fixedHeader: false,
  fullPagination: false,
  hover: false,
  loaderClass: 'bg-primary',
  loading: false,
  loadingMessage: 'Loading results...',
  maxWidth: '',
  maxHeight: '',
  multi: false,
  noFoundMessage: 'No matching results found',
  pagination: true,
  selectable: false,
  sm: false,
  striped: false,
  rowsText: 'Rows per page:',
  sortOrder: 'asc',
  sortField: '',
};

export default MDBDatatable;
