import { Achievement } from '../types';

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-first-challenge',
    title: 'Primeiro Passo',
    description: 'Concluiu o seu primeiro desafio no aplicativo.',
    icon: '❤️',
    requiredCount: 1,
    metric: 'completedChallenges'
  },
  {
    id: 'ach-5-challenges',
    title: 'Casal Engajado',
    description: 'Completou 5 desafios fortalecendo o vínculo.',
    icon: '🔥',
    requiredCount: 5,
    metric: 'completedChallenges'
  },
  {
    id: 'ach-20-challenges',
    title: 'Mestres do Romance',
    description: 'Concluiu 20 desafios com cumplicidade.',
    icon: '👑',
    requiredCount: 20,
    metric: 'completedChallenges'
  },
  {
    id: 'ach-100-challenges',
    title: 'Relacionamento 10X',
    description: 'Alcançou a marca histórica de 100 desafios concluídos!',
    icon: '💎',
    requiredCount: 100,
    metric: 'completedChallenges'
  },
  {
    id: 'ach-streak-7',
    title: '7 Dias Incêndio',
    description: 'Manteve uma sequência de 7 dias consecutivos ativo.',
    icon: '⚡',
    requiredCount: 7,
    metric: 'streakDays'
  },
  {
    id: 'ach-streak-30',
    title: '30 Dias de Paixão',
    description: 'Incrível! 30 dias seguidos cuidando da relação.',
    icon: '🌟',
    requiredCount: 30,
    metric: 'streakDays'
  },
  {
    id: 'ach-plan-10',
    title: 'Rumo ao Topo',
    description: 'Completou 10 dias do Plano de 30 Dias.',
    icon: '📅',
    requiredCount: 10,
    metric: 'completedPlanDays'
  },
  {
    id: 'ach-plan-30',
    title: 'Plano Concluído!',
    description: 'Finalizou todos os 30 dias da jornada amorosa.',
    icon: '🏆',
    requiredCount: 30,
    metric: 'completedPlanDays'
  },
  {
    id: 'ach-favorites-5',
    title: 'Colecionador de Momentos',
    description: 'Guardou 5 itens nos Favoritos.',
    icon: '⭐',
    requiredCount: 5,
    metric: 'favoriteCount'
  },
  {
    id: 'ach-questions-10',
    title: 'Diálogos Profundos',
    description: 'Respondeu 10 perguntas na área de Conversas.',
    icon: '💬',
    requiredCount: 10,
    metric: 'answeredQuestions'
  },
  {
    id: 'ach-dates-1',
    title: 'Primeiro Encontro',
    description: 'Realizou a primeira ideia de encontro especial.',
    icon: '🍷',
    requiredCount: 1,
    metric: 'executedDates'
  },
  {
    id: 'ach-surprises-1',
    title: 'Primeira Surpresa',
    description: 'Surpreendeu seu amor com uma ideia do guia.',
    icon: '🎁',
    requiredCount: 1,
    metric: 'executedSurprises'
  }
];
