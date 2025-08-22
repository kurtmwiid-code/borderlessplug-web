import Link from "next/link";

const categories = [
  { name: "Customer Service", slug: "customer-service" },
  { name: "Sales", slug: "sales" },
  { name: "Virtual Assistant", slug: "virtual-assistant" },
  { name: "HR", slug: "hr" },
  { name: "Operations", slug: "operations" },
  { name: "I.T", slug: "I.T." },
];

export default function RemoteJobsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-emerald-700">Remote Job Categories</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/remote-jobs/${cat.slug}`}
            className="p-6 bg-white shadow rounded-lg border hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-emerald-700">{cat.name}</h2>
            <p className="text-sm text-gray-500">Explore {cat.name} roles →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
