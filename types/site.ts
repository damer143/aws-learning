export type NavItem = {
  label: string;
  href: string;
};

export type Brand = {
  eyebrow: string;
  name: string;
  navItems: NavItem[];
};

export type HeroAction = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  external?: boolean;
  download?: boolean;
};

export type HeroPanel = {
  title: string;
  value: string;
  description: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  actions: HeroAction[];
  panels: HeroPanel[];
};

export type HighlightStat = {
  label: string;
  value: string;
};

export type ArchitectureItem = {
  id: string;
  badge: string;
  title: string;
  description: string;
};

export type ResumeContent = {
  title: string;
  description: string;
  path: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterContent = {
  copy: string;
  links: FooterLink[];
};

export type LandingPageData = {
  brand: Brand;
  hero: HeroContent;
  highlightStats: HighlightStat[];
  architecture: ArchitectureItem[];
  resume: ResumeContent;
  footer: FooterContent;
};
