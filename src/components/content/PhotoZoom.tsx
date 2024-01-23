"use client";

import React from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

import ImageComponent from "../thumbnails/ImageComponent";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { cn } from "@/lib/utils";

export default function PhotoZoom({
  alt,
  src,
  className,
}: {
  alt: string;
  src: string | undefined;
  className?: string;
}) {
  const [loading, setLoading] = React.useState(true);

  return (
    <Dialog>
      <DialogTrigger className={cn(
        "max-h-fit w-full",
        className
      )}>
        <ImageComponent
          src={src}
          fill={false}
          width={650}
          height={650}
          className={cn(
            "mx-auto min-h-[50vh] max-h-[70vh] overflow-hidden rounded-md object-contain",
            loading ? "" : "h-auto w-auto",
          )}
          alt={alt}
          priority
          onLoad={() => setLoading(false)}
        />
      </DialogTrigger>
      <DialogContent className="bg-accent h-[90vh] max-w-[95vw] overflow-hidden p-0 sm:max-w-[95vw]">
        <TransformWrapper>
          <TransformComponent
            contentStyle={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "90vh",
              width: "95vw",
            }}
          >
            <div className="relative h-full w-full">
              <ImageComponent
                src={src}
                fill
                sizes={`100vw`}
                quality={100}
                className="object-contain"
                alt={alt}
              />
            </div>
          </TransformComponent>
        </TransformWrapper>
      </DialogContent>
    </Dialog>
  );
}
