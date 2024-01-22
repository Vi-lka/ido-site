import React from "react";
import Link from "next/link";
import LogoSvg from "../LogoSvg";
import NavMenu from "./NavMenu";
import NavSheet from "./NavSheet";
import { ClientHydration } from "../providers/ClientHydration";
import { Skeleton } from "../ui/skeleton";
import { ThemeToggle } from "../providers/ThemeToggle";
import { getMainPage } from "@/lib/queries/main";

export default async function Header() {

  let name = "";

  const [ dataResult ] = await Promise.allSettled([ getMainPage() ]);
  if (dataResult.status === "rejected") {
    name = "История края - история для края"
  } else {
    name = dataResult.value.name
  }

  return (
    <div className="font-Raleway fixed z-50 w-full px-4 md:px-0 bg-background">
      <div className="mx-auto flex w-[95%] items-center justify-between py-8 md:w-[85%]">
        <div className="flex w-1/6">
          <Link
            href={`/`}
            className="relative h-[2.5rem] w-fit"
          >
            <LogoSvg name={name} isAdaptive />
          </Link>
        </div>

        <div className="hidden w-fit lg:block">
          <ClientHydration
            fallback={
              <div className="flex gap-6">
                <Skeleton className="w-28 p-4 bg-muted" />
                <Skeleton className="w-28 p-4 bg-muted" />
                <Skeleton className="w-28 p-4 bg-muted" />
              </div>
            }
          >
            <NavMenu />
          </ClientHydration>
        </div>

        <div className="flex w-1/6 items-center justify-end gap-2 xl:gap-3">
          <ClientHydration
            fallback={
              <div className="mr-2 flex gap-6">
                <Skeleton className="w-6 p-4 bg-muted" />
              </div>
            }
          >
            <ThemeToggle />
          </ClientHydration>
          {/* 
          {!!session ? (
            <AccountBar dict={dictResult.account} name={session.user.name} />
          ) : null} */}

          {/* Desktop */}
          {/* {!!session ? null : (
            <div className="hidden lg:block">
              <SignInButton dict={dictResult.auth} />
            </div>
          )} */}

          {/* Mobile */}
          <div className="block pl-2 lg:hidden">
            <ClientHydration
              fallback={<Skeleton className="h-[2.5rem] w-[2.5rem]" />}
            >
              <NavSheet />
            </ClientHydration>
          </div>
        </div>
      </div>
    </div>
  );
}
