import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import SubscribedButton from './SubscribedButton';
import { decrypt } from '@/lib/utils';
import { getUserInfo } from '@/lib/queries/users';
import ErrorHandler from '@/components/errors/ErrorHandler';

export const dynamic = 'force-dynamic'

export default async function Account() {

    const session = await getServerSession(authOptions);

    if (!session) redirect("/login")

    const [ userInfo ] = await Promise.allSettled([ getUserInfo(decrypt(session.jwt)) ]);

    return (
        <main className="flex flex-col gap-1 mt-24 mx-auto h-full w-[95%] md:w-[85%] px-4 max-w-[2000px]">
            <div className='flex flex-col gap-12 flex-wrap items-start font-Raleway'>
                <div className=''>
                    <h1 className='lg:text-2xl text-xl font-semibold mb-3'>{session.user.username}</h1>
                    <h2 className='lg:text-base text-sm'>Почта: <span className='lg:text-lg text-base font-medium'>{session.user.email}</span></h2>
                    {(userInfo.status === "rejected") 
                        ?   <ErrorHandler
                                error={userInfo.reason as unknown}
                                place="Пользователь"
                                notFound={false}
                            />
                        : (
                            <div className='mt-8'>
                                <p className='font-Raleway text-base'>
                                    {userInfo.value.subscribed
                                        ? <span>
                                            <b>Вы подписаны на почтовые оповещения.</b> 
                                          </span>
                                        : <span>
                                            <b className=' text-lg'>Вы можете подписаться на почтовые оповещения.</b> 
                                            <br/>
                                            На вашу почту будут приходить оповещения о новом контенте на сайте.
                                          </span>
                                    }
                                </p>
                                <SubscribedButton token={decrypt(session.jwt)} isSubscribed={userInfo.value.subscribed} className='mt-3' />
                            </div>
                        )
                    }
                </div>
            </div>
        </main>
    )
}
