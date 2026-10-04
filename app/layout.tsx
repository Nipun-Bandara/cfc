import type { Metadata } from "next";
import { Space_Grotesk, Inter, DM_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./_components/ThemeProvider";
import ClientLoader from "./_components/ClientLoader";
import { Navigation } from "./_components/Navigation";
import Footer from "./_components/Footer";
import { ScrollProgressBar } from "./_components/ScrollProgressBar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  weight: ["300", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cfc.example.com"),
  title: {
    default: "CFC",
    template: "%s | CFC",
  },
  description:
    "CFC helps forex traders navigate prop firm evaluations with structured challenge support, risk guidance, and a disciplined trading process.",
  keywords: [
    "CFC",
    "funded account",
    "prop firm challenge",
    "forex evaluation",
    "trading support",
    "risk management",
  ],
  openGraph: {
    title: "CFC",
    description:
      "Structured support for traders working through forex prop firm challenges.",
    url: "https://cfc.example.com",
    siteName: "CFC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CFC | Funded Account Challenge Support",
    description:
      "Structured support for traders working through forex prop firm challenges.",
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
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${inter.variable} ${dmMono.variable}`}>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClientLoader>
            <ScrollProgressBar />
            <Navigation />
            {children}
            <Footer />
          </ClientLoader>
        </ThemeProvider>
      </body>
    </html>
  );
}
