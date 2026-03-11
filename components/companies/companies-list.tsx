"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Building2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CompanyCard } from "@/components/company-card";
import { companies } from "@/lib/data";

const industries = [
  "All Industries",
  "Technology",
  "Analytics",
  "Cloud Services",
  "Design",
  "Marketing",
  "Finance",
  "Mobile Development",
  "Human Resources",
];

const locations = [
  "All Locations",
  "Bangalore",
  "Mumbai",
  "Delhi NCR",
  "Hyderabad",
  "Pune",
  "Chennai",
  "Gurgaon",
  "Noida",
];

export function CompaniesList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".companies-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const filteredCompanies = useMemo(() => {
    return companies.filter((company) => {
      const matchesSearch =
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesIndustry =
        selectedIndustry === "All Industries" ||
        company.industry === selectedIndustry;
      const matchesLocation =
        selectedLocation === "All Locations" ||
        company.location === selectedLocation;

      return matchesSearch && matchesIndustry && matchesLocation;
    });
  }, [searchTerm, selectedIndustry, selectedLocation]);

  return (
    <div ref={sectionRef} className="py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="companies-header">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Top Companies Hiring
          </h1>
          <p className="mt-2 text-muted-foreground">
            Discover leading companies and explore job opportunities
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search companies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Showing {filteredCompanies.length} companies
        </p>

        {filteredCompanies.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16 text-center"
          >
            <Building2 className="h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              No companies found
            </h3>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Try adjusting your search or filters to find companies.
            </p>
          </motion.div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCompanies.map((company, index) => (
              <CompanyCard key={company.id} company={company} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
