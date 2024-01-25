import PaginationControls from "@/components/content/PaginationControls";
import ErrorHandler from "@/components/errors/ErrorHandler";
import IconBooksSvg from "@/components/svg/IconBooksSvg";
import ImageComponent from "@/components/thumbnails/ImageComponent";
import { Button } from "@/components/ui/button";
import { getMethodological } from "@/lib/queries/methodological";
import { getShortDescription } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default async function MethodologicalContent({
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
    getMethodological({
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
          place="Methodological"
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
        {dataResult.value.data.map(method => (
            <div key={method.id} className="flex lg:flex-row flex-col items-center justify-between gap-6">
              <div className="flex items-center lg:w-1/5 w-full lg:justify-normal justify-center">
                {method.attributes.image.data ?
                    <Link href={`/methodological/${method.id}`} className="aspect-square w-full lg:max-w-[250px] max-w-[150px] rounded-full overflow-hidden hover:ring ring-ring ring-offset-2 transition-all duration-200 break-inside-avoid outline outline-2 outline-offset-0 outline-accent hover:scale-105">
                        <ImageComponent
                          src={method.attributes.image.data?.attributes.url}
                          alt={method.attributes.title}
                          fill={false}
                          width={300}
                          height={300}
                          priority
                          className="w-full h-full object-cover"
                        />
                    </Link>
                  : (
                  <Link href={`/methodological/${method.id}`} className="aspect-square w-full lg:max-w-[200px] max-w-[100px] hover:scale-105 transition-all duration-200">
                    <IconBooksSvg className='w-full h-full' />
                  </Link>
                )}
              </div>

              <div className="font-Raleway flex flex-col justify-between gap-6 w-full h-full">
                <div className="font-Raleway flex flex-col gap-1 w-full">
                  <Link href={`/methodological/${method.id}`} className="hover:text-primary transition-all">
                    <h1 className="font-bold text-lg">{method.attributes.title}</h1>
                  </Link>
                  {method.attributes.description && (<>
                    {/* Desktop */}
                    <p className="whitespace-pre-line sm:block hidden">{method.attributes.description}</p>
                    {/* Mobile */}
                    <p className="whitespace-pre-line sm:hidden block">{getShortDescription(method.attributes.description)}</p>
                  </>)}
                </div>
                <Link href={`/methodological/${method.id}`} passHref className='w-fit h-fit mb-2 lg:self-auto self-end'>
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
  );
}
