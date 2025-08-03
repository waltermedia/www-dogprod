import Link from "next/link";
import { CMPNY_NAME } from "@/lib/constants";
import { Post } from "@/interfaces/post";
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

interface NavigationHeaderProps {
  allPosts: Post[];
}

const NavigationHeader = ({ allPosts }: NavigationHeaderProps) => {

  // Categorize posts dynamically
  const aboutPost = allPosts.find(post => post.slug === 'about');
  const portfolioPosts = allPosts.filter(post =>
    post.slug !== 'about' &&
    (post.title.toLowerCase().includes('defend') ||
      post.excerpt.toLowerCase().includes('game') ||
      post.excerpt.toLowerCase().includes('project'))
  );
  const blogPosts = allPosts.filter(post =>
    post.slug !== 'about' &&
    !portfolioPosts.some(p => p.slug === post.slug)
  );

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

              {aboutPost && (
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href={`/posts/${aboutPost.slug}`}>
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )}

              {portfolioPosts.length > 0 && (
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Portfolio</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px] lg:w-[500px]">
                      <div className="space-y-3 col-span-full">
                        <h4 className="text-sm font-medium leading-none">Game Development, Art & Music</h4>
                        <p className="text-sm leading-snug text-muted-foreground">
                          Explore our creative projects and interactive experiences.
                        </p>
                      </div>
                      {portfolioPosts.map((post) => (
                        <div key={post.slug} className="col-span-full">
                          <NavigationMenuLink asChild className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <Link href={`/posts/${post.slug}`}>
                              <div className="text-sm font-medium leading-none">{post.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {post.excerpt}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )}

              {blogPosts.length > 0 && (
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px] lg:w-[500px]">
                      <div className="space-y-3 col-span-full">
                        <h4 className="text-sm font-medium leading-none">Latest Posts</h4>
                        <p className="text-sm leading-snug text-muted-foreground">
                          Read about development, creativity, and innovation.
                        </p>
                      </div>
                      {blogPosts.slice(0, 3).map((post) => (
                        <div key={post.slug} className="col-span-full">
                          <NavigationMenuLink asChild className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <Link href={`/posts/${post.slug}`}>
                              <div className="text-sm font-medium leading-none">{post.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {post.excerpt}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button + Theme Switcher */}
          <div className="flex items-center gap-4">
            {/* Mobile Navigation Menu */}
            <NavigationMenu className="md:hidden">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[300px]">
                      <NavigationMenuLink asChild className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <Link href="/">
                          <div className="text-sm font-medium leading-none">Home</div>
                        </Link>
                      </NavigationMenuLink>
                      {aboutPost && (
                        <NavigationMenuLink asChild className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <Link href={`/posts/${aboutPost.slug}`}>
                            <div className="text-sm font-medium leading-none">About</div>
                          </Link>
                        </NavigationMenuLink>
                      )}
                      {portfolioPosts.map((post) => (
                        <NavigationMenuLink key={post.slug} asChild className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <Link href={`/posts/${post.slug}`}>
                            <div className="text-sm font-medium leading-none">{post.title}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                      {blogPosts.slice(0, 2).map((post) => (
                        <NavigationMenuLink key={post.slug} asChild className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <Link href={`/posts/${post.slug}`}>
                            <div className="text-sm font-medium leading-none">{post.title}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationHeader;