import React from 'react';
import { NetflixHero } from '../NetflixHero';
import { CategoryGrid } from '../CategoryGrid';
import { AppState, NavTab } from '../../types';
import { CHALLENGES, getChallengeById } from '../../data/challenges';
import { ArrowRight } from 'lucide-react';

interface Props {
  state: AppState;
  onSelectTab: (tab: NavTab) => void;
  onToggleCompleteChallenge: (id: string) => void;
  onToggleFavorite: (id: string) => void;
  onShuffleDailyChallenge: () => void;
}

export const ViewHome: React.FC<Props> = ({
  state,
  onSelectTab,
  onToggleCompleteChallenge,
  onToggleFavorite,
  onShuffleDailyChallenge,
}) => {
  const dailyChallenge = getChallengeById(state.dailyChallengeId) || CHALLENGES[0];
  const isDailyCompleted = state.completedChallengeIds.includes(dailyChallenge.id);
  const isDailyFavorite = state.favoriteIds.includes(dailyChallenge.id);

  const completedCount = state.completedChallengeIds.length;
  const planCompletedCount = state.completedPlanDays.length;
  const planPercent = Math.round((planCompletedCount / 30) * 100);

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20 animate-fade-in">
      {/* Netflix Hero Spotlight Header */}
      <NetflixHero
        user={state.user}
        streakDays={state.streakDays}
        dailyChallenge={dailyChallenge}
        isCompleted={isDailyCompleted}
        isFavorite={isDailyFavorite}
        completedCount={completedCount}
        planPercent={planPercent}
        onToggleComplete={() => onToggleCompleteChallenge(dailyChallenge.id)}
        onShuffle={onShuffleDailyChallenge}
        onToggleFavorite={() => onToggleFavorite(dailyChallenge.id)}
        onSelectTab={onSelectTab}
      />

      {/* Main Category Grid ("Explore por Categoria") */}
      <CategoryGrid onSelectCategory={onSelectTab} />

      {/* Callout to 30 Day Plan */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#E50914]/20 via-[#1A1218] to-[#12121A] border border-red-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-[#E50914]">Jornada Recomendada</span>
          <h4 className="text-lg font-bold text-white mt-1">Quer transformar sua relação em 30 Dias?</h4>
          <p className="text-xs text-gray-300 mt-1">Siga a nossa jornada guiada passo a passo com uma missão por dia.</p>
        </div>
        <button
          onClick={() => onSelectTab('plano30')}
          className="px-5 py-3 rounded-xl bg-[#E50914] hover:bg-red-600 text-white font-bold text-xs sm:text-sm shrink-0 transition flex items-center gap-2 cursor-pointer shadow-lg shadow-red-600/30 active:scale-95"
        >
          <span>Acessar Calendário</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
