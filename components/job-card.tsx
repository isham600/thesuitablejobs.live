"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase, IndianRupee } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Job } from "@/lib/data";

interface JobCardProps {
  job: Job;
  index?: number;
}

export function JobCard({ job, index = 0 }: JobCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-semibold text-primary">
            {job.companyLogo}
          </div>
          <div>
            <Link href={`/jobs/${job.id}`}>
              <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary">
                {job.title}
              </h3>
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">{job.company}</p>
          </div>
        </div>
        <Badge
          variant={job.workMode === "Remote" ? "default" : "secondary"}
          className="shrink-0"
        >
          {job.workMode}
        </Badge>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-1">
          <Briefcase className="h-4 w-4" />
          <span>{job.experience}</span>
        </div>
        <div className="flex items-center gap-1">
          <IndianRupee className="h-4 w-4" />
          <span>{job.salary}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>{job.postedDate}</span>
        </div>
      </div>

      <p className="mt-4 line-clamp-2 text-sm text-muted-foreground">
        {job.description}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-2">
          <Badge variant="outline">{job.jobType}</Badge>
          <Badge variant="outline">{job.category}</Badge>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href={`/jobs/${job.id}`}>View Details</Link>
        </Button>
      </div>
    </motion.div>
  );
}
