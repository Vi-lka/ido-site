"use client"

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Toggle } from '@/components/ui/toggle';
import { useToast } from '@/components/ui/use-toast';
import { getShortDescription } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function ResetForm({
    code,
}: {
    code: string
}) {

    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)

    const router = useRouter()
    const { toast } = useToast();

    const ResetFormSchema = z.object({
        password: z
            .string({
              required_error: "Это поле является обязательным",
            })
            .min(6, {
              message: "Длина должна составлять 6 или более символов",
            }),
        passwordConfirmation: z
            .string({
              required_error: "Это поле является обязательным",
            })
            .min(6, {
              message: "Длина должна составлять 6 или более символов",
            }),
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "Пароли не совпадают",
        path: ["passwordConfirmation"],
    });

    const form = useForm<z.infer<typeof ResetFormSchema>>({
      resolver: zodResolver(ResetFormSchema),
      mode: 'onChange',
    });

    const handleReset = async (data: z.infer<typeof ResetFormSchema>) => {
        await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/reset-password`, {
            code,
            password: data.password,
            passwordConfirmation: data.passwordConfirmation,
        })
        .then(() => {
          console.log("Your user's password has been reset.");
          toast({
              title: "Успешно!",
              description: "Ваш пароль был сброшен. Вы можете зайти используя новый.",
              className: "font-Raleway text-background dark:text-foreground bg-lime-600 dark:bg-lime-800 border-none",
          });
          router.push("/login")
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
              onSubmit={form.handleSubmit(handleReset)}
              className="mt-1 h-full w-full font-Raleway"
            >
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
              <FormField
                control={form.control}
                name="passwordConfirmation"
                defaultValue=""
                render={({ field }) => (
                  <FormItem className="mt-8 relative">
                    <FormLabel>Подтвердите пароль</FormLabel>
                    <FormControl>
                      <Input
                        type={
                          showPasswordConfirm ? "text" : "password"
                        }
                        autoComplete="on"
                        disabled={form.formState.isSubmitting}
                        className="px-5 py-6 shadow dark:border-foreground/50"
                        placeholder={"Введите пароль снова"}
                        {...field}
                      />
                    </FormControl>
                    <Toggle 
                        pressed={showPasswordConfirm}
                        aria-label="Toggle Show Password"
                        className="absolute top-8 right-1 px-2"
                        onPressedChange={(pressed) => setShowPasswordConfirm(pressed)}
                      >
                          {showPasswordConfirm
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
                    : "Сбросить"
                  }
                </Button>
              </div>
            </form>
          </Form>
        </div>
    )
}