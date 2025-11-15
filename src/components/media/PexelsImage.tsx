import React, { useEffect, useState } from 'react';

type Props = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'className'> & {
  /** File base, e.g. `pexels-326503` */
  id: string;
  /** Optional directory, defaults to `/pexels/` */
  dir?: string;
  /** Optional class applied to the enclosing <picture> */
  pictureClassName?: string;
  /** Class applied to the <img> tag */
  imgClassName?: string;
  /** Optional fallback image path */
  fallbackSrc?: string;
};

const DEFAULT_FALLBACK = '/assets/logo.png';

export function PexelsImage({
  id,
  dir = '/pexels',
  alt,
  pictureClassName,
  imgClassName,
  fallbackSrc = DEFAULT_FALLBACK,
  ...imgProps
}: Props) {
  const normalizedDir = dir.startsWith('/') ? dir : `/${dir}`;
  const basePath = `${normalizedDir.replace(/\/$/, '')}/${id}`;
  const [imgSrc, setImgSrc] = useState(`${basePath}.jpg`);
  const {
    width = 1920,
    height = 1280,
    loading = 'lazy',
    decoding = 'async',
    fetchPriority = 'low',
    onError,
    ...rest
  } = imgProps;

  useEffect(() => {
    setImgSrc(`${basePath}.jpg`);
  }, [basePath]);

  const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (imgSrc === fallbackSrc) {
      if (typeof onError === 'function') {
        onError(event);
      }
      return;
    }
    setImgSrc(fallbackSrc);
  };

  return (
    <picture className={pictureClassName}>
      <source srcSet={`${basePath}.avif`} type="image/avif" />
      <source srcSet={`${basePath}.webp`} type="image/webp" />
      <img
        src={imgSrc}
        alt={alt}
        className={imgClassName}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        width={width}
        height={height}
        onError={handleError}
        {...rest}
      />
    </picture>
  );
}

export default PexelsImage;
