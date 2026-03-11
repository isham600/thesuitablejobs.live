"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Building2,
  Briefcase,
  Globe,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { JobCard } from "@/components/job-card";
import type { Company, Job } from "@/lib/data";

interface CompanyDetailsContentProps {
  company: Company;
  jobs: Job[];
}

export function CompanyDetailsContent({
  company,
  jobs,
}: CompanyDetailsContentProps) {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/companies"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Companies
          </Link>

          <div className="mt-6 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-2xl font-bold text-primary">
                {company.logo}
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
                      {company.name}
                    </h1>
                    <Badge variant="secondary" className="mt-2">
                      {company.industry}
                    </Badge>
                  </div>
                  <Button>
                    <Briefcase className="mr-2 h-4 w-4" />
                    View All Jobs
                  </Button>
                </div>

                <p className="mt-4 text-muted-foreground">
                  {company.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{company.location}, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    <span>{company.industry}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    <span>{company.openJobs} open positions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>500+ employees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span>www.{company.name.toLowerCase().replace(/\s+/g, "")}.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-foreground">
              Open Positions at {company.name}
            </h2>
            <p className="mt-1 text-muted-foreground">
              {jobs.length > 0
                ? `${jobs.length} job${jobs.length > 1 ? "s" : ""} available`
                : "No open positions at the moment"}
            </p>

            {jobs.length > 0 ? (
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                {jobs.map((job, index) => (
                  <JobCard key={job.id} job={job} index={index} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16 text-center"
              >
                <Briefcase className="h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  No open positions
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Check back later for new job opportunities at {company.name}.
                </p>
                <Button variant="outline" className="mt-4" asChild>
                  <Link href="/jobs">Browse All Jobs</Link>
                </Button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
