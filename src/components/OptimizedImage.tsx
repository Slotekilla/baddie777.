import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  title: string;
  className?: string;
  priority?: boolean;
  loading?: 'eager' | 'lazy';
  onLoad?: () => void;
  onError?: (error: Event) => void;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  title,
  className = '',
  loading = 'lazy',
  onLoad,
  onError
}) => {
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    onLoad?.();
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
    onError?.(e.nativeEvent);
  };

  if (hasError) {
    return (
      <div className="w-full h-48 bg-gray-800 flex items-center justify-center rounded">
        <div className="text-gray-400 text-center">
          <div className="text-2xl mb-2">⚠️</div>
          <div className="text-sm">Image failed to load</div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      title={title}
      className={className}
      loading={loading}
      decoding="async"
      onLoad={handleLoad}
      onError={handleError}
      style={{
        display: 'block',
        width: '100%',
        height: 'auto',
        maxWidth: '100%'
      }}
    />
  );
};