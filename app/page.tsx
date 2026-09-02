import { Hero, SiteHeader } from "@/components/hero";
import { ChapterStackController } from "@/components/chapter-stack";
import {
  BrandManifesto,
  ClosingCta,
  EcosystemMap,
  GrowthJourney,
  ParticipationPaths,
  ProjectShowcase,
  SiteFooter,
  StoryWall,
} from "@/components/home-sections";

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <span id="top" />
      <SiteHeader />
      <Hero />
      <ChapterStackController />
      <BrandManifesto />
      <GrowthJourney />
      <ProjectShowcase />
      <StoryWall />
      <EcosystemMap />
      <ParticipationPaths />
      <ClosingCta />
      <SiteFooter />
    </main>
  );
}
