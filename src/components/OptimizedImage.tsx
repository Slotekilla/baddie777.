import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  title: string;
  className?: string;
  sizes?: string;
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
  priority = false,
  loading = 'lazy',
  onLoad,
  onError
}) => {
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate responsive image sources
  const generateSrcSet = (baseSrc: string) => {
    // Just return the original source for now
    // In production, you would generate multiple sizes
    return baseSrc;
  };

  const handleLoad = () => {
    onLoad?.();
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
    onError?.(e.nativeEvent);
  };

  return (
    <div className="relative" ref={imgRef}>
      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <div className="text-gray-400 text-center">
            <div className="text-2xl mb-2">⚠️</div>
            <div className="text-sm">Image failed to load</div>
          </div>
        </div>
      )}

      {/* Optimized image */}
      <img
        src={src}
        alt={alt}
        title={title}
        className={`object-contain ${className}`}
        loading={loading}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        // SEO attributes
        itemProp="image"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
};