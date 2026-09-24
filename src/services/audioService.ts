// Web Audio API procedural sound engine - 100% offline and zero dependencies

class AudioService {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true; // Por defecto silencioso para respetar accesibilidad y comodidad
  private ambientGain: GainNode | null = null;
  private ambientNoiseNode: AudioBufferSourceNode | null = null;
  private isAmbientRunning: boolean = false;

  constructor() {
    // Cargar preferencia guardada o mantener silenciado
    const saved = localStorage.getItem('guardianes_sound_enabled');
    this.isMuted = saved !== 'true';
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public toggleSound(): boolean {
    this.initContext();
    this.isMuted = !this.isMuted;
    localStorage.setItem('guardianes_sound_enabled', (!this.isMuted).toString());

    if (this.isMuted) {
      this.stopAmbient();
    } else {
      this.playAmbient();
      this.playClueDiscovered();
    }
    return !this.isMuted;
  }

  // Sonido ambiental de brisa en el dosel y suave murmullo de agua
  public playAmbient() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx || this.isAmbientRunning) return;

    try {
      const bufferSize = this.ctx.sampleRate * 4;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);

      // Ruido rosa / marrón suave para simular viento en las hojas y corriente suave
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99 * b0 + white * 0.05;
        b1 = 0.96 * b1 + white * 0.11;
        b2 = 0.86 * b2 + white * 0.25;
        data[i] = (b0 + b1 + b2) * 0.04;
      }

      this.ambientNoiseNode = this.ctx.createBufferSource();
      this.ambientNoiseNode.buffer = buffer;
      this.ambientNoiseNode.loop = true;

      // Filtro pasa bajos para darle calidez orgánica de bosque
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 420;

      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.ambientGain.gain.exponentialRampToValueAtTime(0.06, this.ctx.currentTime + 3);

      this.ambientNoiseNode.connect(filter);
      filter.connect(this.ambientGain);
      this.ambientGain.connect(this.ctx.destination);

      this.ambientNoiseNode.start();
      this.isAmbientRunning = true;
    } catch (e) {
      console.warn('Audio ambient no inicializado:', e);
    }
  }

  public stopAmbient() {
    if (this.ambientGain && this.ctx) {
      try {
        this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.8);
        setTimeout(() => {
          if (this.ambientNoiseNode) {
            try { this.ambientNoiseNode.stop(); } catch {}
            this.ambientNoiseNode = null;
          }
          this.isAmbientRunning = false;
        }, 900);
      } catch {
        this.isAmbientRunning = false;
      }
    } else {
      this.isAmbientRunning = false;
    }
  }

  // Tono melódico cuando el estudiante encuentra una pista o responde con acierto
  public playClueDiscovered() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // Do5
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.12); // Mi5
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.28); // Sol5

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.12, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.65);
    } catch (e) {
      console.warn('Audio clue error:', e);
    }
  }

  // Toque ceremonial armónico cuando se desbloquea una insignia en el pasaporte
  public playBadgeUnlocked() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const notes = [440, 554.37, 659.25, 880]; // Acorde mayor brillante (La, Do#, Mi, La)
      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const now = this.ctx.currentTime + idx * 0.08;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.1, now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 1.3);
      });
    } catch (e) {
      console.warn('Audio badge error:', e);
    }
  }
}

export const audioService = new AudioService();
