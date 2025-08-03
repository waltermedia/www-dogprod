export interface MenuItem {
  title: string;
  href: string;
  description?: string;
}

export interface MenuSection {
  title: string;
  description: string;
  items: MenuItem[];
}

export const MENU_CONFIG = {
  about: {
    title: "About",
    href: "/posts/about",
  },
  contact: {
    title: "Contact",
    href: "#",
  },
  portfolio: {
    title: "Portfolio",
    description: "Game Development, Art & Music",
    subtitle: "Explore our creative projects and interactive experiences.",
    items: [
      {
        title: "Defend the Castle",
        href: "/posts/defend-the-castle",
        description: "Defend the Castle is an intense day-by-day tower defense game where you fight off waves of attackers in a world that never gives you a moment to breathe. Each day brings 5 waves of enemy assaults, and you have only 60 seconds to survive - again and again."
      }
    ] as MenuItem[]
  },
  blog: {
    title: "Blog",
    description: "Latest Posts",
    subtitle: "Read about development, creativity, and innovation.",
    items: [
      // Add blog posts here as needed
      {
        title: "Test",
        href: "/posts/defend-the-castle",
        description: "Blog menu test"
      }
    ] as MenuItem[]
  }
};