"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (keyword) params.set("keyword", keyword);
    if (location) params.set("location", location);
    router.push(`/jobs?${params.toString()}`);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Find Your{" "}
            <span className="text-primary">Dream Job</span>
            <br />
            Build Your Career
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
            Discover thousands of job opportunities from top companies across
            India. Your next career move starts here.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSearch}
          className="mx-auto mt-10 max-w-4xl"
        >
          <div className="flex flex-col gap-4 rounded-2xl bg-card p-4 shadow-lg sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Job title, keyword, or company"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="h-12 border-0 bg-secondary pl-10 text-base shadow-none focus-visible:ring-0"
              />
            </div>
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="City or location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="h-12 border-0 bg-secondary pl-10 text-base shadow-none focus-visible:ring-0"
              />
            </div>
            <Button type="submit" size="lg" className="h-12 px-8 text-base">
              Search Jobs
            </Button>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <span>Popular searches:</span>
          {["Software Developer", "Data Analyst", "Product Manager", "UX Designer"].map(
            (term) => (
              <button
                key={term}
                onClick={() => {
                  setKeyword(term);
                  router.push(`/jobs?keyword=${encodeURIComponent(term)}`);
                }}
                className="rounded-full bg-secondary px-3 py-1 text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {term}
              </button>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
