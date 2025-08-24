"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

type Job = {
  title: string;
  link: string;
  category: string;
};

// ✅ Helper to normalize categories
function slugifyCategory(cat: string): string {
  return cat
    .toLowerCase()
    .replace(/\./g, "") // remove dots (I.T → it)
    .replace(/\s+/g, "-") // spaces → dashes
    .trim();
}

export default function CategoryJobsPage() {
  const params = useParams();
  const categoryParam = params?.category;

  // Ensure category is a clean string
  const category = Array.isArray(categoryParam)
    ? categoryParam[0]
    : categoryParam ?? "";

  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch(
          "https://api.sheety.co/6ed518bf953502dad67bbabac4d211b6/remoteJobs/sheet1"
        );
        const data = await res.json();
        setJobs(data.sheet1 || []); // ensure array fallback
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);

  // Format category nicely for display
  const formattedCategory =
    category.length > 0
      ? category.charAt(0).toUpperCase() + category.slice(1).replace("-", " ")
      : "";

  // ✅ Use slugify for matching
  const filteredJobs = jobs.filter((job) => {
    if (!job.category) return false;
    return slugifyCategory(job.category) === slugifyCategory(category);
  });

  return (
    <div className="max-w-3xl mx-auto space-y-8 p-6">
      {/* ✅ Breadcrumb Navigation */}
      <nav className="text-sm text-gray-600 mb-4">
        <Link href="/" className="hover:underline text-emerald-700">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/remote-jobs" className="hover:underline text-emerald-700">
          Remote Jobs
        </Link>{" "}
        / <span className="font-semibold">{formattedCategory}</span>
      </nav>

      <h1 className="text-3xl font-bold text-emerald-700">
        {formattedCategory} Jobs
      </h1>

      {loading ? (
        <p>Loading jobs...</p>
      ) : filteredJobs.length === 0 ? (
        <p>No jobs available in this category yet.</p>
      ) : (
        <ul className="space-y-4">
          {filteredJobs.map((job, i) => (
            <li
              key={i}
              className="flex justify-between items-center p-4 border rounded-xl shadow-sm hover:shadow-md transition bg-white"
            >
              <div>
                <h3 className="font-semibold text-lg text-emerald-700">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-500">{formattedCategory}</p>
              </div>
              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 font-medium hover:underline"
              >
                Apply Now →
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
