import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hult Prize Nigeria",
  description:
    "Compete in the world's largest student social entrepreneurship challenge. Win $1M in seed funding, access world-class mentorship, and build a for-profit venture that solves Nigeria's toughest problems. Register now!",
  keywords: [
    "Hult Prize Nigeria",
    "Social Entrepreneurship",
    "Student Competition",
    "$1M Prize",
    "UN SDGs",
    "Nigerian Startups",
    "Business Challenge",
    "Youth Empowerment Nigeria",
  ],

  openGraph: {
    title: "Hult Prize Nigeria: Win $1M to Launch Your Social Startup",
    description:
      "Nigeria's leading platform for student entrepreneurs. Compete for $1,000,000 in seed funding by building a scalable, profitable venture aligned with the UN Sustainable Development Goals.",
    url: "https://www.hultprize-ng.com/",
    siteName: "Hult Prize Nigeria",
    images: [
      {
        url: "https://www.hultprize-ng.com/static/media/1R5A5099.b7e8976f0a83f7d05046.jpg",
        width: 1200,
        height: 630,
        alt: "Hult Prize Nigeria Logo and Challenge Banner",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@HultPrizeNG",
    creator: "@HultPrizeNG",
    title: "Hult Prize Nigeria: Win $1M to Launch Your Social Startup",
    description:
      "Compete for $1M in seed funding by building a scalable, profitable social venture in Nigeria.",
    images: ["https://hultprizenigeria.org/images/social-share-banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
