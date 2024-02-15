"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Repeat } from "lucide-react";
import type { ZodIssue } from "zod";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { getShortDescription } from "@/lib/utils";

export default function ErrorToast({
  error,
  place,
}: {
  error: string | ZodIssue[];
  place: string;
}) {
  const { toast } = useToast();
  const router = useRouter();

  const messageError = React.useMemo(
    function generateMessageError() {
      if (typeof error === "string") {
        return error;
      } else {
        const messageslist = error.map((issue) => {
          const message = issue.message;
          return message;
        });
        return messageslist.join("\n");
      }
    },
    [error],
  );

  React.useEffect(() => {
    toast({
      variant: "destructive",
      title: "Ошибка! Что-то пошло не так:",
      description: (
        <p>
          В {place}: {getShortDescription(messageError)}
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
  }, [messageError, place, router, toast]);

  return null;
}
