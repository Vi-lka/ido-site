"use client";

import React, { useState } from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Toggle } from '../ui/toggle';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { useToast } from '../ui/use-toast';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

export default function RegisterForm({
  policy
}: {
  policy: string | undefined
}) {

    const [showPassword, setShowPassword] = useState(false)

    const router = useRouter()
    const { toast } = useToast();
  
    const RegisterFormSchema = z.object({
      username: z
        .string({
            required_error: "Это поле является обязательным"
        }),
      email: z
        .string({
          required_error: "Это поле является обязательным",
        }).email({ message: "Неверный адрес электронной почты" }),
      password: z
        .string({
          required_error: "Это поле является обязательным",
        })
        .min(6, {
          message: "Длина должна составлять 6 или более символов",
        }),
    });
  
    const form = useForm<z.infer<typeof RegisterFormSchema>>({
      resolver: zodResolver(RegisterFormSchema),
      mode: 'onChange',
    });
  
    const handleRegister = async (data: z.infer<typeof RegisterFormSchema>) => {
      try {
        const res = await signIn("credentials-register", {
          redirect: false,
          username: data.username,
          email: data.email,
          password: data.password,
        })
        if (!res?.error) {
          router.push(`/email-confirm?email=${data.email}`)
        } else {
          throw new Error(res.error ? res.error : "Error")
        }
      } catch (error) {
        console.log(error)

        const errorMessage = 
        `${error}` === "Error: Email or Username are already taken"
          ? "Адрес электронной почты или имя пользователя уже заняты"
          : `${error}`

        toast({
          variant: "destructive",
          title: "Ошибка регистрации",
          description: errorMessage,
          className: "font-Raleway",
        });
      }
    };

    return (
      <div className="flex flex-col items-center justify-around">
        <Form {...form}>
          <form
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onSubmit={form.handleSubmit(handleRegister)}
            className="mt-1 h-full w-full font-Raleway"
          >
            <FormField
              control={form.control}
              name="username"
              defaultValue=""
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Имя пользователя</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      disabled={form.formState.isSubmitting}
                      className="px-5 py-6 shadow dark:border-foreground/50"
                      placeholder={"Введите ФИО"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              defaultValue=""
              render={({ field }) => (
                <FormItem className='mt-8'>
                  <FormLabel>Почта</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      disabled={form.formState.isSubmitting}
                      className="px-5 py-6 shadow dark:border-foreground/50"
                      placeholder={"Введите почту"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              defaultValue=""
              render={({ field }) => (
                <FormItem className="mt-8 relative">
                  <FormLabel>Пароль</FormLabel>
                  <FormControl>
                    <Input
                      type={
                        showPassword ? "text" : "password"
                      }
                      autoComplete="on"
                      disabled={form.formState.isSubmitting}
                      className="px-5 py-6 shadow dark:border-foreground/50"
                      placeholder={"Введите пароль"}
                      {...field}
                    />
                  </FormControl>
                  <Toggle 
                      pressed={showPassword}
                      aria-label="Toggle Show Password"
                      className="absolute top-8 right-1 px-2"
                      onPressedChange={(pressed) => setShowPassword(pressed)}
                    >
                        {showPassword
                          ? <EyeOff />
                          : <Eye />
                        }
                    </Toggle>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-6 flex flex-col items-center justify-end sm:flex-row">
              <Button
                disabled={!(form.formState.isDirty && form.formState.isValid) || form.formState.isSubmitting}
                type="submit"
                className="mb-6 px-10 py-6 text-sm uppercase sm:mb-0"
              >
                {form.formState.isSubmitting
                  ? <Loader2 className='animate-spin w-8 h-8 mx-auto' />
                  : "Зарегистрироваться"
                }
              </Button>
            </div>
            {!!policy && (
              <p className='sm:text-sm text-xs sm:mt-6 text-right'>
                Нажимая «Зарегистрироваться», вы соглашаетесь с нашей <Link href={policy} target='__blank' className='underline hover:text-primary transition-all'>Политикой конфиденциальности</Link>.
              </p>
            )}
          </form>
        </Form>
      </div>
    )
}
