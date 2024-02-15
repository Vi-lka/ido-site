"use client";

import React, { useState } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Toggle } from "../ui/toggle";

export default function LogInForm() {

  const [showPassword, setShowPassword] = useState(false)

  const router = useRouter()
  const { toast } = useToast();

  const LogInFormSchema = z.object({
    email: z
      .string({
        required_error: "Это поле является обязательным",
      }),
    password: z
      .string({
        required_error: "Это поле является обязательным",
      })
      .min(6, {
        message: "Длина должна составлять 6 или более символов",
      }),
  });

  const form = useForm<z.infer<typeof LogInFormSchema>>({
    resolver: zodResolver(LogInFormSchema),
    mode: 'onChange',
  });

  const handleLogIn = async (data: z.infer<typeof LogInFormSchema>) => {
    try {
      const res = await signIn("credentials-login", {
        redirect: false,
        email: data.email,
        password: data.password,
      })
      if (!res?.error) {
        router.refresh() // apply in header
        // router.push('/account')
      } else {
        throw new Error(res.error ? res.error : "Error")
      }
    } catch (error) {
      console.log(error)

      const errorMessage = 
        `${error}` === "Error: Your account email is not confirmed"
          ? "Адрес вашей электронной почты не подтвержден"
          : `${error}` === "Error: Invalid identifier or password"
            ? "Неверный логин или пароль"
            : `${error}`

      toast({
        variant: "destructive",
        title: "Ошибка доступа",
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
          onSubmit={form.handleSubmit(handleLogIn)}
          className="mt-1 h-full w-full font-Raleway"
        >
          <FormField
            control={form.control}
            name="email"
            defaultValue=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>Логин</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    disabled={form.formState.isSubmitting}
                    className="px-5 py-6 shadow dark:border-foreground/50"
                    placeholder={"Введите почту или имя пользователя"}
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
          <div className="mt-6 flex flex-col-reverse items-center justify-between sm:flex-row">
            <Link href={`/reset`} className="text-sm underline hover:text-primary transition-all">
              Сбросить пароль
            </Link>
            <Button
              disabled={!(form.formState.isDirty && form.formState.isValid) || form.formState.isSubmitting}
              type="submit"
              className="mb-6 px-10 py-6 text-sm uppercase sm:mb-0"
            >
              {form.formState.isSubmitting
                ? <Loader2 className='animate-spin w-8 h-8 mx-auto' />
                : "Войти"
              }
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
