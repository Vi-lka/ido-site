import React, { Suspense } from 'react'
import EventsContent from './EventsContent';
import { getPageDescriptions } from '@/lib/queries/main';
import { getEventsCategories } from '@/lib/queries/events';
import PageDescriptions from '@/components/content/PageDescriptions';
import ContentTabs from '@/components/content/ContentTabs';
import { Loader2 } from 'lucide-react';
import ErrorHandler from '@/components/errors/ErrorHandler';

export default async function EventsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {

  const [ dataResult, pageDescriptions ] = await Promise.allSettled([ 
    getEventsCategories({}),
    getPageDescriptions()
  ]);

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
      <div className='flex flex-col gap-3'>
        <h1 className="text-foreground lg:text-4xl sm:text-3xl text-2xl font-NotoSerif font-bold">
          День в истории края
        </h1>
        {(pageDescriptions.status !== "rejected" && pageDescriptions.value.events) && (
          <p className='font-Raleway sm:text-sm text-xs sm:text-left text-justify'>{pageDescriptions.value.events.short}</p>
        )}
      </div>
      {(pageDescriptions.status !== "rejected" && pageDescriptions.value.events?.full) && <PageDescriptions data={pageDescriptions.value.events.full} />}
    </div>
    {tabsData
        ? (
        <ContentTabs data={tabsData} title='Рубрика'>
            <Suspense fallback={
              <div className="mx-auto w-[85%] max-w-[1600px] pt-20">
                <Loader2 className="mx-auto h-12 w-12 animate-spin" />
              </div>
            }>
              <EventsContent searchParams={searchParams} />
            </Suspense>
          </ContentTabs>
        )
        : (<>
          {dataResult.status === "rejected"  && 
            <ErrorHandler
              error={dataResult.reason as unknown}
              place="Events Categories"
              notFound={false}
            />
          }
          
          <Suspense fallback={
            <div className="mx-auto w-[85%] max-w-[1600px] pt-20">
              <Loader2 className="mx-auto h-12 w-12 animate-spin" />
            </div>
          }>
            <EventsContent searchParams={searchParams} />
          </Suspense>
        </>)
      }
  </>
  )
}
