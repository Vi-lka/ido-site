"use client"

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Props = {
  title: string | null;
  href: string;
  target?: string;
  src?: string;
  width?: number;
  height?: number;
  className?: string;
};


export default function ImgItem(props: Props) {
  const [image, setImage] = React.useState("/images/image-placeholder.png");
  const [_, setIsPlaceholder] = React.useState(true);

  React.useEffect(() => {
    if (props.src) {
      setImage(props.src);
    } else {
      setImage("/images/image-placeholder.png");
    }
  }, [props.src]);

  React.useEffect(() => {
    if (image === "/images/image-placeholder.png") {
      setIsPlaceholder(true);
    } else {
      setIsPlaceholder(false);
    }
  }, [image]);



  return (
    <Link
      href={props.href}
      target={props.target}
      className={cn(
        "object bg-background flex aspect-square break-inside-avoid",
        props.className,
      )}
    >
      <div className="flex w-full flex-col gap-2">
        <Image
          src={image}
          width={props.width ? props.width : 450}
          height={props.height ? props.height : 450}
          onError={() => setImage("/images/image-placeholder.png")}
          className={cn(
            "object-cover outline-accent ring-ring ring-offset-background w-full overflow-hidden rounded-md shadow-md outline outline-1 outline-offset-1 transition-all duration-200",
          )}
          alt={props.title ? props.title : ""}
          priority={true}
        />

        <p className="font-Raleway decoration-primary text-sm font-normal decoration-[3px] underline-offset-4 transition-all duration-200 dark:decoration-2 lg:text-base">
          {props.title}
        </p>
      </div>
    </Link>
  );
}
