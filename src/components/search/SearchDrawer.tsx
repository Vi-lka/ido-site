"use client"

import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function SearchDrawer({
    children
}: {
    children: React.ReactNode
}) {
    const [prevPath, setPrevPath] = useState("")

    const router = useRouter()
    const pathName = usePathname()

    const params = new URLSearchParams(window.location.search);

    useEffect(() => {
      if (pathName !== "/search") setPrevPath(pathName)
    }, [pathName])

  return (
    <>
        <Drawer onClose={() => {
            params.delete("searchAll");
            router.push(`${prevPath}?${params.toString()}`, { scroll: false });
        }}>
            {/* {pathName !== "/search"
                ? ( */}
                    <Link href={"/search"}>
                        <DrawerTrigger asChild>
                            <Button
                                variant="ghost"
                                size="sm"
                                aria-label="Toggle Search Drawer"
                                className="px-3 py-5"
                            >
                                <Search className='h-[1.5rem] w-[1.5rem]' />
                            </Button>
                        </DrawerTrigger>
                    </Link>
                {/* )
                : (
                    <Button
                        variant="ghost"
                        size="sm"
                        aria-label="Toggle Search Drawer"
                        className="px-3 py-5"
                    >
                        <Search className='h-[1.5rem] w-[1.5rem]' />
                    </Button>
                )
            } */}
            <DrawerContent>
                <div className="font-Raleway mx-auto w-full lg:max-w-5xl sm:max-w-lg max-w-xs">
                    <DrawerHeader>
                        <DrawerTitle className='flex items-center gap-1.5 lg:text-xl text-lg'>
                            <Search className='lg:h-[1.5rem] lg:w-[1.5rem] h-[1.2rem] w-[1.2rem]' />
                            Поиск
                        </DrawerTitle>
                        {/* <DrawerDescription>Введите название:</DrawerDescription> */}
                    </DrawerHeader>

                    {children}

                    <DrawerFooter>
                        <DrawerClose>
                            <Button variant="secondary">Закрыть</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    </>
  )
}
