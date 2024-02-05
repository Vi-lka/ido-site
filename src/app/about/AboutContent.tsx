import DynamicZone from '@/components/content/DynamicZone/DynamicZone';
import ErrorHandler from '@/components/errors/ErrorHandler';
import { getAboutPage } from '@/lib/queries/main';
import React from 'react'

export default async function AboutContent() {

    const [ dataResult ] = await Promise.allSettled([ getAboutPage() ]);
    if (dataResult.status === "rejected")
    return (
      <ErrorHandler
        error={dataResult.reason as unknown}
        place="About Page"
        notFound
        goBack
      />
    );

    return (
        <div
            key={Math.random()}
            className="mx-auto my-12 grid w-[85%] grid-cols-1 gap-16 md:w-full"
        >
            <div className="flex flex-col gap-12">
                {dataResult.value.content?.map((item, index) => (
                    <DynamicZone key={index} item={item} />
                ))}
            </div>
        </div>
     )
}
