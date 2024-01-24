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
      <h1 className="text-foreground lg:text-4xl text-3xl font-NotoSerif font-bold">
        Новости
      </h1>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */}
      {(pageDescriptions.status !== "rejected" && pageDescriptions.value.news && pageDescriptions.value.news[0].children[0].text.length !== 0) && <PageDescriptions data={pageDescriptions.value.news} />}
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
