export default function BuildLinkedInPage() {
  return (
    <div className="space-y-8">
      {/* ✅ Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-4">
        <a href="/" className="hover:underline text-emerald-700">Home</a> /{" "}
        <span className="font-semibold">Build LinkedIn</span>
      </nav>

      <h1 className="text-3xl font-bold text-emerald-700">Build / Rebuild Your LinkedIn Profile</h1>
      <p className="text-gray-700 leading-relaxed">
        Your LinkedIn profile is your digital business card. A strong profile helps recruiters and employers
        discover you faster. With BorderlessPlug, we’ll optimize your profile headline, summary, experience,
        and skills to attract more opportunities.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-emerald-700">What we help with:</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Crafting a strong professional headline</li>
          <li>Writing a compelling “About” section</li>
          <li>Highlighting key experiences & skills</li>
          <li>Adding certifications & achievements</li>
        </ul>
      </div>

      <a
        href="https://wa.me/+27844936238?text=Hi%20BorderlessPlug%2C%20I%27m%20interested%20in%20rebuilding%20my%20LinkedIn%20profile"
        
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-emerald-700 text-white rounded-lg shadow hover:bg-emerald-800 transition"
      >
        Chat with us on WhatsApp →
      </a>
    </div>
  );
}