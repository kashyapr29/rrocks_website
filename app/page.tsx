import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { IndustrialApplications } from "@/components/industrial-applications"
import { ProductShowcaseGrid } from "@/components/product-showcase-grid"
import { FactorySection } from "@/components/factory-section"
import { LaboratorySection } from "@/components/laboratory-section"
import { CustomizationSection } from "@/components/customization-section"
import { ProductShowcase } from "@/components/product-showcase"
import { ShadeCardSection } from "@/components/shade-card-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen scroll-smooth">
      <Header />
      <main className="space-y-0">
        <HeroSection />
        <IndustrialApplications />
        <ProductShowcaseGrid />
        <FactorySection />
        {false && <LaboratorySection />}
        <CustomizationSection />
        <ProductShowcase />
        <ShadeCardSection />
      </main>
      <Footer />
    </div>
  )
}
