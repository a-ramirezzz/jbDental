import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: { default: `${site.name} | Cuidado dental cercano`, template: `%s | ${site.name}` },
  description: "Cuidamos tu salud dental con atención personalizada y un enfoque profesional, en un espacio cómodo y acogedor.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
      <body><a className="skip-link" href="#contenido">Saltar al contenido</a>{children}</body>
    </html>
  );
}
