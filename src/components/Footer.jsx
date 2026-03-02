export function Footer() {
  return (
    <footer className="mt-3">
      <div className="flex justify-center gap-4 text-zinc-500 text-[11px] mb-4">
        <a href="https://github.com/MatehsuCoutinho/portfolio" target="_blank" className="hover:text-zinc-300 transition-colors">Code</a>
        <a href="https://www.linkedin.com/in/matheuslcoutinho/" target="_blank" className="hover:text-zinc-300 transition-colors">@MatheusLCoutinho</a>
      </div>
      <div className="text-center">
        <p className="text-zinc-500 text-xs italic tracking-wide">
          Not anyone like you.
        </p>
      </div>
    </footer>
  );
}