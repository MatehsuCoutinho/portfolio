import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Bio } from "./components/Bio";
import { LinksCard } from "./components/LinksCard";
import { TechGrid } from "./components/TechGrid";
import { OnlineStatus } from "./components/OnlineStatus";
import { Footer } from "./components/Footer";
import { ProjectsPage } from "./pages/Projects";
import { AboutPage } from "./pages/About";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-900 text-white font-sans selection:bg-zinc-700">
        <div className="max-w-lg mx-auto px-6 py-10">
          <Header />

          <Routes>
            {/* Página Principal (/) */}
            <Route path="/" element={
              <>
                <Bio />
                <main className="space-y-4">
                  <LinksCard />
                  <TechGrid />
                </main>
                <OnlineStatus />
              </>
            } />

            {/* Outras Páginas */}
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
}