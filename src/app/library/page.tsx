import React from 'react'
import BooksContent from './BooksContent';

export default function EventsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
  <>
    <div className="w-full mb-4 mt-10 flex flex-col justify-between gap-4 md:flex-row border-b-2 border-foreground">
      <h1 className="text-foreground lg:text-4xl text-3xl font-NotoSerif font-bold pb-4">
        Библиотека
      </h1>
    </div>
    <BooksContent searchParams={searchParams} />
  </>
  )
}
