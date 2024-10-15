import React from 'react';

interface ButtonProps {
  children: string;
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

const Button = ({ children, className, onClick, type }: ButtonProps) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
