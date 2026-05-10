import type { Metadata, Viewport } from "next";
import { Playfair_Display, Montserrat, Caveat } from "next/font/google";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import Interactivity from "@/app/components/Interactivity";
import "./globals.css";

// Brand-locked typography. Playfair Display anchors the editorial gravity
// (display headings + italic accents), Montserrat keeps body and UI clean,
// Caveat carries handwritten brand moments — the "hi, I'm Liana ♡" greeting,
// polaroid captions, the "collect moments, not things" tagline.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Travel with Liana — Real travel, hidden gems, beautiful places",
    template: "%s · Travel with Liana",
  },
  description:
    "LA-based Armenian travel creator. Hidden gems, weekend trips, and real experiences — California through an Armenian lens. Brand collaborations welcome.",
  metadataBase: new URL("https://travelwithliana.com"),
  openGraph: {
    title: "Travel with Liana",
    description: "Real places. Meaningful moments. Timeless memories.",
    type: "profile",
    siteName: "Travel with Liana",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel with Liana",
    description: "Real places. Meaningful moments. Timeless memories.",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} ${caveat.variable}`}
    >
      <body>
        <a href="#main" className="tl-skip">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <Interactivity />
      </body>
    </html>
  );
}
