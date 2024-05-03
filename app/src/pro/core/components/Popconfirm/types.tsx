import React from 'react';

type PopconfirmProps = {
  className?: string;
  btnClassName?: string;
  btnChildren?: any;
  confirmBtnText?: string;
  cancelBtnText?: string;
  isOpen?: boolean;
  modal?: boolean;
  onClick?: any;
  placement?: string;
  popperTag?: React.ComponentProps<any>;
  setIsOpen?: React.SetStateAction<any>;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
};

export { PopconfirmProps };
