import Image from "next/image";

import { urlForImage } from "@/sanity/image";
import type { SanityImageAsset } from "@/types/sanity";

type CmsImageProps = {
  image?: SanityImageAsset;
  alt: string;
  sizes: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
};

export function CmsImage({ image, alt, sizes, className, fill = false, width, height }: CmsImageProps) {
  if (!image?.asset?._ref) {
    return null;
  }

  const src = urlForImage(image).fit("crop").auto("format").url();

  if (fill) {
    return <Image src={src} alt={alt} fill sizes={sizes} className={className} />;
  }

  if (!width || !height) {
    return null;
  }

  return <Image src={src} alt={alt} width={width} height={height} sizes={sizes} className={className} />;
}
