/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ResidentialQuickSpecSection } from './components/ResidentialQuickSpecSection';
import { SuitesShowcase } from './components/SuitesShowcase';
import { InteractiveTourViewer } from './components/InteractiveTourViewer';
import { CraftHeritageSection } from './components/CraftHeritageSection';
import { ResidentialWorksSection } from './components/ResidentialWorksSection';
import { ClientReviewsSection } from './components/ClientReviewsSection';
import { BlogSection } from './components/BlogSection';
import { LocationContactSection } from './components/LocationContactSection';
import { ReservationModal } from './components/ReservationModal';
import { Footer } from './components/Footer';
import { sound } from './utils/soundEffects';
import { ResidenceSuite } from './data/residencesData';
import { PhoneCall, Sparkles, MessageSquare, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [selectedSuite, setSelectedSuite] = useState<ResidenceSuite | null>(null);
  const [initialBookingDetails, setInitialBookingDetails] = useState<{
    checkIn: string;
    checkOut: string;
    suiteType: string;
    guests: number;
  } | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenReservation = () => {
    sound.playGlassChime();
    setSelectedSuite(null);
    setInitialBookingDetails(null);
    setReservationModalOpen(true);
  };

  const handleOpenReservationWithDetails = (details: {
    checkIn: string;
    checkOut: string;
    suiteType: string;
    guests: number;
  }) => {
    setInitialBookingDetails(details);
    setSelectedSuite(null);
    setReservationModalOpen(true);
  };

  const handleSelectSuiteForReservation = (suite: ResidenceSuite) => {
    setSelectedSuite(suite);
    setInitialBookingDetails(null);
    setReservationModalOpen(true);
  };

  const scrollToTop = () => {
    sound.playTap();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Bar Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenReservation={handleOpenReservation}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            {/* 1. Catching Top Hero Section */}
            <HeroSection
              onOpenReservationWithDetails={handleOpenReservationWithDetails}
              onExploreSuites={() => setActiveTab('suites')}
            />

            {/* 2. Residence Glass & Aluminium Works - Intro & Interactive Spec Tool (User Image #3) */}
            <ResidentialQuickSpecSection
              onOpenQuoteModal={(serviceName) => {
                sound.playGlassChime();
                setInitialBookingDetails({
                  checkIn: '',
                  checkOut: '',
                  suiteType: serviceName || 'Residential Custom Work',
                  guests: 1,
                });
                setReservationModalOpen(true);
              }}
            />

            {/* 3. The Glass House Residences Showcase Units (User Image #4) */}
            <SuitesShowcase onSelectSuiteForReservation={handleSelectSuiteForReservation} />

            {/* 4. Crafting Architectural Excellence & 360 Draggable Panoramic Viewer */}
            <InteractiveTourViewer />
            <CraftHeritageSection />

            {/* 5. Detailed Residential Works Breakdown (User Image #2) & Professional Fabrication Hub (User Image #1) */}
            <ResidentialWorksSection
              onOpenQuoteModal={(serviceName) => {
                sound.playGlassChime();
                setInitialBookingDetails({
                  checkIn: '',
                  checkOut: '',
                  suiteType: serviceName || 'Residential Custom Work',
                  guests: 1,
                });
                setReservationModalOpen(true);
              }}
            />

            {/* 6. Verified Google Business Profile & Customer Reviews */}
            <ClientReviewsSection />

            {/* 7. SEO Pillar Articles (Google Search Console Optimized) */}
            <BlogSection onOpenReservation={handleOpenReservation} />

            {/* 8. Workshop Location & Contact (Five Star Rd & Muhoho Ave) */}
            <LocationContactSection onOpenReservation={handleOpenReservation} />
          </>
        )}

        {activeTab === 'residential-works' && (
          <div className="pt-6">
            <ResidentialQuickSpecSection
              onOpenQuoteModal={(serviceName) => {
                sound.playGlassChime();
                setInitialBookingDetails({
                  checkIn: '',
                  checkOut: '',
                  suiteType: serviceName || 'Residential Custom Work',
                  guests: 1,
                });
                setReservationModalOpen(true);
              }}
            />
            <ResidentialWorksSection
              onOpenQuoteModal={(serviceName) => {
                sound.playGlassChime();
                setInitialBookingDetails({
                  checkIn: '',
                  checkOut: '',
                  suiteType: serviceName || 'Residential Custom Work',
                  guests: 1,
                });
                setReservationModalOpen(true);
              }}
            />
            <ClientReviewsSection />
            <InteractiveTourViewer />
          </div>
        )}

        {activeTab === 'suites' && (
          <div className="pt-6">
            <SuitesShowcase onSelectSuiteForReservation={handleSelectSuiteForReservation} />
            <InteractiveTourViewer />
          </div>
        )}

        {activeTab === 'craft' && (
          <div className="pt-6">
            <CraftHeritageSection />
            <InteractiveTourViewer />
          </div>
        )}

        {activeTab === 'blogs' && (
          <div className="pt-6">
            <BlogSection onOpenReservation={handleOpenReservation} />
          </div>
        )}

        {activeTab === 'location' && (
          <div className="pt-6">
            <LocationContactSection onOpenReservation={handleOpenReservation} />
          </div>
        )}
      </main>

      {/* Bottom Floating Quick Actions (Phone Buzz & Concierge Call) */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5">
        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-stone-900/90 border border-stone-700 text-stone-300 hover:text-white shadow-xl backdrop-blur-md transition-all cursor-pointer active:scale-95"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* WhatsApp Direct */}
        <a
          href="https://wa.me/254701770614?text=Hello%20South%20Glass%20Residences,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20luxury%20suite."
          target="_blank"
          rel="noreferrer"
          onClick={() => sound.playPhoneBuzz()}
          className="p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/50 hover:shadow-emerald-500/20 transition-all cursor-pointer active:scale-95 flex items-center justify-center"
          title="Direct WhatsApp Host"
          aria-label="Direct WhatsApp Concierge"
        >
          <MessageSquare className="w-5 h-5" />
        </a>

        {/* Direct Call with Phone Buzz */}
        <a
          href="tel:0701770614"
          onClick={() => sound.playPhoneBuzz()}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-xl shadow-amber-950/60 hover:shadow-amber-500/30 transition-all cursor-pointer active:scale-95"
          title="Call 0701 770614"
        >
          <PhoneCall className="w-4 h-4" />
          <span className="hidden sm:inline">Call Concierge</span>
        </a>
      </div>

      {/* Footer */}
      <Footer
        onNavigate={setActiveTab}
        onOpenReservation={handleOpenReservation}
      />

      {/* Reservation Inquiry Modal */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
        preselectedSuite={selectedSuite}
        initialDetails={initialBookingDetails}
      />
    </div>
  );
}
