import React from 'react'
import ForgotpassForm from './ForgotpassForm'

export default function Forgotpass() {
    return (
        <main className="flex flex-col gap-1 mt-16 mx-auto h-full w-[95%] md:w-[85%] px-4 max-w-[2000px]">
            <h1 className='font-Raleway lg:text-xl text-lg font-semibold text-center lg:mt-10'>Укажите почту, которую вы использовали при регистрации</h1>
            <div className='max-w-md lg:w-1/2 w-[90%] mx-auto mt-6'>
                <ForgotpassForm />
            </div>
        </main>
    )
}
