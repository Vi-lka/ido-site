"use client"

import React from 'react'
import { Button } from '../ui/button'
import { signOut } from 'next-auth/react'
import { cn } from '@/lib/utils'

export default function SignOutButton({
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
