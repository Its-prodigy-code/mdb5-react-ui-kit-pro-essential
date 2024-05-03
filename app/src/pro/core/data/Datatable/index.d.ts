import * as React from 'react';

declare const MDBDatatable: React.FunctionComponent<{
  advancedSearch?: any;
  advancedData?: boolean;
  className?: string;
  bordered?: boolean;
  borderless?: boolean;
  borderColor?: string;
  clickableRows?: any;
  color?: string;
  dark?: boolean;
  entries?: number;
  entriesOptions?: Array<number>;
  fixedHeader?: boolean;
  fullPagination?: boolean;
  hover?: boolean;
  format?: any;
  loaderClass?: string;
  loading?: boolean;
  loadingMessage?: string;
  maxWidth?: string;
  maxHeight?: string;
  multi?: boolean;
  noFoundMessage?: string;
  pagination?: boolean;
  selectable?: boolean;
  selectedRows?: Array<any>;
  setSelectedRows?: any;
  sm?: boolean;
  striped?: boolean;
  rowsText?: string;
  sortField?: string;
  sortOrder?: string;
  data?: any;
  search?: boolean;
  [rest: string]: any;
}>;

export default MDBDatatable;
