import { Smile, Camera, MessageCircle } from "lucide-react";
import { SocialLink } from "../types/footer.types";

const iconMap = {
  facebook: Smile,
  instagram: Camera,
  whatsapp: MessageCircle,
};

interface Props {
  link: SocialLink;
}

export const SocialIcon = ({ link }: Props) => {
  const Icon = iconMap[link.icon];
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      className="w-10 h-10 rounded-[10px] bg-white/6 border border-white/10 flex items-center justify-center text-white/60 hover:bg-violet-300/40 hover:border-violet-300 hover:text-violet-300 transition-all no-underline"
    >
      <Icon size={16} />
    </a>
  );
};