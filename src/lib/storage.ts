import { AppState, UserProfile } from '../types';
import { CHALLENGES } from '../data/challenges';
import confetti from 'canvas-confetti';

const STORAGE_KEY = 'guia10x_app_state_v1';

const DEFAULT_PROFILE: UserProfile = {
  userName: '',
  partnerName: '',
  onboarded: false,
  createdAt: new Date().toISOString().split('T')[0]
};

const INITIAL_STATE: AppState = {
  user: DEFAULT_PROFILE,
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
    if (!raw) return INITIAL_STATE;
    const parsed = JSON.parse(raw);
    
    // Check daily challenge updates based on today's date
    const todayStr = new Date().toISOString().split('T')[0];
    if (parsed.dailyChallengeDate !== todayStr) {
      // Pick deterministic or random daily challenge for today
      const todayNum = parseInt(todayStr.replace(/-/g, ''), 10);
      const nextIdx = todayNum % CHALLENGES.length;
      parsed.dailyChallengeId = CHALLENGES[nextIdx].id;
      parsed.dailyChallengeDate = todayStr;
      
      // Update streak
      const lastActive = new Date(parsed.lastActiveDate || todayStr);
      const today = new Date(todayStr);
      const diffDays = Math.floor((today.getTime() - lastActive.getTime()) / (1000 * 3600 * 24));
      
      if (diffDays === 1) {
        parsed.streakDays = (parsed.streakDays || 0) + 1;
      } else if (diffDays > 1) {
        parsed.streakDays = 1;
      }
      parsed.lastActiveDate = todayStr;
    }
    
    return { ...INITIAL_STATE, ...parsed };
  } catch {
    return INITIAL_STATE;
  }
}

export function saveAppState(state: AppState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save to localStorage:', e);
  }
}

export function triggerConfetti() {
  try {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF2E55', '#E50914', '#FFD700', '#FFFFFF']
    });
  } catch {
    // Ignore if canvas confetti isn't available
  }
}
