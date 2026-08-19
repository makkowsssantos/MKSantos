import AiCard from "../components/aiCard";

export default function AiWorkflow() {
  return (
    <section
      id="aiWorkflow"
      className="min-h-screen w-full px-5 py-12 sm:px-8 md:px-10 lg:px-16"
    >
      <h1 className="mb-8 border-b border-slate-400 pb-3 text-2xl sm:text-3xl">
        AI Workflow
      </h1>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AiCard
          title="01"
          subtitle="AI as Coding Partner"
          value="Problem → Think → Ask AI → Review → Implement → Test"
          className="border-4 border-double border-slate-400"
        />

        <AiCard
          title="02"
          subtitle="AI-assisted Debugging"
          value="Bug → AI Analysis → My Decision → Fix → Result"
          className="border-4 border-double border-slate-400"
        />

        <AiCard
          title="03"
          subtitle="AI as Learning Tool"
          value="I use AI to accelerate my learning, not replace it."
          className="border-4 border-double border-slate-400"
        />
      </div>

      <div className="mt-6 w-full rounded-lg bg-slate-200 dark:bg-slate-900 dark:text-white p-4 text-left opacity-75 sm:w-fit">
        <p className="text-sm sm:text-base">
          AI doesn't replace my development process. It strengthens it.
        </p>
      </div>
    </section>
  );
}