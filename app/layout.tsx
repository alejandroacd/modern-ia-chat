import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Overlay from "./components/overlay";
import ContentWrapper from "./components/app-wrapper";


const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cosmic AI: a modern assistant powered by OpenAI",
  description: "A modern assistant powered by OpenAI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`}>
      <body
        className={`min-h-[70dvh]
     bg-[url(/3.webp)] 
     bg-cover 
     overflow-auto 
     md:overflow-hidden  
     antialiased  
     font-sans`} cz-shortcut-listen="true">
        <Overlay />
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </body>
    </html>


  );
}
