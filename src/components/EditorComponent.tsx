'use client'

import '@mdxeditor/editor/style.css'
import type { MDXEditorMethods } from "@mdxeditor/editor";
import { 
    BlockTypeSelect, 
    BoldItalicUnderlineToggles, 
    CreateLink, 
    InsertThematicBreak, 
    ListsToggle, 
    MDXEditor, 
    UndoRedo, 
    headingsPlugin, 
    linkDialogPlugin, 
    linkPlugin, 
    listsPlugin, 
    markdownShortcutPlugin, 
    quotePlugin, 
    thematicBreakPlugin, 
    toolbarPlugin 
} from "@mdxeditor/editor"
import type {FC} from 'react';
import { useFormContext } from 'react-hook-form';

interface EditorProps {
  markdown: string,
  valueName: string,
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>,
}

/**
 * Extend this Component further with the necessary plugins or props you need.
 * proxying the ref is necessary. Next.js dynamically imported components don't support refs. 
**/
const Editor: FC<EditorProps> = ({ markdown, editorRef, valueName }) => {

  const form = useFormContext();

  return (
    <article className="prose lg:prose-base prose-sm prose-headings:text-foreground prose-blockquote:text-muted-foreground prose-strong:text-foreground prose-a:text-primary max-w-none w-full">
        <MDXEditor 
          ref={editorRef}
          markdown={markdown}
          onChange={(markdown => {
            form.setValue(valueName, markdown, {shouldDirty: true, shouldValidate: true})
          })}
          contentEditableClassName={"!text-foreground"}
          className='bg-background shadow'
          plugins={[
            headingsPlugin(),
            quotePlugin(),
            listsPlugin(),
            linkPlugin(),
            linkDialogPlugin(),
            thematicBreakPlugin(),
            markdownShortcutPlugin(),
            toolbarPlugin({
                toolbarContents: () => (
                  <>
                    {' '}
                    <UndoRedo />
                    <BoldItalicUnderlineToggles />
                    <BlockTypeSelect />
                    <ListsToggle />
                    <CreateLink />
                    <InsertThematicBreak />
                  </>
                )
            })
          ]} 
        />
    </article>
  )
}

export default Editor