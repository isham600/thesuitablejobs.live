"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, ArrowRight } from "lucide-react";
import { locations } from "@/lib/data";

export function LocationsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".location-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-secondary/50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Popular Locations
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Find jobs in top cities across India with the most opportunities.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {locations.map((location) => (
            <Link
              key={location.name}
              href={`/jobs?location=${encodeURIComponent(location.name)}`}
              className="location-item"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary hover:bg-card"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{location.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {location.jobs.toLocaleString()} jobs
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Browse all locations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
