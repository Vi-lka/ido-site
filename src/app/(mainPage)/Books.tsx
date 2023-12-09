import ErrorHandler from '@/components/errors/ErrorHandler';
import ImgItem from '@/components/thumbnails/ImgItem';
import { Button } from '@/components/ui/button';
import { getBooks } from '@/lib/queries/books';
import Link from 'next/link';
import React from 'react'

export default async function Books() {

  const [ dataResult ] = await Promise.allSettled([
    getBooks({ page: 1, per: 4 }) 
  ]);
  if (dataResult.status === "rejected")
  return (
    <ErrorHandler
      error={dataResult.reason as unknown}
      place="Library Block"
      notFound={false}
    />
  );

  return (
    <section className="flex flex-col lg:gap-12 gap-6 mt-12 mx-auto w-[95%] md:w-[85%] px-4 max-w-[2000px]">
      <h3 className="font-NotoSerif font-semibold lg:text-3xl text-2xl">
        Библиотека
      </h3>
      <div className="grid items-start gap-6 w-full lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        {dataResult.value.data.map(item => {
          return (
            <ImgItem
              key={item.id}
              href={`/library/${item.id}`}
              src={item.attributes.image.data?.attributes.url}
              title={item.attributes.title}
            />
          )
        })}
      </div>
      <Link href={'/library/'} passHref className='w-fit h-fit self-end'>
        <Button className='font-Raleway font-semibold lg:px-14 px-12 py-6 hover:bg-primary/90'>
          Смотреть еще
        </Button>
      </Link>
    </section>
  )
}
