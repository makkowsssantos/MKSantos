import ProjectCard from "../components/projectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen w-full px-5 py-12 sm:px-8 md:px-10 lg:px-16"
    >
      <h1 className="mb-8 border-b border-slate-400 pb-3 text-2xl sm:text-3xl">
        Projects
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard />
      </div>
    </section>
  );
}