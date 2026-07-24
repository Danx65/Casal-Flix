import { AppState, UserProfile } from '../types';
import { CHALLENGES, getRandomChallenge } from '../data/challenges';
import confetti from 'canvas-confetti';

const STORAGE_KEY = 'guia10x_app_state_v1';

const defaultState: AppState = {
  user: {
    userName: '',
    partnerName: '',
    onboarded: false,
    createdAt: new Date().toISOString().split('T')[0],
  },
  completedChallengeIds: [],
  completedPlanDays: [],
  favoriteIds: [],
  executedDateIds: [],
  executedSurpriseIds: [],
  answeredQuestionIds: [],
  dailyChallengeId: CHALLENGES[0].id,
  dailyChallengeDate: new Date().toISOString().split('T')[0],
  lastActiveDate: new Date().toISOString().split('T')[0],
  streakDays: 1,
};

export function loadAppState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    const parsed: AppState = JSON.parse(raw);

    // Calculate streak and daily challenge update
    const today = new Date().toISOString().split('T')[0];
    
    // Check if daily challenge needs to refresh
    if (parsed.dailyChallengeDate !== today) {
      const available = CHALLENGES.filter(c => !parsed.completedChallengeIds.includes(c.id));
      const nextChallenge = available.length > 0 
        ? available[Math.floor(Math.random() * available.length)] 
        : CHALLENGES[Math.floor(Math.random() * CHALLENGES.length)];
      
      parsed.dailyChallengeId = nextChallenge.id;
      parsed.dailyChallengeDate = today;
    }

    // Check streak
    if (parsed.lastActiveDate) {
      const last = new Date(parsed.lastActiveDate);
      const curr = new Date(today);
      const diffTime = Math.abs(curr.getTime() - last.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        // consecutive day, updated on action
      } else if (diffDays > 1) {
        parsed.streakDays = 1; // reset if missed more than 1 day
      }
    }
    
    parsed.lastActiveDate = today;
    saveAppState(parsed);
    return parsed;
  } catch (e) {
    console.error('Failed to load state from LocalStorage', e);
    return defaultState;
  }
}

export function saveAppState(state: AppState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save state to LocalStorage', e);
  }
}

export function triggerConfetti() {
  try {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#e11d48', '#f43f5e', '#fb7185', '#ffffff', '#fbbf24']
    });
  } catch (err) {
    console.warn('Confetti effect failed', err);
  }
}

export function clearAllData(): void {
  localStorage.removeItem(STORAGE_KEY);
}
