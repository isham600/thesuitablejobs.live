"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Company } from "@/lib/data";

interface CompanyCardProps {
  company: Company;
  index?: number;
}

export function CompanyCard({ company, index = 0 }: CompanyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary">
          {company.logo}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary">
            {company.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {company.industry}
          </p>
        </div>
      </div>

      <p className="mt-4 line-clamp-2 text-sm text-muted-foreground">
        {company.description}
      </p>

      <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          <span>{company.location}</span>
        </div>
        <div className="flex items-center gap-1">
          <Briefcase className="h-4 w-4" />
          <span>{company.openJobs} open jobs</span>
        </div>
      </div>

      <div className="mt-4">
        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link href={`/companies/${company.id}`}>
            View Jobs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}
