import {
  HeroSection,
  MissionSection,
  FeaturesSection,
  DataSourcesSection,
  TechnologySection,
  DevelopmentInfoSection,
  SocialProofSection,
  CTASection
} from "@/sections";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <HeroSection variant="about" />
      <MissionSection />
      <FeaturesSection />
      <DataSourcesSection />
      <TechnologySection />
      <SocialProofSection />
      <DevelopmentInfoSection />
      <CTASection variant="about" />
    </main>
  );
}
