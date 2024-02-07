import SignOutButton from '@/components/auth/AuthButtons'
import LogInForm from '@/components/auth/LogInForm'
import { getServerSession } from 'next-auth';
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function LogIn() {
    
    const session = await getServerSession(authOptions);

  return (
    <div>
        {session
            ? (<>
                <code className='break-words'>
                    {JSON.stringify(session)}
                </code>
                <SignOutButton />
            </>)
            : <LogInForm />
        }
    </div>
  )
}
