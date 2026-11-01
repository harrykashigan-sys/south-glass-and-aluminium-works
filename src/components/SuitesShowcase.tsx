import React, { useState } from 'react';
import { RESIDENCE_SUITES, ResidenceSuite } from '../data/residencesData';
import { Users, Bed, Bath, Maximize2, Shield, Sparkles, Star, ChevronRight, X, Check, Flame } from 'lucide-react';
import { sound } from '../utils/soundEffects';

interface SuitesShowcaseProps {
  onSelectSuiteForReservation: (suite: ResidenceSuite) => void;
}

export const SuitesShowcase: React.FC<SuitesShowcaseProps> = ({
  onSelectSuiteForReservation,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [modalSuite, setModalSuite] = useState<ResidenceSuite | null>(null);
  const [selectedGalleryIdx, setSelectedGalleryIdx] = useState<number>(0);

  const categories = [
    { id: 'all', label: 'All Residences' },
    { id: 'penthouse', label: 'Penthouse Collection' },
    { id: 'two-bedroom', label: '2-Bedroom Residences' },
    { id: 'studio', label: 'Executive Studios' },
    { id: 'presidential', label: 'Presidential Sky Estate' },
  ];

  const filteredSuites =
    activeCategory === 'all'
      ? RESIDENCE_SUITES
      : RESIDENCE_SUITES.filter((suite) => suite.category === activeCategory);

  const handleOpenModal = (suite: ResidenceSuite) => {
    sound.playTap();
    setModalSuite(suite);
    setSelectedGalleryIdx(0);
  };

  const handleCloseModal = () => {
    sound.playTap();
    setModalSuite(null);
  };

  const handleBookSuite = (suite: ResidenceSuite) => {
    sound.playGlassChime();
    setModalSuite(null);
    onSelectSuiteForReservation(suite);
  };

  return (
    <section id="suites-section" className="py-12 sm:py-20 bg-stone-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 border border-amber-500/30 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>Curated Short-Stay Residences</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-3 text-balance leading-tight">
            The Glass House Residences
          </h2>
          <p className="text-stone-300 text-xs sm:text-base leading-relaxed font-light">
            Every suite is an architectural showcase crafted with South Glass &amp; Aluminium Works precision
            installations. Enjoy floor-to-ceiling sunlight, expansive terraces, and tranquil soundproof insulation.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  sound.playTap();
                  setActiveCategory(cat.id);
                }}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-amber-400 text-stone-950 font-bold shadow-lg shadow-amber-950/40'
                    : 'bg-stone-950/80 text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Suites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSuites.map((suite) => (
            <article
              key={suite.id}
              className="glass-panel rounded-2xl overflow-hidden border border-stone-800/90 shadow-xl glass-card-hover group flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Looping/Hover feel */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-950">
                  <img
                    src={suite.primaryImage}
                    alt={suite.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-md bg-stone-950/80 backdrop-blur-md text-[11px] font-semibold text-amber-300 border border-amber-500/30">
                      {suite.categoryLabel}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-stone-950/80 backdrop-blur-md text-[11px] font-medium text-stone-300 border border-stone-700">
                      {suite.floor}
                    </span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-950/85 backdrop-blur-md text-xs font-bold text-amber-300 border border-amber-500/20">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>5.0</span>
                  </div>

                  {/* Bottom Image Overlay Title */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white drop-shadow-md">
                      {suite.name}
                    </h3>
                    <p className="text-xs text-stone-300 line-clamp-1 mt-0.5">{suite.tagline}</p>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  {/* Spatial Metrics Bar */}
                  <div className="grid grid-cols-4 gap-2 pb-4 mb-4 border-b border-stone-800/80 text-xs text-stone-300">
                    <div className="flex flex-col items-center p-2 rounded-lg bg-stone-950/50">
                      <Maximize2 className="w-3.5 h-3.5 text-amber-400 mb-1" />
                      <span className="font-mono text-stone-100 font-medium">{suite.sqm} m²</span>
                      <span className="text-[10px] text-stone-500">Living Area</span>
                    </div>
                    <div className="flex flex-col items-center p-2 rounded-lg bg-stone-950/50">
                      <Users className="w-3.5 h-3.5 text-amber-400 mb-1" />
                      <span className="font-mono text-stone-100 font-medium">{suite.guests} Max</span>
                      <span className="text-[10px] text-stone-500">Guests</span>
                    </div>
                    <div className="flex flex-col items-center p-2 rounded-lg bg-stone-950/50">
                      <Bed className="w-3.5 h-3.5 text-amber-400 mb-1" />
                      <span className="font-mono text-stone-100 font-medium">{suite.bedrooms} Bed</span>
                      <span className="text-[10px] text-stone-500">Master</span>
                    </div>
                    <div className="flex flex-col items-center p-2 rounded-lg bg-stone-950/50">
                      <Bath className="w-3.5 h-3.5 text-amber-400 mb-1" />
                      <span className="font-mono text-stone-100 font-medium">{suite.bathrooms} Bath</span>
                      <span className="text-[10px] text-stone-500">Spa Glass</span>
                    </div>
                  </div>

                  {/* Glass Architectural Highlight */}
                  <div className="mb-5 p-3 rounded-xl bg-amber-950/20 border border-amber-500/20">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-amber-400 mb-1">
                      <Shield className="w-3 h-3" />
                      <span>South Glass Architecture</span>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      {suite.glassHighlights[0]}
                    </p>
                  </div>

                  {/* Highlights checklist */}
                  <ul className="space-y-1.5 mb-6 text-xs text-stone-300">
                    {suite.features.slice(0, 3).map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer with Price Placeholder and Action */}
              <div className="px-6 pb-6 pt-2 border-t border-stone-800/80 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 block">Nightly Rate</span>
                  <span className="text-xs sm:text-sm font-semibold text-amber-300 font-mono tracking-tight">
                    {suite.pricePlaceholder}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenModal(suite)}
                    className="px-3 py-2 text-xs font-medium text-stone-300 hover:text-white bg-stone-900 hover:bg-stone-800 rounded-lg border border-stone-700 transition-colors cursor-pointer"
                  >
                    View Specs
                  </button>
                  <button
                    onClick={() => handleBookSuite(suite)}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-stone-950 bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-lg shadow-md transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <span>Reserve</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Suite Detail Modal */}
      {modalSuite && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-2xl border border-stone-700 shadow-2xl p-6 sm:p-8">
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 p-2 rounded-lg bg-stone-900 border border-stone-700 text-stone-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title */}
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                {modalSuite.categoryLabel} · {modalSuite.floor}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                {modalSuite.name}
              </h3>
              <p className="text-sm text-stone-300 mt-1">{modalSuite.tagline}</p>
            </div>

            {/* Gallery Main & Thumbnails */}
            <div className="mb-6">
              <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-stone-950 mb-3 border border-stone-800">
                <img
                  src={modalSuite.galleryImages[selectedGalleryIdx] || modalSuite.primaryImage}
                  alt={modalSuite.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 overflow-x-auto pb-1">
                {modalSuite.galleryImages.map((img, idx) => (
                  <button
                    key={img + idx}
                    onClick={() => {
                      sound.playTap();
                      setSelectedGalleryIdx(idx);
                    }}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      selectedGalleryIdx === idx ? 'border-amber-400 scale-105' : 'border-stone-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Description & Specs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-400 mb-2">
                  Architectural Residence Overview
                </h4>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-4">
                  {modalSuite.description}
                </p>
                <div className="p-3 rounded-lg bg-stone-900/80 border border-stone-800 text-xs text-stone-300">
                  <span className="font-semibold text-amber-400 block mb-1">Ideal For:</span>
                  {modalSuite.idealFor}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                  <Shield className="w-4 h-4" />
                  <span>South Glass Engineering Specifications</span>
                </h4>
                <ul className="space-y-2 mb-4">
                  {modalSuite.glassHighlights.map((gh, idx) => (
                    <li key={idx} className="text-xs text-stone-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span>{gh}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-400 mb-2">
                  Key Amenities Included
                </h4>
                <div className="grid grid-cols-1 gap-1.5">
                  {modalSuite.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-stone-300">
                      <Check className="w-3.5 h-3.5 text-amber-400" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-stone-400 block">Rate Structure:</span>
                <span className="text-sm font-mono font-bold text-amber-300">{modalSuite.pricePlaceholder}</span>
                <span className="text-[11px] text-stone-500 block">Tailored for short-stay and extended executive visits</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleCloseModal}
                  className="w-1/2 sm:w-auto px-5 py-2.5 text-xs font-medium text-stone-300 hover:text-white bg-stone-900 rounded-lg border border-stone-700"
                >
                  Close
                </button>
                <button
                  onClick={() => handleBookSuite(modalSuite)}
                  className="w-1/2 sm:w-auto px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-950 bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-lg shadow-lg"
                >
                  Request Reservation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
