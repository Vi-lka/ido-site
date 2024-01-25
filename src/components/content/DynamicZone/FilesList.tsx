import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { ArrowUpRightFromSquare, Download, File } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export default function FilesList({
  title,
  list,
  className
}: {
  title: string | null;
  list: {
    name: string;
    file: {
        data: {
            attributes: {
                url: string;
            };
        };
    };
  }[];
  className?: string
}) {
  return (
    <div className={cn(
      "w-full font-Raleway", className
    )}>
      {title && (
        <h1 className="md:text-3xl text-xl font-bold mb-6">
          {title}
        </h1>
      )}
      <ul className='flex flex-col gap-3'>
        {list.map((item, index) => {
          const fileName = item.name
          const fileUrl = item.file.data.attributes.url
          return (
            <TooltipProvider key={index}>
              <Tooltip delayDuration={150}>
                <TooltipTrigger asChild>
                  <Link href={fileUrl} target='__blank' className='w-fit py-2 px-6 hover:text-primary font-semibold transition-all'>
                    <li className='flex items-center gap-2 sm:no-underline underline underline-offset-4'>
                      <File /> <span className='flex-1'>{fileName}</span>
                    </li>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className='flex items-center justify-between gap-1 font-Raleway w-fit h-fit m-0 p-1 bg-background border text-foreground'>
                  <Link href={fileUrl} target='__blank' className='w-fit flex items-center gap-1 p-2 hover:text-primary'>
                    <ArrowUpRightFromSquare className='w-4 h-4' /> <span>Oткрыть</span>
                  </Link>
                  <Separator className=' bg-primary w-[1px] h-4' orientation="vertical" decorative />
                  <Link href={fileUrl} target='__blank' className='w-fit flex items-center gap-1 p-2 hover:text-primary' download>
                    <Download className='w-4 h-4' /> <span>Скачать</span>
                  </Link>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )
        })}
      </ul>
    </div>
  )
}
