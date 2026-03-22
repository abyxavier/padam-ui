import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

// ─── Mock Data ──────────────────────────────────────────────────────────────
const MOCK_RECOMMENDATIONS = [
  { movie: 'Dune: Part Two', reason: 'Continues the epic sci-fi saga with stunning visuals and world-building you loved in the original.' },
  { movie: 'Arrival', reason: 'A masterful cerebral sci-fi exploring language, time, and humanity — perfect if you appreciate Dune\'s complexity.' },
  { movie: 'Blade Runner 2049', reason: 'Breathtaking cinematography paired with a philosophical narrative on identity and existence.' },
  { movie: 'Interstellar', reason: 'A grand space opera grounded in real emotion, matching the epic scale and wonder of Dune.' },
  { movie: 'Children of Men', reason: 'Gritty, prophetic sci-fi with outstanding world-building and relentless tension.' },
  { movie: 'The Matrix', reason: 'Revolutionary sci-fi that redefined the genre with deep philosophical undertones.' },
  { movie: 'Mad Max: Fury Road', reason: 'Non-stop kinetic energy in a beautifully crafted desert dystopia that mirrors Dune\'s world.' },
];

const GENRES = ['All', 'Sci-Fi', 'Drama', 'Action', 'Thriller', 'Horror', 'Comedy'];

export default function DiscoverPage() {
  const [query, setQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [hasSearched, setHasSearched] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setIsSearching(true);
    // Simulate API delay for now
    setTimeout(() => {
      setHasSearched(true);
      setIsSearching(false);
    }, 900);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-7xl mx-auto px-6 py-16">

      {/* ── Hero ────────────────────────────────────────────── */}
      <div className="text-center mb-14 max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-1.5 text-sm text-violet-400 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
          Powered by AI recommendations
        </div>
        <h1 className="text-5xl font-bold tracking-tight leading-[1.15] mb-4">
          Find your next{' '}
          <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            favourite film
          </span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Type a movie you love and we'll surface 5–10 handpicked recommendations tailored to your taste.
        </p>
      </div>

      {/* ── Search Bar ──────────────────────────────────────── */}
      <form onSubmit={handleSearch} className="flex gap-3 w-full max-w-2xl mb-8">
        <div className="relative flex-1">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-lg">🎬</span>
          <Input
            className="h-14 pl-11 pr-4 text-base rounded-xl border-white/10 bg-white/5 focus:border-violet-500/50 focus:ring-violet-500/20 placeholder:text-muted-foreground"
            placeholder="e.g. Dune, Inception, Parasite..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={isSearching}
          />
        </div>
        <Button
          type="submit"
          disabled={!query.trim() || isSearching}
          className="h-14 px-8 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-base shadow-lg shadow-violet-500/20 transition-all duration-200 hover:shadow-violet-500/40 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSearching ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              Scanning...
            </span>
          ) : (
            'Suggest →'
          )}
        </Button>
      </form>

      {/* ── Genre Filter ─────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2 mb-12 justify-center">
        {GENRES.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
              selectedGenre === genre
                ? 'bg-violet-600 border-violet-600 text-white'
                : 'border-white/10 text-muted-foreground hover:text-foreground hover:border-white/25 bg-white/[0.03]'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* ── Results ──────────────────────────────────────────── */}
      {!hasSearched ? (
        // ─ Empty State ─
        <div className="flex flex-col items-center gap-4 mt-8 text-center">
          <div className="w-24 h-24 rounded-full bg-white/[0.03] border border-white/[0.07] flex items-center justify-center text-4xl">
            🎥
          </div>
          <p className="text-muted-foreground text-sm max-w-xs">
            Your recommendations will appear here. Start by typing a movie name above.
          </p>
        </div>
      ) : (
        // ─ Movie Cards Grid ─
        <div className="w-full">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">
              Showing <span className="text-foreground font-medium">{MOCK_RECOMMENDATIONS.length} results</span> for "{query}"
            </p>
            <Badge variant="outline" className="border-violet-500/20 text-violet-400 bg-violet-500/5">
              AI Picks
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MOCK_RECOMMENDATIONS.map((rec, i) => (
              <Card
                key={i}
                className="group relative overflow-hidden border-white/[0.07] bg-white/[0.02] backdrop-blur hover:border-violet-500/30 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 cursor-pointer"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-2xl flex-shrink-0">🎞️</span>
                      <h3 className="font-semibold text-base truncate">{rec.movie}</h3>
                    </div>
                    <span className="flex-shrink-0 text-xs font-mono text-muted-foreground bg-white/5 rounded-md px-2 py-1 border border-white/[0.06]">
                      #{i + 1}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{rec.reason}</p>
                  <button className="mt-4 w-full py-2 rounded-lg text-xs font-medium text-violet-400 border border-violet-500/20 bg-violet-500/5 hover:bg-violet-500/10 transition-colors duration-200">
                    + Add to Watchlist
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
