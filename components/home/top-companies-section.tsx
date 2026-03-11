"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CompanyCard } from "@/components/company-card";
import { companies } from "@/lib/data";

export function TopCompaniesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".companies-header", {
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

  const topCompanies = companies.slice(0, 4);

  return (
    <section ref={sectionRef} className="bg-secondary/50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="companies-header flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Top Companies Hiring
            </h2>
            <p className="mt-2 text-muted-foreground">
              Join industry-leading organizations
            </p>
          </div>
          <Button variant="outline" asChild className="hidden sm:flex">
            <Link href="/companies">
              View All Companies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {topCompanies.map((company, index) => (
            <CompanyCard key={company.id} company={company} index={index} />
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Button asChild>
            <Link href="/companies">
              View All Companies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
