"use client"

import { Loader2 } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

export default function Sort({ 
    data,
    className
}: {
    data: {val:string, text: string}[],
    className?: string,
}) {

    const [isPending, startTransition] = React.useTransition()

    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()

    const sort = searchParams.get('sort') ?? undefined

    const handleSortParams = React.useCallback(
        (value: string) => {
          const params = new URLSearchParams(window.location.search);
          if (value.length > 0) {
            params.set("sort", value);
            startTransition(() => {
              router.push(`${pathname}?${params.toString()}`, { scroll: false });
            });
          } else {
            params.delete("sort");
          }
        },
        [pathname, router],
    );

    if (isPending) return <Loader2 className="mx-auto h-5 w-5 animate-spin" />

  return (
    <Select
      value={sort}
      onValueChange={handleSortParams}
    >
      <SelectTrigger className={cn(
        "font-Raleway w-fit border-none rounded-sm",
        className
      )}>
        <SelectValue placeholder={"Сортировать по:"} />
      </SelectTrigger>
      <SelectContent side="top" className='font-Raleway bg-background transition-all'>
        {data.map((elem) => (
          <SelectItem key={elem.val} value={`${elem.val}`} className='font-Inter cursor-pointer transition-all'>
            {elem.text}
          </SelectItem>
        ))}
        {sort ? (
            <Button
                className='w-full h-8 px-2 py-0 mt-4 rounded-sm font-Inter font-normal text-xs uppercase transition-all'
                color="primary"
                onClick={() => {
                    const params = new URLSearchParams(window.location.search);
                    params.delete("sort");
                    startTransition(() => {
                        router.push(`${pathname}?${params.toString()}`, { scroll: false });
                    });
                }}
            >
                Сброс
            </Button>
        ) : null}
      </SelectContent>
    </Select>
  )
}
