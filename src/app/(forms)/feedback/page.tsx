import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import BlocksRendererStrapi from '@/components/BlocksRendererStrapi';
import ErrorHandler from '@/components/errors/ErrorHandler';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getFeedbackDescription, getUserInfo } from '@/lib/queries/users';
import { decrypt } from '@/lib/utils';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'
import FeedbackForm from './FeedbackForm';

export default async function Feedback() {

    const session = await getServerSession(authOptions);

    if (!session) redirect("/login")

    const [ feedbackDescription, userInfo ] = await Promise.allSettled([ getFeedbackDescription(), getUserInfo(decrypt(session.jwt)), ]);

    if (userInfo.status === "rejected") return (
      <>
        <ErrorHandler
          error={userInfo.reason as unknown}
          place="Обратная связь"
          notFound
          goBack
        />
      </>
    )

    if (userInfo.value.feedback.data && !userInfo.value.feedback.data.attributes.publishedAt) return (
        <main className="flex flex-col gap-1 mt-16 mx-auto h-full w-[95%] md:w-[85%] px-4 max-w-[2000px]">
            {(feedbackDescription.status === "rejected")
                ?   <ErrorHandler
                        error={feedbackDescription.reason as unknown}
                        place="Обратная связь"
                        notFound
                        goBack
                    />
                : feedbackDescription.value.feedbackExist ?
                (
                    <div className='mb-6 font-Raleway text-sm'>
                        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                        <BlocksRendererStrapi content={feedbackDescription.value.feedbackExist}/>
                    </div>
                )
                : <ErrorHandler
                    error={Error("Описание не найдено")}
                    place="Обратная связь"
                    notFound
                    goBack
                  />
            }
        </main>
    )

    return (
        <main className="flex flex-col gap-1 mt-16 mx-auto h-full w-[95%] md:w-[85%] px-4 max-w-[2000px]">
            {(feedbackDescription.status === "rejected") 
                ?   <ErrorHandler
                        error={feedbackDescription.reason as unknown}
                        place="Обратная связь"
                        notFound={false}
                    />
                : (
                    <div className='mb-6 font-Raleway text-sm'>
                        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                        <BlocksRendererStrapi content={feedbackDescription.value.description_long}/>
                    </div>
                )
            }

            <Card className='rounded-lg font-Raleway'>
                <CardHeader className='text-center'>
                    <CardTitle className='lg:text-xl text-base font-bold text-primary'>Обратная связь</CardTitle>
                    {(feedbackDescription.status === "rejected") 
                        ?   <ErrorHandler
                                error={feedbackDescription.reason as unknown}
                                place="Обратная связь"
                                notFound={false}
                            />
                        :   <CardDescription className='lg:text-sm text-xs'>{feedbackDescription.value.description_short}</CardDescription>
                    }
                </CardHeader>
                
                <CardContent>
                    <FeedbackForm token={decrypt(session.jwt)} />
                </CardContent>
            </Card>
        </main>
    )
}
