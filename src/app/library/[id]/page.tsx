/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import ErrorHandler from '@/components/errors/ErrorHandler';
import React from 'react'
import Image from "next/image";
import BlocksRendererStrapi from '@/components/BlocksRendererStrapi';
import { getBookByID } from '@/lib/queries/books';
import Link from 'next/link';
import { ArrowUpRightFromSquare } from 'lucide-react';
import GoBackButton from '@/components/GoBackButton';

export default async function BookSingle({
  params: { id },
}: {
  params: { id: string };
}) {

  const [dataResult] = await Promise.allSettled([
    getBookByID({
      id
    }),
  ]);
  if (dataResult.status === "rejected") return (
    <ErrorHandler
      error={dataResult.reason as unknown}
      place={`Book id: ${id}`}
      notFound
      goBack
    />
  );

  const category = dataResult.value.attributes.category.data

  return (
    <>
      <div className="w-full flex flex-col justify-between gap-4 mt-3 relative md:flex-row border-b-2 border-foreground">
        <GoBackButton className="absolute -top-10 left-0 sm:-left-8 sm:top-0 lg:-left-12" />
        <h1 className="text-foreground lg:text-3xl text-2xl font-NotoSerif font-bold pb-4 sm:mt-0 mt-3">
          {dataResult.value.attributes.title}
        </h1>
      </div>


      <div className='flex items-center justify-between gap-3 w-full'>
        {category && (
          <div className="flex gap-1 items-center flex-wrap lg:text-xl text-lg font-Raleway mt-3">
            <h2 className="text-sm">
              Раздел:
            </h2>
            <Link 
              href={"/library?category=" + category.attributes.slug}
              className='text-base font-medium underline underline-offset-4 hover:text-primary transition-all'
            >
              {category.attributes.title}
            </Link>
          </div>
        )}

        {dataResult.value.attributes.file.data && (
          <div className="flex gap-1 items-center flex-wrap lg:text-xl text-lg font-Raleway mt-3">
            <h2 className="text-sm">
              Файл:
            </h2>
            <Link 
              href={dataResult.value.attributes.file.data?.attributes.url} 
              target='__blank'
              className='flex items-center gap-1 text-base font-medium underline underline-offset-4 hover:text-primary transition-all'
            >
              Открыть <ArrowUpRightFromSquare className='w-5 h-5' />
            </Link>
          </div>
        )}
      </div>

      <div className="">
        {dataResult.value.attributes.image.data && (
          <Image
            src={dataResult.value.attributes.image.data.attributes.url}
            priority={true}
            width={650}
            height={650}
            className="lg:float-right lg:m-6 mx-auto my-6 lg:w-1/2 w-auto max-h-[70vh] overflow-hidden rounded-md object-contain"
            alt={dataResult.value.attributes.title}
          />
        )}

        {dataResult.value.attributes.text && (
          <div className="font-Raleway lg:mt-6 mb-6">
            <BlocksRendererStrapi content={dataResult.value.attributes.text} />
          </div>
        )}
      </div>
    </>
  )
}
