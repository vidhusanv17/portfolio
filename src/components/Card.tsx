import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={`
        bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6
        ${hover ? 'hover:bg-gray-800/70 hover:border-purple-500/40 hover:transform hover:scale-105' : ''}
        transition-all duration-300 ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;