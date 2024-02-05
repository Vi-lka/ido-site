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
    const [open, setOpen] = useState(false)
    const [prevPath, setPrevPath] = useState("")

    const router = useRouter()
    const pathName = usePathname()

    const params = new URLSearchParams(window.location.search);

    useEffect(() => {
        if (pathName !== "/search") {
            setPrevPath(pathName)

            const paramsEffect = new URLSearchParams(window.location.search);
            paramsEffect.delete("searchAll");
            router.push(`${prevPath}?${paramsEffect.toString()}`, { scroll: false });
            setOpen(false)
        }
    }, [pathName, prevPath, router])

  return (
    <>
        <Drawer 
            open={open}
            onClose={() => {
                setOpen(false)
                params.delete("searchAll");
                router.push(`${prevPath}?${params.toString()}`, { scroll: false });
            }}
        >
            <Link href={"/search"} passHref>
                <DrawerTrigger asChild onClick={() => setOpen((prev) => !prev)}>
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
            <DrawerContent onPointerDownOutside={() => setOpen(false)}>
                <div className="font-Raleway mx-auto w-full h-fit lg:max-w-5xl sm:max-w-lg max-w-xs">
                    <DrawerHeader className='flex justify-between w-full'>
                        <DrawerTitle className='flex items-center gap-1.5 lg:text-xl text-lg'>
                            <Search className='lg:h-[1.5rem] lg:w-[1.5rem] h-[1.2rem] w-[1.2rem]' />
                            Поиск
                        </DrawerTitle>
                        {/* <DrawerDescription>Введите название:</DrawerDescription> */}
                    </DrawerHeader>

                    <div className='h-[70dvh]'>
                        {children}
                    </div>

                    <DrawerFooter>
                        <DrawerClose asChild onClick={() => setOpen(false)} className='w-fit mx-auto'>
                            <Button variant="secondary">Закрыть</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    </>
  )
}
