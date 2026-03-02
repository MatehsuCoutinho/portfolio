export function OnlineStatus() {
  return (
    <div className="flex items-center gap-2 border border-emerald-900 bg-emerald-950/30 px-3 py-1 rounded-full w-fit mt-6">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span className="text-emerald-300 text-xs font-medium tracking-wide">
        Online
      </span>
    </div>
  );
}