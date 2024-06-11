import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Provider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMDB clone",
  description: "IMDB movie preview app (clone) using Next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Theme> */}
          <Provider>
            <Header />
            <main>{children}</main>
          </Provider>
        {/* </Theme> */}
      </body>
    </html>
  );
}
