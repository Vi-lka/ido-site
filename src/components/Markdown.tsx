/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import ImageComponent from './thumbnails/ImageComponent';

export default function Markdown({
    markdown
}: {
    markdown: string | null
}) {

  if (markdown === null) return null

    const MarkdownComponents: object = {
        p: (paragraph: { children?: boolean; node?: any}) => {
            const { node } = paragraph
          
            if (node.children[0].tagName === "img") {
              const image = node.children[0]
              const metastring = image.properties.alt
              const alt = metastring?.replace(/ *\{[^)]*\} */g, "")
              const metaWidth = metastring.match(/{([^}]+)x/)
              const metaHeight = metastring.match(/x([^}]+)}/)
              const width = metaWidth ? metaWidth[1] : "768"
              const height = metaHeight ? metaHeight[1] : "432"
              const isPriority = metastring?.toLowerCase().match('{priority}')
              const hasCaption = metastring?.toLowerCase().includes('{caption:')
              const caption = metastring?.match(/{caption: (.*?)}/)?.pop()

              console.log(image)
          
              return (
                <div className="lg:max-w-lg max-w-xs mx-auto">
                    <ImageComponent
                      src={image.properties.src}
                      fill={false}
                      width={width <= 768 ? width : 450}
                      height={height <= 432 ? height : 450}
                      className="aspect-[5/4] object-contain w-full overflow-hidden rounded-md"
                      alt={alt}
                      priority={isPriority}
                    />
                    {hasCaption ? <div className="caption" aria-label={caption}>{caption}</div> : null}
                </div>
              )
            }
            return <p>{paragraph.children}</p>
        },
    }


  return (
    <article className="prose lg:prose-base prose-sm prose-headings:text-foreground prose-blockquote:text-muted-foreground prose-strong:text-foreground prose-a:text-primary max-w-none w-full">
        <ReactMarkdown
            className={"!text-foreground"}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={MarkdownComponents}
        >
            {markdown}
        </ReactMarkdown>
    </article>
  )
}
