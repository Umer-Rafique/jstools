import { HeroSection } from "@/components/hero-section"
import { ToolsGrid } from "@/components/tools-grid"
import { AdBanner } from "@/components/ad-banner"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AdBanner position="top" />
      <ToolsGrid />
      <AdBanner position="bottom" />
    </>
  )
}
