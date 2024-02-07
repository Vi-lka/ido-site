"use client";

import React from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function LogInForm() {

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
      const res = await signIn("credentials", {
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
      toast({
        variant: "destructive",
        title: "Ошибка доступа",
        description: "Неправильный логин или пароль",
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
              <FormItem className="text-center">
                <FormControl>
                  <Input
                    type="text"
                    disabled={form.formState.isSubmitting}
                    className="mb-0 p-5"
                    placeholder={"Почта"}
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
              <FormItem className="text-center">
                <FormControl>
                  <Input
                    type="password"
                    disabled={form.formState.isSubmitting}
                    className="mb-0 mt-6 p-5"
                    placeholder={"Пароль"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mt-6 flex flex-col-reverse items-center justify-between sm:flex-row">
            <Link href={`/reset`} className="text-sm underline">
              Сбросить пароль
            </Link>
            <Button
              disabled={!(form.formState.isDirty && form.formState.isValid)}
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
