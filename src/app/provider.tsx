import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

interface ProviderProps {
  children: ReactNode;
}

const provider = ({ children }: ProviderProps) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="bg-[#e5dede] dark:bg-[#171717] min-h-screen transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default provider;