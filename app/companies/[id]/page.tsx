import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CompanyDetailsContent } from "@/components/companies/company-details-content";
import { companies, jobs } from "@/lib/data";

interface CompanyDetailsPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: CompanyDetailsPageProps): Promise<Metadata> {
  const { id } = await params;
  const company = companies.find((c) => c.id === id);

  if (!company) {
    return {
      title: "Company Not Found - Thesuitablejobs",
    };
  }

  return {
    title: `${company.name} Jobs - Thesuitablejobs`,
    description: company.description,
  };
}

export async function generateStaticParams() {
  return companies.map((company) => ({
    id: company.id,
  }));
}

export default async function CompanyDetailsPage({ params }: CompanyDetailsPageProps) {
  const { id } = await params;
  const company = companies.find((c) => c.id === id);

  if (!company) {
    notFound();
  }

  const companyJobs = jobs.filter((job) => job.company === company.name);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <CompanyDetailsContent company={company} jobs={companyJobs} />
      </main>
      <Footer />
    </div>
  );
}
