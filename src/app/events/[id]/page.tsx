/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import ErrorHandler from '@/components/errors/ErrorHandler';
import { getEventByID } from '@/lib/queries/events';
import React from 'react'
import Image from "next/image";
import BlocksRendererStrapi from '@/components/BlocksRendererStrapi';

export default async function EventSingle({
  params: { id },
}: {
  params: { id: string };
}) {

    const [dataResult] = await Promise.allSettled([
        getEventByID({
          id
        }),
      ]);
      if (dataResult.status === "rejected")
        return (
          <ErrorHandler
            error={dataResult.reason as unknown}
            place={`Event id: ${id}`}
            notFound
            goBack
          />
        );

  return (
    <>
        <div className="w-full mt-10 flex flex-col justify-between gap-4 md:flex-row border-b-2 border-foreground">
          <h1 className="text-foreground lg:text-3xl text-2xl font-NotoSerif font-bold pb-4">
            {dataResult.value.attributes.title}
          </h1>
        </div>

        <h2 className="text-foreground lg:text-xl text-lg font-Raleway font-semibold">
            Рубрика: <span className='font-medium underline'>{dataResult.value.attributes.category?.data?.attributes.title}</span>
        </h2>

        <div className="flex lg:flex-row flex-col gap-6">
            {dataResult.value.attributes.image.data ? (
                <Image
                  src={dataResult.value.attributes.image.data.attributes.url}
                  priority={true}
                  width={650}
                  height={650}
                  className="mx-auto lg:w-1/2 max-h-[70vh] w-auto overflow-hidden rounded-md object-contain"
                  alt={dataResult.value.attributes.title}
                />
            ) : null}

            <div className="lg:w-1/2 font-Raleway">
                <BlocksRendererStrapi content={dataResult.value.attributes.text} />
            </div>
        </div>
    </>
  )
}
