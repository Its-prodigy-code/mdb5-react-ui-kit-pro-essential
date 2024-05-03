import clsx from 'clsx';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import type { SideNavProps } from './types';
import { SideNavContext } from './context';
import MDBScrollbar from '../../methods/PerfectScrollbar/PerfectScrollbar';
import MDBTouch from '../../methods/Touch/Touch';

const MDBSideNav: React.FC<SideNavProps> = ({
  className,
  isOpen,
  getOpenState,
  children,
  color,
  backdrop,
  slim,
  slimCollapsed,
  constant,
  bgColor,
  right,
  relative,
  absolute,
  light,
  mode,
  contentRef,
  closeOnEsc,
  ...props
}) => {
  const [isOpened, setIsOpened] = useState(isOpen);
  const [isReadyToHide, setIsReadyToHide] = useState(isOpen);
  const [sidenavHeight, setSidenavHeight] = useState<number | undefined>(0);
  const [isSlimCollapsed, setIsSlimCollapsed] = useState(slimCollapsed);

  const classes = clsx(
    'sidenav',
    color && `sidenav-${color}`,
    bgColor && `bg-${bgColor}`,
    isOpened ? 'sidenav-shown' : 'sidenav-hidden',
    relative && 'sidenav-relative',
    absolute && 'sidenav-absolute',
    light && 'sidenav-theme-light',
    right && 'sidenav-right',
    slim && 'sidenav-slim',
    slim && isSlimCollapsed && 'sidenav-slim-collapsed',
    className
  );

  const pushClasses = clsx('sidenav-content', isOpened ? (right ? 'right-side-shown' : 'side-shown') : 'side-hidden');
  const sideClasses = clsx('sidenav-content', isOpened ? (right ? 'right-push-shown' : 'push-shown') : 'push-hidden');

  const navRef = useRef<HTMLElement>(null);

  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (!constant && backdrop && e.target !== navRef.current && !navRef.current?.contains(e.target as Node)) {
        setIsOpened(false);
        getOpenState && getOpenState(false);
      }
    },
    [navRef, getOpenState, constant, backdrop]
  );

  const handleEscKey = useCallback(
    (e: KeyboardEvent) => {
      if (closeOnEsc && e.key === 'Escape') {
        setIsOpened(false);
        getOpenState && getOpenState(false);
      }
    },
    [getOpenState, closeOnEsc]
  );

  const handleResize = useCallback(() => {
    if (relative || absolute) {
      setSidenavHeight(navRef.current?.offsetHeight);
    } else {
      setSidenavHeight(window.innerHeight);
    }
  }, [absolute, relative]);

  useEffect(() => {
    setSidenavHeight(navRef.current?.offsetHeight);
  }, []);

  useEffect(() => {
    if (contentRef) {
      if (mode === 'push') {
        contentRef.className = sideClasses;
      } else if (mode === 'side') {
        contentRef.className = pushClasses;
      } else {
        contentRef.className = 'sidenav-content';
      }
    }
  }, [mode, contentRef, pushClasses, sideClasses]);

  useEffect(() => {
    if (isOpened) {
      document.addEventListener('click', handleClick);
      document.addEventListener('keydown', handleEscKey);
      window.addEventListener('resize', handleResize);
    }
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleEscKey);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleClick, handleEscKey, handleResize, isOpened]);

  useEffect(() => {
    setIsSlimCollapsed(slimCollapsed);
  }, [slimCollapsed]);

  useEffect(() => {
    setIsOpened(isOpen);
    getOpenState && getOpenState(isOpen);
  }, [isOpen, getOpenState]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let secondTimer: ReturnType<typeof setTimeout>;

    if (isOpened) {
      setIsReadyToHide(true);
      timer = setTimeout(() => {
        setIsOpened(true);
      }, 4);
    } else {
      setIsOpened(false);

      secondTimer = setTimeout(() => {
        setIsReadyToHide(false);
      }, 300);
    }
    return () => {
      clearTimeout(timer);
      clearTimeout(secondTimer);
    };
  }, [isOpened]);

  return (
    <SideNavContext.Provider value={{ color }}>
      <MDBTouch
        type='swipe'
        onSwipeLeft={() => {
          if (!slim) return;
          if (isOpened && !isSlimCollapsed) {
            setIsSlimCollapsed(true);
          }
        }}
        onSwipeRight={() => {
          if (!slim) return;
          if (isOpened && isSlimCollapsed) {
            setIsSlimCollapsed(false);
          }
        }}
        tag='nav'
        className={classes}
        touchRef={navRef}
        {...props}
      >
        <MDBScrollbar suppressScrollX style={{ height: sidenavHeight }}>
          {children}
        </MDBScrollbar>
      </MDBTouch>
      {backdrop && isReadyToHide && (
        <div
          className='sidenav-backdrop'
          style={{
            transition: 'opacity 0.3s ease-out 0s',
            position: absolute ? 'absolute' : 'fixed',
            width: '100%',
            height: '100%',
            opacity: isOpened ? 1 : 0,
          }}
        ></div>
      )}
    </SideNavContext.Provider>
  );
};

MDBSideNav.defaultProps = {
  color: 'primary',
  slimCollapsed: true,
  isOpen: true,
  backdrop: true,
  mode: 'over',
  closeOnEsc: true,
  constant: false,
};

export default MDBSideNav;
