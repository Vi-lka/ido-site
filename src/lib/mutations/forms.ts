"use client";

import { useMutation } from "@tanstack/react-query";
import type { SuggestFormT } from "../types/mutations";
import request from "graphql-request";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { getShortDescription } from "../utils";
import axios from "axios";
import { useRouter } from "next/navigation";

type Err = {
  error: {
    status: number,
    name: string,
    message: string,
  }
}

type ReturnT = {
  createSuggest: {
    data: {
      id: number
    }
  }
}

//..........CREATE..........//
export function useSuggest(access_token: string) {

  const [loading, setLoading] = useState(false);

  const router = useRouter()

  const mutationString = `
    mutation createSuggest($data: SuggestInput!) {
      createSuggest(data: $data) {
        data {
          id
        }
      }
    }
  `;
  const requestHeaders = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };
  
  const mutation = useMutation({
    mutationKey: ["createCategory", requestHeaders],
    mutationFn: async (value: SuggestFormT): Promise<ReturnT> => {
      const textNoLines = value.text.replace(/(?:\r\n|\r|\n)/g, '\\n').replace(/"/g, "'")
      return request(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`,
        mutationString,
        {
          data: {
            type: value.type,
            title: value.title,
            text: textNoLines,
            date: value.date?.toLocaleDateString("ru")
          }
        },
        requestHeaders,
      );
    },
    onMutate: () => setLoading(true),
    onError: (err) => {
      setLoading(false)
      toast({
        variant: "destructive",
        title: "Oшибка!",
        description: getShortDescription(err.message),
        className: "font-Raleway",
      })
      console.log(err);
    },
    onSuccess: async (returnValue) => {
      console.log(returnValue)
      try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { data } = await axios.put(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/user/me`, 
          { suggest: returnValue.createSuggest.data.id },
          {headers: { Authorization: `Bearer ${access_token}` }}
        );
        if (data) {
          setLoading(false);
          toast({
            title: "Успешно!",
            description: "Публикация принята к рассмотрению",
            className:
              "font-Raleway text-background dark:text-foreground bg-lime-600 dark:bg-lime-800 border-none",
          });
          router.refresh()
        }
        else {
          return null;
        }
      } catch (err) {
        setLoading(false);
        console.log(err)
        if (axios.isAxiosError(err) && err.response) {
          const errorMessage = (err.response.data as Err).error.message
          console.log("AxiosError: ", errorMessage)
          toast({
            variant: "destructive",
            title: "Ошибка! Что-то пошло не так:",
            description: getShortDescription(errorMessage),
            className: "font-Raleway",
          });
        } else {
          const errorMessage = (err as Error).message
          console.log("Error: ", errorMessage)
          toast({
            variant: "destructive",
            title: "Ошибка! Что-то пошло не так:",
            description: getShortDescription(errorMessage),
            className: "font-Raleway",
          });
        }
      }
    },
  });
  return { mutation, loading };
}