import StackCard from "../components/stackCard";

export default function Stack() {
  return (
    <section
      id="stack"
      className="min-h-screen w-full px-5 py-12 sm:px-8 md:px-10 lg:px-16"
    >
      <h1 className="mb-8 border-b border-slate-400 pb-3 text-2xl sm:text-3xl">
        Tech Stack
      </h1>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {/* Front End */}
        <div className="flex flex-col items-center justify-start rounded-lg border border-dashed border-slate-400 p-6 ">
          <h2 className="mb-4 text-lg font-bold dark:text-slate-500">Front End</h2>

          <StackCard title="React" subtitle="" value="" />
          <StackCard title="TypeScript" subtitle="" value="" />
          <StackCard title="Tailwind CSS" subtitle="" value="" />
        </div>

        {/* Back End */}
        <div className="flex flex-col items-center justify-start rounded-lg border border-dashed border-slate-400 p-6">
          <h2 className="mb-4 text-lg font-bold dark:text-slate-500">Back End</h2>

          <StackCard title="Node.js" subtitle="" value="" />
          <StackCard title="Express.js" subtitle="" value="" />
        </div>

        {/* Database */}
        <div className="flex flex-col items-center justify-start rounded-lg border border-dashed border-slate-400 p-6">
          <h2 className="mb-4 text-lg font-bold dark:text-slate-500">Database</h2>

          <StackCard title="MySQL" subtitle="" value="" />
        </div>

        {/* Version Control */}
        <div className="flex flex-col items-center justify-start rounded-lg border border-dashed border-slate-400 p-6">
          <h2 className="mb-4 text-lg font-bold dark:text-slate-500">Version Control</h2>

          <StackCard title="Git" subtitle="" value="" />
        </div>

        {/* Development Tools */}
        <div className="flex flex-col items-center justify-start rounded-lg border border-dashed border-slate-400 p-6">
          <h2 className="mb-4 text-center text-lg font-bold dark:text-slate-500">
            Development Tools
          </h2>

          <StackCard title="Postman" subtitle="" value="" />
          <StackCard title="Visual Studio Code" subtitle="" value="" />
        </div>

      </div>
    </section>
  );
}