"use client"

import DateSelectCustom from '@/components/ui/DateSelectCustom';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import dynamic from 'next/dynamic';
import React from 'react'
import { useForm } from 'react-hook-form';
import { SuggestFormT } from "../../../lib/types/mutations";
import { useSuggest } from '@/lib/mutations/forms';

const EditorComp = dynamic(() => import('@/components/EditorComponent'), { 
  ssr: false,
  loading: () => <Loader2 className='animate-spin w-8 h-8 mx-auto' />,
})

type Types = "events" | "methodological" | "library" | "news" | "projects" | undefined

function EnumField({ type, disabled }: { type: Types, disabled: boolean }) {
  const ENUM_FIELDS = {
    events: <DateSelectCustom name="date" placeholder='Выберите дату' disabled={disabled} fromYear={1000} className='font-Raleway w-full px-5 py-6 shadow dark:border-foreground/50' />,
    methodological: null,
    library: null,
    news: <DateSelectCustom name="date" placeholder='Выберите дату' disabled={disabled} fromYear={2000} className='font-Raleway w-full px-5 py-6 shadow dark:border-foreground/50' />,
    projects: null
  };

  if (!type) return null

  return (
    <div>{ENUM_FIELDS[type]}</div>
  );
}

export default function SuggestForm({
  token,
}: {
  token: string,
}) {

  const [type, setType] = React.useState<Types>()
  
  const form = useForm<SuggestFormT>({
    resolver: zodResolver(SuggestFormT),
    mode: 'onChange',
  });

  const { mutation, loading } = useSuggest(token)

  const handleSuggest = (data: SuggestFormT) => {
    mutation.mutate(data)
  };

  return (
    <Form {...form}>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={form.handleSubmit(handleSuggest)}
        className="mt-1 h-full w-full font-Raleway"
      >
        <FormField
          control={form.control}
          name="type"
          disabled={loading}
          render={({ field }) => (
            <FormItem className='mb-8'>
              <FormLabel>Тип материала</FormLabel>
              <Select 
                onValueChange={(value) => {
                  field.onChange(value)
                  setType(value as Types)
                }} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="px-5 py-6 shadow dark:border-foreground/50">
                    <SelectValue placeholder="Выберите тип материала" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className='font-Raleway'>
                  <SelectItem className='cursor-pointer' value="events">События</SelectItem>
                  <SelectItem className='cursor-pointer' value="methodological">Методические ресурсы</SelectItem>
                  <SelectItem className='cursor-pointer' value="library">Библиотека</SelectItem>
                  <SelectItem className='cursor-pointer' value="news">Новости</SelectItem>
                  <SelectItem className='cursor-pointer' value="projects">Проекты</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          defaultValue=""
          disabled={loading}
          render={({ field }) => (
            <FormItem className="mb-8 relative">
              <FormLabel>Название</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  autoComplete="off"
                  disabled={form.formState.isSubmitting}
                  className="px-5 py-6 shadow dark:border-foreground/50"
                  placeholder="Введите название"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <EnumField type={type} disabled={loading} />

        <div className=' mt-8'>
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
