import { cn } from '@/lib/utils'
import React from 'react'

export default function WaveRedSvg({
    className
}: {
    className?: string
}) {
    return (
        <svg 
            width="100%"
            viewBox="0 0 1920 1521" 
            fill="none"
            className={cn(
                "",
                className
            )}
            xmlns="http://www.w3.org/2000/svg" 
        >
            <path d="M1082 607.5C378.634 589.671 6.00641 238.998 -80.9998 0C-679.876 390.933 -1541.19 1252.87 -251.5 1307.5C-37 1261 1770.5 1230 2087.5 1521V607.5C2055.83 512.185 1871 627.5 1082 607.5Z" fill="#FFF0ED" fillOpacity="0.9" />
        </svg>
    )
}
