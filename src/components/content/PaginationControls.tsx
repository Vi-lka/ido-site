"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronsLeft,
    ChevronsRight,
    Loader2,
  } from "lucide-react";
import { cn } from '@/lib/utils'
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function PaginationControls({ 
    length,
    defaultPageSize,
}: { 
    length: number,
    defaultPageSize: number,
}) {

  const [isPendingMore, startTransitionMore] = React.useTransition()
  const [isPendingPage, startTransitionPage] = React.useTransition()

  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const page = searchParams.get('page') ?? '1'
  const per = searchParams.get('per') ?? defaultPageSize

  const [pageInput, setPageInput] = React.useState(page)

  React.useEffect(() => {
    setPageInput(page)
  }, [page])
  
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {

    if (Number(event.target.value) > max_page) {

      setPageInput(max_page.toString())
    
    } else if (!event.target.value) {

      setPageInput(event.target.value)

    } else if (Number(event.target.value) < 1) {
      
      setPageInput('1')
    
    } else setPageInput(event.target.value)
  }

  const max_page = Math.ceil(length / Number(per))

  const handlePageParams = React.useCallback(
    (value: string) => {
      const params = new URLSearchParams(window.location.search);
      if (value.length > 0) {
        params.set("page", value);
        startTransitionPage(() => {
          router.push(`${pathname}?${params.toString()}`);
        });
      } else {
        params.delete("page");
      }
    },
    [pathname, router],
  );

  const handlePageSizeParams = React.useCallback(
    (value: string) => {
      const params = new URLSearchParams(window.location.search);
      if (value.length > 0) {
        params.set("per", value);
        startTransitionMore(() => {
          router.push(`${pathname}?${params.toString()}`, { scroll: false });
        });
      } else {
        params.delete("per");
      }
    },
    [pathname, router],
  );

  return (
    <div className='font-Raleway flex lg:gap-0 gap-12 lg:items-start items-center lg:flex-row flex-col lg:justify-end relative'>
      {Number(page) === 1 ? (
        <Button
          className={cn(
            "px-10 py-6 uppercase lg:absolute lg:left-1/2 lg:-translate-x-1/2",
            (Number(page) >= max_page) ? "hidden" : "flex"
          )}
          disabled={isPendingPage || isPendingMore}
          onClick={() => handlePageSizeParams((Number(per) + defaultPageSize).toString())}
        >
          <span className="sr-only">Показать ещё</span>
          {isPendingMore ? <Loader2 className='w-4 h-4 animate-spin' /> : "Показать ещё"}
        </Button>
      ) : null}

        <div 
            className='flex items-center lg:flex-row flex-col-reverse lg:gap-4 gap-2' 
            // style={{ display: Number(per) >= length ? 'none' : 'flex'}}
        >

            <div className='font-Inter flex items-center'>
                {isPendingPage ? 
                  <Loader2 className='h-12 w-12 animate-spin' />
                  : 
                  (
                    <>
                      Страница
                      <Input 
                        className={cn(
                          "w-16 mx-2 text-base font-normal border-foreground/30",
                          max_page < 9 ? "w-14" : max_page > 99 ? "w-20" : "w-16",
                        )}
                        type="number" 
                        value={pageInput} 
                        onChange={handleChangeInput}
                        onKeyDownCapture={event => {
                          if (event.key === 'Enter') {
                            handlePageParams(pageInput)
                          }
                        }}
                        onBlurCapture={() => handlePageParams(pageInput)}
                      />
                      из {max_page}
                    </>
                  )}
            </div>

            <div className="flex items-center space-x-1">
                {/* FIRST */}
                <Button
                  variant="outline"
                  className="h-10 w-10 p-0 border-foreground/30"
                  disabled={(Number(page) <= 1) || isPendingPage || isPendingMore}
                  onClick={() => handlePageParams('1')}
                >
                  {/* For SEO */}
                  <Link href={`${pathname}/?page=1&per=${per}`} className="hidden">Перейти на первую страницу</Link>
                  <span className="sr-only">Перейти на первую страницу</span>
                  <ChevronsLeft className="h-4 w-4" />
                </Button>

                {/* PREVIOUS */}
                <Button
                  variant="outline"
                  className="h-10 w-10 p-0 border-foreground/30"
                  disabled={(Number(page) <= 1) || isPendingPage || isPendingMore}
                  onClick={() => handlePageParams((Number(page) - 1).toString())}
                >
                  {/* For SEO */}
                  <Link href={`${pathname}/?page=${Number(page) - 1}&per=${per}`} className="hidden">Перейти на предыдущую страницу</Link>
                  <span className="sr-only">Перейти на предыдущую страницу</span>
                  <ChevronLeftIcon className="h-4 w-4" />
                </Button>

                {/* NEXT */}
                <Button
                  variant="outline"
                  className="h-10 w-10 p-0 border-foreground/30"
                  disabled={(Number(page) >= max_page) || isPendingPage || isPendingMore}
                  onClick={() => handlePageParams((Number(page) + 1).toString())}
                >
                  {/* For SEO */}
                  <Link href={`${pathname}/?page=${Number(page) + 1}&per=${per}`} className='hidden'>Перейти на следующую страницу</Link>
                  <span className="sr-only">Перейти на следующую страницу</span>
                  <ChevronRightIcon className="h-4 w-4" />
                </Button>

                {/* LAST */}
                <Button
                  variant="outline"
                  className="h-10 w-10 p-0 border-foreground/30"
                  disabled={(Number(page) >= max_page) || isPendingPage || isPendingMore}
                  onClick={() => handlePageParams(max_page.toString())}
                >
                  {/* For SEO */}
                  <Link href={`${pathname}/?page=${max_page}&per=${per}`} className='hidden'>Перейти на последнюю страницу</Link>
                  <span className="sr-only">Перейти на последнюю страницу</span>
                  <ChevronsRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    </div>
  )
}
