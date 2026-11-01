import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, Home, Sparkles, Check, Phone, ShieldCheck, MessageSquare } from 'lucide-react';
import { sound } from '../utils/soundEffects';
import { ResidenceSuite } from '../data/residencesData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedSuite?: ResidenceSuite | null;
  initialDetails?: {
    checkIn: string;
    checkOut: string;
    suiteType: string;
    guests: number;
  } | null;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  preselectedSuite,
  initialDetails,
}) => {
  const [suiteName, setSuiteName] = useState('The Skyline Obsidian Penthouse');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preselectedSuite) {
      setSuiteName(preselectedSuite.name);
      setGuests(preselectedSuite.guests);
    }
  }, [preselectedSuite]);

  useEffect(() => {
    if (initialDetails) {
      if (initialDetails.checkIn) setCheckIn(initialDetails.checkIn);
      if (initialDetails.checkOut) setCheckOut(initialDetails.checkOut);
      if (initialDetails.guests) setGuests(initialDetails.guests);
      if (initialDetails.suiteType && initialDetails.suiteType !== 'any') {
        if (initialDetails.suiteType === 'penthouse-skyline') setSuiteName('The Skyline Obsidian Penthouse');
        if (initialDetails.suiteType === 'horizon-terrace-two-bed') setSuiteName('The Horizon Terrace Suite');
        if (initialDetails.suiteType === 'muhoho-executive-studio') setSuiteName('The Muhoho Executive Glass Studio');
        if (initialDetails.suiteType === 'presidential-glass-haven') setSuiteName('The Presidential Glass Haven');
      }
    }
  }, [initialDetails]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playSuccessChime();
    setIsSuccess(true);
  };

  const handleClose = () => {
    sound.playTap();
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl overflow-y-auto max-h-[92vh] glass-panel rounded-3xl border border-stone-700 shadow-2xl p-6 sm:p-8 luxury-glow">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-stone-900 border border-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close reservation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-5 border border-emerald-400/40">
              <Check className="w-8 h-8" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
              Reservation Inquiry Dispatched
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm max-w-md mx-auto mb-6 leading-relaxed">
              We have received your dates for <strong className="text-amber-300">{suiteName}</strong>. Our residential
              host on Muhoho Avenue is locking in your provisional hold and will confirm via WhatsApp/SMS.
            </p>

            <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 text-xs text-stone-300 max-w-md mx-auto mb-8 text-left space-y-1">
              <div>
                <span className="text-stone-400">Guest:</span> {guestName}
              </div>
              <div>
                <span className="text-stone-400">Dates:</span> {checkIn || 'Flexible'} → {checkOut || 'Flexible'}
              </div>
              <div>
                <span className="text-stone-400">Suite:</span> {suiteName} ({guests} Guests)
              </div>
              <div>
                <span className="text-stone-400">Pricing:</span> Bespoke Quote In Process
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/254701770614?text=Hello%20South%20Glass%20Residences,%20I%20just%20submitted%20a%20reservation%20inquiry%20for%20${encodeURIComponent(
                  suiteName
                )}%20from%20${checkIn}%20to%20${checkOut}.`}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playPhoneBuzz()}
                className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-stone-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Concierge</span>
              </a>
              <button
                onClick={handleClose}
                className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-stone-300 hover:text-white bg-stone-900 rounded-xl border border-stone-700"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>South Glass &amp; Aluminium Works · Nairobi</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Residential Quotation &amp; Residence Stays
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-1">
                Request a custom residential glass installation quote or book a stay at our Muhoho Avenue showcase suites.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service / Suite Selection */}
              <div>
                <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1.5 flex items-center gap-1.5">
                  <Home className="w-3.5 h-3.5 text-amber-400" />
                  <span>Work Category or Showcase Suite</span>
                </label>
                <select
                  value={suiteName}
                  onChange={(e) => {
                    sound.playTap();
                    setSuiteName(e.target.value);
                  }}
                  className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-4 py-3 text-xs text-stone-100 focus:outline-none focus:border-amber-400"
                >
                  <optgroup label="Residential Glass &amp; Aluminium Works">
                    <option value="Residential Balcony Glass Balustrade">Residential Balcony Glass Balustrades</option>
                    <option value="Residential Bathroom Shower Glass &amp; Cubicles">Residential Bathroom Shower Glass &amp; Cubicles</option>
                    <option value="Residential Acoustic Soundproof Windows">Residential Acoustic Soundproof Windows</option>
                    <option value="Residential Aluminium Sliding &amp; Folding Doors">Residential Aluminium Sliding Patio Doors</option>
                    <option value="Custom Residential Architectural Glazing">Full Residential Glass &amp; Aluminium Package</option>
                  </optgroup>
                  <optgroup label="Muhoho Avenue Showcase Residences">
                    <option value="The Skyline Obsidian Penthouse">The Skyline Obsidian Penthouse (12th Floor)</option>
                    <option value="The Horizon Terrace Suite">The Horizon Terrace Suite (8th Floor)</option>
                    <option value="The Muhoho Executive Glass Studio">The Muhoho Executive Glass Studio (6th Floor)</option>
                    <option value="The Presidential Glass Haven">The Presidential Glass Haven (11th Floor)</option>
                  </optgroup>
                </select>
              </div>

              {/* Dates & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Check-In</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => {
                      sound.playTap();
                      setCheckIn(e.target.value);
                    }}
                    className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Check-Out</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => {
                      sound.playTap();
                      setCheckOut(e.target.value);
                    }}
                    className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1.5 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                    <span>Guests</span>
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => {
                      sound.playTap();
                      setGuests(Number(e.target.value));
                    }}
                    className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-amber-400"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
                    <option value={6}>6 Guests</option>
                  </select>
                </div>
              </div>

              {/* Guest Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1.5 block">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Saajid Suleiman"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-4 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1.5 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="guest@residence.com"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-4 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1.5 block">
                  WhatsApp / Phone Number (For Instant Confirmation)
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+254 701 770614"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-4 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1.5 block">
                  Special Requests (Optional: Safari Flight Connection, Airport Pickup, Dietary)
                </label>
                <textarea
                  rows={2}
                  placeholder="Need Wilson airport transfer or early check-in?"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-4 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Guarantees */}
              <div className="flex items-center gap-2 p-3 rounded-xl bg-amber-950/20 border border-amber-500/20 text-xs text-stone-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  Zero cancellation penalty up to 48h prior. 24/7 backup power &amp; Starlink fibre guaranteed.
                </span>
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-5 py-2.5 text-xs font-semibold text-stone-400 hover:text-stone-200 bg-stone-900 rounded-xl border border-stone-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-7 py-3 text-xs font-bold uppercase tracking-wider text-stone-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-xl shadow-xl transition-all cursor-pointer active:scale-95 flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Confirm Reservation Request</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
