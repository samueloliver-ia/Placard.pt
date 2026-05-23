import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Placard.pt | Inteligência e Performance Esportiva",
  description: "Transforme informação esportiva em oportunidades reais. Baixe o Placard.pt agora.",
  openGraph: {
    title: "Placard.pt | Inteligência Esportiva",
    description: "Baixe o aplicativo que está revolucionando as análises esportivas.",
    url: "https://placard.pt",
    siteName: "Placard.pt",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#82dc1a",
};

import { Header } from "@/components/layout/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} antialiased scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-dark-bg text-white selection:bg-neon-green selection:text-dark-bg flex flex-col" suppressHydrationWarning>
        <Script id="gtranslate-settings" strategy="beforeInteractive">
          {`window.gtranslateSettings = {"default_language":"pt","languages":["en","pt"],"native_language_names":true,"detect_browser_language":true,"wrapper_selector":".gtranslate_wrapper"}`}
        </Script>
        <Script src="https://cdn.gtranslate.net/widgets/latest/popup.js" strategy="afterInteractive" />

        <Header />
        {children}
      </body>
    </html>
  );
}
