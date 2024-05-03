import clsx from 'clsx';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import type { LightboxProps } from './types';

const MDBLightbox: React.FC<LightboxProps> = ({
  className,
  tag: Tag,
  zoomLevel,
  fontAwesome,
  children,
  lightboxRef,
  ...props
}) => {
  const classes = clsx('lightbox', className);

  const galleryRef = useRef<HTMLDivElement>(null);
  const leftArrow = useRef<HTMLButtonElement>(null);
  const rightArrow = useRef<HTMLButtonElement>(null);
  const exitBtn = useRef<HTMLButtonElement>(null);
  const zoomBtn = useRef<HTMLButtonElement>(null);
  const lightboxItem = useRef(null);
  const lightboxReference = lightboxRef ? lightboxRef : lightboxItem;

  const [isOpened, setIsOpened] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [fullscreen, toggleFulscreen] = useState(false);
  const [items, setItems] = useState<any>([]);
  const [zoom, setZoom] = useState(1);
  const [mousedown, setMousedown] = useState(false);
  const [caption, setCaption] = useState('');

  const positionX = useRef<number>();
  const positionY = useRef<number>();
  const originalPositionX = useRef<number>();
  const originalPositionY = useRef<number>();
  const mousedownPosX = useRef<number>();
  const mousedownPosY = useRef<number>();

  const getFirstNextAvailable = (value: number, items: any): number => {
    let temp = value;

    if (temp > items.length - 1) {
      temp = 0;
    }

    if (items[temp].classList.contains('lightbox-disabled')) {
      return getFirstNextAvailable(temp + 1, items);
    }

    return temp;
  };

  const getFirstPrevAvailable = (value: number, items: any): number => {
    let temp = value;

    if (temp < 0) {
      temp = items.length - 1;
    }

    if (items[temp].classList.contains('lightbox-disabled')) {
      return getFirstPrevAvailable(temp - 1, items);
    }

    return temp;
  };

  const handleKeyDown = useCallback(
    (e: any) => {
      if (!isOpened) return;

      e.preventDefault();

      const { key } = e;

      switch (key) {
        case 'ArrowLeft':
          leftArrow.current && leftArrow.current.click();
          break;
        case 'ArrowRight':
          rightArrow.current && rightArrow.current.click();
          break;
        case 'ArrowUp':
          zoomBtn.current && zoomBtn.current.click();
          break;
        case 'ArrowDown':
          zoomBtn.current && zoomBtn.current.click();
          break;
        case 'Escape':
          exitBtn.current && exitBtn.current.click();
          break;
        case 'Home':
          setActiveItem(0);
          break;
        case 'End':
          items.length > 0 && setActiveItem(items.length - 1);
          break;
        default:
          break;
      }
    },
    [isOpened, items]
  );

  const handleImageClick = useCallback((e: any, num: number) => {
    document.body.classList.add('overflow-hidden');
    setIsOpened(true);
    setActiveItem(num);
    const fullscreenItems = document.querySelectorAll('.lightbox-gallery-item');
    fullscreenItems.forEach((item: any) => {
      calculateImgSize(item);
    });
    const activeEl = galleryRef.current?.querySelector('.lightbox-gallery-item.active');
    setCaption(activeEl?.getAttribute('alt') as string);
  }, []);

  const handleExit = () => {
    fullscreen && document.exitFullscreen && document.exitFullscreen();
    document.body.classList.remove('overflow-hidden');
    setIsOpened(false);
    setZoom(1);
    setMousedown(false);
    const fullscreenItems = document.querySelectorAll('.lightbox-gallery-item');
    fullscreenItems.forEach((item: any) => {
      calculateImgSize(item);
    });
  };

  const handleNext = () => {
    const newIndex = getFirstNextAvailable(activeItem + 1, items);
    setActiveItem(newIndex);
    setZoom(1);
    setMousedown(false);
    const fullscreenItems = document.querySelectorAll('.lightbox-gallery-item');
    fullscreenItems.forEach((item: any) => {
      calculateImgSize(item);
    });
    setTimeout(() => {
      const activeEl = galleryRef.current?.querySelector('.lightbox-gallery-item.active');
      setCaption(activeEl?.getAttribute('alt') as string);
    }, 10);
  };

  const handlePrev = () => {
    const newIndex = getFirstPrevAvailable(activeItem - 1, items);
    setActiveItem(newIndex);
    setZoom(1);
    setMousedown(false);
    const fullscreenItems = document.querySelectorAll('.lightbox-gallery-item');
    fullscreenItems.forEach((item: any) => {
      calculateImgSize(item);
    });
    setTimeout(() => {
      const activeEl = galleryRef.current?.querySelector('.lightbox-gallery-item.active');
      setCaption(activeEl?.getAttribute('alt') as string);
    }, 10);
  };

  const handleFullScreenChange = useCallback(() => {
    const isFullscreenEnabled =
      // eslint-disable-next-line
      //@ts-ignore
      document.webkitIsFullScreen ||
      // eslint-disable-next-line
      //@ts-ignore
      document.mozFullScreen ||
      // eslint-disable-next-line
      //@ts-ignore
      document.msFullscreenElement;
    if (isFullscreenEnabled === undefined) {
      // fullscreen.value = false;
      toggleFulscreen(false);
    }
  }, []);

  const handleFullscreen = () => {
    if (!fullscreen) {
      if (galleryRef.current?.requestFullscreen) {
        galleryRef.current.requestFullscreen();
      }

      toggleFulscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }

      toggleFulscreen(false);
    }
  };

  const handleZoomIn = (level: any) => {
    setZoom(zoom + level);
  };

  const handleZoomOut = (level: any) => {
    setZoom(zoom - level);
    const fullscreenItems = document.querySelectorAll('.lightbox-gallery-item');
    fullscreenItems.forEach((item: any) => {
      calculateImgSize(item);
    });
  };

  const handleMousedown = (e: any) => {
    e.preventDefault();
    const touch = e.touches;
    const target = e.target;

    const x = touch ? touch[0].clientX : e.clientX;
    const y = touch ? touch[0].clientY : e.clientY;

    originalPositionX.current = parseFloat(target.style.left) || 0;
    originalPositionY.current = parseFloat(target.style.top) || 0;
    positionX.current = parseFloat(target.style.left) || 0;
    positionY.current = parseFloat(target.style.top) || 0;

    mousedownPosX.current = x * (1 / zoom) - positionX.current;
    mousedownPosY.current = y * (1 / zoom) - positionY.current;
    setMousedown(true);
  };

  const handleMousemove = (e: any) => {
    if (!mousedown) return;

    const touch = e.touches;
    const x = touch ? touch[0].clientX : e.clientX;
    const y = touch ? touch[0].clientY : e.clientY;

    if (zoom !== 1) {
      positionX.current = x * (1 / zoom) - (mousedownPosX.current as number);
      positionY.current = y * (1 / zoom) - (mousedownPosY.current as number);

      e.target.style.left = `${positionX.current}px`;
      e.target.style.top = `${positionY.current}px`;
    } else {
      if (items.length <= 1) return;
      positionX.current = x * (1 / zoom) - (mousedownPosX.current as number);
      e.target.style.left = `${positionX.current}px`;
    }
  };

  const handleMouseup = () => {
    if (zoom === 1) {
      if ((positionX.current as number) > 0) {
        handlePrev();
      } else if ((positionX.current as number) < 0) {
        handleNext();
      }
    }
    setMousedown(false);
  };

  const calculateImgSize = (img: any) => {
    if (img.width >= img.height) {
      img.style.width = '100%';
      img.style.maxWidth = '100%';
      img.style.height = 'auto';
      img.style.top = `${(img.parentNode.offsetHeight - img.height) / 2}px`;
      img.style.left = 0;
    } else {
      img.style.height = '100%';
      img.style.maxHeight = '100%';
      img.style.width = 'auto';
      img.style.left = `${(img.parentNode.offsetWidth - img.width) / 2}px`;
      img.style.top = 0;
    }

    if (img.width >= img.parentNode.offsetWidth) {
      img.style.width = `${img.parentNode.offsetWidth}px`;
      img.style.height = 'auto';
      img.style.left = 0;
      img.style.top = `${(img.parentNode.offsetHeight - img.height) / 2}px`;
    }
    if (img.height >= img.parentNode.offsetHeight) {
      img.style.height = `${img.parentNode.offsetHeight}px`;
      img.style.width = 'auto';
      img.style.top = 0;
      img.style.left = `${(img.parentNode.offsetWidth - img.width) / 2}px`;
    }

    positionX.current = parseFloat(img.style.left) || 0;
    positionY.current = parseFloat(img.style.top) || 0;
  };

  const getFullscreenData = (item: any) => {
    const source = item.getAttribute('data-mdb-img')
      ? item.getAttribute('data-mdb-img')
      : item.getAttribute('src')
      ? item.getAttribute('src')
      : '';

    const caption = item.getAttribute('data-mdb-caption')
      ? item.getAttribute('data-mdb-caption')
      : item.getAttribute('alt')
      ? item.getAttribute('alt')
      : '';

    return { source, caption };
  };

  const getItems = useCallback(() => {
    const images = lightboxReference.current.querySelectorAll('.lightbox-item');

    setItems(images);
  }, [lightboxReference]);

  const observerCallback = useCallback(
    (mutationsList: any) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          getItems();
        }
      }
    },
    [getItems]
  );

  useEffect(() => {
    getItems();
  }, [getItems]);

  useEffect(() => {
    if (items.length > 0) {
      const fullscreenItems = document.querySelectorAll('.lightbox-gallery-item');
      fullscreenItems.forEach((item: any) => {
        calculateImgSize(item);
      });
    }
  }, [items]);

  const handleResize = useCallback(() => {
    const fullscreenItems = document.querySelectorAll('.lightbox-gallery-item');
    fullscreenItems.forEach((item: any) => {
      calculateImgSize(item);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', (e: any) => handleKeyDown(e));
    window.addEventListener('fullscreenchange', handleFullScreenChange);

    const observer = new MutationObserver(observerCallback);

    observer.observe(lightboxReference.current, { childList: true, subtree: true });

    items.forEach((image: any, i: number) => {
      !image.classList.contains('lightbox-disabled') &&
        image.addEventListener('click', (e: any) => handleImageClick(e, i));
    });

    return () => {
      observer.disconnect();

      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', (e: any) => handleKeyDown(e));
      window.removeEventListener('fullscreenchange', handleFullScreenChange);

      items.forEach((image: any, i: number) => {
        image.removeEventListener('click', (e: any) => handleImageClick(e, i));
      });
    };
  }, [
    items,
    lightboxReference,
    observerCallback,
    handleImageClick,
    handleResize,
    handleKeyDown,
    handleFullScreenChange,
  ]);

  return (
    <>
      <Tag ref={lightboxReference} className={classes} {...props}>
        {children}
      </Tag>
      {ReactDOM.createPortal(
        <div
          className='lightbox-gallery'
          onClick={(e: any) => {
            if (e.target.tagName === 'DIV') {
              document.body.classList.remove('overflow-hidden');
              e.target.tagName === 'DIV' && setIsOpened(false);
            }
          }}
          ref={galleryRef}
          style={{
            opacity: isOpened ? 1 : 0,
            pointerEvents: isOpened ? 'initial' : 'none',
            visibility: isOpened ? 'visible' : 'hidden',
          }}
        >
          <div className='lightbox-gallery-loader'></div>
          <div className='lightbox-gallery-toolbar'>
            <div className='lightbox-gallery-left-tools'>
              <p className='lightbox-gallery-counter'>{`${activeItem + 1} / ${items.length}`}</p>
            </div>
            <div className='lightbox-gallery-right-tools'>
              <button
                className={`lightbox-gallery-fullscreen-btn ${fontAwesome === 'pro' && 'fontawesome-pro'} ${
                  fullscreen && 'active'
                }`}
                onClick={handleFullscreen}
              ></button>
              <button
                ref={zoomBtn}
                className={`lightbox-gallery-zoom-btn ${fontAwesome === 'pro' && 'fontawesome-pro'} ${
                  zoom > 1 && 'active'
                }`}
                onClick={() => (zoom > 1 ? handleZoomOut(zoomLevel) : handleZoomIn(zoomLevel))}
              ></button>
              <button
                className={`lightbox-gallery-close-btn ${fontAwesome === 'pro' && 'fontawesome-pro'}`}
                onClick={handleExit}
                ref={exitBtn}
              ></button>
            </div>
          </div>
          <div className='lightbox-gallery-content'>
            {Object.values(items).map((img: any, i: number) => {
              const { source, caption } = getFullscreenData(img);
              let left;
              const opacity = i === activeItem ? 1 : 0;
              const scale = i === activeItem ? zoom : 0.25;

              const isLastElement = activeItem === items.length - 1 && i === 0;
              const isFirstElement = activeItem === 0 && i === items.length - 1;

              if (activeItem < i && !isFirstElement && !isLastElement) {
                left = '100%';
              } else if (activeItem > i && !isFirstElement && !isLastElement) {
                left = '-100%';
              } else if (isFirstElement) {
                left = '-100%';
              } else if (isLastElement) {
                left = '100%';
              } else {
                left = '0%';
              }

              return (
                <div
                  className='lightbox-gallery-image'
                  key={i}
                  style={{
                    position: 'absolute',
                    opacity,
                    left,
                    transform: `scale(${scale})`,
                  }}
                >
                  <img
                    src={source}
                    alt={caption}
                    onMouseDown={(e: any) => handleMousedown(e)}
                    onMouseMove={(e: any) => handleMousemove(e)}
                    onMouseUp={handleMouseup}
                    onTouchStart={(e: any) => handleMousedown(e)}
                    onTouchMove={(e: any) => handleMousemove(e)}
                    onTouchEnd={handleMouseup}
                    className={`lightbox-gallery-item ${activeItem === i && 'active'}`}
                  />
                </div>
              );
            })}
          </div>
          <div className='lightbox-gallery-arrow-left'>
            <button
              aria-label='Previous'
              className={`${fontAwesome === 'pro' ? 'fontawesome-pro' : ''}`}
              onClick={handlePrev}
              ref={leftArrow}
            ></button>
          </div>
          <div className='lightbox-gallery-arrow-right'>
            <button
              aria-label='Next'
              className={`${fontAwesome === 'pro' ? 'fontawesome-pro' : ''}`}
              onClick={handleNext}
              ref={rightArrow}
            ></button>
          </div>
          <div className='lightbox-gallery-caption-wrapper'>
            <p className='lightbox-gallery-caption'>{caption}</p>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

MDBLightbox.defaultProps = { tag: 'div', zoomLevel: 1, fontAwesome: 'free' };

export default MDBLightbox;
