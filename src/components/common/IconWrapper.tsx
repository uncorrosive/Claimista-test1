import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconWrapperProps {
  Icon: LucideIcon;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function IconWrapper({ 
  Icon, 
  color = 'blue', 
  size = 'md' 
}: IconWrapperProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const bgColors = {
    blue: 'bg-blue-50',
    green: 'bg-green-50',
    purple: 'bg-purple-50',
    indigo: 'bg-indigo-50'
  };

  const textColors = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    indigo: 'text-indigo-600'
  };

  return (
    <div className={`${bgColors[color]} p-3 rounded-xl`}>
      <Icon className={`${sizeClasses[size]} ${textColors[color]}`} />
    </div>
  );
}