import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

import QueryProvider from "@/components/QueryProvider";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "E-Pharmacy | Online Medicine Store",
    template: "%s | E-Pharmacy",
  },
  description:
    "Your medication delivered. Say goodbye to all your healthcare worries with E-Pharmacy. Order prescriptions, find nearest stores, and manage your health from home.",
  keywords: [
    "e-pharmacy",
    "online pharmacy",
    "order medicine online",
    "medicine store",
    "healthcare products",
    "delivery medication",
  ],
  authors: [{ name: "E-Pharmacy Team" }],
  openGraph: {
    title: "E-Pharmacy | Online Medicine Store",
    description:
      "Get the medicine to help you feel better, get back to your active life, and enjoy every moment.",
    url: "https://e-pharmacy.com",
    siteName: "E-Pharmacy",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={inter.variable}>
        <QueryProvider>{children}</QueryProvider>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              fontSize: "15px",
              padding: "16px 20px",
              borderRadius: "12px",
              background: "var(--text-dark)",
              color: "var(--white)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
              fontFamily: "var(--font-family)",
            },
            success: {
              style: {
                border: "1px solid var(--primary-color)",
                background: "var(--white)",
                color: "var(--text-dark)",
              },
              iconTheme: {
                primary: "var(--primary-color)",
                secondary: "var(--white)",
              },
            },
            error: {
              style: {
                border: "1px solid var(--red)",
                background: "var(--white)",
                color: "var(--text-dark)",
              },
              iconTheme: {
                primary: "var(--red)",
                secondary: "var(--white)",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
