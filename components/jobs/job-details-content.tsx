"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  IndianRupee,
  Clock,
  Building2,
  Share2,
  Bookmark,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Job } from "@/lib/data";

interface JobDetailsContentProps {
  job: Job;
}

export function JobDetailsContent({ job }: JobDetailsContentProps) {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Jobs
          </Link>

          <div className="mt-6 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xl font-bold text-primary">
                  {job.companyLogo}
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
                    {job.title}
                  </h1>
                  <p className="mt-1 text-lg text-muted-foreground">
                    {job.company}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Briefcase className="h-4 w-4" />
                <span>{job.experience}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <IndianRupee className="h-4 w-4" />
                <span>{job.salary}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>Posted {job.postedDate}</span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="default">{job.workMode}</Badge>
              <Badge variant="secondary">{job.jobType}</Badge>
              <Badge variant="outline">{job.category}</Badge>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="flex-1 sm:flex-initial">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="flex-1 sm:flex-initial">
                Save Job
              </Button>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8"
              >
                <h2 className="text-xl font-semibold text-foreground">
                  Job Description
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {job.description}
                </p>

                <Separator className="my-6" />

                <h2 className="text-xl font-semibold text-foreground">
                  Responsibilities
                </h2>
                <ul className="mt-4 space-y-3">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <Separator className="my-6" />

                <h2 className="text-xl font-semibold text-foreground">
                  Requirements
                </h2>
                <ul className="mt-4 space-y-3">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <h2 className="text-lg font-semibold text-foreground">
                  Company Information
                </h2>

                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 font-semibold text-primary">
                    {job.companyLogo}
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">
                      {job.company}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {job.category}
                    </p>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 className="h-4 w-4" />
                    <span>{job.category} Industry</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}, India</span>
                  </div>
                </div>

                <Button variant="outline" className="mt-4 w-full" asChild>
                  <Link href="/companies">View Company Profile</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <h2 className="text-lg font-semibold text-foreground">
                  Job Summary
                </h2>

                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-xs font-medium uppercase text-muted-foreground">
                      Experience
                    </p>
                    <p className="mt-1 text-sm text-foreground">
                      {job.experience}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase text-muted-foreground">
                      Salary
                    </p>
                    <p className="mt-1 text-sm text-foreground">{job.salary}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase text-muted-foreground">
                      Job Type
                    </p>
                    <p className="mt-1 text-sm text-foreground">
                      {job.jobType}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase text-muted-foreground">
                      Work Mode
                    </p>
                    <p className="mt-1 text-sm text-foreground">
                      {job.workMode}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase text-muted-foreground">
                      Location
                    </p>
                    <p className="mt-1 text-sm text-foreground">
                      {job.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
