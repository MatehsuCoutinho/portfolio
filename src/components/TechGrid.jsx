import { TECHNOLOGIES } from "../data/constants";

export function TechGrid() {
  return (
    <div className="border border-zinc-800 rounded-xl p-6 bg-zinc-900/30">
      <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">Tech Stack</h2>
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
        {TECHNOLOGIES.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center gap-2 group"
            title={tech.name}
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800/50 border border-zinc-700 group-hover:border-zinc-500 transition-all">
              <img
                src={`https://cdn.simpleicons.org/${tech.name.toLowerCase().replace('.', 'dot')}/A1A1AA`}
                alt={tech.name}
                className="w-6 h-6 group-hover:filter-none group-hover:brightness-150 transition-all"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}