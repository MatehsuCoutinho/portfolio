import { Link } from "react-router-dom";
import { Moon } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between mb-4">
      {/* Lado Esquerdo: Identificação */}
      <div className="space-y-0.5">
        <h1 className="font-semibold text-[17px] text-white tracking-tight">
          Matheus Coutinho
        </h1>
        <p className="text-zinc-500 text-sm font-medium">
          Software Engineer
        </p>
      </div>

      {/* Lado Direito: Navegação */}
      <nav className="flex items-center gap-5">
        <div className="flex items-center gap-4 text-[13px] text-zinc-400 border-r border-zinc-800 pr-5 mr-1">
            <Link to="/projects" className="hover:text-white transition-all">/projects</Link>
            <Link to="/about" className="hover:text-white transition-all">/about</Link>
        </div>
        
        <button 
          aria-label="Toggle Theme"
          className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
        >
          <Moon size={15} />
        </button>
      </nav>
    </header>
  );
}