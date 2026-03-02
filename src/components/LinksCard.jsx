import { ArrowUpRight } from "lucide-react";
import { LINKS } from "../data/constants";

export function LinksCard() {
  return (
    <div className="border border-zinc-800 rounded-xl overflow-hidden mb-4">
      {LINKS.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-5 py-4 border-b border-zinc-800 last:border-none hover:bg-zinc-800/50 transition-all group"
        >
          <div className="flex items-center gap-4">
            <link.icon size={18} className="text-zinc-400 group-hover:text-white transition-colors" />
            <span className="text-sm text-zinc-300 group-hover:text-white">{link.name}</span>
          </div>
          <ArrowUpRight 
            size={16} 
            className="text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" 
          />
        </a>
      ))}
    </div>
  );
}