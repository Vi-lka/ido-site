import SearchContent from '@/components/search/SearchContent';
import { Loader2 } from 'lucide-react';
import React, { Suspense } from 'react'

export default function SearchPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {

  return (
    <>
      <Suspense fallback={
        <div className="mx-auto w-[85%] max-w-[1600px] pt-20">
          <Loader2 className="mx-auto h-12 w-12 animate-spin" />
        </div>
      }>
        <SearchContent searchParams={searchParams}/>
      </Suspense>
    </>
  )
}
