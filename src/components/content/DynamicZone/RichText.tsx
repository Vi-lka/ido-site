import React from 'react'
import { cn } from '@/lib/utils'
import Markdown from '@/components/Markdown'

export default function RichText({
    title,
    text,
    className,
}: {
    title: string | null,
    text: string | null,
    className?: string,
}) {
  return (
    <div className={cn("w-full font-Raleway", className)}>
        {title && (
          <h1 className="md:text-3xl text-xl font-bold mb-6">
            {title}
          </h1>
        )}
        <Markdown markdown={text} />
    </div>
  )
}
