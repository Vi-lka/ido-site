import React from 'react'
import BlocksRendererStrapi from '../../BlocksRendererStrapi'
import { cn } from '@/lib/utils'

export default function RichText({
    title,
    text,
    className,
}: {
    title: string | null,
    text: any,
    className?: string,
}) {
  return (
    <div className={cn("w-full font-Raleway", className)}>
        {title && (
          <h1 className="md:text-3xl text-xl font-bold mb-6">
            {title}
          </h1>
        )}
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        <BlocksRendererStrapi content={text} />
    </div>
  )
}
