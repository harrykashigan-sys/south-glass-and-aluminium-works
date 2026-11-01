import React, { useState } from 'react';
import { RESIDENTIAL_WORKS, ResidentialWorkCategory } from '../data/residentialWorksData';
import { Shield, Sparkles, CheckCircle2, FileText, Phone, Wrench, Home, MapPin } from 'lucide-react';
import { sound } from '../utils/soundEffects';

interface ResidentialWorksSectionProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ResidentialWorksSection: React.FC<ResidentialWorksSectionProps> = ({
  onOpenQuoteModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<ResidentialWorkCategory>(RESIDENTIAL_WORKS[0]);

  const handleSelectCategory = (cat: ResidentialWorkCategory) => {
    sound.playTap();
    setActiveCategory(cat);
  };

  return (
    <section id="residential-works-deep" className="py-12 sm:py-20 bg-stone-950 relative border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 border border-amber-500/30 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <Wrench className="w-3.5 h-3.5 shrink-0" />
            <span>Master Architectural Fabrication</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-3 text-balance leading-tight">
            Residential Glass &amp; Aluminium Works Portfolio
          </h2>
          <p className="text-stone-300 text-xs sm:text-base leading-relaxed font-light">
            Explore the engineering standards and finishes we manufacture for residential villas, modern townhouses,
            and luxury penthouses across Nairobi. Each installation is custom-measured, cut, and fitted by our
            master glaziers.
          </p>
        </div>

        {/* 5 Category Selector Pills / Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4 mb-8 sm:mb-12">
          {RESIDENTIAL_WORKS.map((work) => (
            <button
              key={work.id}
              onClick={() => handleSelectCategory(work)}
              className={`p-3.5 sm:p-4 rounded-xl text-left transition-all duration-300 border cursor-pointer flex flex-col justify-between ${
                activeCategory.id === work.id
                  ? 'bg-stone-900 border-amber-400 shadow-xl shadow-amber-950/40 ring-1 ring-amber-400/40'
                  : 'bg-stone-900/50 border-stone-800 hover:bg-stone-900/80 hover:border-stone-700'
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-stone-950 border border-stone-800 flex items-center justify-center mb-2">
                <Wrench className={`w-3.5 h-3.5 ${activeCategory.id === work.id ? 'text-amber-400' : 'text-stone-400'}`} />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-white mb-0.5 line-clamp-1">{work.title}</h3>
                <p className="text-[10px] sm:text-xs text-stone-400 line-clamp-1">{work.subtitle}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Active Work Deep Showcase (Image #2) */}
        <div className="glass-panel p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-stone-800 shadow-2xl mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Architectural Visual Image (Clean, high-clarity 16:10 / 4:3) */}
            <div className="lg:col-span-6 rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-stone-950 border border-stone-800 relative group shadow-lg">
              <img
                src={activeCategory.image}
                alt={activeCategory.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-amber-400 block mb-0.5">
                  Residential Installation
                </span>
                <span className="text-sm sm:text-lg font-serif font-bold text-white drop-shadow">
                  {activeCategory.title}
                </span>
              </div>
            </div>

            {/* Technical Specifications & Applications */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-1">
                  South Glass Works Precision Fabrication
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white mb-2 leading-tight">
                  {activeCategory.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                  {activeCategory.description}
                </p>
              </div>

              {/* Key Specs */}
              <div>
                <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                  Engineering &amp; Material Standards
                </h4>
                <div className="space-y-1.5 sm:space-y-2">
                  {activeCategory.keySpecs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Residential Applications */}
              <div>
                <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                  Common Residential Applications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                  {activeCategory.residentialApplications.map((app, i) => (
                    <div key={i} className="p-2 sm:p-2.5 rounded-lg bg-stone-950/60 border border-stone-800 text-[11px] text-stone-300">
                      • {app}
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Client Testimonial Tag */}
              <div className="p-3 sm:p-4 rounded-xl bg-amber-950/20 border border-amber-500/20 text-xs text-stone-300">
                <span className="font-semibold text-amber-300 block mb-0.5 text-[11px] sm:text-xs">Client Verification:</span>
                <p className="italic font-light leading-relaxed">&ldquo;{activeCategory.clientBenefit}&rdquo;</p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
                <button
                  onClick={() => {
                    sound.playGlassChime();
                    onOpenQuoteModal(`Residential ${activeCategory.title}`);
                  }}
                  className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-stone-950 bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 shrink-0" />
                  <span>Request Measurement &amp; Quote</span>
                </button>
                <a
                  href="tel:0701770614"
                  onClick={() => sound.playPhoneBuzz()}
                  className="px-4 py-3 text-xs font-medium text-stone-300 hover:text-white bg-stone-900 hover:bg-stone-800 rounded-xl border border-stone-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Call 0701 770 614</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Physical Workshop & Showroom - Professional Image Replacing the Billboard Snapshot (Image #1) */}
        <div className="glass-panel p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-stone-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* High-Resolution Professional Fabrication Workshop & Showroom Photo */}
            <div className="lg:col-span-6 rounded-xl overflow-hidden border border-stone-700 aspect-[16/9] bg-stone-950 relative group">
              <img
                src="/images/workshop_showroom.jpg"
                alt="South Glass & Aluminium Works Physical Workshop & Showroom Nairobi"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-xs text-stone-200 font-mono flex items-center justify-between">
                <span className="bg-stone-950/80 px-2.5 py-1 rounded border border-stone-800 text-[11px] text-amber-400">
                  Five Star Rd Workshop &amp; Showroom
                </span>
                <span className="text-[10px] text-stone-400">Nairobi, Kenya</span>
              </div>
            </div>

            {/* Workshop Verified Credentials */}
            <div className="lg:col-span-6 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-500/30 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                <MapPin className="w-3.5 h-3.5" />
                <span>Physical Workshop &amp; Fabrication Hub</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-serif font-bold text-white">
                GLASS SHOP — Dealers In Glass, Mirrors, Aluminium &amp; UPVC
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                Operating directly from Five Star Road &amp; Muhoho Avenue in Nairobi. We fabricate, supply,
                and install certified architectural glass and aluminium products for residential residences,
                commercial developers, and contractors across Kenya:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-stone-300 pt-1">
                <span className="p-2 rounded bg-stone-900 border border-stone-800">✓ Clear &amp; Tinted Glasses</span>
                <span className="p-2 rounded bg-stone-900 border border-stone-800">✓ Mirrors &amp; Frames</span>
                <span className="p-2 rounded bg-stone-900 border border-stone-800">✓ Aluminium Doors/Windows</span>
                <span className="p-2 rounded bg-stone-900 border border-stone-800">✓ Shower Cubicles</span>
                <span className="p-2 rounded bg-stone-900 border border-stone-800">✓ Balcony Balustrades</span>
                <span className="p-2 rounded bg-stone-900 border border-stone-800">✓ UPVC &amp; Accessories</span>
              </div>

              {/* Direct Workshop Phone Numbers */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
                <span className="text-stone-400">Direct Lines:</span>
                <a
                  href="tel:0701770614"
                  onClick={() => sound.playPhoneBuzz()}
                  className="font-mono font-bold text-amber-400 hover:underline"
                >
                  0701 770 614
                </a>
                <span className="text-stone-600">/</span>
                <a
                  href="tel:0721810295"
                  onClick={() => sound.playPhoneBuzz()}
                  className="font-mono font-bold text-amber-400 hover:underline"
                >
                  0721 810 295
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
