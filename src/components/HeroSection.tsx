import React, { useState, useEffect } from 'react';
import { Calendar, Users, Home, Sparkles, Star, ShieldCheck, ChevronRight, Play, Pause, MapPin } from 'lucide-react';
import { sound } from '../utils/soundEffects';

interface HeroSectionProps {
  onOpenReservationWithDetails: (details: {
    checkIn: string;
    checkOut: string;
    suiteType: string;
    guests: number;
  }) => void;
  onExploreSuites: () => void;
}

const HERO_SLIDES = [
  {
    image: '/images/balcony_balustrades.jpg',
    tag: 'Residential Balcony Glass',
    title: 'South Glass and Aluminium Works on Residences',
    location: 'Muhoho Ave & Five Star Rd',
    quote: 'Black architectural aluminium framing & tempered glass balustrades.',
  },
  {
    image: '/images/penthouse_suite.jpg',
    tag: 'Obsidian Penthouse Residence',
    title: 'Architectural Glass Living Above Nairobi',
    location: '12th Floor · Muhoho Avenue',
    quote: 'Panoramic sunset views and soundproof luxury in the city.',
  },
  {
    image: '/images/shower_cubicles.jpg',
    tag: 'Custom Frameless Shower Cubicles',
    title: 'Master Bathroom Glass Spa Sanctuary',
    location: 'Residential Installation',
    quote: 'Seamless tempered glass enclosures with precision water seals.',
  },
  {
    image: '/images/aluminium_doors_windows.jpg',
    tag: 'Aluminium Doors & Windows',
    title: 'Smooth-Gliding Patio Sliders & Casements',
    location: 'Five Star Road Workshop',
    quote: 'Certified aluminium and UPVC extrusions built for modern homes.',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenReservationWithDetails,
  onExploreSuites,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Quick reservation bar state
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [suiteType, setSuiteType] = useState('any');
  const [guests, setGuests] = useState(2);

  // Set default dates
  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 2);
    setCheckIn(today.toISOString().split('T')[0]);
    setCheckOut(tomorrow.toISOString().split('T')[0]);
  }, []);

  // Auto-advance looping carousel
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleSlideSelect = (idx: number) => {
    sound.playTap();
    setCurrentSlide(idx);
  };

  const handleCheckAvailability = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playGlassChime();
    onOpenReservationWithDetails({
      checkIn,
      checkOut,
      suiteType,
      guests,
    });
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-stone-950 pb-12 pt-6">
      {/* Background Looping Slides */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${
                idx === currentSlide ? 'scale-105' : 'scale-100'
              }`}
              referrerPolicy="no-referrer"
            />
            {/* Cinematic contrast gradient scrims */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/40 to-transparent" />
          </div>
        ))}
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-12 w-full my-auto">
        <div className="max-w-3xl">
          {/* Editorial Kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900/80 border border-amber-500/30 backdrop-blur-md mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-amber-300">
              South Glass &amp; Aluminium Works · Residential Glazing Specialists
            </span>
          </div>

          {/* Hero Headline - Mobile Scaled */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-3 sm:mb-5 text-balance">
            South Glass and Aluminium Works on Residences
          </h1>

          {/* Subtitle - Mobile Scaled */}
          <p className="text-xs sm:text-base text-stone-300 font-light leading-relaxed mb-6 sm:mb-8 max-w-2xl">
            Custom engineered architectural glass and aluminium fabrication for Nairobi homes, penthouses, and
            villas. From frameless balcony balustrades and fluted bathroom showers to our living showcase residences
            on Muhoho Avenue &amp; Five Star Road.
          </p>

          {/* Actions - Mobile Stack & Desktop Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 mb-6 sm:mb-8">
            <button
              onClick={() => {
                sound.playGlassChime();
                const element = document.getElementById('residential-works');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 text-xs font-bold uppercase tracking-wider text-stone-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-xl shadow-xl shadow-amber-950/60 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Explore Residential Works</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                sound.playTap();
                onExploreSuites();
              }}
              className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 text-xs font-bold uppercase tracking-wider text-stone-200 hover:text-white glass-panel-subtle hover:bg-stone-900/80 rounded-xl border border-stone-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Showcase Suites &amp; Stays</span>
            </button>

            <button
              onClick={() => {
                sound.playPhoneBuzz();
                const element = document.getElementById('interactive-tour');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hidden md:flex items-center gap-2 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-stone-300 hover:text-white glass-panel-subtle rounded-xl border border-stone-800 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>360° Glass Tour</span>
            </button>
          </div>

          {/* Trust Metadata Proof Bar */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-stone-300 pt-4 border-t border-stone-800/80">
            <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>5.0</span>
              <span className="text-stone-400 font-normal">(3 Verified Google Reviews)</span>
            </div>
            <span className="text-stone-600 hidden sm:inline">·</span>
            <div className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Muhoho Ave &amp; Five Star Rd</span>
            </div>
            <span className="text-stone-600 hidden sm:inline">·</span>
            <div className="flex items-center gap-1.5 text-stone-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>24/7 Power Inverter &amp; Generator Uptime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Reservation Booking Bar & Slide Controls */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6">
        {/* Floating Reservation Card */}
        <div className="glass-panel p-4 sm:p-5 rounded-2xl shadow-2xl border border-stone-700/80 luxury-glow">
          <form onSubmit={handleCheckAvailability} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {/* Check-In Date */}
            <div className="flex flex-col">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>Check-In</span>
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => {
                  sound.playTap();
                  setCheckIn(e.target.value);
                }}
                className="bg-stone-900/90 border border-stone-700 rounded-lg px-3 py-2.5 text-xs text-stone-100 font-medium focus:outline-none focus:border-amber-400 transition-colors"
                required
              />
            </div>

            {/* Check-Out Date */}
            <div className="flex flex-col">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>Check-Out</span>
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => {
                  sound.playTap();
                  setCheckOut(e.target.value);
                }}
                className="bg-stone-900/90 border border-stone-700 rounded-lg px-3 py-2.5 text-xs text-stone-100 font-medium focus:outline-none focus:border-amber-400 transition-colors"
                required
              />
            </div>

            {/* Suite Category */}
            <div className="flex flex-col">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1 flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5 text-amber-400" />
                <span>Suite Collection</span>
              </label>
              <select
                value={suiteType}
                onChange={(e) => {
                  sound.playTap();
                  setSuiteType(e.target.value);
                }}
                className="bg-stone-900/90 border border-stone-700 rounded-lg px-3 py-2.5 text-xs text-stone-100 font-medium focus:outline-none focus:border-amber-400 transition-colors"
              >
                <option value="any">All Luxury Suites</option>
                <option value="penthouse-skyline">The Skyline Obsidian Penthouse</option>
                <option value="horizon-terrace-two-bed">The Horizon Terrace 2-Bed</option>
                <option value="muhoho-executive-studio">Muhoho Executive Glass Studio</option>
                <option value="presidential-glass-haven">Presidential Glass Sky Estate</option>
              </select>
            </div>

            {/* Guests */}
            <div className="flex flex-col">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                <span>Guests</span>
              </label>
              <select
                value={guests}
                onChange={(e) => {
                  sound.playTap();
                  setGuests(Number(e.target.value));
                }}
                className="bg-stone-900/90 border border-stone-700 rounded-lg px-3 py-2.5 text-xs text-stone-100 font-medium focus:outline-none focus:border-amber-400 transition-colors"
              >
                <option value={1}>1 Guest (Solo Executive)</option>
                <option value={2}>2 Guests (Couple / Retreat)</option>
                <option value={3}>3 Guests</option>
                <option value={4}>4 Guests (Family / Group)</option>
                <option value={6}>6 Guests (Estate Stay)</option>
              </select>
            </div>

            {/* Submit Action */}
            <div className="flex flex-col justify-end">
              <button
                type="submit"
                className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-stone-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-lg shadow-lg shadow-amber-950/60 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 h-[38px]"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span className="whitespace-nowrap">Check Availability</span>
              </button>
            </div>
          </form>
        </div>

        {/* Carousel Slide Indicators & Controls */}
        <div className="flex items-center justify-between pt-4 text-xs text-stone-400">
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.tag}
                onClick={() => handleSlideSelect(idx)}
                className={`transition-all duration-300 rounded-full h-1.5 ${
                  idx === currentSlide ? 'w-8 bg-amber-400' : 'w-2 bg-stone-700 hover:bg-stone-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
            <button
              onClick={() => {
                sound.playTap();
                setIsPlaying(!isPlaying);
              }}
              className="ml-3 p-1 rounded text-stone-400 hover:text-stone-200"
              title={isPlaying ? 'Pause looping slides' : 'Play looping slides'}
              aria-label={isPlaying ? 'Pause slide rotation' : 'Play slide rotation'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <span className="text-amber-400 font-medium">{HERO_SLIDES[currentSlide].tag}</span>
            <span>·</span>
            <span>{HERO_SLIDES[currentSlide].location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
