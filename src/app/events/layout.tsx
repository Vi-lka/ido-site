import React from 'react'

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex flex-col lg:gap-8 gap-4 mt-12 mx-auto w-[95%] md:w-[85%] px-4 max-w-[2000px]">
        {children}
    </main>
  )
}
