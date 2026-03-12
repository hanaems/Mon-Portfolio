import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hanae Messaoudi - Portfolio Développeuse Web",
  description:
    "Portfolio professionnel de Hanae Messaoudi, développeuse web et ingénieur logiciel spécialisée en développement digital. Découvrez mes projets et compétences.",
  keywords:
    "portfolio, développeuse web, ingénieur logiciel, React, Next.js, Node.js, ASP.NET, Casablanca, Maroc",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://hanae-portfolio.com",
    siteName: "Hanae Messaoudi - Portfolio",
    description: "Portfolio de Hanae Messaoudi - Développeuse Web & Ingénieur Logiciel",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}