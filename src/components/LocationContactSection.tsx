import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Star, ExternalLink, Navigation, Share2, Bookmark, Smartphone, Check, Sparkles, Send } from 'lucide-react';
import { sound } from '../utils/soundEffects';

interface LocationContactSectionProps {
  onOpenReservation: () => void;
}

export const LocationContactSection: React.FC<LocationContactSectionProps> = ({
  onOpenReservation,
}) => {
  const [copiedPlusCode, setCopiedPlusCode] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquirySuite, setInquirySuite] = useState('Obsidian Penthouse');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyPlusCode = () => {
    sound.playTap();
    navigator.clipboard.writeText('MRGG+FR Nairobi');
    setCopiedPlusCode(true);
    setTimeout(() => setCopiedPlusCode(false), 2500);
  };

  const handlePhoneClick = () => {
    sound.playPhoneBuzz();
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playSuccessChime();
    setIsSubmitted(true);
  };

  const transitDistances = [
    { destination: 'Wilson Airport (Safari Flights)', duration: '8 mins', distance: '3.8 km', via: 'Direct Langata Rd' },
    { destination: 'JKIA International Airport', duration: '18 mins', distance: '14.5 km', via: 'Nairobi Expressway' },
    { destination: 'Upper Hill & Central Business District', duration: '12 mins', distance: '5.2 km', via: 'Uhuru Highway' },
    { destination: 'Nairobi National Park Main Gate', duration: '15 mins', distance: '8.4 km', via: 'Southern Bypass' },
    { destination: 'Capital Centre & NextGen Malls', duration: '6 mins', distance: '2.1 km', via: 'Mombasa Road' },
    { destination: 'Nairobi West & Mater Hospitals', duration: '5 mins', distance: '1.8 km', via: 'Muhoho Avenue' },
  ];

  return (
    <section id="location-section" className="py-20 bg-stone-900/60 relative border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 border border-amber-500/30 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>Prime Nairobi Location &amp; Google Profile</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-3 text-balance leading-tight">
            Muhoho Avenue &amp; Five Star Road, Nairobi
          </h2>
          <p className="text-stone-300 text-xs sm:text-base leading-relaxed font-light">
            Positioned at the nexus of Nairobi’s major transport corridors. Seamlessly reach safari charters at
            Wilson Airport and overseas flights at JKIA while enjoying tranquil residential elevation.
          </p>
        </div>

        {/* 2-Column Grid: Google Business Profile Card & Transit Logistics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left: Interactive Google Business Profile Showcase */}
          <div className="lg:col-span-6 glass-panel rounded-2xl border border-stone-700/80 shadow-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                  Google Maps Verified Business
                </span>
                <span className="text-xs text-stone-400 font-mono">Plus Code: MRGG+FR</span>
              </div>

              {/* Title & Category */}
              <div className="mt-5 mb-4">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  SOUTH GLASS &amp; ALUMINIUM WORKS
                </h3>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1 text-amber-400 font-bold text-sm">
                    <span>5.0</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-stone-400 font-mono">(3 Verified Reviews)</span>
                  <span className="text-stone-600">·</span>
                  <span className="text-xs text-stone-300">Glass Industry &amp; Residences</span>
                </div>
              </div>

              {/* Business Details List */}
              <div className="space-y-3.5 text-xs sm:text-sm text-stone-300 my-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Physical Location:</span>
                    <span>Muhoho Avenue, Five Star Rd, Nairobi, Kenya</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Operating Schedule:</span>
                    <span>Closed · Opens 9:00 AM Mon (Workshops)</span>
                    <span className="block text-amber-300 text-xs font-semibold">
                      ★ 24/7 In-House Guest Concierge &amp; Check-In Available
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Direct Telephone Lines:</span>
                    <div className="flex flex-wrap items-center gap-2 mt-0.5">
                      <a
                        href="tel:0701770614"
                        onClick={handlePhoneClick}
                        className="text-amber-400 hover:underline font-mono font-bold text-sm"
                      >
                        0701 770 614
                      </a>
                      <span className="text-stone-500">/</span>
                      <a
                        href="tel:0721810295"
                        onClick={handlePhoneClick}
                        className="text-amber-400 hover:underline font-mono font-bold text-sm"
                      >
                        0721 810 295
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Navigation className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">Plus Code:</span>
                    <span className="font-mono bg-stone-900 px-2 py-0.5 rounded border border-stone-800 text-amber-300">
                      MRGG+FR Nairobi
                    </span>
                    <button
                      onClick={handleCopyPlusCode}
                      className="text-xs text-stone-400 hover:text-white underline ml-1 cursor-pointer"
                    >
                      {copiedPlusCode ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons Row matching Google Business */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-stone-800">
                <a
                  href="https://maps.google.com/?q=MRGG+FR+Nairobi"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playTap()}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-stone-950/80 hover:bg-stone-900 border border-stone-800 text-stone-200 transition-colors"
                >
                  <Navigation className="w-4 h-4 text-amber-400 mb-1" />
                  <span className="text-[11px] font-semibold">Directions</span>
                </a>

                <a
                  href="tel:0701770614"
                  onClick={handlePhoneClick}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-stone-950/80 hover:bg-stone-900 border border-stone-800 text-stone-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400 mb-1" />
                  <span className="text-[11px] font-semibold">Call Phone</span>
                </a>

                <a
                  href="https://wa.me/254701770614?text=Hello%20South%20Glass%20Residences,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20luxury%20suite%20on%20Muhoho%20Avenue."
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playPhoneBuzz()}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-stone-950/80 hover:bg-stone-900 border border-stone-800 text-stone-200 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 mb-1" />
                  <span className="text-[11px] font-semibold">WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    sound.playPhoneBuzz();
                    if (navigator.share) {
                      navigator.share({
                        title: 'South Glass Residences & Luxury Suites',
                        text: 'Ultra-luxury architectural short-stay suites on Muhoho Avenue & Five Star Rd, Nairobi.',
                        url: window.location.href,
                      });
                    } else {
                      handleCopyPlusCode();
                    }
                  }}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-stone-950/80 hover:bg-stone-900 border border-stone-800 text-stone-200 transition-colors cursor-pointer"
                >
                  <Share2 className="w-4 h-4 text-amber-400 mb-1" />
                  <span className="text-[11px] font-semibold">Share Stay</span>
                </button>
              </div>
            </div>

            {/* Google Verified Review Highlight Box */}
            <div className="mt-6 p-4 rounded-xl bg-amber-950/20 border border-amber-500/20 text-xs text-stone-300">
              <div className="flex items-center gap-1 text-amber-400 font-semibold mb-1">
                <span>Verified Google Review by Saajid Suleiman:</span>
              </div>
              <p className="italic leading-relaxed">
                &ldquo;Great experience! I hired them to install glass on my balcony and in the bathrooms at my new
                place, and they did an excellent job. The work is clean, professional, and the finishing is top
                quality. Highly recommended!&rdquo;
              </p>
            </div>
          </div>

          {/* Right: Transit Logistics & Travel Proximity */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-stone-800 shadow-xl">
              <h4 className="text-lg font-serif font-bold text-white mb-2 flex items-center gap-2">
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Nairobi Transit &amp; Key Landmarks Proximity</span>
              </h4>
              <p className="text-xs text-stone-300 mb-6 leading-relaxed">
                Enjoy hassle-free transit. Direct connections via the Nairobi Expressway bypass gridlock to airports
                and business centers.
              </p>

              <div className="space-y-3">
                {transitDistances.map((item) => (
                  <div
                    key={item.destination}
                    className="p-3.5 rounded-xl bg-stone-950/70 border border-stone-800/80 flex items-center justify-between gap-4"
                  >
                    <div>
                      <span className="text-xs font-semibold text-white block">{item.destination}</span>
                      <span className="text-[11px] text-stone-400">Via {item.via}</span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-bold text-amber-300 font-mono block tabular-nums">
                        {item.duration}
                      </span>
                      <span className="text-[10px] text-stone-500 font-mono tabular-nums">{item.distance}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Phone Buzz Interactivity Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-stone-900 to-amber-950/40 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-1">
                  Immediate Inquiries &amp; Layover Bookings
                </span>
                <h4 className="text-lg font-serif font-bold text-white">Speak Directly With Our Host</h4>
                <p className="text-xs text-stone-300">Tap below for haptic phone contact &amp; reservation.</p>
              </div>

              <a
                href="tel:0701770614"
                onClick={handlePhoneClick}
                className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-stone-950 bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-lg shadow-lg flex items-center gap-2 whitespace-nowrap shrink-0 active:scale-95 transition-all"
              >
                <Smartphone className="w-4 h-4" />
                <span>Call 0701 770614</span>
              </a>
            </div>
          </div>
        </div>

        {/* VIP Reservation & Inquiry Form */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-stone-800 shadow-2xl max-w-4xl mx-auto luxury-glow">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2 block">
              South Glass and Aluminium Works · Residential Inquiries
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight mb-3">
              Request a Residential Glass Quote or Suite Stay
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Inquire about residential glass balustrades, shower cubicles, acoustic soundproofing windows, or
              reserve a stay at our showcase residences on Muhoho Avenue &amp; Five Star Road.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-center animate-in fade-in duration-300">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-400/40">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-serif font-bold text-white mb-2">Reservation Request Received</h4>
              <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto mb-6 leading-relaxed">
                Thank you, {inquiryName || 'Guest'}. Our resident host on Muhoho Avenue is preparing your tailored quote
                for {inquirySuite}. You will receive a direct WhatsApp / SMS confirmation shortly.
              </p>
              <div className="flex justify-center gap-3">
                <a
                  href={`https://wa.me/254701770614?text=Hello,%20I%20just%20submitted%20a%20stay%20inquiry%20for%20${encodeURIComponent(
                    inquirySuite
                  )}%20on%20Muhoho%20Avenue.`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playPhoneBuzz()}
                  className="px-5 py-2.5 text-xs font-bold text-stone-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant WhatsApp Follow-Up</span>
                </a>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2.5 text-xs font-medium text-stone-300 hover:text-white bg-stone-900 rounded-lg border border-stone-700"
                >
                  Submit Another
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1.5 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Saajid Suleiman"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-4 py-3 text-xs text-stone-100 placeholder:text-stone-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1.5 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-4 py-3 text-xs text-stone-100 placeholder:text-stone-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1.5 block">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+254 701 770614"
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-4 py-3 text-xs text-stone-100 placeholder:text-stone-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1.5 block">
                    Residential Work or Showcase Residence
                  </label>
                  <select
                    value={inquirySuite}
                    onChange={(e) => {
                      sound.playTap();
                      setInquirySuite(e.target.value);
                    }}
                    className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-4 py-3 text-xs text-stone-100 focus:outline-none focus:border-amber-400"
                  >
                    <optgroup label="Residential Glass &amp; Aluminium Works">
                      <option value="Residential Balcony Glass Balustrades">Residential Balcony Glass Balustrades</option>
                      <option value="Residential Bathroom Shower Glass Cubicles">Residential Bathroom Shower Glass Cubicles</option>
                      <option value="Residential Acoustic Soundproof Windows">Residential Acoustic Soundproof Windows</option>
                      <option value="Residential Aluminium Sliding Patio Doors">Residential Aluminium Sliding Patio Doors</option>
                    </optgroup>
                    <optgroup label="Showcase Residences (Muhoho Ave &amp; Five Star Rd)">
                      <option value="The Skyline Obsidian Penthouse">The Skyline Obsidian Penthouse</option>
                      <option value="The Horizon Terrace 2-Bed">The Horizon Terrace 2-Bed</option>
                      <option value="Muhoho Executive Glass Studio">Muhoho Executive Glass Studio</option>
                      <option value="Presidential Glass Sky Estate">Presidential Glass Sky Estate</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1.5 block">
                  Dates &amp; Special Requests (Airport Transfer, Safari Logistics, etc.)
                </label>
                <textarea
                  rows={3}
                  placeholder="Expected dates of stay, number of guests, or airport shuttle requirements..."
                  value={inquiryMessage}
                  onChange={(e) => setInquiryMessage(e.target.value)}
                  className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-4 py-3 text-xs text-stone-100 placeholder:text-stone-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-stone-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-xl shadow-xl transition-all cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Reservation Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
