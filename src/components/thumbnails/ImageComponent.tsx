"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

type Props = {
  src: string | undefined;
  alt: string;
  priority?: boolean;
  quality?: number;
  className?: string;
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
} & (Fill | NotFill);

type Fill = {
  fill: true;
  sizes: string;
};
type NotFill = {
  fill: false;
  width: number;
  height: number;
};

export default function ImageComponent(props: Props) {
  const placeholderImage = "/images/image-placeholder.png";
  const { theme } = useTheme();

  const [image, setImage] = React.useState(
    !!props.src ? props.src : placeholderImage,
  );

  React.useEffect(() => {
    if (!!props.src) setImage(props.src);
  }, [props]);

  const width = !props.fill ? props.width : undefined;
  const height = !props.fill ? props.height : undefined;
  const sizes = props.fill ? props.sizes : undefined;

  return (
    <Image
      src={image}
      fill={props.fill}
      sizes={sizes}
      width={width}
      height={height}
      quality={props.quality}
      placeholder={placeholderSvg(width, height, theme)}
      onError={() => setImage(placeholderImage)}
      className={props.className}
      alt={props.alt}
      priority={props.priority}
      onLoad={props.onLoad}
    />
  );
}

export const bgWhiteTheme = "#f0edeb";
export const shimmerWhiteTheme = "#e9e5e2";

export const bgBlackTheme = "#29293d";
export const shimmerBlackTheme = "#2d2d43";

export const shimmer = (w: number, h: number, theme: string | undefined) => `
      <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <linearGradient id="g">
            <stop stop-color="${
              theme === "dark" ? bgBlackTheme : bgWhiteTheme
            }" offset="20%" />
            <stop stop-color="${
              theme === "dark" ? bgBlackTheme : bgWhiteTheme
            }" offset="50%" />
            <stop stop-color="${
              theme === "dark" ? shimmerBlackTheme : shimmerWhiteTheme
            }" offset="70%" />
          </linearGradient>
        </defs>
        <rect width="${w}" height="${h}" fill="${
          theme === "dark" ? bgBlackTheme : bgWhiteTheme
        }" />
        <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
        <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
      </svg>
  `;

export const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const placeholderSvg = (
  w: number | undefined,
  h: number | undefined,
  theme: string | undefined,
): `data:image/${string}` =>
  `data:image/svg+xml;base64,${toBase64(
    shimmer(w ? w : 450, h ? h : 450, theme),
  )}`;
