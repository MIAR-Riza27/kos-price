import {
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  TechnologySection,
  CTASection,
  SocialProofSection
} from "@/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <HeroSection variant="landing" />
      <FeaturesSection />
      <HowItWorksSection />
      <TechnologySection />
      <CTASection variant="landing" />
      <SocialProofSection />
    </main>
  );
}
