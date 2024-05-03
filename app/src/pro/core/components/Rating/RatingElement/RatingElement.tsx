import clsx from 'clsx';
import React, { useContext, useEffect } from 'react';
import MDBTooltip from '../../../../../free/core/components/Tooltip/Tooltip';
import type { RatingElementProps } from './types';
import { RatingContext } from '../RatingContext';
import MDBIcon from '../../../../../free/core/styles/Icon/Icon';
import MDBPopover from '../../../../../free/core/components/Popover/Popover';
import MDBPopoverBody from '../../../../../free/core/components/Popover/PopoverBody/PopoverBody';

const MDBRatingElement: React.FC<RatingElementProps> = React.forwardRef<HTMLAllCollection, RatingElementProps>(
  (
    {
      className,
      color,
      itemId,
      iconClassName,
      insertAfter,
      insertBefore,
      icon,
      onClick,
      onMouseEnter,
      onMouseLeave,
      popover,
      size,
      title,
      tag: Tag,
      ...props
    },
    ref
  ) => {
    const {
      activeItem,
      setActiveItem,
      hoveredItem,
      setHoveredItem,
      dynamic,
      dynamicStyle,
      setDynamicStyle,
    } = useContext(RatingContext);

    const isActive = (!hoveredItem && activeItem && activeItem >= itemId) || hoveredItem >= itemId;
    const iconClasses = clsx(isActive && 'active', !color && 'text-primary', iconClassName);

    const handleClick = (e: MouseEvent) => {
      setActiveItem && setActiveItem(itemId);
      onClick && onClick(e);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      setActiveItem && setHoveredItem(itemId);
      onMouseEnter && onMouseEnter(e);
    };

    const handleMouseLeave = (e: MouseEvent) => {
      setActiveItem && setHoveredItem(0);
      onMouseLeave && onMouseLeave(e);
    };

    useEffect(() => {
      if (dynamic) {
        const dynamicValue = hoveredItem ? hoveredItem : activeItem;

        dynamicValue === itemId && setDynamicStyle({ color, icon });
      }
    }, [activeItem, itemId, color, icon, dynamic, setDynamicStyle, hoveredItem]);

    const ratingElement = (
      <>
        <Tag
          className={className}
          ref={ref}
          {...props}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          {insertBefore}
          <MDBIcon
            far={!isActive}
            fas={isActive}
            icon={dynamicStyle.icon ? dynamicStyle.icon : icon}
            size={size}
            className={iconClasses}
            style={{ color: dynamicStyle.color ? dynamicStyle.color : color && color }}
          />
          {insertAfter}
        </Tag>
      </>
    );

    return (
      <>
        {title ? (
          <MDBTooltip tag='a' title={title}>
            {ratingElement}
          </MDBTooltip>
        ) : popover ? (
          <MDBPopover tag='a' btnChildren={ratingElement}>
            <MDBPopoverBody>{popover}</MDBPopoverBody>
          </MDBPopover>
        ) : (
          ratingElement
        )}
      </>
    );
  }
);

MDBRatingElement.defaultProps = { tag: 'li', size: 'sm' };

export default MDBRatingElement;
