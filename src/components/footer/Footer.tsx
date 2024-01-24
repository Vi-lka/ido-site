import React from "react";
import Link from "next/link";
import LogoSvg from "../svg/LogoSvg";
import { Skeleton } from "../ui/skeleton";
import { ClientHydration } from "../providers/ClientHydration";
import NavMenuF from "./NavMenuF";
import { getMainPage } from "@/lib/queries/main";
import { getContacts } from "@/lib/queries/contacts";
import ErrorHandler from "../errors/ErrorHandler";

export default async function Footer() {

  let name = "";

  const [ dataResult, contactsResult ] = await Promise.allSettled([ getMainPage(), getContacts() ]);
  if (dataResult.status === "rejected") {
    name = "История края - история для края"
  } else {
    name = dataResult.value.name
    }

  if (contactsResult.status === "rejected")
  return (
    <ErrorHandler
      error={contactsResult.reason as unknown}
      place="Contacts"
      notFound
      goBack={false}
    />
  );


  return (
    <div className="font-Raleway w-full px-4 md:px-0 py-12 bg-grass text-white">
      <div className="mx-auto flex w-[95%] items-center justify-between py-8 md:w-[85%]">
        <div className="flex w-1/5">
          <Link
            href={`/`}
            className="relative h-[2.5rem] w-fit"
          >
            <LogoSvg name={name} isAdaptive className="logo-svg-white" />
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
        <div className="flex flex-col lg:w-1/6 w-fit items-end justify-center gap-1">
          <Link href={`tel:${contactsResult.value.tel}`} className="text-sm">{contactsResult.value.tel}</Link>
          <Link href={`mailto:${contactsResult.value.email}`} className="text-sm">{contactsResult.value.email}</Link>
        </div>
      </div>
    </div>
  );
}
