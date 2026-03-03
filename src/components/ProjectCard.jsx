import { Globe, Code2 } from "lucide-react";

export function ProjectCard({ project }) {
    return (
        <div className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/20">
            {/* Header do Card */}
            <div className="px-5 py-4 border-b border-zinc-800 flex items-center justify-between">
                <h3 className="font-medium text-white">{project.title}</h3>
                <div className="flex gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full border border-zinc-700 text-zinc-400 bg-zinc-800/50">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Descrição */}
            <div className="px-5 py-4 text-sm text-zinc-400 leading-relaxed">
                {project.description}
            </div>

            {/* Preview/Imagem */}
            <div className="aspect-video bg-black flex flex-col items-center justify-center border-y border-zinc-800 group relative overflow-hidden">
                <span className="text-zinc-700 font-mono text-4xl font-bold tracking-tighter transition-transform group-hover:scale-110 duration-500">
                    {project.title}
                </span>
            </div>

            {/* Botões de Ação na Base */}
            <div className="grid grid-cols-2">
                <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-3 text-xs text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all border-r border-zinc-800"
                >
                    <Globe size={14} /> Visit website
                </a>
                <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-3 text-xs text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all"
                >
                    <Code2 size={14} /> View code
                </a>
            </div>
        </div>
    );
}