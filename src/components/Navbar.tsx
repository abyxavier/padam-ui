type Tab = 'discover' | 'reviews';

interface NavbarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export default function Navbar({ activeTab, onTabChange }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
            Padam
          </span>
          <span className="rounded-full bg-violet-500/10 px-2 py-0.5 text-xs font-medium text-violet-400 border border-violet-500/20">
            beta
          </span>
        </div>

        {/* Nav Tabs */}
        <nav className="flex items-center gap-1 rounded-xl bg-white/5 p-1 border border-white/[0.06]">
          <button
            onClick={() => onTabChange('discover')}
            className={`px-5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === 'discover'
                ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/20'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            🎬 Discover
          </button>
          <button
            onClick={() => onTabChange('reviews')}
            className={`px-5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === 'reviews'
                ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/20'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            ✍️ Reviews
          </button>
        </nav>
      </div>
    </header>
  );
}
