import LogInForm from '@/components/auth/LogInForm'
import { getServerSession } from 'next-auth';
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RegisterForm from '@/components/auth/RegisterForm';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import { getPolicy } from '@/lib/queries/users';

export default async function LogIn() {
    
    const session = await getServerSession(authOptions);

    if (session) redirect("/account")

    const [ policy ] = await Promise.allSettled([ getPolicy() ]);

    const policyFile = (policy.status !== "rejected" && policy.value.file.data) ? policy.value.file.data.attributes.url : undefined

    return (
        <main className="flex flex-col gap-1 mt-16 mx-auto h-full w-[95%] md:w-[85%] px-4 max-w-[2000px]">
            <Tabs defaultValue="login" className="w-full font-Raleway">
                <TabsList className='w-full h-fit flex justify-evenly flex-wrap'>
                    <TabsTrigger 
                        value="login"
                        className='text-base py-2 px-6 border-[1px] border-transparent data-[state=active]:border-primary cursor-pointer'
                    >
                        Войти
                    </TabsTrigger>
                    <TabsTrigger
                        value="register"
                        className='text-base py-2 px-6 border-[1px] border-transparent data-[state=active]:border-primary cursor-pointer'
                    >
                        Зарегистрироваться
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="login" className='max-w-md lg:w-1/2 w-[90%] mx-auto lg:mt-10'>
                    <LogInForm />
                </TabsContent>
                <TabsContent value="register" className='max-w-md lg:w-1/2 w-[90%] mx-auto lg:mt-10'>
                    <RegisterForm policy={policyFile} />
                </TabsContent>
            </Tabs>
        </main>
    )
}
