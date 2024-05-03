type AlertProps = {
  className?: string;
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  color?: string;
  width?: number | string;
  offset?: number;
  appendToBody?: boolean;
  show?: boolean;
  stacking?: boolean;
  [rest: string]: any;
};

export { AlertProps };
