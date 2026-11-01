import React, { useState, useRef } from 'react';
import { Eye, Compass, Sun, Moon, Volume2, Sparkles, Layers } from 'lucide-react';
import { sound } from '../utils/soundEffects';

interface Hotspot {
  id: string;
  xPercent: number; // percentage along width
  yPercent: number; // percentage along height
  title: string;
  category: string;
  detail: string;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: 'frameless-glass',
    xPercent: 28,
    yPercent: 62,
    title: 'Frameless Structural Balustrade',
    category: 'South Glass & Aluminium Works',
    detail: '12mm monolithic laminated safety glass anchored into recessed aluminium floor channels. Uninterrupted 180° horizon view with zero vertical posts.',
  },
  {
    id: 'sunset-skyline',
    xPercent: 52,
    yPercent: 35,
    title: 'Nairobi CBD & Ngong Hills Horizon',
    category: 'Panoramic Vantage Point',
    detail: 'Western sunset orientation captures equatorial golden hour light cascading across the Nairobi urban skyline and distant volcanic silhouettes.',
  },
  {
    id: 'acoustic-glazing',
    xPercent: 82,
    yPercent: 48,
    title: '42dB Double-Glazed Sliding Wall',
    category: 'Architectural Glazing',
    detail: 'Thermally isolated heavy-duty aluminium profile with argon-gas double glazed panes for total acoustic quietude inside the master suite.',
  },
  {
    id: 'teak-decking',
    xPercent: 70,
    yPercent: 80,
    title: 'Private Sky Terrace Lounge',
    category: 'Balcony Comfort',
    detail: 'Weather-treated teak decking, integrated recessed LED floor strips, and comfortable resort sun loungers for morning coffee or sunset wines.',
  },
];

export const InteractiveTourViewer: React.FC = () => {
  const [panOffset, setPanOffset] = useState(50); // percentage 0 - 100
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(HOTSPOTS[0]);
  const [lightingMode, setLightingMode] = useState<'sunset' | 'night' | 'day'>('sunset');
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const clampedPercent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPanOffset(clampedPercent);
  };

  const handleHotspotClick = (spot: Hotspot) => {
    sound.playGlassChime();
    setSelectedHotspot(spot);
  };

  const getImageForMode = () => {
    if (lightingMode === 'night') return '/images/presidential_haven.jpg';
    if (lightingMode === 'day') return '/images/penthouse_suite.jpg';
    return '/images/horizon_terrace.jpg';
  };

  return (
    <section id="interactive-tour" className="py-20 bg-stone-950 relative overflow-hidden border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              <Compass className="w-4 h-4" />
              <span>Interactive 360° Architectural Explorer</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Experience the Penthouse Skyline Terrace
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-2 max-w-xl">
              Drag horizontally across the panorama to inspect South Glass &amp; Aluminium Works structural glass
              installations, acoustic soundproofing, and panoramic vistas.
            </p>
          </div>

          {/* Ambience & Lighting Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-900/90 rounded-xl border border-stone-800 self-start md:self-auto">
            <button
              onClick={() => {
                sound.playTap();
                setLightingMode('day');
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                lightingMode === 'day' ? 'bg-amber-400 text-stone-950 font-bold shadow-md' : 'text-stone-400 hover:text-white'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>Daylight Interior</span>
            </button>
            <button
              onClick={() => {
                sound.playTap();
                setLightingMode('sunset');
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                lightingMode === 'sunset' ? 'bg-amber-400 text-stone-950 font-bold shadow-md' : 'text-stone-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sunset Balcony</span>
            </button>
            <button
              onClick={() => {
                sound.playTap();
                setLightingMode('night');
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                lightingMode === 'night' ? 'bg-amber-400 text-stone-950 font-bold shadow-md' : 'text-stone-400 hover:text-white'
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
              <span>Night Skyline Pool</span>
            </button>
          </div>
        </div>

        {/* Interactive Viewport Canvas */}
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerMove={handlePointerMove}
          className="relative w-full h-[520px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-stone-800 shadow-2xl group"
        >
          {/* Panoramic Image with dynamic translate based on panOffset */}
          <div
            className="absolute inset-0 w-[140%] h-full transition-transform duration-100 ease-out will-change-transform"
            style={{
              transform: `translateX(-${panOffset * 0.28}%) scale(1.04)`,
            }}
          >
            <img
              src={getImageForMode()}
              alt="Architectural Glass Balcony Panorama"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-stone-950/20" />
          </div>

          {/* Interactive Hotspot Pins */}
          {lightingMode === 'sunset' &&
            HOTSPOTS.map((spot) => (
              <button
                key={spot.id}
                onClick={(e) => {
                  e.stopPropagation();
                  handleHotspotClick(spot);
                }}
                style={{
                  left: `${spot.xPercent}%`,
                  top: `${spot.yPercent}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                className={`absolute z-20 flex items-center justify-center p-2 rounded-full cursor-pointer transition-all duration-300 ${
                  selectedHotspot?.id === spot.id
                    ? 'scale-125 bg-amber-400 text-stone-950 ring-4 ring-amber-400/40 shadow-[0_0_25px_rgba(251,191,36,0.8)]'
                    : 'bg-stone-900/90 text-amber-300 border border-amber-400/50 hover:scale-110 hover:bg-stone-800'
                }`}
                title={spot.title}
                aria-label={`Inspect ${spot.title}`}
              >
                <Layers className="w-4 h-4" />
              </button>
            ))}

          {/* Drag instruction overlay badge */}
          <div className="absolute bottom-5 left-5 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-stone-950/80 backdrop-blur-md border border-stone-700/80 text-xs text-stone-200">
            <Eye className="w-4 h-4 text-amber-400" />
            <span>Click &amp; drag left/right to pan view</span>
            <span className="text-stone-500">·</span>
            <span className="font-mono text-amber-300 tabular-nums">{Math.round(panOffset)}° Horizon</span>
          </div>

          {/* Active Hotspot Info Card inside viewer */}
          {selectedHotspot && lightingMode === 'sunset' && (
            <div className="absolute top-5 right-5 z-20 max-w-sm glass-panel p-4 rounded-xl border border-amber-500/30 shadow-2xl animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-amber-400 mb-1">
                <span>{selectedHotspot.category}</span>
                <Volume2 className="w-3.5 h-3.5 text-stone-400" />
              </div>
              <h4 className="text-base font-serif font-bold text-white mb-1.5">{selectedHotspot.title}</h4>
              <p className="text-xs text-stone-300 leading-relaxed">{selectedHotspot.detail}</p>
            </div>
          )}
        </div>

        {/* Pan Slider Bar */}
        <div className="mt-4 flex items-center gap-4">
          <span className="text-xs font-mono text-stone-400">180° East</span>
          <input
            type="range"
            min="0"
            max="100"
            value={panOffset}
            onChange={(e) => {
              sound.playTap();
              setPanOffset(Number(e.target.value));
            }}
            className="w-full h-1.5 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            aria-label="Pan field of view"
          />
          <span className="text-xs font-mono text-stone-400">180° West</span>
        </div>
      </div>
    </section>
  );
};
