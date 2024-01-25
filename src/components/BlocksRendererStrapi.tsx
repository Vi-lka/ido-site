"use client"

import React from 'react'
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Link from 'next/link';
import ImageComponent from './thumbnails/ImageComponent';

interface TextInlineNode {
    type: 'text';
    text: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    code?: boolean;
}
interface LinkInlineNode {
    type: 'link';
    url: string;
    children: TextInlineNode[];
}
interface ListItemInlineNode {
    type: 'list-item';
    children: DefaultInlineNode[];
}
type DefaultInlineNode = TextInlineNode | LinkInlineNode;
interface ParagraphBlockNode {
    type: 'paragraph';
    children: DefaultInlineNode[];
}
interface QuoteBlockNode {
    type: 'quote';
    children: DefaultInlineNode[];
}
interface CodeBlockNode {
    type: 'code';
    children: DefaultInlineNode[];
}
interface HeadingBlockNode {
    type: 'heading';
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: DefaultInlineNode[];
}
interface ListBlockNode {
    type: 'list';
    format: 'ordered' | 'unordered';
    children: (ListItemInlineNode | ListBlockNode)[];
}
interface ImageBlockNode {
    type: 'image';
    image: {
        name: string;
        alternativeText?: string | null;
        url: string;
        caption?: string | null;
        width: number;
        height: number;
        formats?: Record<string, unknown>;
        hash: string;
        ext: string;
        mime: string;
        size: number;
        previewUrl?: string | null;
        provider: string;
        // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
        provider_metadata?: unknown | null;
        createdAt: string;
        updatedAt: string;
    };
    children: [{
        type: 'text';
        text: '';
    }];
}
type RootNode = ParagraphBlockNode | QuoteBlockNode | CodeBlockNode | HeadingBlockNode | ListBlockNode | ImageBlockNode;

export default function BlocksRendererStrapi({
    content
}: {
    content: any
}) {
  return (
    <BlocksRenderer 
        content={content as RootNode[]}
        blocks={{
            paragraph: ({ children }) => <p className="my-2 md:text-base text-sm">{children}</p>,
            heading: ({ children, level }) => {
              switch (level) {
                case 1:
                  return <article className="prose lg:prose-xl mb-3"><h1 className='font-NotoSerif text-foreground'>{children}</h1></article>
                case 2:
                  return <article className="prose lg:prose-xl mb-3"><h2 className='font-Raleway text-foreground'>{children}</h2></article>
                case 3:
                  return <article className="prose lg:prose-xl mb-3"><h3 className='font-Raleway text-foreground'>{children}</h3></article>
                case 4:
                  return <article className="prose lg:prose-xl mb-3"><h4 className='font-Raleway text-foreground'>{children}</h4></article>
                case 5:
                  return <article className="prose lg:prose-xl mb-3"><h5 className='font-Raleway text-foreground'>{children}</h5></article>
                case 6:
                  return <article className="prose lg:prose-xl mb-3"><h6 className='font-Raleway text-foreground'>{children}</h6></article>
                default:
                  return <article className="prose lg:prose-xl mb-3"><h1 className='font-Raleway text-foreground'>{children}</h1></article>
              }
            },
            list: ({ children, format }) => {
              switch (format) {
                case "ordered":
                  return <ol className='list-decimal mb-3 pl-4 flex flex-col gap-1.5'>{children}</ol>
                case "unordered":
                  return <ul className='list-disc mb-3 pl-4 flex flex-col gap-1.5'>{children}</ul>
                default:
                  return <ul className='list-disc mb-3 pl-4 flex flex-col gap-1.5'>{children}</ul>
              }
            },
            quote: ({ children }) => {
              return (
                <article className="prose lg:prose-xl">
                  <blockquote className='text-foreground font-NotoSerif text-base'>
                    <p>{children}</p>
                  </blockquote>
                </article>
              )
            },
            link: ({ children, url }) => (
              <Link href={url} target='__blank' className='text-primary hover:underline underline-offset-2 transition-all'>
                {children}
              </Link>
            ),
            image: ({ image }) => (
              <ImageComponent
                src={"/uploads/" + image.hash + image.ext}
                fill={false}
                width={image.width < 1000 ? image.width : 450}
                height={image.height < 1000 ? image.height : 450}
                className="aspect-[5/4] object-contain w-full overflow-hidden rounded-md"
                alt={image.alternativeText ? image.alternativeText : ""}
                priority
              />
            )
        }}
    />
  )
}
