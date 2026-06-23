"use client";

import { usePathname } from "next/navigation";

export const useNavbarActive = () => {
  const pathname = usePathname();
  return { activeLink: pathname };
};