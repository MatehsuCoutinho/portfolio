import { ProjectCard } from "../components/ProjectCard";
import { PROJECTS } from "../data/projects";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function ProjectsPage() {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 mt-8">
            {/* Cabeçalho da Página */}
            <div className="flex items-center gap-4 mb-10">
                <Link
                    to="/"
                    className="p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-500 hover:text-white"
                    title="Voltar para início"
                >
                    <ChevronLeft size={20} />
                </Link>
                <div>
                    <h2 className="text-2xl font-semibold text-white tracking-tight">Projects</h2>
                    <p className="text-zinc-500 text-xs">A selection of my recent works</p>
                </div>
            </div>

            {/* Listagem de Projetos */}
            <div className="flex flex-col gap-10 mb-20">
                {PROJECTS.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}