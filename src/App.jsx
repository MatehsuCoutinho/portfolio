import { Moon } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sans">
      <div className="max-w-2xl mx-auto px-6 py-16">

        {/* HEADER */}
        <header className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-zinc-300 font-semibold text-md">
              Matheus Coutinho
            </h1>
            <p className="text-zinc-400 text-sm">
              Software Engineer
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <a href="#" className="hover:text-white transition-colors">
              /projects
            </a>
            <a href="#" className="hover:text-white transition-colors">
              /about
            </a>
            <Moon size={16} className="cursor-pointer hover:text-white transition-colors" />
          </div>
        </header>

        {/* BIO */}
        <p className="text-zinc-400 leading-relaxed mb-12 text-xs">
          Full Stack Engineer with a strong background in developing robust web solutions. Expert in the Node/React ecosystem, I focus on building sustainable architectures, secure API integrations (JWT), and high-performance SQL/NoSQL databases within agile, cloud-based environments.
        </p>

      </div>
    </div>
  );
}