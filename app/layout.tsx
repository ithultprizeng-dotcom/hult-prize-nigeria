import type { Metadata } from "next";
import { Figtree, Cabin } from "next/font/google";
import "./globals.css";
import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Hult Prize Nigeria",
  description:
    "Compete in the world's largest student social entrepreneurship challenge. Win $1M in seed funding, access world-class mentorship, and build a for-profit venture that solves Nigeria's toughest problems. Register now!",
  keywords: [
    "Hult Prize Nigeria",
    "Hult Prize application",
    "Global Social Challenge",
    "$1M Prize",
    "Seed Funding",
    "Startup Competition",
    "Social Entrepreneurship Nigeria",
    "UN Sustainable Development Goals (SDGs)",
    "Sustainable Cities",
    "Social innovation",
    "Impact investment",
    "Environmental solutions Nigeria",
    "Youth Empowerment Nigeria",
    "Nigerian students",
    "Nigerian universities",
    "Campus Program",
    "African entrepreneurship",
    "Student founders",
    "Lagos startups",
    "Abuja entrepreneurship",
    "Nigerian Youth",
    "Global Accelerator",
    "Regional Summit",
    "Business plan competition",
    "Scalable enterprise",
    "Venture capital Africa",
    "Next-gen founders",
    "Competition timeline",
    "Mentorship program",
    "Register now",
    "Join Hult Prize",
    "Apply for Hult Prize Nigeria",
    "Hackathon",
    "Startups",
  ],

  openGraph: {
    title: "Hult Prize Nigeria: Win $1M to Launch Your Social Startup",
    description:
      "Nigeria's leading platform for student entrepreneurs. Compete for $1,000,000 in seed funding by building a scalable, profitable venture aligned with the UN Sustainable Development Goals.",
    url: "https://www.hultprize-ng.com/",
    siteName: "Hult Prize Nigeria",
    images: [
      {
        url: "https://www.hultprize-ng.com/HP_NigeriaHP.png",
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

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});
const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cabin",
});

const gillSans = localFont({
  src: [
    {
      path: "../public/fonts/gill-sans/Gill Sans Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/gill-sans/Gill Sans Medium.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/gill-sans/Gill Sans Bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/gill-sans/Gill Sans Heavy.otf",
      weight: "800",
      style: "normal",
    },
  ],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${cabin.variable} ${gillSans.className} mx-auto max-w-[1440px]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
