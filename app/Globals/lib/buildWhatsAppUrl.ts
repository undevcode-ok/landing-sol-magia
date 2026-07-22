import { WP_DEFAULT_MESSAGE, WP_NUMBER } from "../data/whatsapp.data";

export const buildWhatsAppUrl = (
  message: string = WP_DEFAULT_MESSAGE,
  number: string = WP_NUMBER
) => `https://wa.me/${number}?text=${encodeURIComponent(message)}`;