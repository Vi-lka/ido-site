"use client"

import React from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import ImageComponent from '../thumbnails/ImageComponent';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export default function ContentTabs({
    data,
    children
}: {
    data: {
        title: string,
        slug: string,
        description: string | null,
        image: string | undefined,
    }[],
    children: React.ReactNode
}) {

    const [tab, setTab] = React.useState("");

    const [isPending, startTransition] = React.useTransition()

    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
  
    const category = searchParams.get("category") ?? undefined;

    const handleChangeTab = React.useCallback(
        (value: string) => {
            setTab(value);
            const params = new URLSearchParams(window.location.search);
            params.set("category", value);
            startTransition(() => {
                router.replace(`${pathname}?${params.toString()}`, { scroll: false });
            })
        },
        [pathname, router, setTab],
    );

    const handlePrefetchTab = React.useCallback(
        (value: string) => {
            const params = new URLSearchParams(window.location.search);
            params.set("category", value);
            router.prefetch(`${pathname}?${params.toString()}`);
        },
        [pathname, router],
    );

    React.useEffect(() => {
        if ((category === undefined || category.length > 0) && data.length > 0) {
            handleChangeTab(data[0].slug)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (data.length === 0) return children 

    return (
        <>
            <Tabs 
                className="w-full"
                value={tab}
                onValueChange={(value) => handleChangeTab(value)}
            >
                <TabsList className='w-full h-fit flex justify-around flex-wrap'>
                    {data.map(item => 
                        <HoverCard key={item.slug} openDelay={300} closeDelay={150}>
                            <TabsTrigger  
                                asChild
                                value={item.slug}
                                disabled={isPending}
                                className='font-Raleway text-base py-2 px-6 border-[1px] border-transparent data-[state=active]:border-primary cursor-pointer'
                                onMouseEnter={() => handlePrefetchTab(item.slug)}
                            >
                                <HoverCardTrigger className={cn(isPending ? "pointer-events-none cursor-progress opacity-50" : "")}>
                                    {item.title}
                                </HoverCardTrigger>
                            </TabsTrigger>
                            {item.description && (
                                <HoverCardContent className="w-80" side="top">
                                    <div className="font-Raleway flex justify-between space-x-4">
                                        <ImageComponent
                                            src={item.image}
                                            fill={false}
                                            width={60}
                                            height={60}
                                            className="lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] aspect-square object-cover overflow-hidden rounded-full transition-all"
                                            alt={item.title}
                                        />
                                        <div className="space-y-1 flex-1">
                                            <h4 className="text-sm font-semibold">{item.title}</h4>
                                            <p className="text-xs">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </HoverCardContent>
                            )}
                        </HoverCard>
                    )}
                </TabsList>
            </Tabs>

            <div className={cn(
                "w-full",
                isPending ? "hidden" : "block"
            )}>
                {children}
            </div>
            
            {isPending && (
                <div className="mx-auto w-[85%] max-w-[1600px] pt-20">
                    <Loader2 className="mx-auto h-12 w-12 animate-spin" />
                </div>
            )}
        </>
    )
}
