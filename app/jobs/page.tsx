import { Suspense } from "react";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { JobsList } from "@/components/jobs/jobs-list";
import { Spinner } from "@/components/ui/spinner";

export const metadata: Metadata = {
  title: "Browse Jobs - Thesuitablejobs",
  description: "Search and browse thousands of job opportunities across India. Filter by location, experience, salary, and more.",
};

export default function JobsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <Suspense
          fallback={
            <div className="flex h-96 items-center justify-center">
              <Spinner className="h-8 w-8" />
            </div>
          }
        >
          <JobsList />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
