import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
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
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
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
