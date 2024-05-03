import * as React from 'react';

declare const MDBSelect: React.FunctionComponent<{
  className?: string;
  pill?: boolean;
  dot?: boolean;
  notification?: boolean;
  color?: string;
  tag?: React.ComponentProps<any>;
  clearBtn?: boolean;
  searchLabel?: string;
  noResultLabel?: string;
  [rest: string]: any;
}>;

export default MDBSelect;
