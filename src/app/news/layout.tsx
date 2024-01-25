"use client"

import WaveGreenSvg from '@/components/svg/WaveGreenSvg'
import WaveRedSvg from '@/components/svg/WaveRedSvg'
import { cn } from '@/lib/utils'
import React from 'react'

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [showSvg, setShowSvg] = React.useState(false)

  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!!ref.current && (ref.current.clientHeight > 2000)) setShowSvg(true)
    else setShowSvg(false)
  }, [ref])

  return (
    <>
      <div className="relative w-full">
        <WaveGreenSvg className="w-full absolute -bottom-[100vh] min-[2000px]:hidden sm:block hidden left-1/2 -translate-x-1/2 opacity-40 dark:opacity-[0.02] -z-10" />
      </div>

      <main ref={ref} className="flex flex-col gap-1 mt-12 mx-auto w-[95%] md:w-[85%] px-4 max-w-[2000px]">
        {children}
      </main>

      <div className="relative w-full">
        <WaveRedSvg className={cn(
          "w-full absolute bottom-24 left-1/2 -translate-x-1/2 opacity-40 dark:opacity-[0.02] -z-10",
          showSvg ? "block" : "hidden"
        )}/>
      </div>
    </>
  )
}
