"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "../ui/button"

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Nearest laundry', href: '/docs' },
  { label: 'Service', href: '/docs' },
  { label: 'Track order', href: '/docs' },
  { label: 'About us', href: '/docs' },
  { label: 'Login', href: '/docs', button: true }
]

export function MenuList() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>

        {menuItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            
              {item.button ? (
                <Link href={item.href}>
                  <Button>{item.label}</Button>
                </Link>
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}


      </NavigationMenuList>
    </NavigationMenu>
  )
}
