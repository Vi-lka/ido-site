"use client";

import React from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '../ui/navigation-menu'
import Link from 'next/link'
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function NavMenu() {
  return (
    <NavigationMenu delayDuration={100}>
        <NavigationMenuList className='gap-1 flex-wrap justify-end'>
            <NavMenuItem text={'Главная'} url={'/'} />
            <NavMenuItem text={'События'} url={'/events'} />
            <NavMenuItem text={'Методические ресурсы'} url={'/methodological'} />
            <NavMenuItem text={'Проекты'} url={'/projects'} />
            <NavMenuItem text={'Библиотека'} url={'/library'} />
            <NavMenuItem text={'О нас'} url={'/about'} />
        </NavigationMenuList>
    </NavigationMenu>
  )
}


function NavMenuItem({
  text,
  url,
  blank,
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
    <NavigationMenuItem className='px-[0.1rem]'>
      <Link href={url} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(
            navigationMenuTriggerStyle(),
            "bg-transparent px-3"
          )}
          active={('/' + pathCurrentPage) === url}
          target={blank ? "_blank" : "_self"}
        >
          {text}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}
