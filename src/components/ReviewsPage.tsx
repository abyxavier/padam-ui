import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

// ─── Mock Review Data ────────────────────────────────────────────────────────
const REVIEWS = [
  {
    id: 1,
    movie: 'Dune: Part Two',
    year: 2024,
    rating: 9.2,
    genre: ['Sci-Fi', 'Epic'],
    coverGradient: 'from-amber-900/50 via-orange-800/30 to-transparent',
    emoji: '🏜️',
    excerpt: 'Denis Villeneuve delivers a cinematic masterpiece that transcends the science fiction genre. The scale is breathtaking, the performances career-defining.',
    author: 'Arjun K.',
    authorRole: 'Senior Critic',
    readTime: '6 min read',
    date: 'Mar 2024',
  },
  {
    id: 2,
    movie: 'Poor Things',
    year: 2023,
    rating: 8.8,
    genre: ['Fantasy', 'Drama'],
    coverGradient: 'from-emerald-900/50 via-teal-800/30 to-transparent',
    emoji: '🔬',
    excerpt: 'Yorgos Lanthimos constructs a whimsical, disturbing and utterly unique Victorian fairy tale. Emma Stone is nothing short of otherworldly in a role that demands everything.',
    author: 'Priya S.',
    authorRole: 'Film Editor',
    readTime: '8 min read',
    date: 'Jan 2024',
  },
  {
    id: 3,
    movie: 'Oppenheimer',
    year: 2023,
    rating: 9.0,
    genre: ['Biopic', 'Thriller'],
    coverGradient: 'from-violet-900/50 via-purple-800/30 to-transparent',
    emoji: '☢️',
    excerpt: 'Christopher Nolan\'s most ambitious and personal film yet. A three-hour cinematic implosion that leaves you breathless and deeply unsettled about the nature of human ambition.',
    author: 'Rahul M.',
    authorRole: 'Lead Critic',
    readTime: '10 min read',
    date: 'Jul 2023',
  },
  {
    id: 4,
    movie: 'Past Lives',
    year: 2023,
    rating: 8.6,
    genre: ['Romance', 'Drama'],
    coverGradient: 'from-rose-900/50 via-pink-800/30 to-transparent',
    emoji: '🌃',
    excerpt: 'An achingly beautiful meditation on roads not taken. Celine Song\'s debut feature is a gut-punch of quiet devastation and the lingering melancholy of lives half-lived.',
    author: 'Meera V.',
    authorRole: 'Critic',
    readTime: '5 min read',
    date: 'Jun 2023',
  },
  {
    id: 5,
    movie: 'The Zone of Interest',
    year: 2023,
    rating: 8.9,
    genre: ['War', 'Drama'],
    coverGradient: 'from-slate-800/50 via-zinc-700/30 to-transparent',
    emoji: '🝡',
    excerpt: 'Jonathan Glazer\'s Holocaust film is unlike anything committed to cinema before. Its deliberate, almost antiseptic quietness makes it one of the most disturbing films ever made.',
    author: 'Arjun K.',
    authorRole: 'Senior Critic',
    readTime: '9 min read',
    date: 'Dec 2023',
  },
  {
    id: 6,
    movie: 'Killers of the Flower Moon',
    year: 2023,
    rating: 8.7,
    genre: ['Western', 'Crime'],
    coverGradient: 'from-yellow-900/50 via-amber-800/30 to-transparent',
    emoji: '🌙',
    excerpt: 'Scorsese\'s sweeping three-and-a-half-hour epic is a devastating indictment of American greed told through intimate human tragedy. DiCaprio and Gladstone are unforgettable.',
    author: 'Rahul M.',
    authorRole: 'Lead Critic',
    readTime: '11 min read',
    date: 'Oct 2023',
  },
];

