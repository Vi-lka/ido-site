"use client"

import { Button } from '@/components/ui/button';
import { Form, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import dynamic from 'next/dynamic';
import React from 'react'
import { useForm } from 'react-hook-form';
import { FeedbackFormT } from "../../../lib/types/mutations";
import { useFeedback } from '@/lib/mutations/forms';

const EditorComp = dynamic(() => import('@/components/EditorComponent'), { 
    ssr: false,
    loading: () => <Loader2 className='animate-spin w-8 h-8 mx-auto' />,
})

export default function FeedbackForm({
  token,
}: {
  token: string,
}) {
  
  const form = useForm<FeedbackFormT>({
    resolver: zodResolver(FeedbackFormT),
    mode: 'onChange',
  });

  const { mutation, loading } = useFeedback(token)

  const handleSuggest = (data: FeedbackFormT) => {
    mutation.mutate(data)
  };

  return (
    <Form {...form}>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={form.handleSubmit(handleSuggest)}
        className="mt-1 h-full w-full font-Raleway"
      >
        <div className=''>
            <p className='text-sm mb-2'>Текст</p>
            <EditorComp valueName='text' markdown={""} />
            <FormMessage />
        </div>

        <div className="mt-6 flex flex-col-reverse items-center justify-between sm:flex-row">
          <Button
            disabled={!(form.formState.isDirty && form.formState.isValid) || loading}
            type="submit"
            className="mb-6 px-10 py-6 text-sm uppercase sm:mb-0"
          >
            {form.formState.isSubmitting
              ? <Loader2 className='animate-spin w-8 h-8 mx-auto' />
              : "Отправить"
            }
          </Button>
        </div>
      </form>
    </Form>
  )
}
