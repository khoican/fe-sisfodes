/**
 * Helper class for Text-to-Speech functionality using Web Speech API.
 * Follows OOP principles for better encapsulation and maintenance.
 */
export class VoiceHelper {
  private synth: SpeechSynthesis | null = typeof window !== 'undefined' ? window.speechSynthesis : null;
  private lang: string;
  private rate: number;
  private pitch: number;

  /**
   * @param {string} lang - Language code (default: 'id-ID').
   * @param {number} rate - Speaking rate (default: 1.0).
   * @param {number} pitch - Pitch (default: 1.0).
   */
  constructor(lang: string = 'id-ID', rate: number = 1.0, pitch: number = 1.0) {
    this.lang = lang;
    this.rate = rate;
    this.pitch = pitch;
  }

  /**
   * Speaks the provided text.
   * Cancels any ongoing speech before starting.
   * @param {string} text - Text to speak.
   */
  public speak(text: string): void {
    if (!this.synth || !text.trim()) return;

    this.synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = this.lang;
    utterance.rate = this.rate;
    utterance.pitch = this.pitch;

    // Try to find an Indonesian voice if available
    const voices = this.synth.getVoices();
    const idVoice = voices.find((v) => v.lang.includes('id-ID') || v.lang.includes('id_ID'));
    if (idVoice) {
      utterance.voice = idVoice;
    }

    this.synth.speak(utterance);
  }

  /**
   * Stops any ongoing speech.
   */
  public stop(): void {
    if (this.synth) {
      this.synth.cancel();
    }
  }

  /**
   * Static method to get currently selected text from the window.
   * @returns {string} The selected text.
   */
  public static getSelectedText(): string {
    if (typeof window === 'undefined') return '';
    const selection = window.getSelection();
    return selection ? selection.toString().trim() : '';
  }
}
