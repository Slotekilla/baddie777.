import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  title: string;
  className?: string;
  priority?: boolean;
  loading?: 'eager' | 'lazy';
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  title,
  className = '',
  loading = 'lazy'
}) => {
  return (
    <img
      src={src}
      alt={alt}
      title={title}
      className={`w-full h-auto ${className}`}
      loading={loading}
    />
  );
};