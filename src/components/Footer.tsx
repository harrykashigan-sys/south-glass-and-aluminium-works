import React from 'react';
import { MapPin, Phone, MessageSquare, Star, ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import { sound } from '../utils/soundEffects';

interface FooterProps {
  onNavigate: (tabId: string) => void;
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenReservation }) => {
  const handleNav = (tabId: string) => {
    sound.playTap();
    onNavigate(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800/80">
          {/* Col 1 & 2: Brand Lockup & Legacy */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-stone-900 border border-amber-500/40 flex items-center justify-center">
                <span className="font-serif text-base font-bold text-amber-300">SG</span>
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-white tracking-tight block">
                  South Glass &amp; Aluminium Works
                </span>
                <span className="text-[11px] uppercase tracking-wider text-amber-400 block -mt-0.5">
                  Residential Glazing &amp; Showcase Suites
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-sm">
              South Glass and Aluminium Works specializes in custom architectural glass and precision aluminium fabrication
              for residences across Nairobi—including frameless balcony glass, bathroom shower cubicles, acoustic soundproof
              windows, and living showcase residences on Muhoho Avenue &amp; Five Star Road.
            </p>

            <div className="flex items-center gap-3 text-xs text-amber-300">
              <div className="flex items-center gap-1 font-bold">
                <span>5.0</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <span className="text-stone-600">·</span>
              <span className="text-stone-400">3 Verified Google Reviews</span>
            </div>
          </div>

          {/* Col 3: Navigation Sitemap */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Residential Works
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNav('residential-works')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Balcony Glass Balustrades
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('residential-works')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Bathroom Shower Cubicles
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('residential-works')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Acoustic Soundproof Windows
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('residential-works')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Aluminium Sliding Patio Doors
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('suites')}
                  className="text-amber-400 font-semibold hover:underline cursor-pointer"
                >
                  View Showcase Residences
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: SEO Journal & Articles */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Nairobi Stay Guides
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNav('blogs')}
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                >
                  Luxury Airbnb Guide 2026
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('blogs')}
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                >
                  Architectural Glass Balconies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('blogs')}
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                >
                  Stays Near Wilson Airport &amp; JKIA
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('blogs')}
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                >
                  Serviced Apartments vs Airbnb
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('craft')}
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                >
                  Acoustic Double-Glazing
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Location & Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Location &amp; Inquiries
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2 text-stone-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                <span>Muhoho Avenue, Five Star Rd, Nairobi (MRGG+FR)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a
                  href="tel:0701770614"
                  onClick={() => sound.playPhoneBuzz()}
                  className="text-stone-300 hover:text-amber-300 font-mono"
                >
                  0701 770614
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/254701770614"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playPhoneBuzz()}
                  className="text-stone-300 hover:text-emerald-300 font-mono"
                >
                  WhatsApp Concierge
                </a>
              </div>
              <div className="pt-2 text-[11px] text-stone-500">
                Google Profile: Closed · Opens 9:00 AM Mon
                <span className="block text-amber-400/90 font-medium">Guest In-House Host 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-300 gap-4">
          <p>© {new Date().getFullYear()} South Glass Residences &amp; Aluminium Works. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-stone-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Solar &amp; Generator Power Guaranteed</span>
            </span>
            <a
              href="https://maps.google.com/?q=MRGG+FR+Nairobi"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-300 transition-colors flex items-center gap-1"
            >
              <span>Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
