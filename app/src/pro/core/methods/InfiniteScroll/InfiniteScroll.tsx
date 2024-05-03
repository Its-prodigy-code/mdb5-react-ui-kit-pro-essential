import React, { useState, useEffect, useCallback, useRef } from 'react';
import type { InfiniteScrollProps } from './types';
const MDBInfiniteScroll: React.FC<InfiniteScrollProps> = ({
  infiniteScrollRef,
  tag: Tag,
  infiniteDirection,
  onInfiniteScroll,
  windowParent,
  children,
  ...props
}) => {
  const infiniteScrollElement = useRef(null);

  const infiniteScrollReference = infiniteScrollRef ? infiniteScrollRef : infiniteScrollElement;

  const getRect = (el: any) => {
    return el.getBoundingClientRect();
  };

  const condition = useCallback(() => {
    if (windowParent) {
      return window.scrollY + window.innerHeight === document.documentElement.scrollHeight;
    }

    const rect = getRect(infiniteScrollReference.current);

    if (infiniteDirection === 'x') {
      return (
        rect.width + infiniteScrollReference.current.scrollLeft + 10 >= infiniteScrollReference.current.scrollWidth
      );
    }
    return rect.height + infiniteScrollReference.current.scrollTop >= infiniteScrollReference.current.scrollHeight;
  }, [windowParent, infiniteDirection, infiniteScrollReference]);

  const handleScroll = useCallback(() => {
    if (condition()) {
      onInfiniteScroll && onInfiniteScroll();
    }

    //   selector.removeEventListener('scroll', handleScroll);
  }, [condition, onInfiniteScroll]);

  useEffect(() => {
    const selector = windowParent ? window : infiniteScrollReference.current;

    selector.addEventListener('scroll', handleScroll);

    return () => {
      selector.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, infiniteScrollReference, windowParent]);

  return (
    <Tag ref={infiniteScrollReference} {...props}>
      {children}
    </Tag>
  );
};

MDBInfiniteScroll.defaultProps = { tag: 'div', windowParent: false };

export default MDBInfiniteScroll;
