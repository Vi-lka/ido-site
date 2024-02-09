"use client"

import { Button } from '@/components/ui/button';
import { ToastAction } from '@/components/ui/toast';
import { toast } from '@/components/ui/use-toast';
import { cn, getShortDescription } from '@/lib/utils';
import axios from 'axios';
import { Repeat } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'

type Err = {
    error: {
      status: number,
      name: string,
      message: string,
    }
}
  

export default function SubscribedButton({ 
    token,
    isSubscribed,
    className
}: { 
    token: string,
    isSubscribed: boolean,
    className?: string
}) {

    const router = useRouter()

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    async function handleSubscribed(subscribed: boolean) {
        try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const { data } = await axios.put(
                `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/user/me`, 
                { subscribed },
                config
            );
            if (data) {
                toast({
                    title: "Успешно!",
                    description: (
                      <p>
                        {isSubscribed ? "Письма не будут приходить на почту." : "Вы подписанны на почтовую рассылку."}
                      </p>
                    ),
                    className: "font-Raleway text-background dark:text-foreground bg-lime-600 dark:bg-lime-800 border-none",
                });
              router.refresh()
            }
            else {
              return null;
            }
        } catch (err) {
            console.log(err)
            if (axios.isAxiosError(err) && err.response) {
              const errorMessage = (err.response.data as Err).error.message
              console.log("AxiosError: ", errorMessage)
              toast({
                variant: "destructive",
                title: "Ошибка! Что-то пошло не так:",
                description: (
                  <p>
                    {getShortDescription(errorMessage)}
                  </p>
                ),
                className: "font-Raleway",
                action: (
                  <ToastAction
                    className="px-2 py-6 text-sm"
                    altText={"Попробовать снова"}
                    onClick={() => router.refresh()}
                  >
                    <Repeat className="h-8 w-8" />
                  </ToastAction>
                ),
              });
            } else {
              const errorMessage = (err as Error).message
              console.log("Error: ", errorMessage)
              toast({
                variant: "destructive",
                title: "Ошибка! Что-то пошло не так:",
                description: (
                  <p>
                    {getShortDescription(errorMessage)}
                  </p>
                ),
                className: "font-Raleway",
                action: (
                  <ToastAction
                    className="px-2 py-6 text-sm"
                    altText={"Попробовать снова"}
                    onClick={() => router.refresh()}
                  >
                    <Repeat className="h-8 w-8" />
                  </ToastAction>
                ),
              });
            }
        }
    }

    if (isSubscribed) return (
        <Button className={cn("", className)} onClick={() => void handleSubscribed(false)}>
            Отписаться
        </Button>
    ) 
    else return (
        <Button className={cn("", className)} onClick={() => void handleSubscribed(true)}>
            Подписаться
        </Button>
    )
}
