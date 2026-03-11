import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { JobDetailsContent } from "@/components/jobs/job-details-content";
import { jobs } from "@/lib/data";

interface JobDetailsPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: JobDetailsPageProps): Promise<Metadata> {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return {
      title: "Job Not Found - Thesuitablejobs",
    };
  }

  return {
    title: `${job.title} at ${job.company} - Thesuitablejobs`,
    description: job.description,
  };
}

export async function generateStaticParams() {
  return jobs.map((job) => ({
    id: job.id,
  }));
}

export default async function JobDetailsPage({ params }: JobDetailsPageProps) {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <JobDetailsContent job={job} />
      </main>
      <Footer />
    </div>
  );
}
