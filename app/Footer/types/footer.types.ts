export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterData {
  brand: string;
  tagline: string;
  cta: { label: string; href: string };
  columns: FooterColumn[];
  copyright: string;
  developer: { text: string; name: string; href: string };
}