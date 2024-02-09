"use client"

import React from 'react'
import { Button } from '../ui/button'
import { signOut } from 'next-auth/react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { LogIn } from 'lucide-react'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'

export function AccountBar({
    name,
}: {
    name: string,
}) {

    const matchesName = name.match(/[\wа-я]+/ig)
    const acronymName = matchesName?.map(match => {
        return match[0].toUpperCase()
    })

    return (
        <div className='font-Raleway text-sm'>
            <DropdownMenu>
                <DropdownMenuTrigger className='rounded-full'>
                    <Avatar className='hover:ring hover:ring-offset-2 ring-ring ring-offset-background transition-all'>
                        {/* <AvatarImage src={image} /> */}
                        <AvatarFallback className='font-semibold'>
                            {acronymName ? acronymName : "USER"}
                        </AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
            
                <DropdownMenuContent className="w-56 font-Raleway rounded-xl">
                    <DropdownMenuLabel className='break-words sm:text-sm text-xs'>{name}</DropdownMenuLabel>

                    <DropdownMenuSeparator />
            
                    <DropdownMenuGroup>
                        <Link href={`/account`} passHref>
                            <DropdownMenuItem className='py-3 cursor-pointer rounded-[0.5rem]'>Личный кабинет</DropdownMenuItem>
                        </Link>
                    </DropdownMenuGroup>

                    <DropdownMenuSeparator />
            
                    <DropdownMenuItem className='cursor-pointer p-0'>
                        <Button 
                          className="px-2 py-1.5 block w-full h-fit text-left font-normal rounded-[0.5rem]" 
                          variant="destructive"
                          onClick={() => void signOut()}
                        >
                          Выйти
                        </Button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}


export function SignInButton({
    className,
    variant,
    icon
}: {
    className?: string,
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null,
    icon?: boolean
}) {
    return (
        <Link href={"/login"} passHref>
            <Button
                className={cn(
                    "font-Raleway",
                    className
                )}
                variant={variant}
            >
                {icon
                    ? <LogIn className='h-[1.5rem] w-[1.5rem]' />
                    : "Войти"
                }
            </Button>
        </Link>
    )
}


export function SignOutButton({
    className,
    variant
}: {
    className?: string,
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null
}) {
    return (
        <Button
            className={cn(
                "font-Raleway",
                className
            )}
            variant={variant}
            onClick={() => void signOut()}
        >
            Выйти
        </Button>
    )
}
