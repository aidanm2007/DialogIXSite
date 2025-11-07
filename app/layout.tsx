import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

import siteMetadata from "@/lib/seo.config";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { GradientRays } from "@/components/GradientRays";
import { NoiseLayer } from "@/components/NoiseLayer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = siteMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} ${playfair.variable} min-h-screen bg-background text-foreground font-sans`}>
        <LenisProvider>
          <Navbar />
          <main className="relative z-0 pt-20">
            <div className="absolute inset-0 -z-10">
              <GradientRays />
              <NoiseLayer />
            </div>
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
