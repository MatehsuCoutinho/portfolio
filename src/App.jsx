import {
  Moon,
  Linkedin,
  Github,
  ArrowUpRight,
} from "lucide-react";

const links = [
  { name: "LinkedIn", icon: Linkedin },
  { name: "GitHub", icon: Github },
];

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sans">
      <div className="max-w-150 mx-auto px-6 py-16">
        
        {/* HEADER */}
        <header className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-white font-semibold text-lg">
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
            <Moon
              size={16}
              className="cursor-pointer hover:text-white transition-colors"
            />
          </div>
        </header>

        {/* BIO */}
        <p className="text-zinc-400 leading-relaxed mb-12 text-sm">
          Full Stack Engineer with a strong background in developing robust web solutions. Expert in the Node/React ecosystem, I focus on building sustainable architectures, secure API integrations (JWT), and high-performance SQL/NoSQL databases within agile, cloud-based environments.
        </p>

        {/* LINKS CARD */}
        <div className="border border-zinc-800 rounded-lg overflow-hidden mb-12">
          {links.map((link, index) => {
            const Icon = link.icon;

            return (
              <a
                key={index}
                href="#"
                className="flex items-center justify-between px-5 py-4 border-b border-zinc-800 last:border-none hover:bg-zinc-900 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Icon size={18} className="text-zinc-400" />
                  <span className="text-white text-sm">
                    {link.name}
                  </span>
                </div>

                <ArrowUpRight
                  size={16}
                  className="text-zinc-500"
                />
              </a>
            );
          })}
        </div>

      </div>
    </div>
  );
}