"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { SearchX, Undo2 } from "lucide-react";
import { Button } from "../ui/button";

export default function NotFound({
  children,
  goBack,
}: {
  children?: React.ReactNode;
  goBack: boolean;
}) {
  const router = useRouter();

  return (
    <>
      {children}

      <div className="mx-auto my-10 flex flex-col items-center gap-10 text-center">
        <div className="flex flex-col items-center gap-4 text-center">
          <SearchX size={36} />

          <h2 className="font-NotoSerif text-3xl font-bold uppercase">
            Не найдено
          </h2>

          <p className="font-Raleway text-sm font-normal">
            Не удалось найти запрошенный ресурс
          </p>
        </div>

        {goBack ? (
          <Button
            className="font-Raleway w-full max-w-[240px] p-6 uppercase"
            onClick={() => router.back()}
          >
            Вернуться
            <Undo2 className="ml-1" size={18} />
          </Button>
        ) : null}
      </div>
    </>
  );
}
