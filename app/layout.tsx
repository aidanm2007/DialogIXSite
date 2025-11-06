import type { Metadata } from "next";
import "./globals.css";
import { Inter, Outfit } from "next/font/google";
import { DefaultSeo } from "next-seo";
import SEO from "@/lib/seo.config";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { GradientRays } from "@/components/GradientRays";
import { NoiseLayer } from "@/components/NoiseLayer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Dialog IX",
  description: "Dialog IX — AI-native customer dialogue, on autopilot.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} min-h-screen bg-background text-foreground`}>
        <DefaultSeo {...SEO} />
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

