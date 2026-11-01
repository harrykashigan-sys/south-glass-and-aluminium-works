/**
 * Audio Synthesizer and Haptic Feedback System
 * Emulates high-end tactile phone vibrations and crystalline glass audio cues.
 */

class SoundController {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;

  constructor() {
    // Initialized on first user interaction to comply with browser autoplay policies
  }

  private init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleSound(): boolean {
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.playGlassChime();
    }
    return this.enabled;
  }

  // Soft high-end button click
  public playTap() {
    if (!this.enabled) return;
    this.triggerHaptic(12);
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(680, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch {
      // Audio fallback silent
    }
  }

  // Crystalline glass acoustic resonance (signature South Glass chime)
  public playGlassChime() {
    if (!this.enabled) return;
    this.triggerHaptic([15, 25, 15]);
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const freqs = [1760, 2637, 3520]; // Crystal harmonic triad (A6, E7, A7)

      freqs.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.03);

        const initialVol = 0.05 / (idx + 1);
        gain.gain.setValueAtTime(initialVol, now + idx * 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.7);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.03);
        osc.stop(now + 0.7);
      });
    } catch {
      // Audio fallback silent
    }
  }

  // Smartphone vibration buzz sound and actual haptic vibration
  public playPhoneBuzz() {
    this.triggerHaptic([60, 80, 60, 80, 100]);
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      [0, 0.14].forEach((offset) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(140, now + offset);
        osc.frequency.linearRampToValueAtTime(95, now + offset + 0.09);

        gain.gain.setValueAtTime(0.12, now + offset);
        gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.09);

        // Low-pass filter to sound like an in-pocket vibration motor
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(260, now + offset);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + offset);
        osc.stop(now + offset + 0.09);
      });
    } catch {
      // Audio fallback silent
    }
  }

  // Concierge reception bell chime
  public playConciergeBell() {
    if (!this.enabled) return;
    this.triggerHaptic(30);
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(2093, now); // C7
      osc.frequency.exponentialRampToValueAtTime(2090, now + 1.2);

      gain.gain.setValueAtTime(0.14, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 1.2);
    } catch {
      // Audio fallback silent
    }
  }

  // Success confirmation chord
  public playSuccessChime() {
    if (!this.enabled) return;
    this.triggerHaptic([30, 40, 60]);
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C Major arpeggio

      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0.09, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.8);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.8);
      });
    } catch {
      // Audio fallback silent
    }
  }

  // Haptic trigger for mobile devices
  private triggerHaptic(pattern: number | number[]) {
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(pattern);
      } catch {
        // Vibrations might be restricted by browser policy
      }
    }
  }
}

export const sound = new SoundController();
