import React from 'react'
import ResetForm from './ResetForm'
import { redirect } from 'next/navigation';

export default function Reset({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {

    const code = searchParams["code"] as string | undefined;

    if (!code || code.length < 2) redirect("/login")

    return (
        <main className="flex flex-col gap-1 mt-16 mx-auto h-full w-[95%] md:w-[85%] px-4 max-w-[2000px]">
            <h1 className='font-Raleway lg:text-xl text-lg font-semibold text-center lg:mt-10'>Напишите новый пароль</h1>
            <div className='max-w-md lg:w-1/2 w-[90%] mx-auto mt-6'>
                <ResetForm code={code} />
            </div>
        </main>
    )
}
