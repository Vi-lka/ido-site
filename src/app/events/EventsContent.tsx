import PaginationControls from "@/components/content/PaginationControls";
import ErrorHandler from "@/components/errors/ErrorHandler";
import ImgItem from "@/components/thumbnails/ImgItem";
import { Button } from "@/components/ui/button";
import { getEvents } from "@/lib/queries/events";
import { getDateName, getShortDescription } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default async function EventsContent({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {

  const defaultPageSize = 12;

  const page = searchParams["page"] ?? "1";
  const per = searchParams["per"] ?? defaultPageSize;
  const sort = searchParams["sort"] as string | undefined;
  const search = searchParams["search"] as string | undefined;
  const category = searchParams["category"] as string | undefined;

  const [dataResult] = await Promise.allSettled([
    getEvents({
      page: Number(page),
      per: Number(per),
      sort,
      search,
      category
    }),
  ]);
  if (dataResult.status === "rejected")
    return (
      <>
        <ErrorHandler
          error={dataResult.reason as unknown}
          place="Events"
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
        {dataResult.value.data.map(event => {
          const dateName = getDateName({
            day: event.attributes.date.day,
            month: event.attributes.date.month,
            year: event.attributes.date.year,
          })
          const dateArray = dateName.split(' ');
          const monthName = dateArray[1]
          const yearName = dateArray[2] + ' ' + dateArray[3]

          return (
            <div key={event.id} className="flex lg:flex-row flex-col items-start justify-between lg:gap-12 gap-3">
              <div className="flex items-start justify-around lg:gap-12 gap-6 lg:w-2/5 w-full">
                <div className="font-Raleway w-fit flex flex-col gap-3 items-center">
                  <h2 className="lg:text-7xl text-6xl font-semibold w-max">{event.attributes.date.day}</h2>
                  <h3 className="lg:text-xl text-lg w-max">{monthName}</h3>
                  <h3 className="lg:text-2xl text-xl font-semibold w-max">{yearName}</h3>
                </div>

                <ImgItem
                  href={`/events/${event.id}`}
                  src={event.attributes.image.data?.attributes.url}
                  title={null}
                  className="w-4/5 max-w-lg"
                />
              </div>

              <div className="font-Raleway flex flex-col justify-between gap-6 lg:w-3/5 w-full h-full">
                <div className="font-Raleway flex flex-col gap-1 w-full">
                  <h1 className="font-bold text-lg">{event.attributes.title}</h1>
                  <h2 className="text-primary mb-3">{event.attributes.category?.data?.attributes.title}</h2>
                  {/* Desktop */}
                  <p className="whitespace-pre-line sm:block hidden">{event.attributes.description}</p>
                  {/* Mobile */}
                  <p className="whitespace-pre-line sm:hidden block">{getShortDescription(event.attributes.description)}</p>
                </div>
                <Link href={`/events/${event.id}`} passHref className='w-fit h-fit mb-2'>
                  <Button className='font-Raleway font-semibold lg:px-14 px-12 py-6 hover:bg-primary/90'>
                    Читать далее
                  </Button>
                </Link>
              </div>
            </div>
          )
        })}
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
