"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { JobCard } from "@/components/job-card";
import { JobFilters } from "@/components/jobs/job-filters";
import { jobs } from "@/lib/data";

export function JobsList() {
  const searchParams = useSearchParams();
  const initialKeyword = searchParams.get("keyword") || "";
  const initialLocation = searchParams.get("location") || "";
  const initialCategory = searchParams.get("category") || "";

  const [keyword, setKeyword] = useState(initialKeyword);
  const [sortBy, setSortBy] = useState("recent");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [filters, setFilters] = useState({
    locations: initialLocation ? [initialLocation] : [],
    experience: [],
    jobTypes: [],
    workModes: [],
    salaryRange: [0, 50] as [number, number],
  });

  const filteredJobs = useMemo(() => {
    let result = [...jobs];

    if (keyword) {
      const searchTerm = keyword.toLowerCase();
      result = result.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm) ||
          job.company.toLowerCase().includes(searchTerm) ||
          job.description.toLowerCase().includes(searchTerm)
      );
    }

    if (initialCategory) {
      result = result.filter(
        (job) => job.category.toLowerCase() === initialCategory.toLowerCase()
      );
    }

    if (filters.locations.length > 0) {
      result = result.filter((job) => filters.locations.includes(job.location));
    }

    if (filters.jobTypes.length > 0) {
      result = result.filter((job) => filters.jobTypes.includes(job.jobType));
    }

    if (filters.workModes.length > 0) {
      result = result.filter((job) => filters.workModes.includes(job.workMode));
    }

    if (sortBy === "recent") {
      result.sort((a, b) => {
        const order: Record<string, number> = {
          "1 day ago": 1,
          "2 days ago": 2,
          "3 days ago": 3,
          "4 days ago": 4,
          "5 days ago": 5,
          "6 days ago": 6,
          "1 week ago": 7,
        };
        return (order[a.postedDate] || 10) - (order[b.postedDate] || 10);
      });
    }

    return result;
  }, [keyword, filters, sortBy, initialCategory]);

  const activeFilterCount =
    filters.locations.length +
    filters.experience.length +
    filters.jobTypes.length +
    filters.workModes.length +
    (filters.salaryRange[0] > 0 || filters.salaryRange[1] < 50 ? 1 : 0);

  return (
    <div className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            {initialCategory
              ? `${initialCategory} Jobs`
              : initialLocation
              ? `Jobs in ${initialLocation}`
              : "Browse Jobs"}
          </h1>
          <p className="mt-2 text-muted-foreground">
            {filteredJobs.length} jobs found
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search jobs..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="lg:hidden"
              onClick={() => setShowMobileFilters(true)}
            >
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
              {activeFilterCount > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {activeFilterCount}
                </Badge>
              )}
            </Button>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="relevant">Most Relevant</SelectItem>
                <SelectItem value="salary-high">Salary: High to Low</SelectItem>
                <SelectItem value="salary-low">Salary: Low to High</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {activeFilterCount > 0 && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Active filters:
            </span>
            {filters.locations.map((location) => (
              <Badge key={location} variant="secondary" className="gap-1">
                {location}
                <button
                  onClick={() =>
                    setFilters({
                      ...filters,
                      locations: filters.locations.filter(
                        (l) => l !== location
                      ),
                    })
                  }
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
            {filters.jobTypes.map((type) => (
              <Badge key={type} variant="secondary" className="gap-1">
                {type}
                <button
                  onClick={() =>
                    setFilters({
                      ...filters,
                      jobTypes: filters.jobTypes.filter((t) => t !== type),
                    })
                  }
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
            {filters.workModes.map((mode) => (
              <Badge key={mode} variant="secondary" className="gap-1">
                {mode}
                <button
                  onClick={() =>
                    setFilters({
                      ...filters,
                      workModes: filters.workModes.filter((m) => m !== mode),
                    })
                  }
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        )}

        <div className="mt-8 flex gap-8">
          <aside className="hidden w-72 shrink-0 lg:block">
            <JobFilters filters={filters} onFilterChange={setFilters} />
          </aside>

          <div className="flex-1">
            {filteredJobs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16 text-center"
              >
                <Search className="h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  No jobs found
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Try adjusting your search or filters to find what you are
                  looking for.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setKeyword("");
                    setFilters({
                      locations: [],
                      experience: [],
                      jobTypes: [],
                      workModes: [],
                      salaryRange: [0, 50],
                    });
                  }}
                >
                  Clear all filters
                </Button>
              </motion.div>
            ) : (
              <div className="grid gap-6">
                {filteredJobs.map((job, index) => (
                  <JobCard key={job.id} job={job} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showMobileFilters && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
              onClick={() => setShowMobileFilters(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-y-0 left-0 z-50 w-80 overflow-y-auto bg-background p-4 shadow-xl lg:hidden"
            >
              <JobFilters
                filters={filters}
                onFilterChange={setFilters}
                onClose={() => setShowMobileFilters(false)}
                isMobile
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
