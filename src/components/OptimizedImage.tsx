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
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate responsive image sources
  const generateSrcSet = (baseSrc: string) => {
    // Just return the original source for now
    // In production, you would generate multiple sizes
    return baseSrc;
  };

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
    onError?.(e.nativeEvent);
  };

  return (
    <div className={`relative overflow-hidden ${className}`} ref={imgRef}>
      {/* Loading placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-green-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

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
        className={`w-full h-full object-contain transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={loading}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        // SEO attributes
        itemProp="image"
      />
    </div>
  );
};