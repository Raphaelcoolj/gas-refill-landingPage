import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

/**
 * Using next/font to automatically optimize and load a Google Font.
 * 'Poppins' is a modern and clean sans-serif font that works well for this UI.
 * We specify the weights and subsets we need to avoid loading unnecessary font data.
 */
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '600', '700'] 
});

/**
 * Metadata for the page.
 * This is crucial for SEO and for how the page is represented in browser tabs or when shared.
 */
export const metadata: Metadata = {
  title: "FuelUp - Modern Gas Refilling Services",
  description: "Your one-stop solution for fast, reliable, and modern gas refilling. Schedule a refill or contact us for emergency services.",
};

/**
 * This is the root layout component.
 * It wraps around all other pages and components. We use it to apply global styles,
 * fonts, and consistent layout structure.
 * @param {React.ReactNode} children - The child components that will be rendered within this layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/*
        The font class from next/font is applied to the body.
        This ensures the Poppins font is used throughout the application.
      */}
      <body className={poppins.className}>{children}</body>
    </html>
  );
}