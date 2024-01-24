import { cn } from '@/lib/utils';
import React from 'react'

export default function LogoSvg({
    name,
    isAdaptive = false,
    className,
}: {
    name: string,
    isAdaptive?: boolean;
    className?: string;
})  {
    return (
        <div className='flex items-center gap-1'>
            <svg
                className={cn(
                    "logo-svg h-[2.5rem] w-[2.5rem] min-w-[2.5rem]",
                    className
                )}
                width="106" 
                height="119" 
                viewBox="0 0 106 119" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M21.1279 23.6004H28.4436V98.8042H21.1279V23.6004ZM86.828 98.8042H77.5332L28.9738 59.9871L58.3073 23.4243H65.6231L38.5514 59.9871L86.828 98.8042Z" fill="black"/>
                <path d="M53.2891 55.126H59.5799V98.7688H53.2891V55.126Z" fill="black"/>
                <path d="M61.3823 79.9591L84.7785 55.126H77.0033L54.7734 78.0217L61.3823 79.9591Z" fill="black"/>
                <path d="M65.6233 4.05078H58.3076V23.4241H65.6233V4.05078Z" fill="black"/>
                <path d="M16.498 4.15625L17.5583 5.91746" stroke="black" strokeMiterlimit="10"/>
                <path d="M8.0872 0H0.771484V116.416H8.0872V0Z" fill="black"/>
                <path d="M105.771 111.238H0.771484V118.53H105.771V111.238Z" fill="black"/>
                <path d="M65.6234 0H0.771484V7.29142H65.6234V0Z" fill="black"/>
                <path d="M105.772 55.478H98.4561V118.529H105.772V55.478Z" fill="black"/>
                <path d="M105.807 55.126H76.9678V61.7481H105.807V55.126Z" fill="black"/>
            </svg>
            {isAdaptive 
                ? (
                    <h1 className='font-Raleway uppercase font-bold text-xs max-w-[150px] lg:block hidden'>{name}</h1>
                )
                : (
                    <h1 className='font-Raleway uppercase font-bold text-xs max-w-[150px]'>{name}</h1>
                )
            }
        </div>
    )
}
