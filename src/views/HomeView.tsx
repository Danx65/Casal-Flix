import React from 'react';
import { AppState, NavTab, Challenge } from '../types';
import { CATEGORY_IMAGES } from '../data/categoryImages';
import { CHALLENGES } from '../data/challenges';
import { Heart, Sparkles, RefreshCw, CheckCircle2, Bookmark, Flame, MessageCircle, Wine, Gift, Calendar, Clock, Trophy } from 'lucide-react';

interface Props {
  state: AppState;
  onTabChange: (tab: NavTab) => void;
  onToggleCompleteChallenge: (id: string) => void;
  onToggleFavorite: (id: string) => void;
  onRefreshDailyChallenge: () => void;
}

export const HomeView: React.FC<Props> = ({
  state,
  onTabChange,
  onToggleCompleteChallenge,
  onToggleFavorite,
  onRefreshDailyChallenge,
}) => {
  // Determine greeting based on time of day
  const hour = new Date().getHours();
  let timeGreeting = 'Boa noite';
  if (hour >= 5 && hour < 12) timeGreeting = 'Bom dia';
  else if (hour >= 12 && hour < 18) timeGreeting = 'Boa tarde';

  const userName = state.user.userName || 'Você';
  const partnerName = state.user.partnerName || 'Seu Amor';
  const fullGreeting = `${timeGreeting}, ${userName} e ${partnerName} ❤️`;

  // Daily Challenge item
  const dailyChallenge: Challenge =
    CHALLENGES.find((c) => c.id === state.dailyChallengeId) || CHALLENGES[0];

  const isCompleted = state.completedChallengeIds.includes(dailyChallenge.id);
  const isFavorited = state.favoriteIds.includes(dailyChallenge.id);

  // Big feature cards configuration matching reference UI
  const featureCards = [
    {
      id: 'desafios' as NavTab,
      title: 'DESAFIOS',
      subtitle: 'para fazer a dois',
      image: CATEGORY_IMAGES.desafios,
      icon: Flame,
    },
    {
      id: 'conversas' as NavTab,
      title: 'CONVERSAS',
      subtitle: 'que conectam',
      image: CATEGORY_IMAGES.conversas,
      icon: MessageCircle,
    },
    {
      id: 'encontros' as NavTab,
      title: 'ENCONTROS',
      subtitle: 'inesquecíveis',
      image: CATEGORY_IMAGES.encontros,
      icon: Wine,
    },
    {
      id: 'surpresas' as NavTab,
      title: 'SURPRESAS',
      subtitle: 'que encantam',
      image: CATEGORY_IMAGES.surpresas,
      icon: Gift,
    },
    {
      id: 'flerte' as NavTab,
      title: 'FLERTE E SEDUÇÃO',
      subtitle: 'no dia a dia',
      image: CATEGORY_IMAGES.flerte,
      icon: Sparkles,
    },
    {
      id: 'plano30' as NavTab,
      title: 'PLANO DE 30 DIAS',
      subtitle: 'para fortalecer',
      image: CATEGORY_IMAGES.plano30,
      icon: Calendar,
    },
  ];

  return (
    <div className="space-y-8 pb-12 animate-fade-in">
      {/* Top Welcome Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/50 text-rose-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sua Experiência Premium Ativa</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {fullGreeting}
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl">
              Escolha uma categoria e surpreenda quem você ama hoje. Pequenas atitudes diárias criam memórias inesquecíveis.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 bg-neutral-950/80 p-3.5 rounded-2xl border border-neutral-800/80">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-red-500 flex items-center justify-center text-white shadow-md">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] text-neutral-400 font-medium">Ofensiva de Casal</p>
              <p className="text-lg font-bold text-white flex items-center gap-1">
                <span>{state.streakDays} {state.streakDays === 1 ? 'dia' : 'dias'}</span>
                <span className="text-amber-400">🔥</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Challenge Big Highlight Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-red-950/40 border border-red-900/40 p-6 sm:p-8 shadow-xl shadow-red-950/20">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
            </span>
            <span className="text-xs font-extrabold uppercase tracking-wider text-rose-400">
              Desafio do Dia
            </span>
          </div>

          <button
            onClick={onRefreshDailyChallenge}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-800/80 hover:bg-neutral-700/80 text-neutral-300 hover:text-white text-xs font-medium transition-colors cursor-pointer"
            title="Sortear outro desafio"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Gerar outro</span>
          </button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md bg-red-950 border border-red-800/60 text-rose-300 text-[11px] font-bold">
              {dailyChallenge.category}
            </span>
            <span className="flex items-center gap-1 text-neutral-400 text-xs">
              <Clock className="w-3.5 h-3.5" />
              <span>{dailyChallenge.estimatedTime}</span>
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {dailyChallenge.title}
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            {dailyChallenge.description}
          </p>

          {dailyChallenge.tip && (
            <div className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800/80 text-xs text-rose-200/90 italic">
              💡 <strong>Dica do Guia:</strong> {dailyChallenge.tip}
            </div>
          )}
        </div>

        {/* Challenge Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-800/60">
          <button
            onClick={() => onToggleCompleteChallenge(dailyChallenge.id)}
            className={`flex-1 sm:flex-none px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
              isCompleted
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/30'
                : 'bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-lg shadow-red-600/30 active:scale-[0.98]'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isCompleted ? 'Desafio Concluído! ❤️' : 'Marcar como Concluído'}</span>
          </button>

          <button
            onClick={() => onToggleFavorite(dailyChallenge.id)}
            className={`px-4 py-3 rounded-xl border font-semibold text-sm transition-colors flex items-center gap-2 cursor-pointer ${
              isFavorited
                ? 'bg-rose-950/80 border-rose-600 text-rose-300'
                : 'bg-neutral-800/80 border-neutral-700/60 text-neutral-300 hover:bg-neutral-700 hover:text-white'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isFavorited ? 'fill-rose-400 text-rose-400' : ''}`} />
            <span>{isFavorited ? 'Favoritado' : 'Favoritar'}</span>
          </button>
        </div>
      </div>

      {/* Main Feature Cards Grid (Matching reference screenshot layout with images) */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-extrabold text-white tracking-tight">
            Explorar Categorias
          </h2>
          <p className="text-xs text-neutral-400">
            Selecione uma área para apimentar
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featureCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => onTabChange(card.id)}
                className="group relative h-64 sm:h-72 rounded-3xl overflow-hidden cursor-pointer shadow-xl border border-neutral-800 hover:border-red-600/60 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Background with Dark Overlay Gradient */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-center items-center">
                  <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-rose-400" />
                  </div>
                  <h3 className="text-xl font-black text-white tracking-wider uppercase leading-none drop-shadow-md">
                    {card.title}
                  </h3>
                  <p className="text-xs font-medium text-rose-200/90 mt-1.5 drop-shadow">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
