import React from 'react'

export default function BooksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex flex-col gap-1 mt-12 mx-auto w-[95%] md:w-[85%] px-4 max-w-[2000px]">
      {children}
    </main>
  )
}
