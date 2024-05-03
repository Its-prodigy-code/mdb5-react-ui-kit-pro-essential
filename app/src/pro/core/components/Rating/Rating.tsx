import clsx from 'clsx';
import React, { useState } from 'react';
import type { RatingProps } from './types';
import { RatingContext } from './RatingContext';

const MDBRating: React.FC<RatingProps> = React.forwardRef<HTMLAllCollection, RatingProps>(
  ({ className, active, dynamic, setActive, tag: Tag, children, ...props }, ref) => {
    const classes = clsx('rating', className);
    const [hovered, setHovered] = useState(0);
    const [dynamicStyle, setDynamicStyle] = useState({ color: '', icon: '' });

    return (
      <RatingContext.Provider
        value={{
          activeItem: active,
          setActiveItem: setActive,
          hoveredItem: hovered,
          setHoveredItem: setHovered,
          dynamic: dynamic,
          dynamicStyle: dynamicStyle,
          setDynamicStyle: setDynamicStyle,
        }}
      >
        <Tag className={classes} ref={ref} {...props}>
          {children}
        </Tag>
      </RatingContext.Provider>
    );
  }
);

MDBRating.defaultProps = { tag: 'ul' };

export default MDBRating;
