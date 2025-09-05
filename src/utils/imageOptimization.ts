// Image optimization utilities

export interface ImageMetadata {
  src: string;
  alt: string;
  title: string;
  width?: number;
  height?: number;
  format?: 'webp' | 'avif' | 'jpg' | 'png';
}

// SEO-optimized file naming convention
export const generateSEOFileName = (
  originalName: string,
  keywords: string[],
  index?: number
): string => {
  // Remove file extension
  const nameWithoutExt = originalName.replace(/\.[^/.]+$/, '');
  const extension = originalName.split('.').pop()?.toLowerCase();
  
  // Create SEO-friendly name
  const seoName = [
    'baddie777', // Brand name
    ...keywords,
    index ? `${index}` : ''
  ]
    .filter(Boolean)
    .join('-')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '') // Remove special characters
    .replace(/-+/g, '-') // Remove multiple dashes
    .replace(/^-|-$/g, ''); // Remove leading/trailing dashes
  
  return `${seoName}.${extension}`;
};

// Generate structured data for images
export const generateImageStructuredData = (images: ImageMetadata[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "$BADDIE777 Chaos Gallery",
    "description": "Digital art collection by Baddie777 - chaos turned into collectible gold",
    "image": images.map(img => ({
      "@type": "ImageObject",
      "url": `https://yourdomain.com${img.src}`,
      "name": img.title,
      "description": img.alt,
      "width": img.width || 800,
      "height": img.height || 800,
      "encodingFormat": `image/${img.format || 'jpeg'}`,
      "creator": {
        "@type": "Person",
        "name": "Baddie777"
      },
      "copyrightHolder": {
        "@type": "Person", 
        "name": "Baddie777"
      }
    }))
  };
};

// Generate XML sitemap for images
export const generateImageSitemap = (images: ImageMetadata[]): string => {
  const sitemapEntries = images.map(img => `
    <url>
      <loc>https://yourdomain.com/gallery</loc>
      <image:image>
        <image:loc>https://yourdomain.com${img.src}</image:loc>
        <image:title>${img.title}</image:title>
        <image:caption>${img.alt}</image:caption>
      </image:image>
    </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${sitemapEntries}
</urlset>`;
};

// Image compression recommendations
export const compressionGuidelines = {
  jpeg: {
    quality: 85, // Good balance of quality vs file size
    progressive: true, // Enable progressive JPEG
    mozjpeg: true // Use mozjpeg encoder if available
  },
  webp: {
    quality: 80, // WebP can maintain quality at lower settings
    lossless: false,
    method: 6 // Compression method (0-6, higher = better compression)
  },
  avif: {
    quality: 75, // AVIF has excellent compression
    speed: 6 // Encoding speed (0-10, higher = faster)
  }
};

// Responsive image breakpoints
export const responsiveBreakpoints = {
  mobile: 400,
  tablet: 800,
  desktop: 1200,
  large: 1600
};

// Generate responsive image URLs (for when you have a CDN/image service)
export const generateResponsiveUrls = (
  baseUrl: string,
  breakpoints: number[] = Object.values(responsiveBreakpoints)
): string => {
  return breakpoints
    .map(width => `${baseUrl}?w=${width}&q=85&f=webp ${width}w`)
    .join(', ');
};