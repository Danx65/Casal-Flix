export type ChallengeCategory = 
  | 'Romance'
  | 'Sedução'
  | 'Comunicação'
  | 'Surpresas'
  | 'Encontros'
  | 'Diversão'
  | 'Conexão'
  | 'Inteligência Emocional';

export type ChallengeDifficulty = 'Fácil' | 'Médio' | 'Avançado';

export interface Challenge {
  id: string;
  title: string;
  description: string;
  category: ChallengeCategory;
  difficulty: ChallengeDifficulty;
  estimatedTime: string;
  tip: string;
}

export type QuestionCategory =
  | 'Sentimentos & Amor'
  | 'Memórias & Trajetória'
  | 'Futuro, Sonhos & Projetos'
  | 'Intimidade & Desejo'
  | 'Divertidas & Curiosas'
  | 'Vulnerabilidade & Conexão';

export interface Question {
  id: string;
  question: string;
  category: QuestionCategory;
  deepLevel: 'Suave' | 'Profunda' | 'Intensa';
}

export type PriceTier = 'free' | 'up50' | 'up100' | 'up300';

export interface Surprise {
  id: string;
  title: string;
  description: string;
  priceTier: PriceTier;
  estimatedCost: string;
  materials: string[];
  steps: string[];
}

export type DateFilter = 'Em casa' | 'Ao ar livre' | 'Noite' | 'Fim de semana' | 'Sem gastar dinheiro';

export interface DateIdea {
  id: string;
  title: string;
  description: string;
  tags: DateFilter[];
  vibe: string;
  timeNeeded: string;
}

export type FlirtCategory = 'Românticas' | 'Provocantes & Elegantes' | 'Divertidas & Descontraídas' | 'Elogios Sinceros';

export interface FlirtMessage {
  id: string;
  text: string;
  category: FlirtCategory;
  tone: string;
}

export interface PlanDay {
  day: number;
  title: string;
  description: string;
  category: string;
  tip: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  requiredCount: number;
  metric: 'completedChallenges' | 'streakDays' | 'completedPlanDays' | 'favoriteCount' | 'executedDates' | 'executedSurprises' | 'answeredQuestions';
}

export interface UserProfile {
  userName: string;
  partnerName: string;
  relationshipStartDate?: string;
  onboarded: boolean;
  createdAt: string;
}

export interface AppState {
  user: UserProfile;
  completedChallengeIds: string[];
  completedPlanDays: number[];
  favoriteIds: string[];
  executedDateIds: string[];
  executedSurpriseIds: string[];
  answeredQuestionIds: string[];
  dailyChallengeId: string;
  dailyChallengeDate: string;
  lastActiveDate: string;
  streakDays: number;
  notificationDismissedDate?: string;
}

export type NavTab = 
  | 'home'
  | 'desafios'
  | 'conversas'
  | 'encontros'
  | 'surpresas'
  | 'flerte'
  | 'plano30'
  | 'favoritos'
  | 'estatisticas'
  | 'perfil';
