import React from "react";

import ImageComponent from "../thumbnails/ImageComponent";
import { cn } from "@/lib/utils";

export default function PhotoSliderImg({
  alt,
  src,
  sizes = "(min-width: 768px) 40vw, 85vw",
}: {
  alt: string;
  src: string | undefined;
  sizes?: string;
}) {
  return (
    <ImageComponent
      src={src}
      fill
      sizes={sizes}
      className={cn("mx-auto", !!src ? "object-contain" : "object-cover")}
      alt={alt}
    />
  );
}
