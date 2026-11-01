import React from 'react';
import { Star, ExternalLink, MapPin, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export const ClientReviewsSection: React.FC = () => {
  const reviews = [
    {
      author: 'Saajid Suleiman',
      badge: 'Local Guide · 28 reviews · 7 photos',
      timeAgo: '7 months ago',
      rating: 5,
      reviewText:
        'Great experience! I hired them to install glass on my balcony and in the bathrooms at my new place, and they did an excellent job. The work is clean, professional, and the finishing is top quality. Very reliable and easy to work with. Highly recommended!',
    },
    {
      author: 'John Irungu',
      badge: 'Local Guide · 3 reviews · 8 photos',
      timeAgo: '5 months ago',
      rating: 5,
      reviewText:
        'Exceptional finishing on the architectural aluminium frames and panoramic glass walls. The precision in Muhoho Avenue is unmatched.',
    },
    {
      author: 'Yunus Admani',
      badge: 'Verified Client',
      timeAgo: '7 months ago',
      rating: 5,
      reviewText:
        'Top tier glasswork and finishing. Reliable team, prompt delivery, and immaculate aesthetic standard. Recommended without reservation.',
    },
  ];

  return (
    <section id="reviews-section" className="py-12 sm:py-20 bg-stone-950 relative border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Verified Google Business Profile & Customer Reviews */}
        <div className="glass-panel p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-stone-800 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 mb-8 border-b border-stone-800/80 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Google Business Profile Verified
                </span>
                <span className="text-stone-500">·</span>
                <span className="text-xs text-stone-400">Muhoho Avenue, Five Star Rd, Nairobi (MRGG+FR)</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                SOUTH GLASS &amp; ALUMINIUM WORKS
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-1">
                Glass Industry · Closed · Opens 9:00 AM Monday · Direct Line: 0701 770 614 / 0721 810 295
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-stone-900 border border-amber-500/30">
                <div className="text-3xl font-bold font-serif text-amber-300 tabular-nums">5.0</div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-400">3 Verified Google Reviews</span>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=MRGG+FR+Nairobi"
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playTap()}
                className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-xs font-semibold text-stone-200 border border-stone-700 transition-colors"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev) => (
              <div
                key={rev.author}
                className="p-5 sm:p-6 rounded-xl bg-stone-950/70 border border-stone-800/90 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-stone-500 font-mono">{rev.timeAgo}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed italic mb-4">
                    &ldquo;{rev.reviewText}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-900">
                  <div className="font-semibold text-xs text-white">{rev.author}</div>
                  <div className="text-[10px] text-amber-400/90">{rev.badge}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
