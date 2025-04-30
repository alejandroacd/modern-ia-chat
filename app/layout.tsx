import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Overlay from "./components/overlay";
import ContentWrapper from "./components/layout-wrapper";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cosmic AI: a modern assistant powered by OpenAI",
  description: "A modern assistant powered by OpenAI",
  icons: {
    icon: '/icon.avif',
    shortcut: '/icon.avif',
    apple: '/icon.avif',
    other: {
      rel: 'icon',
      url: '/icon.avif',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`}>
      <head>
        <link rel="preload" href="/holograph.avif" as="image" />
      </head>
      <body cz-shortcut-listen="true"
        className="min-h-[70dvh] bg-gray-900 bg-[url(/holograph.avif)] bg-cover overflow-auto md:overflow-hidden font-sans">
        <div className="fixed inset-0 bg-gray-900 z-[-1] transition-opacity duration-300 opacity-0" id="bg-overlay"></div>
        <Overlay />
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </body>
    </html>
  );
}