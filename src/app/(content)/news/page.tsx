import React, { Suspense } from 'react'
import NewsContent from './NewsContent';
import { getPageDescriptions } from '@/lib/queries/main';
import PageDescriptions from '@/components/content/PageDescriptions';
import { Loader2 } from 'lucide-react';
import Sort from '@/components/content/Sort';

export default async function NewsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {

  const [ pageDescriptions ] = await Promise.allSettled([ getPageDescriptions() ]);

  const sortData = [
    { val: 'date:asc', text: 'Дата: ASC↓' },
    { val: 'date:desc', text: 'Дата: DESC↑' },
  ] as {val:string, text: string}[]

  return (
  <>
    <div className="w-full mb-4 mt-10 gap-4 flex justify-between items-center pb-4 border-b-2 border-foreground">
      <div className='flex flex-col gap-3'>
        <h1 className="text-foreground lg:text-4xl sm:text-3xl text-2xl font-NotoSerif font-bold">
          Новости
        </h1>
        {(pageDescriptions.status !== "rejected" && pageDescriptions.value.news) && (
          <p className='font-Raleway sm:text-sm text-xs sm:text-left text-justify'>{pageDescriptions.value.news.short}</p>
        )}
      </div>
      {(pageDescriptions.status !== "rejected" && pageDescriptions.value.news?.full) && <PageDescriptions data={pageDescriptions.value.news.full} />}
    </div>

    <Sort 
      data={sortData}
      className='self-end'
    />
    <Suspense fallback={
      <div className="mx-auto w-[85%] max-w-[1600px] pt-20">
        <Loader2 className="mx-auto h-12 w-12 animate-spin" />
      </div>
    }>
      <NewsContent searchParams={searchParams} />
    </Suspense>
  </>
  )
}
