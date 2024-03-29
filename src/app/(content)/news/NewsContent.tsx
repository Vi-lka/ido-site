import PaginationControls from "@/components/content/PaginationControls";
import ErrorHandler from "@/components/errors/ErrorHandler";
import ImgItem from "@/components/thumbnails/ImgItem";
import { getNews } from "@/lib/queries/news";
import React from "react";

export default async function NewsContent({
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
    getNews({
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
          place="News"
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
        className="mx-auto mt-2 mb-12 grid w-[85%] grid-cols-1 gap-6 md:w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-[3000px]:grid-cols-5 min-[4000px]:grid-cols-6"
      >
        {dataResult.value.data.map(news => {
          const date = new Date(news.attributes.date);
          const dateName = date.toLocaleString('ru', { day: "numeric", month: 'long', year: "numeric" });

          return (
            <ImgItem
              key={news.id}
              href={`/news/${news.id}`}
              src={news.attributes.image.data?.attributes.url}
              title={news.attributes.title}
              objectContain
            >
              <p className="font-Raleway text-sm text-primary">{dateName}</p>
            </ImgItem>
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
