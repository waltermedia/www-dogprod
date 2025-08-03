"use client";

import Link from "next/link";
import { CMPNY_NAME } from "@/lib/constants";
import { MENU_CONFIG } from "@/lib/menu-config";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import ThemeToggle from "./theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NavigationHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl hover:opacity-80 transition-opacity">
              {CMPNY_NAME}
            </Link>
          </div>

          {/* Navigation Menu */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href={MENU_CONFIG.about.href}>
                    {MENU_CONFIG.about.title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>{MENU_CONFIG.portfolio.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px] lg:w-[500px]">
                    <div className="space-y-3 col-span-full">
                      <h4 className="text-sm font-medium leading-none">{MENU_CONFIG.portfolio.description}</h4>
                      <p className="text-sm leading-snug text-muted-foreground">
                        {MENU_CONFIG.portfolio.subtitle}
                      </p>
                    </div>
                    {MENU_CONFIG.portfolio.items.map((item) => (
                      <div key={item.href} className="col-span-full">
                        <NavigationMenuLink asChild className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <Link href={item.href}>
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>{MENU_CONFIG.blog.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px] lg:w-[500px]">
                    <div className="space-y-3 col-span-full">
                      <h4 className="text-sm font-medium leading-none">{MENU_CONFIG.blog.description}</h4>
                      <p className="text-sm leading-snug text-muted-foreground">
                        {MENU_CONFIG.blog.subtitle}
                      </p>
                    </div>
                    {MENU_CONFIG.blog.items.slice(0, 3).map((item) => (
                      <div key={item.href} className="col-span-full">
                        <NavigationMenuLink asChild className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <Link href={item.href}>
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    ))}
                    {MENU_CONFIG.blog.items.length === 0 && (
                      <div className="col-span-full p-3 text-sm text-muted-foreground">
                        No blog posts yet. Check back soon!
                      </div>
                    )}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button + Theme Switcher */}
          <div className="flex items-center gap">
            {/* Mobile Navigation Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Navigation Menu</SheetTitle>
                    <Link href="/" className="font-bold text-xl mb-4">
                      {CMPNY_NAME}
                    </Link>
                  </SheetHeader>
                  <div className="grid gap-6 py-6">
                    <Link
                      href="/"
                      className="block px-4 py-3 text-lg font-medium rounded-md text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      Home
                    </Link>
                    <Link
                      href={MENU_CONFIG.about.href}
                      className="block px-4 py-3 text-lg font-medium rounded-md text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {MENU_CONFIG.about.title}
                    </Link>
                    <div>
                      <h3 className="px-4 mb-3 font-semibold text-xl text-foreground">
                        {MENU_CONFIG.portfolio.title}
                      </h3>
                      <div className="grid gap-1">
                        {MENU_CONFIG.portfolio.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-6 py-2 text-base text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="px-4 mb-3 font-semibold text-xl text-foreground">
                        {MENU_CONFIG.blog.title}
                      </h3>
                      <div className="grid gap-1">
                        {MENU_CONFIG.blog.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-6 py-2 text-base text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationHeader;