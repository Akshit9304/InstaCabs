import type { Metadata } from "next";
import { Inter,Outfit } from "next/font/google";
import NavBar from "./components/NavBar";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <NavBar/>
        {children}</body>
    </html>
  );
}
