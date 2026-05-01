import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-primary/10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
        <div className="relative py-16 px-6 md:py-24 md:px-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Discover Your Perfect Aesthetic
          </h1>
          <p className="text-lg md:text-xl text-base-content/80 mb-8 max-w-2xl mx-auto">
            Premium tiles for every space and style. Transform your home with our curated collection.
          </p>
          <Link href="/all-tiles" className="btn btn-primary btn-lg shadow-lg">
            Browse Now →
          </Link>
        </div>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden bg-primary/10 rounded-xl py-3 border border-primary/20">
        <div className="whitespace-nowrap animate-marquee flex gap-8 items-center">
          {[...Array(2)].flatMap(() => [
            "✨ New Arrivals: Moroccan Collection",
            "🔥 Weekly Feature: Modern Geometric Patterns",
            "🎨 Join 10,000+ Designers",
            "💎 Premium Quality • Sustainable Materials"
          ]).map((item, idx) => (
            <span key={idx} className="text-sm md:text-base font-medium text-primary flex items-center gap-2">
              {item}
              <span className="text-primary/40">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <section className="py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-2">Featured Collections</h2>
          <p className="text-base-content/70">Handpicked tiles loved by designers worldwide</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1,2,3,4].map((i) => (
            <div key={i} className="card bg-base-100 shadow-lg border border-base-200">
              <figure className="px-4 pt-4">
                <div className="aspect-square rounded-xl bg-base-200 flex items-center justify-center">
                  <span className="text-4xl">🧱</span>
                </div>
              </figure>
              <div className="card-body p-4">
                <h3 className="card-title text-lg">Tile Sample {i}</h3>
                <p className="text-sm text-base-content/70">Premium quality tile description</p>
                <div className="card-actions justify-end mt-3">
                  <Link href="/all-tiles" className="btn btn-primary btn-sm w-full">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}