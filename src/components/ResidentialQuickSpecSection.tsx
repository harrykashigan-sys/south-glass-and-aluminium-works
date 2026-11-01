import React, { useState } from 'react';
import { Home, Calculator, Shield, Sparkles, CheckCircle2, Phone, FileText } from 'lucide-react';
import { sound } from '../utils/soundEffects';

interface ResidentialQuickSpecSectionProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ResidentialQuickSpecSection: React.FC<ResidentialQuickSpecSectionProps> = ({
  onOpenQuoteModal,
}) => {
  // Interactive Residential Estimation Tool state (Matches User Image #3)
  const [calcWorkType, setCalcWorkType] = useState('balcony');
  const [calcGlassType, setCalcGlassType] = useState('laminated-safety');
  const [calcFinish, setCalcFinish] = useState('matte-black');
  const [calcUnits, setCalcUnits] = useState(8);

  const handleQuickQuote = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playGlassChime();
    onOpenQuoteModal(`Residential ${calcWorkType.toUpperCase()} - ${calcUnits}m with ${calcGlassType} (${calcFinish})`);
  };

  return (
    <section id="residence-works" className="py-10 sm:py-16 bg-stone-950 relative border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 border border-amber-500/30 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <Home className="w-3.5 h-3.5 shrink-0" />
            <span>South Glass &amp; Aluminium Works on Residence</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-3 text-balance leading-tight">
            Residential Glass &amp; Aluminium Precision
          </h2>
          <p className="text-stone-300 text-xs sm:text-base leading-relaxed font-light">
            South Glass &amp; Aluminium Works is Nairobi&apos;s leading fabricator for residential villas, modern townhouses,
            and luxury penthouses along Muhoho Avenue, Five Star Road, and across Kenya. Configure your custom residential
            measurements below for rapid quotation and site inspection.
          </p>
        </div>

        {/* Interactive Residential Spec & Quote Tool (Matches User Image #3) */}
        <div className="glass-panel p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-amber-500/30 shadow-2xl luxury-glow">
          <div className="max-w-2xl mx-auto text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1.5">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Residential Spec &amp; Quote Tool</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-serif font-bold text-white mb-2 leading-tight">
              Configure Your Residential Glass Work
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
              Select your residential project parameters to receive immediate material specifications and schedule
              our on-site measurement team on Muhoho Avenue &amp; across Nairobi.
            </p>
          </div>

          <form onSubmit={handleQuickQuote} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {/* Work Category */}
            <div>
              <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1 block">
                Work Category
              </label>
              <select
                value={calcWorkType}
                onChange={(e) => {
                  sound.playTap();
                  setCalcWorkType(e.target.value);
                }}
                className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3 py-2.5 text-xs text-stone-100 font-medium focus:outline-none focus:border-amber-400"
              >
                <option value="balcony">Balcony Glass Balustrade</option>
                <option value="shower">Bathroom Shower Cubicle</option>
                <option value="windows">Acoustic Soundproof Windows</option>
                <option value="sliding-doors">Aluminium Sliding Patio Doors</option>
                <option value="mirrors-frames">Custom Mirrors &amp; Frames</option>
              </select>
            </div>

            {/* Glass Specification */}
            <div>
              <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1 block">
                Glass Specification
              </label>
              <select
                value={calcGlassType}
                onChange={(e) => {
                  sound.playTap();
                  setCalcGlassType(e.target.value);
                }}
                className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3 py-2.5 text-xs text-stone-100 font-medium focus:outline-none focus:border-amber-400"
              >
                <option value="laminated-safety">12mm Laminated Safety Glass</option>
                <option value="fluted-reeded">10mm Fluted / Reeded Spa Glass</option>
                <option value="double-glazed-acoustic">Double-Glazed 42dB Acoustic</option>
                <option value="clear-tempered">10mm Clear Toughened Glass</option>
                <option value="solar-low-e">Solar Control Low-E Tinted</option>
                <option value="silver-mirror">5mm High-Clarity Silver Mirror</option>
              </select>
            </div>

            {/* Aluminium Profile Finish */}
            <div>
              <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1 block">
                Aluminium Profile Finish
              </label>
              <select
                value={calcFinish}
                onChange={(e) => {
                  sound.playTap();
                  setCalcFinish(e.target.value);
                }}
                className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3 py-2.5 text-xs text-stone-100 font-medium focus:outline-none focus:border-amber-400"
              >
                <option value="matte-black">Matte Black Anodized</option>
                <option value="charcoal-grey">Anthracite / Charcoal Grey</option>
                <option value="silver-anodized">Natural Anodized Silver</option>
                <option value="brushed-brass">Brushed Brass / Champagne</option>
                <option value="frameless">Concealed Shoe / Frameless</option>
              </select>
            </div>

            {/* Measurement Approx */}
            <div>
              <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1 block">
                Linear Metres / Units Approx
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={1}
                  max={200}
                  value={calcUnits}
                  onChange={(e) => {
                    sound.playTap();
                    setCalcUnits(Number(e.target.value));
                  }}
                  className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3 py-2.5 text-xs text-stone-100 font-medium focus:outline-none focus:border-amber-400"
                />
                <button
                  type="submit"
                  className="py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-stone-950 bg-gradient-to-r from-amber-300 to-amber-500 rounded-xl shadow-md cursor-pointer whitespace-nowrap active:scale-95"
                >
                  Inquire
                </button>
              </div>
            </div>
          </form>

          {/* Quick Specification Summary Preview */}
          <div className="mt-5 pt-5 border-t border-stone-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-stone-300">
            <div>
              <span className="text-amber-400 font-semibold mr-1.5">Configured:</span>
              <span>
                {calcUnits}m of {calcGlassType.replace('-', ' ')} with {calcFinish.replace('-', ' ')} profile.
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-stone-400 font-mono text-[11px]">
              <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Complies with Kenya Building Code &amp; Safety Standards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
