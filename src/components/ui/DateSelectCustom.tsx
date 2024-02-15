"use client";

import React from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { CalendarIcon, X } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { Calendar } from "./calendar";

export default function DateSelectCustom({
  name,
  placeholder,
  disabled,
  fromYear,
  className,
  align = "center",
  side = "bottom",
}: {
  name: string;
  placeholder: string;
  disabled: boolean;
  fromYear?: number;
  className?: string;
  align?: "center" | "end" | "start";
  side?: "top" | "right" | "bottom" | "left";
}) {
  const [open, setOpenChange] = React.useState(false);

  const form = useFormContext();

  const dateNow = new Date();

  return (
    <FormField
      control={form.control}
      disabled={disabled}
      name={name}
      render={({ field }) => (
        <FormItem className="relative flex flex-col">
          <FormLabel>Дата</FormLabel>
          <Popover open={open} onOpenChange={setOpenChange}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-max border-transparent px-3 py-8 text-left font-normal",
                    className,
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    format(new Date(field.value as string), "PPP", {
                      locale: ru,
                    })
                  ) : (
                    <span>{placeholder}</span>
                  )}
                  <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent
              className="font-Raleway w-auto p-0"
              align={align}
              side={side}
            >
              {!!field.value ? (
                <span
                  className="text-muted-foreground hover:text-foreground my-1 flex cursor-pointer items-center justify-center text-xs transition-all hover:scale-110"
                  onClick={() => {
                    setOpenChange(false);
                    form.setValue(name, null, {
                      shouldDirty: true,
                      shouldValidate: true,
                      shouldTouch: true,
                    });
                  }}
                >
                  <X className="h-5 w-5" /> Удалить
                </span>
              ) : null}
              <Calendar
                mode="single"
                captionLayout="dropdown-buttons"
                selected={new Date(field.value as string)}
                onSelect={(e: any) => {
                  field.onChange(e);
                  setOpenChange(false);
                }}
                disabled={(date) => date > dateNow}
                fromYear={!!fromYear ? fromYear : 1900}
                toYear={dateNow.getFullYear()}
                initialFocus
                className="pt-0.5 font-Raleway"
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
