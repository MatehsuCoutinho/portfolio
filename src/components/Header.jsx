import { Moon } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-start justify-between mb-6">
      <div>
        <h1 className="font-semibold text-lg text-white">Matheus Coutinho</h1>
        <p className="text-zinc-400 text-sm">Software Engineer</p>
      </div>
      <nav className="flex items-center gap-6 text-sm text-zinc-400">
        <a href="#" className="hover:text-white transition-colors">/projects</a>
        <a href="#" className="hover:text-white transition-colors">/about</a>
        <Moon size={16} className="cursor-pointer hover:text-white transition-colors" />
      </nav>
    </header>
  );
}