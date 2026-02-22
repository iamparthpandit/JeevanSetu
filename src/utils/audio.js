/**
 * Audio utility — Text-to-Speech using Web Speech API.
 * Works fully offline on most browsers.
 */

let currentUtterance = null;

export function speak(text) {
    if (!window.speechSynthesis) {
        console.warn('[Audio] Speech synthesis not supported');
        return;
    }

    // Cancel any ongoing speech
    stopAudio();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;
    utterance.lang = 'en-US';

    currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
}

export function stopAudio() {
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
    currentUtterance = null;
}

export function isSpeaking() {
    return window.speechSynthesis ? window.speechSynthesis.speaking : false;
}
