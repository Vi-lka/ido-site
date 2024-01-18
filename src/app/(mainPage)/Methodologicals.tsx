import IconBooksSvg from '@/components/IconBooksSvg';
import ErrorHandler from '@/components/errors/ErrorHandler';
import ImageComponent from '@/components/thumbnails/ImageComponent';
import { Button } from '@/components/ui/button';
import { getMethodologicals } from '@/lib/queries/methodological';
import getShortDescription from '@/lib/utils';
import Link from 'next/link';
import React from 'react'

export default async function Methodologicals() {

    const [ dataResult ] = await Promise.allSettled([
        getMethodologicals({ page: 1, per: 4 }) 
    ]);
    if (dataResult.status === "rejected")
    return (
        <ErrorHandler
          error={dataResult.reason as unknown}
          place="Methodological Block"
          notFound={false}
        />
    );

  return (
    <section className="flex flex-col lg:gap-12 gap-6 mt-12 mx-auto w-[95%] md:w-[85%] px-4 max-w-[2000px]">
      <h3 className="font-NotoSerif font-semibold lg:text-3xl text-2xl">
        Методические ресурсы
      </h3>
      <ul className="grid items-start gap-6 w-full lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 font-Raleway">
        {dataResult.value.data.map(item => {
          return (
            <Link key={item.id} href={`/methodological/${item.id}`} passHref>
              <li className='li-elem flex gap-3 items-start'>
                {item.attributes.image.data ?
                  <ImageComponent
                    src={item.attributes.image.data.attributes.url}
                    fill={false}
                    width={65}
                    height={65}
                    className="lg:w-[65px] w-[55px] aspect-square object-cover overflow-hidden rounded-full transition-all"
                    alt={item.attributes.title}
                    priority 
                  />
                  : <IconBooksSvg className='li-svg lg:w-[60px] w-[50px] transition-all' />
                }
                <div className='flex-1'>
                  <p className='li-title text-sm font-semibold'>{item.attributes.title}</p>
                  {item.attributes.description && <p className='text-xs'>{getShortDescription(item.attributes.description, 20)}</p>}
                </div>
              </li>
            </Link>
          )
        })}
      </ul>
      <Link href={'/methodological/'} passHref className='w-fit h-fit self-end'>
        <Button className='font-Raleway font-semibold lg:px-14 px-12 py-6 hover:bg-primary/90'>
          Смотреть еще
        </Button>
      </Link>
    </section>
  )
}
