import React from 'react';
import { AppState } from '../types';
import { CHALLENGES } from '../data/challenges';
import { ACHIEVEMENTS } from '../data/achievements';
import { Trophy, Flame, CheckCircle2, Award, Sparkles, Heart } from 'lucide-react';

interface Props {
  state: AppState;
}

export const StatsView: React.FC<Props> = ({ state }) => {
  const totalChallenges = CHALLENGES.length;
  const completedChallengesCount = state.completedChallengeIds.length;
  const completionPercentage = Math.round((completedChallengesCount / totalChallenges) * 100);

  // Calculate user metrics for achievements
  const metrics = {
    completedChallenges: completedChallengesCount,
    streakDays: state.streakDays,
    completedPlanDays: state.completedPlanDays.length,
    favoriteCount: state.favoriteIds.length,
    executedDates: state.executedDateIds.length,
    executedSurprises: state.executedSurpriseIds.length,
    answeredQuestions: state.answeredQuestionIds.length,
  };

  return (
    <div className="space-y-8 pb-12 animate-fade-in">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950 border border-red-800/60 text-rose-400 text-xs font-semibold mb-2">
          <Trophy className="w-3.5 h-3.5" />
          <span>Sua Jornada Amorosa em Números</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Estatísticas & Conquistas
        </h1>
        <p className="text-neutral-400 text-sm mt-1">
          Acompanhe o progresso do casal e desbloqueie medalhas exclusivas à medida que avançam.
        </p>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Stat 1 */}
        <div className="p-5 rounded-3xl bg-neutral-900/90 border border-neutral-800 space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-red-950 border border-red-800/80 flex items-center justify-center text-rose-400">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-neutral-400 font-medium">Desafios Concluídos</p>
            <p className="text-2xl font-black text-white">{completedChallengesCount}</p>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="p-5 rounded-3xl bg-neutral-900/90 border border-neutral-800 space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-amber-950 border border-amber-800/80 flex items-center justify-center text-amber-400">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-neutral-400 font-medium">Dias Consecutivos</p>
            <p className="text-2xl font-black text-amber-400">{state.streakDays} dias</p>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="p-5 rounded-3xl bg-neutral-900/90 border border-neutral-800 space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-rose-950 border border-rose-800/80 flex items-center justify-center text-rose-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-neutral-400 font-medium">Porcentagem do Guia</p>
            <p className="text-2xl font-black text-rose-400">{completionPercentage}%</p>
          </div>
        </div>

        {/* Stat 4 */}
        <div className="p-5 rounded-3xl bg-neutral-900/90 border border-neutral-800 space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-emerald-950 border border-emerald-800/80 flex items-center justify-center text-emerald-400">
            <Heart className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-neutral-400 font-medium">Plano 30 Dias</p>
            <p className="text-2xl font-black text-emerald-400">
              {state.completedPlanDays.length}/30
            </p>
          </div>
        </div>
      </div>

      {/* Gamification Achievements Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span>Sistema de Conquistas</span>
          </h2>
          <span className="text-xs font-semibold text-neutral-400">
            Desbloqueie realizando missões
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ACHIEVEMENTS.map((ach) => {
            const currentVal = metrics[ach.metric] || 0;
            const isUnlocked = currentVal >= ach.requiredCount;

            return (
              <div
                key={ach.id}
                className={`p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden flex items-start gap-4 ${
                  isUnlocked
                    ? 'bg-gradient-to-br from-neutral-900 via-neutral-900 to-amber-950/30 border-amber-500/60 shadow-lg shadow-amber-950/20'
                    : 'bg-neutral-900/50 border-neutral-800/80 opacity-60'
                }`}
              >
                {/* Icon Badge */}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 border ${
                    isUnlocked
                      ? 'bg-amber-950 border-amber-500/80 text-amber-300 shadow-md'
                      : 'bg-neutral-800 border-neutral-700 text-neutral-500 grayscale'
                  }`}
                >
                  {ach.icon}
                </div>

                <div className="space-y-1 flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-white truncate">{ach.title}</h3>
                    {isUnlocked && (
                      <span className="px-2 py-0.5 rounded-full bg-amber-500 text-neutral-950 font-black text-[10px]">
                        LIBERADO
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-neutral-300 leading-tight">{ach.description}</p>

                  <div className="pt-2">
                    <div className="flex items-center justify-between text-[10px] text-neutral-400 font-semibold mb-1">
                      <span>Progresso</span>
                      <span>
                        {Math.min(currentVal, ach.requiredCount)} / {ach.requiredCount}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-neutral-950 rounded-full overflow-hidden border border-neutral-800">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          isUnlocked ? 'bg-amber-400' : 'bg-neutral-700'
                        }`}
                        style={{
                          width: `${Math.min(100, (currentVal / ach.requiredCount) * 100)}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
