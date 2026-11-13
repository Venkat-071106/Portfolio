import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { portfolio } from "@/content/data";

const space = localFont({ src: [{ path: "./fonts/space-400.woff2", weight: "400" }, { path: "./fonts/space-500.woff2", weight: "500" }, { path: "./fonts/space-600.woff2", weight: "600" }], variable: "--font-space", display: "swap" });
const inter = localFont({ src: [{ path: "./fonts/inter-400.woff2", weight: "400" }, { path: "./fonts/inter-500.woff2", weight: "500" }, { path: "./fonts/inter-600.woff2", weight: "600" }], variable: "--font-inter", display: "swap" });
const mono = localFont({ src: [{ path: "./fonts/mono-400.woff2", weight: "400" }, { path: "./fonts/mono-500.woff2", weight: "500" }], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://venkat-071106.vercel.app"),
  title: `${portfolio.shortName} — AI / ML Engineer & Computer Vision`,
  description: "Y. Venkata Lingeshwara Reddy — AI/ML engineer and computer vision researcher. IIT Tirupati SEVA Lab, DRSformer, Agribot and applied deep learning.",
  openGraph: { title: "Venkat — Intelligence, made visible.", description: "AI/ML engineering · Computer vision · Applied research", type: "website", images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image", title: "Venkat — AI / ML Engineer", description: "Intelligence, made visible." },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: portfolio.name, jobTitle: "AI/ML Engineer", email: portfolio.email, url: "https://venkat-071106.vercel.app", sameAs: [portfolio.github, portfolio.linkedin], alumniOf: portfolio.education.school, knowsAbout: ["Machine Learning", "Computer Vision", "Deep Learning", "PyTorch", "Image Restoration"] };
  return <html lang="en" className={`${space.variable} ${inter.variable} ${mono.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />{children}</body></html>;
}
