import React from 'react';
import { ACHIEVEMENTS } from '../../data/achievements';
import { AppState } from '../../types';
import { Award, Flame, CheckCircle2, Trophy, Crown, Gift, Wine, MessageCircle, Heart, Zap } from 'lucide-react';

interface Props {
  state: AppState;
}

export const ViewStatsAndAchievements: React.FC<Props> = ({ state }) => {
  const completedChallengesCount = state.completedChallengeIds.length;
  const streakDays = state.streakDays;
  const planCompletedCount = state.completedPlanDays.length;
  const planPercent = Math.round((planCompletedCount / 30) * 100);
  const totalFavorites = state.favoriteIds.length;
  const totalDates = state.executedDateIds.length;
  const totalSurprises = state.executedSurpriseIds.length;
  const totalQuestions = state.answeredQuestionIds.length;

  // Icon mapper for achievements
  const getBadgeIcon = (iconName: string, isUnlocked: boolean) => {
    const cls = `w-6 h-6 ${isUnlocked ? 'text-amber-400' : 'text-gray-500'}`;
    switch (iconName) {
      case 'Flame': return <Flame className={cls} />;
      case 'Zap': return <Zap className={cls} />;
      case 'Trophy': return <Trophy className={cls} />;
      case 'Crown': return <Crown className={cls} />;
      case 'Wine': return <Wine className={cls} />;
      case 'Gift': return <Gift className={cls} />;
      case 'MessageCircle': return <MessageCircle className={cls} />;
      case 'Heart': return <Heart className={cls} />;
      default: return <Award className={cls} />;
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20 animate-fade-in">
      {/* Header */}
      <div className="p-6 rounded-2xl bg-[#12121A] border border-white/10">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 mb-1">
          <Award className="w-4 h-4" /> Estatísticas & Gamificação
        </div>
        <h2 className="text-2xl font-black text-white tracking-tight">
          Painel de Conquistas do Casal
        </h2>
        <p className="text-xs sm:text-sm text-gray-300 mt-1">
          Acompanhe o progresso da jornada do casal, números e selos de conquistas desbloqueados.
        </p>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-[#14141E] border border-white/10 text-center">
          <CheckCircle2 className="w-7 h-7 text-emerald-400 mx-auto mb-2" />
          <p className="text-2xl font-black text-white">{completedChallengesCount}</p>
          <p className="text-xs font-semibold text-gray-400 uppercase mt-0.5">Desafios Feitos</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#14141E] border border-white/10 text-center">
          <Flame className="w-7 h-7 text-rose-500 mx-auto mb-2 fill-rose-500 animate-pulse" />
          <p className="text-2xl font-black text-white">{streakDays} Dias</p>
          <p className="text-xs font-semibold text-gray-400 uppercase mt-0.5">Sequência Ativa</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#14141E] border border-white/10 text-center">
          <Trophy className="w-7 h-7 text-amber-400 mx-auto mb-2" />
          <p className="text-2xl font-black text-white">{planPercent}%</p>
          <p className="text-xs font-semibold text-gray-400 uppercase mt-0.5">Plano 30 Dias</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#14141E] border border-white/10 text-center">
          <Heart className="w-7 h-7 text-rose-400 mx-auto mb-2 fill-rose-400" />
          <p className="text-2xl font-black text-white">{totalFavorites}</p>
          <p className="text-xs font-semibold text-gray-400 uppercase mt-0.5">Itens Salvos</p>
        </div>
      </div>

      {/* Additional Counts Row */}
      <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#161622] border border-white/10 text-center text-xs text-gray-300">
        <div>
          <span className="font-extrabold text-white text-base block">{totalDates}</span>
          <span>Encontros Realizados</span>
        </div>
        <div>
          <span className="font-extrabold text-white text-base block">{totalSurprises}</span>
          <span>Surpresas Feitas</span>
        </div>
        <div>
          <span className="font-extrabold text-white text-base block">{totalQuestions}</span>
          <span>Conversas Respondidas</span>
        </div>
      </div>

      {/* Gamification Badges List */}
      <div className="space-y-4">
        <h3 className="text-lg font-extrabold text-white tracking-tight flex items-center gap-2">
          <Crown className="w-5 h-5 text-amber-400" /> Sistema de Conquistas & Insígnias
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ACHIEVEMENTS.map((badge) => {
            let currentVal = 0;
            switch (badge.metric) {
              case 'completedChallenges': currentVal = completedChallengesCount; break;
              case 'streakDays': currentVal = streakDays; break;
              case 'completedPlanDays': currentVal = planCompletedCount; break;
              case 'favoriteCount': currentVal = totalFavorites; break;
              case 'executedDates': currentVal = totalDates; break;
              case 'executedSurprises': currentVal = totalSurprises; break;
              case 'answeredQuestions': currentVal = totalQuestions; break;
            }

            const isUnlocked = currentVal >= badge.requiredCount;
            const badgeProgress = Math.min(100, Math.round((currentVal / badge.requiredCount) * 100));

            return (
              <div
                key={badge.id}
                className={`p-5 rounded-2xl border transition flex items-start gap-4 ${
                  isUnlocked
                    ? 'bg-gradient-to-br from-amber-950/30 via-[#1A1812] to-[#14141E] border-amber-500/40 shadow-[0_0_20px_rgba(245,158,11,0.15)]'
                    : 'bg-[#14141E] border-white/10 opacity-70'
                }`}
              >
                <div className={`p-3.5 rounded-2xl shrink-0 ${
                  isUnlocked ? 'bg-amber-500/20 border border-amber-500/30' : 'bg-white/5 border border-white/10'
                }`}>
                  {getBadgeIcon(badge.icon, isUnlocked)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-sm font-bold text-white truncate">{badge.title}</h4>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isUnlocked ? 'bg-amber-500 text-black' : 'bg-white/10 text-gray-400'
                    }`}>
                      {isUnlocked ? 'Desbloqueado 🏆' : `${currentVal}/${badge.requiredCount}`}
                    </span>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed mb-3">{badge.description}</p>

                  {/* Progress bar for locked badges */}
                  {!isUnlocked && (
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-500 rounded-full transition-all duration-300"
                        style={{ width: `${badgeProgress}%` }}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
