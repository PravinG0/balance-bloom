import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { BalanceSection } from "@/components/BalanceSection";

const title = "Royal Medical Center | Personalized Hormone & Weight Therapy";
const description =
  "Personalized testosterone, hormone, weight management, and peptide programs with comprehensive lab testing, ongoing monitoring, and professional guidance.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <HeroSection />
      <BalanceSection />
    </main>
  );
}
