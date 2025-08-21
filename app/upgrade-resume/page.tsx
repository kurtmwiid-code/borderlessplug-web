export default function UpgradeResumePage() {
  return (
    <div className="space-y-8">
      {/* ✅ Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-4">
        <a href="/" className="hover:underline text-emerald-700">Home</a> /{" "}
        <span className="font-semibold">Upgrade Resume</span>
      </nav>

      <h1 className="text-3xl font-bold text-emerald-700">Upgrade Your Resume</h1>
      <p className="text-gray-700 leading-relaxed">
        A resume is often the first impression you make. Let’s make sure yours gets noticed. 
        We’ll help refine the structure, highlight your achievements, and format it for Applicant 
        Tracking Systems (ATS).
      </p>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-emerald-700">Our resume services include:</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Professional formatting and design</li>
          <li>Keyword optimization for ATS</li>
          <li>Tailoring resumes for specific roles</li>
          <li>Highlighting measurable achievements</li>
          <li>Cover letter drafting (optional)</li>
        </ul>
      </div>

      <a
  href="https://wa.me/+27844936238?text=Hi%20BorderlessPlug%2C%20I%27m%20interested%20in%20upgrading%20my%20resume."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-6 py-3 bg-emerald-700 text-white rounded-lg shadow hover:bg-emerald-800 transition"
>
  Upgrade My Resume →
</a>
    </div>
  );
}