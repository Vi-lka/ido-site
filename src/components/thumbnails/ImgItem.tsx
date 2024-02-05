"use client"

import React from 'react'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import ImageComponent from './ImageComponent';

type Props = {
  title: string | null;
  href: string;
  target?: string;
  src?: string;
  width?: number;
  height?: number;
  objectContain?: boolean
  className?: string;
  classNameParagraph?: string;
  children?: React.ReactNode
};


export default function ImgItem(props: Props) {

  return (
    <Link
      href={props.href}
      target={props.target}
      className={cn(
        "object flex break-inside-avoid",
        props.className,
      )}
    >
      <div className="flex w-full flex-col gap-2">
        <ImageComponent
          src={props.src}
          fill={false}
          width={props.width ? props.width : 450}
          height={props.height ? props.height : 450}
          className={cn(
            "aspect-square object-cover dark:shadow-foreground/20 outline-accent w-full overflow-hidden rounded-md shadow-md transition-all duration-200",
            props.objectContain ? "object-contain" : "object-cover",
          )}
          alt={props.title ? props.title : ""}
          priority
        />

        {props.children}
        
        <p className={cn(
          "font-Raleway text-sm font-normal lg:text-base",
          props.classNameParagraph
        )}>
          {props.title}
        </p>
      </div>
    </Link>
  );
}
