import EducationCard from "../components/educationCard";

export default function Education() {
  return (
    <section
      id="education"
      className="flex min-h-screen w-full flex-col gap-3 px-5 py-12 sm:px-8 md:px-10 lg:px-16"
    >
      <h1 className="mb-8 border-b border-slate-400 pb-3 text-2xl sm:text-3xl">
        Education
      </h1>

      <EducationCard
        title="High School"
        subtitle="Las Piñas National High School (Gatchalian Annex)"
        value="4 years"
      />

      <EducationCard
        title="Senior High School (ABM)"
        subtitle="Olivarez College Parañaque"
        value="2 years"
      />

      <EducationCard
        title="Bachelor of Science in Information Technology"
        subtitle="Olivarez College Parañaque"
        value="4 years"
      />

      <h2 className="mt-8 border-b border-slate-400 pb-3 text-2xl sm:text-3xl">
        Achievements
      </h2>

      <EducationCard
        title="Recognized Dean's Lister"
        subtitle="For the year 2025"
        value={null}
      />
    </section>
  );
}