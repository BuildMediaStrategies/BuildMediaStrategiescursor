import React from 'react';

type Props = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'className'> & {
  /** File base, e.g. `pexels-326503` */
  id: string;
  /** Optional directory, defaults to `/pexels/` */
  dir?: string;
  /** Optional class applied to the enclosing <picture> */
  pictureClassName?: string;
  /** Class applied to the <img> tag */
  imgClassName?: string;
};

export function PexelsImage({ id, dir = '/pexels', alt, pictureClassName, imgClassName, ...imgProps }: Props) {
  const basePath = `${dir.replace(/\/$/, '')}/${id}`;

  return (
    <picture className={pictureClassName}>
      <source srcSet={`${basePath}.avif`} type="image/avif" />
      <source srcSet={`${basePath}.webp`} type="image/webp" />
      <img src={`${basePath}.jpg`} alt={alt} className={imgClassName} {...imgProps} />
    </picture>
  );
}

export default PexelsImage;
