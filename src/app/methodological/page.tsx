import React, { Suspense } from 'react'
import MethodologicalContent from './MethodologicalContent';
import { getPageDescriptions } from '@/lib/queries/main';
import PageDescriptions from '@/components/content/PageDescriptions';
import { Loader2 } from 'lucide-react';

export default async function MethodologicalPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {

  const [ pageDescriptions ] = await Promise.allSettled([ getPageDescriptions() ]);

  return (
  <>
    <div className="w-full mb-4 mt-10 gap-4 flex justify-between items-center pb-4 border-b-2 border-foreground">
      <h1 className="text-foreground lg:text-4xl text-3xl font-NotoSerif font-bold">
        Методические ресурсы
      </h1>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      {(pageDescriptions.status !== "rejected" && pageDescriptions.value.methodological) && <PageDescriptions data={pageDescriptions.value.methodological} />}
    </div>

    <Suspense fallback={
      <div className="mx-auto w-[85%] max-w-[1600px] pt-20">
        <Loader2 className="mx-auto h-12 w-12 animate-spin" />
      </div>
    }>
      <MethodologicalContent searchParams={searchParams} />
    </Suspense>
  </>
  )
}
