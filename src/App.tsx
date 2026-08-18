import Sidebar from "./components/sidebar";
import Hero from "./sections/hero";
import Stack from "./sections/stack";
import Projects from "./sections/projects";
import Experience from "./sections/experience";
import Education from "./sections/education";
import AiWorkflow from "./sections/aiWorkflow";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-mono text-slate-950">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <Sidebar />

        <main className="min-w-0 flex-1">
          <Hero />
          <Projects />
          <Stack />
          <Experience />
          <Education />
          <AiWorkflow />
        </main>
      </div>
    </div>
  );
}