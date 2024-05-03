type ToastProps = {
  className?: string;
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  color?: string;
  width?: number | string;
  offset?: number;
  appendToBody?: boolean;
  show?: boolean;
  whiteCloseBtn?: boolean;
  bodyClasses?: string;
  headerClasses?: string;
  closeBtnClasses?: string;
  [rest: string]: any;
};

export { ToastProps };
