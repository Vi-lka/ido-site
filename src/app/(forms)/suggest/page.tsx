import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import ErrorHandler from '@/components/errors/ErrorHandler';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getSuggestDescription, getUserInfo } from '@/lib/queries/users';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'
import SuggestForm from './SuggestForm';
import { decrypt } from '@/lib/utils';
import Markdown from '@/components/Markdown';

export default async function Suggest() {

    const session = await getServerSession(authOptions);

    if (!session) redirect("/login")

    const [ suggestDescription, userInfo ] = await Promise.allSettled([ getSuggestDescription(), getUserInfo(decrypt(session.jwt)), ]);

    if (userInfo.status === "rejected") return (
      <>
        <ErrorHandler
          error={userInfo.reason as unknown}
          place="Предложить публикацию"
          notFound
          goBack
        />
      </>
    )

    if (userInfo.value.suggest.data && !userInfo.value.suggest.data.attributes.publishedAt) return (
        <main className="flex flex-col gap-1 mt-16 mx-auto h-full w-[95%] md:w-[85%] px-4 max-w-[2000px]">
            {(suggestDescription.status === "rejected")
                ?   <ErrorHandler
                        error={suggestDescription.reason as unknown}
                        place="Предложить публикацию"
                        notFound
                        goBack
                    />
                : suggestDescription.value.suggestExist ?
                (
                    <div className='mb-6 font-Raleway text-sm'>
                        <Markdown markdown={suggestDescription.value.suggestExist} />
                    </div>
                )
                : <ErrorHandler
                    error={Error("Описание не найдено")}
                    place="Предложить публикацию"
                    notFound
                    goBack
                  />
            }
        </main>
    )

    return (
        <main className="flex flex-col gap-1 mt-16 mx-auto h-full w-[95%] md:w-[85%] px-4 max-w-[2000px]">
            {(suggestDescription.status === "rejected") 
                ?   <ErrorHandler
                        error={suggestDescription.reason as unknown}
                        place="Предложить публикацию"
                        notFound={false}
                    />
                : (
                    <div className='mb-6 font-Raleway text-sm'>
                        <Markdown markdown={suggestDescription.value.description_long} />
                    </div>
                )
            }

            <Card className='rounded-lg font-Raleway'>
                <CardHeader className='text-center'>
                    <CardTitle className='lg:text-xl text-base font-bold text-primary'>Предложить публикацию</CardTitle>
                    {(suggestDescription.status === "rejected") 
                        ?   <ErrorHandler
                                error={suggestDescription.reason as unknown}
                                place="Предложить публикацию"
                                notFound={false}
                            />
                        :   <CardDescription className='lg:text-sm text-xs'>{suggestDescription.value.description_short}</CardDescription>
                    }
                </CardHeader>
                
                <CardContent>
                    <SuggestForm token={decrypt(session.jwt)} />
                </CardContent>
            </Card>
        </main>
    )
}
