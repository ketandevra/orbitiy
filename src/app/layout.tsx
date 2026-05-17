import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl =
  process.env.GITHUB_PAGES === "true"
    ? "https://ketandevra.github.io/orbitiy"
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Orbitiy — ERP for Schools & Colleges",
  description:
    "Orbitiy is a unified ERP platform for school and college management — admissions, academics, fees, attendance, exams, and more in one connected system.",
  keywords: [
    "school ERP",
    "college management",
    "education ERP",
    "student information system",
    "Orbitiy",
  ],
  openGraph: {
    title: "Orbitiy — ERP for Schools & Colleges",
    description:
      "Orbitiy is a unified ERP platform for school and college management — admissions, academics, fees, attendance, exams, and more in one connected system.",
    images: [{ url: "/logo.png", width: 1254, height: 1254, alt: "Orbitiy" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} min-h-screen`}>{children}</body>
    </html>
  );
}
