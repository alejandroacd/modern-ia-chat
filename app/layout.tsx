import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk} from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    className={`min-h-[70dvh] bg-[url(/3.webp)] bg-cover overflow-auto md:overflow-hidden  antialiased  font-sans`} cz-shortcut-listen="true">


    {/* Background Image */}
    <div className="absolute inset-0   -z-20"></div>

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black opacity-50 -z-10 "></div>
    {/* Your Page Content */}

    <section className="md:w-3/4 mx-auto">
    <Header />
    {children}
    </section>

  </body>
</html>

  
  );
}
