import ErrorHandler from "@/components/errors/ErrorHandler";
import ImgItem from "@/components/thumbnails/ImgItem";
import { getBooks } from "@/lib/queries/books";
import React from "react";

export default async function BooksContent({
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
    getBooks({
      page: Number(page),
      per: Number(per),
      sort,
      search,
    }),
  ]);
  if (dataResult.status === "rejected")
    return (
      <ErrorHandler
        error={dataResult.reason as unknown}
        place="Library"
        notFound
        goBack={false}
      />
    );

  return (
    <>
      <div
        key={Math.random()}
        className="mx-auto mb-12 mt-3 grid w-[85%] grid-cols-1 gap-6 md:w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-[3000px]:grid-cols-5 min-[4000px]:grid-cols-6"
      >
        {dataResult.value.data.map(book => (
          <ImgItem
            key={book.id}
            href={`/library/${book.id}`}
            src={book.attributes.image.data?.attributes.url}
            title={book.attributes.title}
          />
        ))}
      </div>
    </>
  );
}
