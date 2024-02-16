"use client"

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { getShortDescription } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function ForgotpassForm() {
    const { toast } = useToast();
  
    const ForgotFormSchema = z.object({
        email: z.string({
            required_error: "Это поле является обязательным",
        })
    });
  
    const form = useForm<z.infer<typeof ForgotFormSchema>>({
      resolver: zodResolver(ForgotFormSchema),
      mode: 'onChange',
    });
  
    const handleForgotpass = async (data: z.infer<typeof ForgotFormSchema>) => {
        await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/forgot-password`, {
          email: data.email
        })
        .then(() => {
          console.log('Your user received an email');
          toast({
              title: "Успешно!",
              description: "Вам придет письмо на почту с инструкцией по сбросу пароля",
              className: "font-Raleway text-background dark:text-foreground bg-lime-600 dark:bg-lime-800 border-none",
          });
        })
        .catch((error: any) => {
          console.log('An error occurred:', error);
          toast({
            variant: "destructive",
            title: "Ошибка!",
            description: getShortDescription(`${error}`),
            className: "font-Raleway",
          });
        });
    };
  
    return (
      <div className="flex flex-col items-center justify-around">
        <Form {...form}>
          <form
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onSubmit={form.handleSubmit(handleForgotpass)}
            className="mt-1 h-full w-full font-Raleway"
          >
            <FormField
              control={form.control}
              name="email"
              defaultValue=""
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Почта</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      disabled={form.formState.isSubmitting}
                      className="px-5 py-6 shadow dark:border-foreground/50"
                      placeholder={"Введите свою почту"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-6 flex flex-col-reverse items-center justify-between sm:flex-row">
              <Button
                disabled={!(form.formState.isDirty && form.formState.isValid) || form.formState.isSubmitting}
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
      </div>
    );
  }
  
