"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftToLine } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function GoBackButton({ className }: { className: string }) {
  const router = useRouter();

  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <Button
            variant={"ghost"}
            className={cn(
                "flex h-fit w-fit items-center gap-1 p-1 md:p-2",
                className
            )}
            onClick={() => router.back()}
          >
            <ArrowLeftToLine className="h-7 w-7 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
          </Button>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          className="bg-accent text-foreground font-Raleway text-base cursor-help font-normal"
        >
          Назад
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
