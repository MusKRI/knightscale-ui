"use client";

import { useEffect, useState } from "react";

export const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, [hasMounted]);

  if (!hasMounted) return null;

  return <>{children}</>;
};
