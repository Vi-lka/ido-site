import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function EmailConfirm({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {

  const email = searchParams["email"] as string | undefined;

  const session = await getServerSession(authOptions);

  if (session && session.user.confirmed) redirect("/account")

  if (!email || email.length === 0) redirect("/login")

  return (
    <main className="flex flex-col gap-1 mt-24 mx-auto h-full w-[95%] md:w-[85%] px-4 max-w-[2000px]">
      <h1 className='lg:text-3xl text-xl font-Raleway font-semibold text-center'>Требуется подтвердить адрес электронной почты</h1>
      <p className='font-Raleway text-center mt-8 lg:text-base text-sm'>Перейдите в указаную почту <i>({email})</i> и следуйте инструкции из письма.</p>
    </main>
  )
}
