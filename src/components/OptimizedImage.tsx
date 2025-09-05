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
      className={className}
      loading={loading}
      style={{
        width: '100%',
        height: 'auto',
        maxWidth: '100%',
        display: 'block'
      }}
      onError={(e) => {
        console.error('Image failed to load:', src);
        e.currentTarget.style.border = '2px solid red';
        e.currentTarget.style.minHeight = '200px';
      }}
    />
  );
};