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
  className?: string;
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
          className="aspect-square object-cover dark:shadow-foreground/20 outline-accent ring-ring ring-offset-background w-full overflow-hidden rounded-md shadow-md outline outline-1 outline-offset-1 transition-all duration-200"
          alt={props.title ? props.title : ""}
          priority
        />
        <p className="font-Raleway text-sm font-normal lg:text-base">
          {props.title}
        </p>
        {props.children}
      </div>
    </Link>
  );
}
