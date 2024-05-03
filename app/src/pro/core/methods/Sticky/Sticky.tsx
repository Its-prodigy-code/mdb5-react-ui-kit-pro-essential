import clsx from 'clsx';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { StickyProps } from './types';
import { getOffset } from './utils';

interface styleInf {
  top?: string | null;
  bottom?: string | null;
  position?: string | null;
  left?: string | null;
  zIndex?: string | null;
  width?: string | null;
  height?: string | null;
}

interface hidenStyleInf {
  opacity?: string | null;
  width?: string | null;
  height?: string | null;
}

const MDBSticky: React.FC<StickyProps> = ({
  className,
  stickyRef,
  stickyAnimationSticky,
  stickyAnimationUnsticky,
  stickyBoundary,
  stickyDelay,
  stickyDirection,
  stickyOffset,
  stickyPosition,
  tag: Tag,
  children,
  ...props
}) => {
  const stickyInnerRef = useRef(null);
  const hiddenReference = useRef<HTMLElement>(null);

  const stickyReference = stickyRef ? stickyRef : stickyInnerRef;
  const scrollDirection = useRef('');
  const isSticked = useRef(false);
  const elementOffsetTop = useRef(0);
  const scrollTop = useRef(0);
  const pushPoint = useRef(0);

  const [stickyStyle, setStickyStyle] = useState<styleInf>();
  const [hiddenStyle, setHiddenStyle] = useState<hidenStyleInf>();
  const [showHiddenElement, setShowHiddenElement] = useState(false);
  const [elementPositionStyles, setElementPositionStyles] = useState({});
  const [isReadyToHide, setIsReadyToHide] = useState(false);

  const classes = clsx(
    'sticky',
    stickyAnimationSticky && showHiddenElement && `animation ${stickyAnimationSticky}`,
    stickyAnimationUnsticky && isReadyToHide && `animation ${stickyAnimationUnsticky}`,
    className
  );

  const updateElementOffset = useCallback(() => {
    const hiddenElement = hiddenReference.current;
    const element = stickyReference.current;
    if (hiddenElement) {
      elementOffsetTop.current = hiddenElement.offsetTop;
    } else {
      elementOffsetTop.current = element.offsetTop;
    }
  }, [stickyReference]);

  const updatePushPoint = useCallback(() => {
    const element = stickyReference.current;
    if (element) {
      if (stickyPosition === 'top') {
        pushPoint.current = elementOffsetTop.current - stickyDelay;
      } else {
        pushPoint.current = elementOffsetTop.current + element.height - document.body.scrollHeight + stickyDelay;
      }
    }
  }, [stickyDelay, stickyPosition, stickyReference]);

  const updateScrollDirection = useCallback((_scrollTop: number) => {
    if (_scrollTop > scrollTop.current) {
      scrollDirection.current = 'down';
    } else {
      scrollDirection.current = 'up';
    }
  }, []);

  const setStyle = (element: HTMLElement, styles: any) => {
    Object.keys(styles).forEach((style: any) => {
      element.style[style] = styles[style];
    });
  };

  const handleResize = useCallback(() => {
    const hiddenElement = hiddenReference.current;
    const element = stickyReference.current;
    if (hiddenElement) {
      const { left } = hiddenElement.getBoundingClientRect();

      setElementPositionStyles({ left: `${left}px` });
    } else {
      setElementPositionStyles({});
    }

    setStyle(element, elementPositionStyles);

    updateElementOffset();
  }, [updateElementOffset, elementPositionStyles, stickyReference]);

  const changeBoundaryPosition = useCallback(() => {
    const element = stickyReference.current;

    const { height } = element.getBoundingClientRect();

    const parentOffset = {
      height: element.parentElement.getBoundingClientRect().height,
      ...getOffset(element.parentElement),
    };

    let stopPoint;
    const stopper = document.querySelector(stickyBoundary);

    if (stopper) {
      stopPoint = getOffset(stopper).top - height - stickyOffset;
    } else {
      stopPoint = parentOffset.height + parentOffset[stickyPosition] - height - stickyOffset;
    }

    const isStickyTop = stickyPosition === 'top';
    const isStickyBottom = stickyPosition === 'bottom';
    const isStickyBoundary = stickyBoundary;
    const isBelowStopPoint = stopPoint < 0;
    const isBelowParentElementEnd = stopPoint > parentOffset.height - height;
    let elementStyle;

    if (isStickyTop) {
      if (isBelowStopPoint && isStickyBoundary) {
        elementStyle = { top: `${stickyOffset + stopPoint}px` };
      } else {
        elementStyle = { top: `${stickyOffset + 0}px` };
      }
    }

    if (isStickyBottom) {
      if (isBelowStopPoint && isStickyBoundary) {
        elementStyle = { bottom: `${stickyOffset + stopPoint}px` };
      } else if (isBelowParentElementEnd && isStickyBoundary) {
        elementStyle = { bottom: `${stickyOffset + parentOffset.bottom}px` };
      } else {
        elementStyle = { bottom: `${stickyOffset + 0}px` };
      }
    }

    setStyle(element, elementStyle);
  }, [stickyBoundary, stickyOffset, stickyPosition, stickyReference]);

  const handleScroll = useCallback(() => {
    const _scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    updateElementOffset();
    updatePushPoint();
    updateScrollDirection(_scrollTop);

    const isCorrectScrollDirection = [scrollDirection.current, 'both'].includes(stickyDirection);
    const isPushPointReached = pushPoint.current <= _scrollTop;

    const shouldBeSticky = isPushPointReached && !isSticked.current && isCorrectScrollDirection;
    const shouldNotBeSticky = (!isPushPointReached || !isCorrectScrollDirection) && isSticked.current;

    if (shouldBeSticky) {
      const { height, left, width } = stickyReference.current.getBoundingClientRect();

      setShowHiddenElement(true);
      setHiddenStyle({
        height: `${height}px`,
        width: `${width}px`,
        opacity: '0',
      });

      setStickyStyle({
        top: stickyPosition === 'top' ? `${0 + stickyOffset}px` : null,
        bottom: stickyPosition === 'bottom' ? `${0 + stickyOffset}px` : null,
        height: `${height}px`,
        width: `${width}px`,
        left: `${left}px`,
        zIndex: '100',
        position: 'fixed',
      });

      changeBoundaryPosition();
      isSticked.current = true;
    }

    if (shouldNotBeSticky) {
      if (stickyAnimationUnsticky) {
        setIsReadyToHide(true);
        setTimeout(() => {
          setStickyStyle({
            top: null,
            bottom: null,
            position: null,
            left: null,
            zIndex: null,
            width: null,
            height: null,
          });

          setShowHiddenElement(false);

          setHiddenStyle({
            height: null,
            width: null,
            opacity: null,
          });

          setIsReadyToHide(false);
        }, 200);
      } else {
        setStickyStyle({
          top: null,
          bottom: null,
          position: null,
          left: null,
          zIndex: null,
          width: null,
          height: null,
        });

        setShowHiddenElement(false);

        setHiddenStyle({
          height: null,
          width: null,
          opacity: null,
        });
      }

      isSticked.current = false;
    }

    if (isSticked.current) {
      setStyle(stickyReference.current, elementPositionStyles);
      changeBoundaryPosition();
    }

    scrollTop.current = _scrollTop <= 0 ? 0 : _scrollTop;
  }, [
    stickyDirection,
    updateElementOffset,
    updatePushPoint,
    updateScrollDirection,
    stickyOffset,
    stickyPosition,
    stickyReference,
    elementPositionStyles,
    changeBoundaryPosition,
    stickyAnimationUnsticky,
  ]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleResize, handleScroll]);

  return (
    <>
      {showHiddenElement && (
        <Tag className={classes} ref={hiddenReference} style={hiddenStyle} {...props}>
          {children}
        </Tag>
      )}

      <Tag className={classes} ref={stickyReference} style={stickyStyle} {...props}>
        {children}
      </Tag>
    </>
  );
};

MDBSticky.defaultProps = {
  stickyAnimationSticky: '',
  stickyAnimationUnsticky: '',
  tag: 'span',
  stickyBoundary: false,
  stickyDelay: 0,
  stickyDirection: 'down',
  stickyOffset: 0,
  stickyPosition: 'top',
};

export default MDBSticky;
