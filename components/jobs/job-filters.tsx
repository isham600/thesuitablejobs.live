"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface JobFiltersProps {
  filters: {
    locations: string[];
    experience: string[];
    jobTypes: string[];
    workModes: string[];
    salaryRange: [number, number];
  };
  onFilterChange: (filters: JobFiltersProps["filters"]) => void;
  onClose?: () => void;
  isMobile?: boolean;
}

const locationOptions = [
  "Bangalore",
  "Mumbai",
  "Delhi NCR",
  "Hyderabad",
  "Pune",
  "Chennai",
  "Kolkata",
  "Ahmedabad",
];

const experienceOptions = [
  "0-2 years",
  "2-4 years",
  "4-6 years",
  "6-8 years",
  "8+ years",
];

const jobTypeOptions = ["Full-time", "Part-time", "Contract", "Internship"];

const workModeOptions = ["Remote", "On-site", "Hybrid"];

export function JobFilters({
  filters,
  onFilterChange,
  onClose,
  isMobile,
}: JobFiltersProps) {
  const toggleFilter = (
    category: keyof typeof filters,
    value: string
  ) => {
    if (category === "salaryRange") return;
    const current = filters[category] as string[];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    onFilterChange({ ...filters, [category]: updated });
  };

  const clearFilters = () => {
    onFilterChange({
      locations: [],
      experience: [],
      jobTypes: [],
      workModes: [],
      salaryRange: [0, 50],
    });
  };

  const hasActiveFilters =
    filters.locations.length > 0 ||
    filters.experience.length > 0 ||
    filters.jobTypes.length > 0 ||
    filters.workModes.length > 0 ||
    filters.salaryRange[0] > 0 ||
    filters.salaryRange[1] < 50;

  return (
    <motion.div
      initial={isMobile ? { x: -300, opacity: 0 } : { opacity: 0 }}
      animate={isMobile ? { x: 0, opacity: 1 } : { opacity: 1 }}
      exit={isMobile ? { x: -300, opacity: 0 } : { opacity: 0 }}
      className="h-fit rounded-xl border border-border bg-card p-6"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Filters</h2>
        <div className="flex items-center gap-2">
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              Clear all
            </Button>
          )}
          {isMobile && onClose && (
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>

      <div className="mt-6 space-y-6">
        <div>
          <h3 className="mb-3 text-sm font-medium text-foreground">Location</h3>
          <div className="space-y-2">
            {locationOptions.map((location) => (
              <div key={location} className="flex items-center gap-2">
                <Checkbox
                  id={`location-${location}`}
                  checked={filters.locations.includes(location)}
                  onCheckedChange={() => toggleFilter("locations", location)}
                />
                <Label
                  htmlFor={`location-${location}`}
                  className="text-sm text-muted-foreground"
                >
                  {location}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-medium text-foreground">
            Experience
          </h3>
          <div className="space-y-2">
            {experienceOptions.map((exp) => (
              <div key={exp} className="flex items-center gap-2">
                <Checkbox
                  id={`exp-${exp}`}
                  checked={filters.experience.includes(exp)}
                  onCheckedChange={() => toggleFilter("experience", exp)}
                />
                <Label
                  htmlFor={`exp-${exp}`}
                  className="text-sm text-muted-foreground"
                >
                  {exp}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-medium text-foreground">
            Salary Range (LPA)
          </h3>
          <div className="px-2">
            <Slider
              value={filters.salaryRange}
              onValueChange={(value) =>
                onFilterChange({
                  ...filters,
                  salaryRange: value as [number, number],
                })
              }
              max={50}
              step={1}
              className="mb-2"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{filters.salaryRange[0]} LPA</span>
              <span>{filters.salaryRange[1]} LPA</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-medium text-foreground">Job Type</h3>
          <div className="space-y-2">
            {jobTypeOptions.map((type) => (
              <div key={type} className="flex items-center gap-2">
                <Checkbox
                  id={`type-${type}`}
                  checked={filters.jobTypes.includes(type)}
                  onCheckedChange={() => toggleFilter("jobTypes", type)}
                />
                <Label
                  htmlFor={`type-${type}`}
                  className="text-sm text-muted-foreground"
                >
                  {type}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-medium text-foreground">
            Work Mode
          </h3>
          <div className="space-y-2">
            {workModeOptions.map((mode) => (
              <div key={mode} className="flex items-center gap-2">
                <Checkbox
                  id={`mode-${mode}`}
                  checked={filters.workModes.includes(mode)}
                  onCheckedChange={() => toggleFilter("workModes", mode)}
                />
                <Label
                  htmlFor={`mode-${mode}`}
                  className="text-sm text-muted-foreground"
                >
                  {mode}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
