import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { CategoriesSection } from "@/components/home/categories-section";
import { LocationsSection } from "@/components/home/locations-section";
import { RecentJobsSection } from "@/components/home/recent-jobs-section";
import { TopCompaniesSection } from "@/components/home/top-companies-section";
import { StatsSection } from "@/components/home/stats-section";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CategoriesSection />
        <LocationsSection />
        <RecentJobsSection />
        <TopCompaniesSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
}
