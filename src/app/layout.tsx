import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mokshaghee.com"),

  title: {
    default: "Moksha Ghee | Premium Cow & Buffalo Ghee",
    template: "%s | Moksha Ghee",
  },

  description:
    "Experience the richness of handcrafted Cow Ghee and Buffalo Ghee made with uncompromising purity, authentic flavor, rich aroma, and premium quality. Crafted for modern indulgence.",

  keywords: [
    "Moksha Ghee",
    "Cow Ghee",
    "Buffalo Ghee",
    "Pure Ghee",
    "Premium Ghee",
    "Handcrafted Ghee",
    "Desi Ghee",
    "Traditional Ghee",
    "Best Ghee India",
    "A2 Ghee",
    "Organic Ghee",
    "Healthy Cooking Ghee",
  ],

  authors: [
    {
      name: "Moksha Ghee",
    },
  ],

  creator: "Moksha Ghee",
  publisher: "Moksha Ghee",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "Moksha Ghee | Premium Cow & Buffalo Ghee",

    description:
      "Handcrafted premium Cow Ghee and Buffalo Ghee made with uncompromising purity, authentic taste, and rich aroma.",

    url: "https://mokshaghee.com",

    siteName: "Moksha Ghee",

    images: [
      {
        url: "/images/hero-bg-desktop.jpg",
        width: 1200,
        height: 630,
        alt: "Moksha Ghee",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Moksha Ghee | Premium Cow & Buffalo Ghee",

    description:
      "Handcrafted premium Cow Ghee and Buffalo Ghee made with uncompromising purity, authentic taste, and rich aroma.",

    images: ["/images/hero-bg-desktop.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
      <body
        className="
          min-h-screen
          overflow-x-hidden
          bg-[#f6ecdf]
          text-neutral-900
          antialiased
        "
      >
        {/* SEO Structured Data */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Moksha Ghee",
              url: "https://mokshaghee.com",
              logo: "https://mokshaghee.com/favicon.png",

              sameAs: [
                "https://www.facebook.com/mokshaghee",
                "https://www.instagram.com/mokshaghee",
                "https://www.youtube.com/@mokshaghee",
              ],
            }),
          }}
        />

        {children}

        {/* Google Analytics */}

        <GoogleAnalytics gaId="G-55CKVMP5R8" />
      </body>
    </html>
  );
}