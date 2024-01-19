import React, { Suspense } from 'react'
import BooksContent from './BooksContent';
import ContentTabs from '@/components/content-tabs/ContentTabs';
import ErrorHandler from '@/components/errors/ErrorHandler';
import { getBooksCategories } from '@/lib/queries/books';
import { HelpCircle, Loader2 } from 'lucide-react';

export default async function BooksPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {

  const [ dataResult ] = await Promise.allSettled([ getBooksCategories({}) ]);

  const tabsData = dataResult.status !== "rejected" ? 
    dataResult.value.data.map(item => {
      const title = item.attributes.title
      const slug = item.attributes.slug
      const description = item.attributes.description
      const image = item.attributes.image.data?.attributes.url
      return {title, slug, description, image}
    })
    : null

  return (
    <>
      <div className="w-full mb-4 mt-10 gap-4 flex justify-between items-center pb-4 border-b-2 border-foreground">
        <h1 className="text-foreground lg:text-4xl text-3xl font-NotoSerif font-bold">
          Библиотека
        </h1>
        <HelpCircle />
      </div>
      {tabsData
        ? (
        <ContentTabs data={tabsData}>
            <Suspense fallback={
              <div className="mx-auto w-[85%] max-w-[1600px] pt-20">
                <Loader2 className="mx-auto h-12 w-12 animate-spin" />
              </div>
            }>
              <BooksContent searchParams={searchParams} />
            </Suspense>
          </ContentTabs>
        )
        : (<>
          {dataResult.status === "rejected"  && 
            <ErrorHandler
              error={dataResult.reason as unknown}
              place="Books Categories"
              notFound={false}
            />
          }
          
          <Suspense fallback={
            <div className="mx-auto w-[85%] max-w-[1600px] pt-20">
              <Loader2 className="mx-auto h-12 w-12 animate-spin" />
            </div>
          }>
            <BooksContent searchParams={searchParams} />
          </Suspense>
        </>)
      }
    </>
  )
}
