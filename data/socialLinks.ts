import type { LucideIcon } from "lucide-react";
import { Camera, Disc3, Play, Tv, Wifi } from "lucide-react";

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/alviongaming", icon: Camera },
  { label: "YouTube", href: "https://youtube.com/@alviongaming", icon: Play },
  { label: "X", href: "https://x.com/alviongaming", icon: Wifi },
  { label: "Discord", href: "https://discord.gg/alvion-gaming", icon: Disc3 },
  { label: "Twitch", href: "https://twitch.tv/alviongaming", icon: Tv },
];
