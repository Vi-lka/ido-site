"use client"

import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import React, { Suspense } from 'react';
import ReactPlayer from 'react-player';

export default function VideoComponent({
    title,
    video,
    className,
    classNameVideo
}: {
    title: string | null,
    video: {
        data?: {
            attributes: {
                url: string;
                alternativeText?: string | null | undefined;
            };
        } | null | undefined;
    },
    className?: string,
    classNameVideo?: string
}) {

    const [loading, setLoading] = React.useState(true)

    if (!video.data) return null

    const url = video.data.attributes.url

    return (
        <div className={cn(
            "w-full font-Raleway", 
            className
        )}>
            <h1 className="md:text-3xl text-xl font-bold mb-6">
                {title}
            </h1>

            {loading ? (
                <div className="mx-auto w-[85%] max-w-[1600px] pt-20">
                    <Loader2 className="mx-auto h-12 w-12 animate-spin" />
                </div>
            ) : null}

            <div className={cn(
                "w-full md:aspect-video aspect-square overflow-hidden", 
                classNameVideo,
                loading ? "hidden" : "block"
            )}>
                <Suspense fallback={
                    <div className="mx-auto w-[85%] max-w-[1600px] pt-20">
                        <Loader2 className="mx-auto h-12 w-12 animate-spin" />
                    </div>
                }>
                    <ReactPlayer
                        width={'100%'}
                        height={'100%'}
                        url={url}
                        controls
                        playsinline
                        stopOnUnmount={true}
                        loop={false}
                        preload={'auto'}
                        onReady={() => {
                            setLoading(false)
                        }}
                    />
                </Suspense>
            </div>
        </div>
    )
}
