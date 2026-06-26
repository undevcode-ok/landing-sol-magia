export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
  children?: { label: string; href: string }[];
}

export interface LogoData {
  title: string;
  subtitle: string;
}

export interface CTAData {
  label: string;
  href: string;
  ariaLabel: string;
}