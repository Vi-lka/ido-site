import React from 'react'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import SubscribedButton from './SubscribedButton';
import { decrypt } from '@/lib/utils';
import { getSubscribedDescription, getUserInfo } from '@/lib/queries/users';
import ErrorHandler from '@/components/errors/ErrorHandler';
import BlocksRendererStrapi from '@/components/BlocksRendererStrapi';
import LastContent from './LastContent';
import { authOptions } from '@/app/api/auth/[...nextauth]/auth';

export const dynamic = 'force-dynamic'

export default async function Account() {

    const session = await getServerSession(authOptions);

    if (!session) redirect("/login")

    const [ userInfo, subscribedDescription ] = await Promise.allSettled([ 
        getUserInfo(decrypt(session.jwt)),
        getSubscribedDescription()
    ]);

    console.log(userInfo)

    return (
        <main className="flex flex-col gap-1 mt-24 mx-auto h-full w-[95%] md:w-[85%] px-4 max-w-[2000px]">
            <div className='flex lg:flex-row flex-col justify-between gap-3 items-start font-Raleway'>
                <div className='lg:w-1/2 w-full'>
                    <h1 className='lg:text-2xl text-xl font-semibold mb-3'>{session.user.username}</h1>
                    <h2 className='lg:text-base text-sm'>Почта: <span className='font-medium'>{session.user.email}</span></h2>
                </div>
                {(userInfo.status === "rejected") 
                    ?   <ErrorHandler
                            error={userInfo.reason as unknown}
                            place="Пользователь"
                            notFound={false}
                        />
                    : (subscribedDescription.status === "rejected")
                        ?   <ErrorHandler
                                error={subscribedDescription.reason as unknown}
                                place="Описание подписки"
                                notFound={false}
                            />
                        : (
                            <div className='lg:w-1/2 w-full lg:mt-0 mt-8'>
                                <div className='font-Raleway text-base'>
                                    {userInfo.value.subscribed
                                        ? (
                                            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                                            <BlocksRendererStrapi content={subscribedDescription.value.subscribed} />
                                        )
                                        : (
                                            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                                            <BlocksRendererStrapi content={subscribedDescription.value.not_subscribed} />
                                        )
                                    }
                                </div>
                                <SubscribedButton token={decrypt(session.jwt)} isSubscribed={userInfo.value.subscribed} className='mt-6' />
                            </div>
                        )
                }
            </div>
            {(userInfo.status !== "rejected") && (userInfo.value.subscribed) 
                ? <LastContent className='mt-12' />
                : null
            }
        </main>
    )
}
