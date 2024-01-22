import React from 'react'
import BlocksRendererStrapi from '../BlocksRendererStrapi'
import { HelpCircle } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { ScrollArea } from '../ui/scroll-area'

export default function PageDescriptions({ data }: { data: any }) {
    return (
        <Popover>
            <PopoverTrigger>
                <HelpCircle className='cursor-help' />
            </PopoverTrigger>
            <PopoverContent className="font-Raleway max-w-prose lg:w-[40rem] w-[90vw]">
                <ScrollArea className="w-full rounded-md" classNameViewport="lg:max-h-[70vh] max-h-[60vh] md:px-4 px-2">
                    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                    <BlocksRendererStrapi content={data} />
                </ScrollArea>
            </PopoverContent>
        </Popover>
    )
}
