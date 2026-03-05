import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function AboutPage() {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center gap-4 mb-10">
                <Link
                    to="/"
                    className="p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-500 hover:text-white"
                >
                    <ChevronLeft size={20} />
                </Link>
                <h2 className="text-3xl font-bold text-white tracking-tight">About me</h2>
            </div>

            <div className="space-y-6 text-zinc-400 text-sm leading-relaxed max-w-none">
                <p>
                    I am a <span className="text-white font-medium">Full Stack Developer</span> currently pursuing a degree in
                    Computer Science at <span className="text-white">Facape</span> (expected graduation in 2027).
                    My journey is driven by a passion for building scalable and sustainable web solutions.
                </p>

                <p>
                    During my time at <span className="text-white font-medium">Compass UOL</span>, I worked as a Backend Developer
                    intern, focusing on microservices architecture and REST APIs using <span className="text-white">Node.js,
                        NestJS, and TypeScript</span>. I gained hands-on experience in database integration with
                    PostgreSQL and MongoDB, as well as implementing secure authentication flows with JWT.
                </p>

                <p>
                    I also contributed to <span className="text-white font-medium">Inova Tech Jr.</span>, where I was responsible for
                    maintaining and optimizing a <span className="text-white">legacy time-tracking system built in PHP</span>.
                    This role allowed me to improve internal workflows and documentation standards to enhance overall team efficiency.
                </p>

                <p>
                    Outside of my professional life, I’m a big fan of <span className="text-white">gaming</span> and <span className="text-white">watching series</span> to unwind.
                    I also have a strong interest in LEGO, as I enjoy the focus and creativity required to build complex structures piece by piece.
                </p>

                <div className="pt-6 border-t border-zinc-800 space-y-4">
                    <p>
                        Send me a DM on <a href="https://linkedin.com/in/matheuslcoutinho" target="_blank" rel="noreferrer" className="text-white border-b border-zinc-700 hover:border-white transition-colors">LinkedIn</a> or an email at <a href="mailto:matheuscoutinho.0420@gmail.com" className="text-white border-b border-zinc-700 hover:border-white transition-colors">matheuscoutinho.0420@gmail.com</a>.
                    </p>

                    <div className="text-xs text-zinc-500">
                        Best,<br />
                        Matheus
                    </div>
                </div>
            </div>
        </div>
    );
}