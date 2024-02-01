import { getSearchAll } from '@/lib/queries/main';
import React from 'react'
import ErrorHandler from '../errors/ErrorHandler';

export default async function SearchContent({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {

    const search = searchParams["searchAll"] as string | undefined;
  
    const [ dataResult ] = await Promise.allSettled([
      getSearchAll(search),
    ]);
    if (dataResult.status === "rejected")
      return (
        <>
          <ErrorHandler
            error={dataResult.reason as unknown}
            place="Search All"
            notFound
            goBack
          />
        </>
      )

  return (
    <>
      <ul key={Math.random()}>
        <li>books: {dataResult.value.books.data.length}</li>
        <li>methodResources: {dataResult.value.methodResources.data.length}</li>
        <li>events: {dataResult.value.events.data.length}</li>
        <li>news: {dataResult.value.news.data.length}</li>
        <li>projects: {dataResult.value.projects.data.length}</li>
      </ul>
    </>
  )
}