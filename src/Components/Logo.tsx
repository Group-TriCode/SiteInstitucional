import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-16 w-auto',
    md: 'h-20 w-auto',
    lg: 'h-32 w-auto'
  };

  return (
    <img
      src="/TriCode Logo.png"
      alt="TriCode Logo"
      className={`${sizeClasses[size]} ${className}`}
    />
  );
};

export default Logo;

