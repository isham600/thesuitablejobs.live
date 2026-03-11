"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JobCard } from "@/components/job-card";
import { jobs } from "@/lib/data";

export function RecentJobsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".section-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const recentJobs = jobs.slice(0, 6);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-header flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Recently Posted Jobs
            </h2>
            <p className="mt-2 text-muted-foreground">
              Fresh opportunities from top companies
            </p>
          </div>
          <Button variant="outline" asChild className="hidden sm:flex">
            <Link href="/jobs">
              View All Jobs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentJobs.map((job, index) => (
            <JobCard key={job.id} job={job} index={index} />
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Button asChild>
            <Link href="/jobs">
              View All Jobs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
