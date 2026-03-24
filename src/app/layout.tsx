import type { Metadata } from "next";
import { Public_Sans, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mapeia.Online | Consultoria de Processos",
  description:
    "Consultoria de processos online para diagnosticar gargalos, reduzir dependência de pessoas-chave e padronizar a operação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${publicSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
