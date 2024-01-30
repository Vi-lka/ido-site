import { getSections } from '@/lib/queries/main';
import React from 'react'
import ErrorHandler from '../errors/ErrorHandler';
import PaginationControls from './PaginationControls';
import ImgItem from '../thumbnails/ImgItem';
import Link from 'next/link';
import { getShortDescription } from '@/lib/utils';
import { Button } from '../ui/button';

export default async function Sections({
  homeHref,
  searchParams,
  type
}: {
  homeHref: string;
  searchParams: { [key: string]: string | string[] | undefined };
  type: "books" | "methodological";
}) {

    const defaultPageSize = 12;

    const page = searchParams["page"] ?? "1";
    const per = searchParams["per"] ?? defaultPageSize;
    const sort = searchParams["sort"] as string | undefined;
    const search = searchParams["search"] as string | undefined;

    const [ dataResult ] = await Promise.allSettled([ 
      getSections({
        page: Number(page),
        per: Number(per),
        sort,
        search,
        type
      }),
    ]);
    if (dataResult.status === "rejected")
    return (
      <>
            <ErrorHandler
                error={dataResult.reason as unknown}
                place="Sections"
                notFound
                goBack={false}
            />
            <div className="mb-24 mt-6">
                <PaginationControls
                    length={1}
                    defaultPageSize={defaultPageSize}
                />
            </div>
        </>
    )

  return (
    <>
        <div
          key={Math.random()}
          className="mx-auto my-12 grid w-[85%] grid-cols-1 gap-16 md:w-full"
        >
          {dataResult.value.data.map(section => (
              <div key={section.id} className="flex lg:flex-row flex-col items-start justify-between lg:gap-6 gap-3">
                <div className="flex items-start justify-around lg:w-1/4 w-full">
                  <ImgItem
                    href={`/${homeHref}/${section.attributes.slug}`}
                    src={section.attributes.image.data?.attributes.url}
                    title={null}
                    className="w-4/6 max-w-lg"
                  />
                </div>
        
                <div className="font-Raleway flex flex-col justify-between gap-6 w-full h-full">
                  <div className="font-Raleway flex flex-col gap-1 w-full">
                    <Link href={`/${homeHref}/${section.attributes.slug}`} className="hover:text-primary transition-all">
                      <h1 className="font-bold text-lg">{section.attributes.title}</h1>
                    </Link>
                    {section.attributes.description && (<>
                        {/* Desktop */}
                        <p className="whitespace-pre-line sm:block hidden">{section.attributes.description}</p>
                        {/* Mobile */}
                        <p className="whitespace-pre-line sm:hidden block">{getShortDescription(section.attributes.description)}</p>
                    </>)}
                  </div>
                  <Link href={`/${homeHref}/${section.attributes.slug}`} passHref className='w-fit h-fit mb-2'>
                    <Button className='font-Raleway font-semibold lg:px-14 px-12 py-6 hover:bg-primary/90'>
                      Открыть
                    </Button>
                  </Link>
                </div>
              </div>
            )
          )}
        </div>
        <div className="mb-24 mt-6">
          <PaginationControls
            length={dataResult.value.meta.pagination.total}
            defaultPageSize={defaultPageSize}
          />
        </div>
    </>
  )
}
