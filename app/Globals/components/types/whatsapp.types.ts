export type WhatsAppButtonVariant = "primary" | "modal";

export interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  variant?: WhatsAppButtonVariant;
  showIcon?: boolean;
  uppercase?: boolean;
  className?: string;
  ariaLabel?: string;
}