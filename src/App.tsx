import { useState } from 'react';
import Navbar from '@/components/Navbar';
import DiscoverPage from '@/components/DiscoverPage';
import ReviewsPage from '@/components/ReviewsPage';

type Tab = 'discover' | 'reviews';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('discover');

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      {/* Ambient background blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-pink-600/10 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-indigo-600/5 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1">
          {activeTab === 'discover' ? <DiscoverPage /> : <ReviewsPage />}
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 py-6 text-center text-xs text-muted-foreground">
          © 2026 Padam. Made with 🎬 for film lovers.
        </footer>
      </div>
    </div>
  );
}

export default App;
