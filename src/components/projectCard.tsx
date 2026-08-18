export default function ProjectCard() {
  return (
    <div className="w-full max-w-md border border-slate-200 p-10 shadow-xs">
      <h1 className="mb-4 text-6xl">001</h1>

      <h2 className="mb-2 text-2xl text-slate-950 hover:text-slate-500">Jesus Our Provider Website</h2>

      <p className="mb-5 text-slate-500">
        Status: <strong className="text-green-600">In Development</strong>
      </p>

      <ul className="flex flex-wrap gap-2">
        <li className="border border-slate-300 px-3 py-1 text-sm text-slate-600">
          React
        </li>
        <li className="border border-slate-300 px-3 py-1 text-sm text-slate-600">
          TypeScript
        </li>
        <li className="border border-slate-300 px-3 py-1 text-sm text-slate-600">
          Tailwind CSS
        </li>
        <li className="border border-slate-300 px-3 py-1 text-sm text-slate-600">
          Node.js
        </li>
        <li className="border border-slate-300 px-3 py-1 text-sm text-slate-600">
          Express.js
        </li>
        <li className="border border-slate-300 px-3 py-1 text-sm text-slate-600">
          MySQL
        </li>
          <li className="border border-slate-300 px-3 py-1 text-sm text-slate-600">
          Git · Postman
        </li>
      </ul>
      <p className="text-xs text-slate-400 mt-5">The system allows church members to submit prayer requests while providing administrators with an organized dashboard to review and manage submissions.</p>
    </div>
  );
}