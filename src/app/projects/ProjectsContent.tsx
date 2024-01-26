import PaginationControls from '@/components/content/PaginationControls';
import ErrorHandler from '@/components/errors/ErrorHandler';
import ImgItem from '@/components/thumbnails/ImgItem';
import { Button } from '@/components/ui/button';
import { getProjects } from '@/lib/queries/projects';
import { getShortDescription } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'

export default async function ProjectsContent({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {

    const defaultPageSize = 12;

    const page = searchParams["page"] ?? "1";
    const per = searchParams["per"] ?? defaultPageSize;
    const sort = searchParams["sort"] as string | undefined;
    const search = searchParams["search"] as string | undefined;
  
    const [dataResult] = await Promise.allSettled([
      getProjects({
        page: Number(page),
        per: Number(per),
        sort,
        search,
      }),
    ]);
    if (dataResult.status === "rejected")
      return (
        <>
          <ErrorHandler
            error={dataResult.reason as unknown}
            place="Projects"
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
          {dataResult.value.data.map(project => (
              <div key={project.id} className="flex lg:flex-row flex-col items-start justify-between lg:gap-6 gap-3">
                <div className="flex items-start justify-around lg:w-2/5 w-full">
                  <ImgItem
                    href={`/projects/${project.id}`}
                    src={project.attributes.image.data?.attributes.url}
                    title={null}
                    className="w-4/6 max-w-lg"
                  />
                </div>
  
                <div className="font-Raleway flex flex-col justify-between gap-6 w-full h-full">
                  <div className="font-Raleway flex flex-col gap-1 w-full">
                    <Link href={`/projects/${project.id}`} className="hover:text-primary transition-all">
                      <h1 className="font-bold text-lg">{project.attributes.title}</h1>
                    </Link>
                    {/* Desktop */}
                    <p className="whitespace-pre-line sm:block hidden">{project.attributes.description}</p>
                    {/* Mobile */}
                    <p className="whitespace-pre-line sm:hidden block">{getShortDescription(project.attributes.description)}</p>
                  </div>
                  <Link href={`/projects/${project.id}`} passHref className='w-fit h-fit mb-2'>
                    <Button className='font-Raleway font-semibold lg:px-14 px-12 py-6 hover:bg-primary/90'>
                      Читать далее
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
    );
}