"use client"

import { cn } from '@/lib/utils'
import React from 'react'

export default function EmbededHTML({ 
  elem,
  title,
  className,
  classNameEmbeded,
}: { 
  elem: string,
  title: string | null,
  className?: string,
  classNameEmbeded?: string
}) {
    const [embededHTML, setEmbededHTML] = React.useState<string>("")

    React.useEffect(() => {
        setEmbededHTML(elem)
    }, [elem])

    return (
      <div className={cn("w-full font-Raleway", className)}>
        {title && (
          <h1 className="md:text-3xl text-xl font-bold mb-6">
            {title}
          </h1>
        )}
        <div className={cn(
          "embeded-html flex w-full md:aspect-video aspect-square overflow-hidden",
          classNameEmbeded
        )} dangerouslySetInnerHTML={{__html: embededHTML}}></div>
      </div>
    )
}