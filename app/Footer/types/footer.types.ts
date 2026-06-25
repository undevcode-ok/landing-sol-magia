export interface SocialLink {
  id: number;
  label: string;
  href: string;
  icon: "facebook" | "instagram" | "whatsapp";
}

export interface PaymentMethod {
  id: number;
  name: string;
  logo: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterData {
  brand: {
    title: string;
    subtitle: string;
    description: string;
  };
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  paymentMethods: PaymentMethod[];
  copyright: string;
  madeWith: string;
}