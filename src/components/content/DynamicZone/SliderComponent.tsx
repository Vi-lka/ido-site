import { cn } from '@/lib/utils'
import React from 'react'
import PhotoSlider from '../PhotoSlider'

export default function SliderComponent({
    title,
    images,
    className,
    classNameSlider
}: {
    title: string | null,
    images: {
        data: {
            attributes: {
                url: string;
                alternativeText?: string | null | undefined;
            };
        }[];
    }
    className?: string,
    classNameSlider?: string
}) {

  const arrayImages = images.data?.map((image) => {
    return { src: image.attributes.url, alt: image.attributes.alternativeText ? image.attributes.alternativeText : "" };
  });

  return (
    <div className={cn("w-full font-Raleway", className)}>
        <h1 className="md:text-3xl text-xl font-bold mb-6">
          {title}
        </h1>
        <div className={cn("", classNameSlider)}>
            <PhotoSlider data={arrayImages} /> 
        </div>
    </div>
  )
}
