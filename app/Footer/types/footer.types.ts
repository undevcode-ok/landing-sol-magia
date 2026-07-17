export interface SocialLink {
  id: number;
  label: string;
  href: string;
  icon: "facebook" | "instagram" | "whatsapp";
}

export interface PaymentMethod {
  id: number;
  name: string;
  logo?: string;
  iconPath?: string;
  iconColor?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterData {
  brand: {
    logoImage: string;
    alt: string;
    subtitle: string;
    description: string;
  };
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  phoneNumbers: string[];
  paymentMethods: PaymentMethod[];
  copyright: string;
  madeWith: string;
  madeWithLink: string;
}