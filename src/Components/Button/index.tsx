import React,{ FC } from "react";
import classNames from 'classnames';


export enum btnType {
  Primary = 'primary', //基本无色，边框绿色
  Default = 'default', //默认蓝色
  Danger = 'danger', //警告红色
  Disabled = 'disabled', //禁用灰色
  Link = 'link' //链接Button
}

export enum btnSize {
  Large = 'lg',
  Small = 'sm'
}

interface IButtonProps {
  children?: React.ReactNode;
  type?: btnType;
  size?: btnSize;
  disabled?: boolean;
  href?: string;
}

//定义button与a标签的自身属性
type ButtonOwnProps = IButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorOwnProps = IButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonCoverProps = Partial<ButtonOwnProps & AnchorOwnProps>;

const MyButton:FC<ButtonCoverProps> = (props) => {
  const {
    children,
    className, //可以自定义传进的className
    size,
    type,
    href,
    disabled,
    ...restProps
  } = props

  const btnClass = classNames('btn', className, {
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    'disabled': disabled && (type === btnType.Link),
  })

  if(type === btnType.Link && href) {
    return (
      <a 
        className={btnClass}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={btnClass}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default MyButton;