import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moksha Ghee",
  description:
    "Handcrafted premium cow and buffalo ghee made with uncompromising purity, rich aroma, and authentic taste.",
  keywords: [
    "Moksha Ghee",
    "Cow Ghee",
    "Buffalo Ghee",
    "Pure Ghee",
    "Premium Ghee",
    "Handcrafted Ghee",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={poppins.variable}
    >
      <body className="min-h-screen overflow-x-hidden bg-[#f6ecdf] text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}