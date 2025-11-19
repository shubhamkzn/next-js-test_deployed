import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Home | Your App Name",
  description:
    "Welcome to our platform. Explore features, guides, camps, and download our mobile app.",
  keywords: [
    "your app",
    "guide",
    "features",
    "camp",
    "mobile app",
    "nextjs",
  ],
  openGraph: {
    title: "Your App Name",
    description:
      "Explore features, guides, camps and download the app.",
    url: "https://yourwebsite.com/",
    siteName: "Your App Name",
    images: [
      {
        url: "https://yourwebsite.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Your App Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your App Name",
    description:
      "Explore features, guides, camps and download the app.",
    images: ["https://yourwebsite.com/og-image.png"],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}
