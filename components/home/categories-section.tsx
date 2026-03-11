"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Code, Megaphone, Palette, TrendingUp, Wallet, Users, BarChart3, PenTool } from "lucide-react";
import { categories } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Technology: <Code className="h-6 w-6" />,
  Marketing: <Megaphone className="h-6 w-6" />,
  Design: <Palette className="h-6 w-6" />,
  Sales: <TrendingUp className="h-6 w-6" />,
  Finance: <Wallet className="h-6 w-6" />,
  "Human Resources": <Users className="h-6 w-6" />,
  "Data Science": <BarChart3 className="h-6 w-6" />,
  Content: <PenTool className="h-6 w-6" />,
};

export function CategoriesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".category-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Browse by Category
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Explore job opportunities across various industries and find the
            perfect role that matches your skills.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/jobs?category=${encodeURIComponent(category.name)}`}
              className="category-card"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-primary hover:bg-primary/5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {iconMap[category.name]}
                </div>
                <h3 className="mt-4 font-semibold text-foreground">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {category.count.toLocaleString()} jobs
                </p>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View all categories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
