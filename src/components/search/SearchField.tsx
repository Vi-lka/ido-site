"use client"

import React from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { InputSearch } from './InputSearch'
import { Button } from '@/components/ui/button'
import { Loader2, Search, X } from "lucide-react";
import { cn } from '@/lib/utils'

export default function SearchField({ placeholder, className }: { placeholder: string, className?: string }) {

    const [inputValue, setInputValue] = React.useState<string>("")
    const [debouncedValue, setDebouncedValue] = React.useState<string>("")
    const [mounted, setMounted] = React.useState<boolean>(false)

    const [focus, setFocus] = React.useState<boolean>(false)

    const inputRef = React.createRef<HTMLInputElement>();
    
    const router = useRouter();
    const pathname = usePathname();

    const [isPending, startTransition] = React.useTransition()

    const handleSearchParams = React.useCallback(
        (inputValue: string) => {
          const params = new URLSearchParams(window.location.search);
          if (inputValue.length > 0) {
            params.set("searchAll", inputValue);
          } else {
            params.delete("searchAll");
          }
          startTransition(() => {
            router.push(`${pathname}?${params.toString()}`, { scroll: false });
          });
        },
        [pathname, router],
    );

    // EFFECT: Set Initial Params
    React.useEffect(() => {
      const params = new URLSearchParams(window.location.search)
      const searchQuery = params.get("searchAll") ?? ""
      setInputValue(searchQuery)
      inputRef.current?.focus()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // EFFECT: Set Mounted
    React.useEffect(() => {
      if (debouncedValue.length > 0 && !mounted) {
        setMounted(true)
      }
    }, [debouncedValue, mounted])

    // EFFECT: Debounce Input Value
    React.useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedValue(inputValue)
      }, 500)

      return () => {
        clearTimeout(timer)
      }
    }, [inputValue])

    // EFFECT: Search Params
    React.useEffect(() => {
      if (mounted) handleSearchParams(debouncedValue)
    }, [debouncedValue, handleSearchParams, mounted])
    
  return (
    <div className={cn("relative", className)}>
      <InputSearch
        ref={inputRef}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={placeholder}
        className={cn(
          "border-primary hover:border-secondary focus:border-secondary transition-all py-0 appearance-none",
          focus ? 
            'w-full ring-ring ring-2 ring-offset-2 border-secondary' 
            : 
            'w-full'
        )}
      >
        {isPending 
          ? <Loader2 className='h-4 w-4 animate-spin' />
          : <Search className="h-4 w-4" />
        }
      </InputSearch>
      
      {inputValue.length > 0 ? (
          <Button 
              variant='ghost'
              className="absolute top-2 right-2 w-fit h-fit p-0"
              disabled={isPending}
              onClick={() => {
                setDebouncedValue('')
                setInputValue('')
              }}
              onClickCapture={() => inputRef.current?.focus()}
          >
              <X className='w-8 h-6' />
          </Button>
      ) : null}
    </div>
  )
}
