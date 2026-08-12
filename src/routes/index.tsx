import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "@/components/kreving/Footer";
import { Hero } from "@/components/kreving/Hero";
import { Navbar } from "@/components/kreving/Navbar";
import {
  AppComingSoon,
  Community,
  FoodDiscovery,
  ForFoodies,
  ForVendors,
  HowItWorks,
  WhatIsKreving,
  WhyKreving,
} from "@/components/kreving/Sections";
import { WaitlistSection } from "@/components/kreving/WaitlistSection";

const TITLE = "Kreving — Discover the Best Street Food Around You";
const DESCRIPTION =
  "Kreving helps you discover amazing street food, hidden gems and trending food spots around you. Join the Kreving early-access community.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Kreving",
          description: DESCRIPTION,
          slogan: "Discover. Taste. Kreve.",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <WhatIsKreving />
        <HowItWorks />
        <FoodDiscovery />
        <WhyKreving />
        <ForFoodies />
        <ForVendors />
        <Community />
        <WaitlistSection />
        <AppComingSoon />
      </main>
      <Footer />
    </div>
  );
}
