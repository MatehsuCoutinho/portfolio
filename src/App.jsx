import { Header } from "./components/Header";
import { LinksCard } from "./components/LinksCard";
import { TechGrid } from "./components/TechGrid";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sans selection:bg-zinc-700">
      <div className="max-w-lg mx-auto px-6 py-16">
        
        <Header />

        <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
          Full Stack Engineer focusing on building sustainable architectures, secure API integrations,
          and high-performance databases.
        </p>

        <LinksCard />

        <TechGrid />

        <footer className="mt-6 text-center">
          <p className="text-zinc-500 text-xs italic tracking-wide">
             Not anyone like you.
          </p>
        </footer>

      </div>
    </div>
  );
}