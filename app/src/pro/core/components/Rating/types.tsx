import React from 'react';

type RatingProps = {
  className?: string;
  active?: number;
  dynamic?: boolean;
  setActive?: React.SetStateAction<any>;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
};

export { RatingProps };
