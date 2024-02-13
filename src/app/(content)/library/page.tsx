import React, { Suspense } from 'react'
import { Loader2 } from 'lucide-react';
import { getPageDescriptions } from '@/lib/queries/main';
import PageDescriptions from '@/components/content/PageDescriptions';
import Sections from '@/components/content/Sections';

export default async function LibraryPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {

  const [ pageDescriptions ] = await Promise.allSettled([ getPageDescriptions() ]);

  return (
    <>
      <div className="w-full mb-4 mt-10 gap-4 flex justify-between items-center pb-4 border-b-2 border-foreground">
        <div className='flex flex-col gap-3'>
          <h1 className="text-foreground lg:text-4xl sm:text-3xl text-2xl font-NotoSerif font-bold">
              Библиотека
          </h1>
          {(pageDescriptions.status !== "rejected" && pageDescriptions.value.library) && (
            <p className='font-Raleway sm:text-sm text-xs sm:text-left text-justify'>{pageDescriptions.value.library.short}</p>
          )}
        </div>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        {(pageDescriptions.status !== "rejected" && pageDescriptions.value.library?.full) && <PageDescriptions data={pageDescriptions.value.library.full} />}
      </div>

      <Suspense fallback={
        <div className="mx-auto w-[85%] max-w-[1600px] pt-20">
          <Loader2 className="mx-auto h-12 w-12 animate-spin" />
        </div>
      }>
        <Sections homeHref='library' type="books" searchParams={searchParams} />
      </Suspense>
    </>
  )
}
