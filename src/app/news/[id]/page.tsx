import BlocksRendererStrapi from '@/components/BlocksRendererStrapi';
import GoBackButton from '@/components/GoBackButton';
import DynamicZone from '@/components/content/DynamicZone/DynamicZone';
import PhotoZoom from '@/components/content/PhotoZoom';
import ErrorHandler from '@/components/errors/ErrorHandler';
import { getNewByID } from '@/lib/queries/news';
import React from 'react'

export default async function NewsSingle({
  params: { id },
}: {
  params: { id: string };
})  {

    const [dataResult] = await Promise.allSettled([
        getNewByID({
          id
        }),
      ]);
      if (dataResult.status === "rejected") return (
        <ErrorHandler
          error={dataResult.reason as unknown}
          place={`News id: ${id}`}
          notFound
          goBack
        />
    );

    const date = new Date(dataResult.value.attributes.date);
    const dateName = date.toLocaleString('ru', { day: "numeric", month: 'long', year: "numeric" });

  return (
    <>
      <div className="w-full flex flex-col justify-between gap-4 mt-3 relative md:flex-row border-b-2 border-foreground">
        <GoBackButton className="absolute -top-10 left-0 sm:-left-8 sm:top-0 lg:-left-12" />
        <h1 className="text-foreground lg:text-3xl sm:text-2xl text-xl font-NotoSerif font-bold pb-4 sm:mt-0 mt-3">
          {dataResult.value.attributes.title}
        </h1>
      </div>

      <div className="flex gap-1 items-center justify-end flex-wrap lg:text-xl text-lg font-Raleway mt-3">
        <p className='flex items-center gap-1 text-base font-medium'>
          {dateName}
        </p>
      </div>

      <div className="">
        {dataResult.value.attributes.image.data && (
          <PhotoZoom
            src={dataResult.value.attributes.image.data.attributes.url}
            alt={dataResult.value.attributes.title}
            className="lg:float-right lg:m-6 mx-auto my-6 lg:w-1/2 w-full"
          />
          // <ImageComponent
          //   src={dataResult.value.attributes.image.data.attributes.url}
          //   fill={false}
          //   width={650}
          //   height={650}
          //   priority
          //   className="lg:float-right lg:m-6 mx-auto my-6 lg:w-1/2 w-auto max-h-[70vh] overflow-hidden rounded-md object-contain"
          //   alt={dataResult.value.attributes.title}
          // />
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
