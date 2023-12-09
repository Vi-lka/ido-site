"use client"

import React from 'react'
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

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
    <BlocksRenderer content={content as RootNode[]} />
  )
}
