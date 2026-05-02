import { useEffect, useMemo, useState } from 'react';
import { VoiceHelper } from '#/utils/voice.util';

/**
 * Custom hook for global Text-to-Speech functionality.
 * Listens for text selection and speaks it if enabled.
 * 
 * @returns {Object} State and methods for voice control.
 */
export function useVoice() {
  const [isEnabled, setIsEnabled] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('tts-enabled') === 'true';
  });

  const voiceHelper = useMemo(() => new VoiceHelper(), []);

  useEffect(() => {
    if (!isEnabled) {
      voiceHelper.stop();
      return;
    }

    const handleMouseUp = () => {
      // Small timeout to ensure selection is complete
      setTimeout(() => {
        const text = VoiceHelper.getSelectedText();
        if (text && text.length > 1) { // Minimal 2 characters to avoid accidental noise
          voiceHelper.speak(text);
        }
      }, 50);
    };

    const handleDoubleClick = () => {
      // Double click naturally selects a word
      setTimeout(() => {
        const text = VoiceHelper.getSelectedText();
        if (text) {
          voiceHelper.speak(text);
        }
      }, 50);
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('dblclick', handleDoubleClick);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('dblclick', handleDoubleClick);
      voiceHelper.stop();
    };
  }, [isEnabled, voiceHelper]);

  const toggleVoice = (enabled: boolean) => {
    setIsEnabled(enabled);
    localStorage.setItem('tts-enabled', String(enabled));
    if (!enabled) voiceHelper.stop();
  };

  return {
    isEnabled,
    toggleVoice,
    speak: (text: string) => voiceHelper.speak(text),
  };
}
