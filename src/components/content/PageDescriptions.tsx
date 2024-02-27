import React from 'react'
import { HelpCircle } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { ScrollArea } from '../ui/scroll-area'
import Markdown from '../Markdown'

export default function PageDescriptions({ data }: { data: string }) {
    return (
        <Popover>
            <PopoverTrigger>
                <HelpCircle className='cursor-pointer' />
            </PopoverTrigger>
            <PopoverContent className="font-Raleway max-w-prose lg:w-[40rem] w-[90vw]">
                <ScrollArea className="w-full rounded-md" classNameViewport="lg:max-h-[70vh] max-h-[60vh] md:px-4 px-2">
                    <Markdown markdown={data} />
                </ScrollArea>
            </PopoverContent>
        </Popover>
    )
}
