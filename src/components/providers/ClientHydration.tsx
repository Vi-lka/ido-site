"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
};

export const ClientHydration = ({ children, fallback = null }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return fallback;
  }

  return children;
};
