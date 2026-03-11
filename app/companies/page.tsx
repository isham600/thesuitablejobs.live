import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CompaniesList } from "@/components/companies/companies-list";

export const metadata: Metadata = {
  title: "Companies - Thesuitablejobs",
  description: "Explore top companies hiring across India. Browse companies by industry and location to find your ideal workplace.",
};

export default function CompaniesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <CompaniesList />
      </main>
      <Footer />
    </div>
  );
}