function StarRating({ rating }: { rating: number }) {
  const stars = Math.round(rating / 2);
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <span key={s} className={s <= stars ? 'text-amber-400' : 'text-white/15'}>★</span>
        ))}
      </div>
      <span className="text-sm font-semibold text-amber-400">{rating}</span>
      <span className="text-xs text-muted-foreground">/ 10</span>
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <div className="flex flex-col items-center w-full max-w-7xl mx-auto px-6 py-16">

      {/* ── Header ──────────────────────────────────────────── */}
      <div className="text-center mb-14 max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/5 px-4 py-1.5 text-sm text-pink-400 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-pink-400 animate-pulse" />
          Handpicked by our team
        </div>
        <h1 className="text-5xl font-bold tracking-tight leading-[1.15] mb-4">
          Latest{' '}
          <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 bg-clip-text text-transparent">
            Movie Reviews
          </span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Our team of critics dissect the most talked-about films of the season. Raw, honest, no spoilers.
        </p>
      </div>

      {/* ── Stats Bar ───────────────────────────────────────── */}
      <div className="flex items-center gap-8 mb-12 px-8 py-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] backdrop-blur">
        {[
          { label: 'Reviews Published', value: '48' },
          { label: 'Films Covered', value: '2024 Season' },
          { label: 'Team Critics', value: '4' },
        ].map((stat, i) => (
          <div key={i} className="flex items-center gap-8">
            {i > 0 && <Separator orientation="vertical" className="h-10 bg-white/10" />}
            <div className="text-center">
              <div className="text-xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Featured Review (First Card Big) ────────────────── */}
      <div className="w-full mb-8">
        {REVIEWS.slice(0, 1).map((r) => (
          <Card key={r.id} className="group relative overflow-hidden border-white/[0.07] bg-white/[0.02] hover:border-pink-500/30 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-black/50">
            <div className={`absolute inset-0 bg-gradient-to-r ${r.coverGradient} opacity-60 group-hover:opacity-80 transition-opacity`} />
            <CardContent className="relative p-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="text-7xl">{r.emoji}</div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge className="bg-pink-500/20 text-pink-400 border-pink-500/30 hover:bg-pink-500/30">Featured</Badge>
                  {r.genre.map(g => (
                    <Badge key={g} variant="outline" className="border-white/10 text-muted-foreground bg-white/5">
                      {g}
                    </Badge>
                  ))}
                  <span className="text-muted-foreground text-xs ml-auto">{r.date}</span>
                </div>
                <h2 className="text-3xl font-bold mb-2">{r.movie} <span className="text-muted-foreground font-normal text-xl">({r.year})</span></h2>
                <StarRating rating={r.rating} />
                <p className="mt-4 text-muted-foreground leading-relaxed text-base max-w-2xl">{r.excerpt}</p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 border border-white/10">
                      <AvatarFallback className="bg-pink-500/20 text-pink-400 text-sm font-bold">
                        {r.author.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{r.author}</p>
                      <p className="text-xs text-muted-foreground">{r.authorRole}</p>
                    </div>
                  </div>
                  <button className="text-sm text-pink-400 font-medium hover:text-pink-300 transition-colors">
                    Read Full Review →
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ── Reviews Grid ────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {REVIEWS.slice(1).map((r) => (
          <Card
            key={r.id}
            className="group relative overflow-hidden border-white/[0.07] bg-white/[0.02] hover:border-pink-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 cursor-pointer"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${r.coverGradient} opacity-40 group-hover:opacity-60 transition-opacity`} />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <CardContent className="relative p-6">
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{r.emoji}</span>
                <span className="text-amber-400 font-bold text-lg">{r.rating}</span>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {r.genre.map(g => (
                  <Badge key={g} variant="outline" className="border-white/10 text-muted-foreground bg-white/5 text-xs">
                    {g}
                  </Badge>
                ))}
              </div>

              <h3 className="font-bold text-lg mb-1">{r.movie}</h3>
              <p className="text-xs text-muted-foreground mb-3">{r.year}</p>
              <StarRating rating={r.rating} />
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed line-clamp-3">{r.excerpt}</p>

              <Separator className="my-4 bg-white/[0.06]" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-7 w-7 border border-white/10">
                    <AvatarFallback className="bg-white/5 text-foreground text-xs font-bold">
                      {r.author.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-xs font-medium">{r.author}</p>
                    <p className="text-[10px] text-muted-foreground">{r.readTime}</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">{r.date}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
