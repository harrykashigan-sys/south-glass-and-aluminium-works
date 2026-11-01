import React, { useState } from 'react';
import { Shield, Award, CheckCircle2, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export const CraftHeritageSection: React.FC = () => {
  const [acousticActive, setAcousticActive] = useState<boolean>(true);

  const toggleAcousticDemo = () => {
    sound.playGlassChime();
    setAcousticActive(!acousticActive);
  };

  return (
    <section id="craft-section" className="py-12 sm:py-20 bg-stone-950 relative border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 border border-amber-500/30 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <Award className="w-3.5 h-3.5 shrink-0" />
            <span>South Glass and Aluminium Works on Residences</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-3 text-balance leading-tight">
            Crafting Architectural Excellence for Nairobi Residences
          </h2>
          <p className="text-stone-300 text-xs sm:text-base leading-relaxed font-light">
            South Glass &amp; Aluminium Works brings over 15 years of precision fabrication on Muhoho Avenue and Five
            Star Road to private homes, villas, and residential developments across Nairobi. Every frameless balcony,
            fluted glass shower, and acoustic window is installed with master craftsmanship.
          </p>
        </div>

        {/* 2-Column Split: Visual & Interactive Acoustic Demo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-stretch">
          {/* Left Column: Visual Showcase */}
          <div className="relative rounded-2xl overflow-hidden border border-stone-800 shadow-2xl min-h-[380px] sm:min-h-[440px] group bg-stone-950">
            <img
              src="/images/shower_cubicles.jpg"
              alt="Fluted glass shower enclosure by South Glass Works"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 glass-panel rounded-xl border border-stone-700">
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-amber-400 block mb-1">
                Precision In Every Detail
              </span>
              <h3 className="text-base sm:text-lg font-serif font-bold text-white mb-1">
                Frameless Fluted Spa Bathrooms
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Custom tempered safety fluted glass panels with matte black anodized aluminium trim. Built
                for visual privacy, easy cleaning, and boutique luxury.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Acoustic Insulator Simulator & Standards */}
          <div className="flex flex-col justify-between space-y-6">
            {/* Interactive Acoustic Insulation Test */}
            <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-amber-500/30 shadow-xl">
              <div className="flex items-center justify-between mb-3 gap-2">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-amber-400 shrink-0" />
                  <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">
                    Interactive Acoustic Double-Glazing Simulator
                  </h4>
                </div>
                <button
                  onClick={toggleAcousticDemo}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    acousticActive
                      ? 'bg-amber-400 text-stone-950 shadow-md shadow-amber-950/40'
                      : 'bg-stone-800 text-stone-300 hover:text-white'
                  }`}
                  aria-label="Toggle acoustic glass insulation mode"
                >
                  {acousticActive ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5" />
                      <span>42dB Insulated (Quiet)</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-stone-400" />
                      <span>Single Glaze (Street Audio)</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-stone-300 leading-relaxed mb-4 font-light">
                Toggle the simulator above to see how our engineered double-glazed curtain walls reduce external
                Nairobi city decibels from 74 dB (open street level) down to a whisper-quiet 32 dB sanctuary inside your
                residence.
              </p>

              {/* Decibel Indicator Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-stone-400">Interior Ambient Noise:</span>
                  <span className={`font-bold tabular-nums ${acousticActive ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {acousticActive ? '32 dB (Library Silence)' : '74 dB (Street Noise)'}
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-stone-800 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 rounded-full ${
                      acousticActive ? 'w-1/4 bg-emerald-400' : 'w-4/5 bg-amber-500'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Core Fabrication Standards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3.5 sm:p-4 rounded-xl bg-stone-900/60 border border-stone-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mb-2" />
                <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-1">
                  12mm Laminated Balustrades
                </h5>
                <p className="text-xs text-stone-400 leading-relaxed font-light">
                  Structural safety glass anchored directly into concealed floor tracks for zero-post infinity views.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-stone-900/60 border border-stone-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mb-2" />
                <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-1">
                  Thermal-Break Aluminium
                </h5>
                <p className="text-xs text-stone-400 leading-relaxed font-light">
                  Heavy-gauge extruded aluminium profiles prevent heat absorption and eliminate rattling in high winds.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-stone-900/60 border border-stone-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mb-2" />
                <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-1">
                  UV Low-E Solar Filtering
                </h5>
                <p className="text-xs text-stone-400 leading-relaxed font-light">
                  Specialized coatings reflect 85% of solar heat while allowing natural daylight to fill rooms.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-stone-900/60 border border-stone-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mb-2" />
                <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-1">
                  Magnetic Acoustic Seals
                </h5>
                <p className="text-xs text-stone-400 leading-relaxed font-light">
                  Sliding patio doors seal with high-density EPDM gaskets for zero drafts and zero wind whistling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
