import ExperienceCard from "../components/experienceCard";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen w-full px-5 py-12 sm:px-8 md:px-10 lg:px-16"
    >
      <h1 className="border-b border-slate-400 pb-3 text-2xl sm:text-3xl">
        Experience
      </h1>

      {/* Internship */}
      <div className="flex justify-center py-8">
        <h2 className="text-2xl font-medium">Internship</h2>
      </div>

      {/* Company Information */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold">
          Longares Global Operations Inc.
        </h3>

        <div className="mt-2 flex flex-col gap-1 text-sm text-slate-500 sm:flex-row sm:gap-4">
          <p>09/2025 - 01/2026</p>
          <p>Las Piñas</p>
        </div>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ExperienceCard
          title="002"
          subtitle="LOGO REMIT Web UI"
          value="HTML + CSS + Tailwind CSS"
        />

        <ExperienceCard
          title="003"
          subtitle="PIVOT Apparel Mobile App UI"
          value="HTML + CSS + Tailwind CSS + React Native"
        />
      </div>
    </section>
  );
}