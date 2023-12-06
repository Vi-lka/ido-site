import React from "react";
import Link from "next/link";
import LogoSvg from "../LogoSvg";
import { Skeleton } from "../ui/skeleton";
import { ClientHydration } from "../providers/ClientHydration";
import NavMenuF from "./NavMenuF";

export default function Footer({
    tel,
    email
}: {
    tel: string,
    email: string
}) {

  return (
    <div className="font-Raleway w-full px-4 md:px-0 py-12 bg-grass text-white">
        <div className="mx-auto flex w-[95%] items-center justify-between py-8 md:w-[85%]">
            <div className="flex w-1/5">
                <Link
                    href={`/`}
                    className="relative h-[2.5rem] w-fit"
                >
                    <LogoSvg name={"История края - история для края"} isAdaptive className="logo-svg-white" />
                </Link>
            </div>
            <div className="w-fit lg:block hidden">
                <ClientHydration fallback={
                    <div className="flex">
                        <Skeleton className="w-96 p-4 bg-accent"/>
                    </div>
                }>
                  <NavMenuF />
                </ClientHydration>
            </div>
            <div className="flex flex-col w-1/5 items-end justify-center gap-1">
                <Link href={`tel:${tel}`} className="text-sm">{tel}</Link>
                <Link href={`mailto:${email}`} className="text-sm">{email}</Link>
            </div>
        </div>
    </div>
  );
}
