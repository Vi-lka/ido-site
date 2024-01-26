import { Loader2 } from 'lucide-react';
import React, { Suspense } from 'react'
import AboutContent from './AboutContent';

export default function AboutPage() {
  return (
    <>
      <div className="w-full mb-4 mt-10 gap-4 flex justify-between items-center pb-4 border-b-2 border-foreground">
        <h1 className="text-foreground lg:text-4xl text-3xl font-NotoSerif font-bold">
            О нас
        </h1>
      </div>

      <Suspense fallback={
        <div className="mx-auto w-[85%] max-w-[1600px] pt-20">
          <Loader2 className="mx-auto h-12 w-12 animate-spin" />
        </div>
      }>
        <AboutContent />
      </Suspense>
    </>
  )
}
