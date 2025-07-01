import { HeroSection } from "@/components/hero-section"
import { ToolsGrid } from "@/components/tools-grid"
import { AdBanner } from "@/components/ad-banner"
import {Suspense} from "react"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AdBanner position="top" />
      <Suspense>
        <ToolsGrid />
      </Suspense>
      <AdBanner position="bottom" />
    </>
  )
}
