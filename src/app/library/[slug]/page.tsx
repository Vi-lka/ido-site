import React, { Suspense } from 'react'
import { Loader2 } from 'lucide-react';
import { getSectionBySlug } from '@/lib/queries/main';
import PageDescriptions from '@/components/content/PageDescriptions';
import LibraryContent from './LibraryContent';
import GoBackButton from '@/components/GoBackButton';

export default async function LibrarySection({
  searchParams,
  params: { slug },
}: {
  searchParams: { [key: string]: string | string[] | undefined };
  params: { slug: string };
}) {

  const [ dataResult ] = await Promise.allSettled([ getSectionBySlug(slug) ]);

  return (
    <>
      <div className="w-full mb-4 mt-10 gap-4 relative flex justify-between items-center pb-4 border-b-2 border-foreground">
        <GoBackButton className="absolute -top-10 left-0 sm:-left-8 sm:top-0 lg:-left-12" />
        <div className='flex flex-col gap-3'>
            <h1 className="text-foreground lg:text-4xl sm:text-3xl text-2xl font-NotoSerif font-bold">
                Библиотека: <span className='lg:text-2xl text-xl font-medium'>{dataResult.status !== "rejected" && dataResult.value.attributes.title}</span>
            </h1>
            {(dataResult.status !== "rejected" && dataResult.value.attributes.description) && (
                <p className='font-Raleway sm:text-sm text-xs sm:text-left text-justify'>{dataResult.value.attributes.description}</p>
            )}
        </div>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        {(dataResult.status !== "rejected" && dataResult.value.attributes.text) && <PageDescriptions data={dataResult.value.attributes.text} />}
      </div>

      <Suspense fallback={
        <div className="mx-auto w-[85%] max-w-[1600px] pt-20">
          <Loader2 className="mx-auto h-12 w-12 animate-spin" />
        </div>
      }>
        <LibraryContent section={slug} searchParams={searchParams} />
      </Suspense>
    </>
  )
}
