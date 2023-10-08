"use client";

import { useTheme } from "next-themes";
import { Toaster } from "sonner";

const ToastProvider = () => {
  const { theme } = useTheme() as {
    theme: "light" | "dark" | "system" | undefined;
  };

  return <Toaster richColors theme={theme === "light" ? "dark" : "light"} />;
};

export default ToastProvider;
