import ShelvesBooksSvg from '@/components/ShelvesBooksSvg';
import ErrorHandler from '@/components/errors/ErrorHandler';
import { Button } from '@/components/ui/button';
import { getBooks } from '@/lib/queries/books';
import { BookOpenText } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export default async function Books() {

  const [ dataResult ] = await Promise.allSettled([
    getBooks({ page: 1, per: 5 }) 
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
    <section className="relative flex flex-col lg:gap-8 gap-4 mt-12 mx-auto w-[95%] md:w-[85%] px-4 max-w-[2000px]">
      <h3 className="font-NotoSerif font-semibold lg:text-3xl text-2xl">
        Библиотека
      </h3>
      <div className='flex justify-between gap-6'>
        <div className='lg:w-1/2 w-full lg:mt-4 mt-2'>
          <ul className="font-Raleway flex flex-col gap-6 lg:mb-12 mb-6">
            {dataResult.value.data.map(item => {
              return (
                <Link key={item.id} href={`/library/${item.id}`} passHref>
                  <li className='li-elem font-medium hover:text-ring'>
                    <BookOpenText className='li-svg inline-block transition-all' /> {item.attributes.title}
                  </li>
                </Link>
              )
            })}
          </ul>
          <Link href={'/library/'} passHref className='w-fit h-fit self-end'>
            <Button className='font-Raleway font-semibold lg:px-14 px-12 py-6 hover:bg-primary/90'>
              Смотреть еще
            </Button>
          </Link>
        </div>
          
        <ShelvesBooksSvg className="lg:block hidden w-1/2 max-w-[600px]" />
      </div>
    </section>
  )
}
