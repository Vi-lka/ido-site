import PageDescriptions from '@/components/content/PageDescriptions';
import { getPageDescriptions } from '@/lib/queries/main';
import { Loader2 } from 'lucide-react';
import React, { Suspense } from 'react'
import ProjectsContent from './ProjectsContent';

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  
  const [ pageDescriptions ] = await Promise.allSettled([
    getPageDescriptions()
  ]);

  return (
    <>
      <div className="w-full mb-4 mt-10 gap-4 flex justify-between items-center pb-4 border-b-2 border-foreground">
        <div className='flex flex-col gap-3'>
          <h1 className="text-foreground lg:text-4xl sm:text-3xl text-2xl font-NotoSerif font-bold">
            Проекты
          </h1>
          {(pageDescriptions.status !== "rejected" && pageDescriptions.value.projects) && (
            <p className='font-Raleway sm:text-sm text-xs sm:text-left text-justify'>{pageDescriptions.value.projects.short}</p>
          )}
        </div>
        {(pageDescriptions.status !== "rejected" && pageDescriptions.value.projects?.full) && <PageDescriptions data={pageDescriptions.value.projects.full} />}
      </div>

      <Suspense fallback={
        <div className="mx-auto w-[85%] max-w-[1600px] pt-20">
          <Loader2 className="mx-auto h-12 w-12 animate-spin" />
        </div>
      }>
        <ProjectsContent searchParams={searchParams} />
      </Suspense>
    </>
  )
}
