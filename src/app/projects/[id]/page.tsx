/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import ErrorHandler from '@/components/errors/ErrorHandler';
import { getProjectByID } from '@/lib/queries/projects';
import React from 'react'
import GoBackButton from '@/components/GoBackButton';
import PhotoZoom from '@/components/content/PhotoZoom';
import PhotoSlider from '@/components/content/PhotoSlider';
import DynamicZone from '@/components/content/DynamicZone/DynamicZone';
import BlocksRendererStrapi from '@/components/BlocksRendererStrapi';

export default async function MethodologicalSingle({
  params: { id },
}: {
  params: { id: string };
}) {

  const [ dataResult ] = await Promise.allSettled([
    getProjectByID({ id }),
  ]);
  if (dataResult.status === "rejected")
    return (
      <ErrorHandler
        error={dataResult.reason as unknown}
        place={`Project id: ${id}`}
        notFound
        goBack
      />
    );

  const firstImage = {
    src: dataResult.value.attributes.image.data ? dataResult.value.attributes.image.data.attributes.url : "/images/image-placeholder.png",
    alt: dataResult.value.attributes.title,
  };
  const additionalImages = dataResult.value.attributes.additionalImages.data?.map((item) => {
    return { src: item.attributes.url, alt: item.attributes.alternativeText ? item.attributes.alternativeText : "" };
  });
  const images = !!additionalImages
    ? [firstImage, ...additionalImages]
    : [firstImage];

  return (
    <>

      <div className="w-full flex flex-col justify-between gap-4 mt-3 relative md:flex-row border-b-2 border-foreground">
        <GoBackButton className="absolute -top-10 left-0 sm:-left-8 sm:top-0 lg:-left-12" />
        <h1 className="text-foreground lg:text-3xl sm:text-2xl text-xl font-NotoSerif font-bold pb-4 sm:mt-0 mt-3">
          {dataResult.value.attributes.title}
        </h1>
      </div>

      <div className="">
        {images.length === 1 ? (
            firstImage.src === "/images/image-placeholder.png" 
                ? null
                : (
                  <PhotoZoom
                    src={firstImage.src}
                    alt={firstImage.alt}
                    className="lg:float-right lg:m-6 mx-auto my-6 lg:w-1/2 w-full"
                  />
                ) 
        ) : (
          <PhotoSlider 
            data={images}
            className="lg:float-right lg:m-6 mx-auto my-6 lg:w-1/2 w-full"
          />
        )}

        {dataResult.value.attributes.text && (
          <div className="font-Raleway lg:mt-6 mb-6">
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
            <BlocksRendererStrapi content={dataResult.value.attributes.text} />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-12">
        {dataResult.value.attributes.content?.map((item, index) => (
          <DynamicZone key={index} item={item} />
        ))}
      </div>
    </>
  )
}
