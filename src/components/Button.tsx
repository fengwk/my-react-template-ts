import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button
      style={{
        padding: '8px 16px',
        background: '#1890ff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
      }}
    >
      {children}
    </button>
  );
};
