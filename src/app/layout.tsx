import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/v2/Navbar";
import { Footer } from "@/components/v2/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LeadGen } from "@/components/LeadGen";
import { SITE_CONFIG } from "@/constants/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | Excellence in Education`,
  description: SITE_CONFIG.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col antialiased`}>
        <Navbar />
        <main className="grow flex flex-col pt-0">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <LeadGen />
      </body>
    </html>
  );
}
