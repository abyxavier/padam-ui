
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
            Padam
          </span>
        </div>
        <nav className="flex items-center gap-1 rounded-xl bg-white/5 p-1 border border-white/[0.06]">
          <button
            className={`px-5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200`}
          >
            🎬 Discover
          </button>

        </nav>
      </div>
    </header>
  );
}
