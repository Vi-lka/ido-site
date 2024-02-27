"use client";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationMenu, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NavSheet() {

  return (
    <Sheet>
      <SheetTrigger className="flex items-center">
        <Menu className="h-[2.5rem] w-[2.5rem] transition-all" />
      </SheetTrigger>

      <SheetContent>
        <NavigationMenu orientation="vertical" className="mx-auto">
          <NavigationMenuList className="flex flex-col items-center">
            <ScrollArea className="font-Raleway mt-[2vh] h-[90vh] w-full p-1">
                <SheetMenuItem text={'Главная'} url={'/'} />
                <SheetMenuItem text={'День в истории края'} url={'/events'} />
                <SheetMenuItem text={'Методические ресурсы'} url={'/methodological'} />
                <SheetMenuItem text={'Библиотека'} url={'/library'} />
                <SheetMenuItem text={'Новости'} url={'/news'} />
                <SheetMenuItem text={'Проекты'} url={'/projects'} />
                <SheetMenuItem text={'О нас'} url={'/about'} />
            </ScrollArea>
          </NavigationMenuList>
        </NavigationMenu>
      </SheetContent>
    </Sheet>
  );
}

function SheetMenuItem({
    text,
    url,
    blank = false,
}: {
    text: string,
    url: string,
    blank?: boolean,
}) {
  const pathName = usePathname();

  // Remove query parameters
  const pathWithoutQuery = pathName.split("?")[0];

  // Ex:"/my/nested/path" --> ["my", "nested", "path"]
  const pathNestedRoutes = pathWithoutQuery
    .split("/")
    .filter((v) => v.length > 0);

  // Remove locale
  const pathCurrentPage = (pathNestedRoutes[pathNestedRoutes.length - 1] === undefined) ? "/" : pathNestedRoutes[pathNestedRoutes.length - 1];

    return (
      <div className="mb-1 mt-3 flex w-full gap-1 py-2">
        <ul className="flex flex-col justify-center w-full">
            <li>
              <Link href={url} legacyBehavior passHref>
                <NavigationMenuLink
                  active={('/' + pathCurrentPage) === url}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "w-full h-fit"
                  )}
                  target={blank ? "_blank" : "_self"}
                >
                  <SheetClose className="px-3 py-2 text-left w-full h-full">
                    <div className="text-dark dark:text-foreground text-base font-medium leading-none md:text-lg">
                      {text}
                    </div>
                  </SheetClose>
                </NavigationMenuLink>
              </Link>
            </li>
        </ul>
      </div>
    );
}
