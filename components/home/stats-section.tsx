"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Building2, Users, Clock } from "lucide-react";
import { stats } from "@/lib/data";

const statsData = [
  {
    label: "Jobs Posted",
    value: stats.totalJobs,
    icon: Briefcase,
    suffix: "+",
  },
  {
    label: "Companies",
    value: stats.totalCompanies,
    icon: Building2,
    suffix: "+",
  },
  {
    label: "Candidates",
    value: stats.totalCandidates,
    icon: Users,
    suffix: "+",
  },
  {
    label: "Jobs Today",
    value: stats.jobsPostedToday,
    icon: Clock,
    suffix: "",
  },
];

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num.toLocaleString();
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-primary p-8 lg:p-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {statsData.map((stat) => (
              <div key={stat.label} className="stat-item text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary-foreground/10">
                  <stat.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <p className="mt-4 text-3xl font-bold text-primary-foreground sm:text-4xl">
                  {formatNumber(stat.value)}
                  {stat.suffix}
                </p>
                <p className="mt-1 text-sm text-primary-foreground/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
