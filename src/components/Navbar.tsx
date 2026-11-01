import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X, Sparkles, PhoneCall } from 'lucide-react';
import { sound } from '../utils/soundEffects';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenReservation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(sound.enabled);

  const handleNavClick = (tabId: string) => {
    sound.playTap();
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSoundState = () => {
    const newState = sound.toggleSound();
    setSoundActive(newState);
  };

  const handleReserveClick = () => {
    sound.playGlassChime();
    onOpenReservation();
  };

  const navLinks = [
    { id: 'home', label: 'Overview' },
    { id: 'residential-works', label: 'Residential Works' },
    { id: 'suites', label: 'Showcase Residences' },
    { id: 'craft', label: 'Craft & Reviews' },
    { id: 'blogs', label: 'SEO Guides' },
    { id: 'location', label: 'Location' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-stone-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark (Single text element in display face) */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group whitespace-nowrap shrink-0 focus:outline-none"
            aria-label="South Glass and Aluminium Works"
          >
            <div className="w-10 h-10 rounded-lg bg-stone-900 border border-amber-500/30 flex items-center justify-center transition-all duration-300 group-hover:border-amber-400 group-hover:shadow-[0_0_20px_rgba(217,119,6,0.3)]">
              <span className="font-serif text-lg font-bold text-amber-300 tracking-wider">SG</span>
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-stone-100 group-hover:text-amber-200 transition-colors whitespace-nowrap shrink-0 block">
                South Glass &amp; Aluminium Works
              </span>
              <span className="text-[11px] font-sans tracking-widest uppercase text-stone-400 block -mt-0.5">
                Residential Glazing &amp; Showcase Suites
              </span>
            </div>
          </button>

          {/* Zone 2: 4-5 Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-300" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 font-medium tracking-wide ${
                  activeTab === link.id
                    ? 'text-amber-300 border-amber-400 font-semibold'
                    : 'text-stone-300 hover:text-white border-transparent hover:border-stone-500'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action + Tactile Sound Toggle */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            {/* Direct Phone Concierge Trigger with Buzz */}
            <a
              href="tel:0701770614"
              onClick={() => sound.playPhoneBuzz()}
              className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-stone-300 hover:text-amber-200 bg-stone-900/60 hover:bg-stone-800 rounded-lg border border-stone-800 transition-colors whitespace-nowrap shrink-0"
              title="Call VIP Host (0701 770614)"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span className="tabular-nums">0701 770614</span>
            </a>

            {/* Interactive Audio Synthesizer Toggle */}
            <button
              onClick={toggleSoundState}
              className={`p-2.5 rounded-lg border text-xs font-medium transition-all ${
                soundActive
                  ? 'bg-amber-950/40 border-amber-500/40 text-amber-300'
                  : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
              }`}
              title={soundActive ? 'Tactile Glass Audio On' : 'Sound Muted'}
              aria-label="Toggle Sound Effects"
            >
              {soundActive ? (
                <div className="flex items-center gap-1.5">
                  <Volume2 className="w-4 h-4 text-amber-400 animate-pulse" />
                  <span className="text-[10px] hidden xl:inline uppercase tracking-wider">Audio On</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5">
                  <VolumeX className="w-4 h-4 text-stone-400" />
                  <span className="text-[10px] hidden xl:inline uppercase tracking-wider">Muted</span>
                </div>
              )}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={handleReserveClick}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-lg shadow-lg shadow-amber-950/50 hover:shadow-amber-500/20 transition-all duration-200 whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Quote / Reserve</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleSoundState}
              className="p-2 rounded-lg bg-stone-900 border border-stone-800 text-stone-300"
              aria-label="Toggle Sound"
            >
              {soundActive ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4 text-stone-500" />}
            </button>
            <button
              onClick={() => {
                sound.playTap();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-lg bg-stone-900 border border-stone-800 text-stone-200 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-stone-800 px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === link.id
                    ? 'bg-amber-950/40 text-amber-300 font-semibold'
                    : 'text-stone-300 hover:bg-stone-900 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="pt-3 border-t border-stone-800/80 flex flex-col gap-2.5">
            <a
              href="tel:0701770614"
              onClick={() => sound.playPhoneBuzz()}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-stone-200 bg-stone-900 rounded-lg border border-stone-800"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Call Concierge: 0701 770614</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleReserveClick();
              }}
              className="w-full py-3 text-xs font-bold uppercase tracking-wider text-stone-950 bg-gradient-to-r from-amber-300 to-amber-500 rounded-lg text-center shadow-md shadow-amber-900/40"
            >
              Reserve Suite (Inquire Rates)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
