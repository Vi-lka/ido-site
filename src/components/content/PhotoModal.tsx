"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import { ArrowLeft, ArrowRight, Maximize } from "lucide-react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import ImageComponent from "../thumbnails/ImageComponent";
import { Skeleton } from "../ui/skeleton";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { cn } from "@/lib/utils";

export default function PhotoModal({
  data,
}: {
  data: {
    src: string;
    alt: string;
  }[];
}) {
  const [created, setCreated] = React.useState<boolean>();
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    drag: false,
    renderMode: "performance",
    initial: 0,
    slides: {
      origin: "center",
      spacing:
        typeof window !== "undefined" && window.innerWidth <= 740 ? 3 : 6,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setCreated(true);
    },
    destroyed() {
      setCreated(false);
    },
  });

  return (
    <Dialog onOpenChange={() => setCurrentSlide(0)}>
      <DialogTrigger>
        <Maximize className="h-6 w-6 cursor-pointer transition-all hover:scale-125" />
      </DialogTrigger>
      <DialogContent className="bg-accent h-[90vh] max-w-[95vw] overflow-hidden p-0 sm:max-w-[95vw]">
        <div
          ref={sliderRef}
          className="keen-slider bg-accent h-full w-full cursor-grab rounded-md"
        >
          {data.map((image, index) => (
            <div
              key={index}
              className="keen-slider__slide zoom-out__slide"
              onClick={(e) => e.stopPropagation()}
            >
              {created ? (
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
                        src={image.src}
                        fill
                        sizes="100vw"
                        quality={100}
                        className="object-contain"
                        alt={image.alt}
                      />
                    </div>
                  </TransformComponent>
                </TransformWrapper>
              ) : (
                <Skeleton className="h-full w-full" />
              )}
            </div>
          ))}
        </div>
        {created && !!instanceRef.current ? (
          data.length > 1 ? (
            <>
              <div className="bg-graphite absolute bottom-0 flex h-fit w-full items-center gap-6 bg-opacity-20">
                <div className="flex flex-auto gap-2">
                  {data.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => instanceRef.current?.moveToIdx(index)}
                      className="mx-1 flex-auto py-2"
                    >
                      <div
                        className={cn(
                          "h-0.5 w-full transition-all",
                          currentSlide === index ? "bg-primary" : "bg-foreground",
                        )}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <ArrowLeft
                className="text-foreground bg-accent absolute bottom-6 left-2 h-8 w-8 cursor-pointer rounded-md bg-opacity-20 transition-all hover:scale-125 md:top-1/2 md:translate-y-1/2"
                onClick={() => instanceRef.current?.prev()}
              />
              <ArrowRight
                className="text-foreground bg-accent absolute bottom-6 right-2 h-8 w-8 cursor-pointer rounded-md bg-opacity-20 transition-all hover:scale-125 md:top-1/2 md:translate-y-1/2"
                onClick={() => instanceRef.current?.next()}
              />
            </>
          ) : null
        ) : (
          <Skeleton className="mt-6 h-3 w-full" />
        )}
      </DialogContent>
    </Dialog>
  );
}
