import clsx from 'clsx';
import React, { useCallback, useEffect, useState, useRef } from 'react';
import type { AnimationProps } from './types';

const MDBAnimation: React.FC<AnimationProps> = ({
  animation,
  animationRef,
  delay,
  infinite,
  duration,
  enableTarget,
  target,
  repeatOnScroll,
  reset,
  setTarget,
  start,
  className,
  tag: Tag,
  children,
  style,
  ...props
}) => {
  const [toggler, setToggler] = useState(target);
  const [isVisible, setIsVisible] = useState(false);
  const isFirstScrollAnimation = useRef(true);

  const classes = clsx(toggler && 'animation', toggler && animation, className);

  const animationInnerRef = useRef<HTMLElement>(null);

  const animationReference = animationRef ? animationRef : animationInnerRef;

  const toggleAnimation = () => {
    setToggler(!toggler);
  };

  const animateOnScroll = useCallback(() => {
    if (animationReference.current) {
      const rect = animationReference.current.getBoundingClientRect();
      const elementOffsetTop = rect.top + document.body.scrollTop;
      const elementHeight = animationReference.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const shouldBeVisible = elementOffsetTop <= windowHeight && elementOffsetTop + elementHeight >= 0;

      if (shouldBeVisible && isFirstScrollAnimation.current) {
        isFirstScrollAnimation.current = false;

        if (delay) {
          setTimeout(() => {
            setToggler(true);
            setIsVisible(true);
          }, delay);
        } else {
          setToggler(true);
          setIsVisible(true);
        }
      } else if (!shouldBeVisible && repeatOnScroll) {
        setIsVisible(false);
        isFirstScrollAnimation.current = true;
      }
    }
  }, [animationReference, repeatOnScroll, delay]);

  useEffect(() => {
    if (start === 'onScroll') {
      window.addEventListener('scroll', animateOnScroll);
    }

    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, [animateOnScroll, start]);

  useEffect(() => {
    setToggler(target);
  }, [target]);

  useEffect(() => {
    if (start === 'onLoad') {
      setToggler(true);
    }
  }, [start]);

  useEffect(() => {
    if (toggler && !infinite && reset) {
      setTimeout(() => {
        setToggler(!toggler);

        if (enableTarget) {
          setTarget(false);
        }
      }, duration);
    }
  }, [toggler, duration, enableTarget, setTarget, infinite, reset]);

  return (
    <>
      {start === 'onClick' && enableTarget === false && (
        <Tag
          onClick={toggleAnimation}
          className={classes}
          ref={animationReference}
          {...props}
          style={{
            ...style,
            animationDuration: `${duration}ms`,
            animationIterationCount: infinite ? 'infinite' : null,
            animationDelay: delay ? `${delay}ms` : null,
          }}
        >
          {children}
        </Tag>
      )}

      {start === 'onHover' && enableTarget === false && (
        <Tag
          onMouseEnter={toggleAnimation}
          className={classes}
          ref={animationReference}
          {...props}
          style={{
            ...style,
            animationDuration: `${duration}ms`,
            animationIterationCount: infinite ? 'infinite' : null,
            animationDelay: delay ? `${delay}ms` : null,
          }}
        >
          {children}
        </Tag>
      )}

      {(start === 'onLoad' || enableTarget === true) && (
        <Tag
          className={classes}
          ref={animationReference}
          {...props}
          style={{
            ...style,
            animationDuration: `${duration}ms`,
            animationIterationCount: infinite ? 'infinite' : null,
            animationDelay: delay ? `${delay}ms` : null,
          }}
        >
          {children}
        </Tag>
      )}

      {start === 'onScroll' && (
        <Tag
          className={classes}
          ref={animationReference}
          {...props}
          style={{
            ...style,
            animationDuration: `${duration}ms`,
            visibility: isVisible ? 'visible' : 'hidden',
            animationIterationCount: infinite ? 'infinite' : null,
          }}
        >
          {children}
        </Tag>
      )}
    </>
  );
};

MDBAnimation.defaultProps = {
  tag: 'div',
  start: 'onClick',
  duration: 500,
  reset: false,
  animation: 'slide-right',
  target: false,
  enableTarget: false,
  repeatOnScroll: false,
  infinite: false,
};

export default MDBAnimation;
