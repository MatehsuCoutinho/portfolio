import { Header } from "./components/Header";
import { Bio } from "./components/Bio";
import { LinksCard } from "./components/LinksCard";
import { TechGrid } from "./components/TechGrid";
import { OnlineStatus } from "./components/OnlineStatus";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sans selection:bg-zinc-700">
      <div className="max-w-lg mx-auto px-6 py-10">
        <Header />
        <Bio />

        <main className="space-y-4">
          <LinksCard />
          <TechGrid />
        </main>

        <OnlineStatus />
        <Footer />
      </div>
    </div>
  );
}