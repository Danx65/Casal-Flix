import React from 'react';
import { PlanDay } from '../types';
import { PLAN_30_DAYS } from '../data/plan30';
import { Calendar, CheckCircle, Sparkles, Trophy, CheckCircle2 } from 'lucide-react';

interface Props {
  completedPlanDays: number[];
  onTogglePlanDay: (day: number) => void;
}

export const Plan30View: React.FC<Props> = ({ completedPlanDays, onTogglePlanDay }) => {
  const completedCount = completedPlanDays.length;
  const progressPercent = Math.round((completedCount / 30) * 100);

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-4 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950 border border-red-800/60 text-rose-400 text-xs font-semibold mb-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>Plano Completo de Transformação</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Calendário 30 Dias de Conexão
            </h1>
            <p className="text-neutral-400 text-sm mt-1">
              Uma missão especial por dia para renovar a cumplicidade e fortificar o amor.
            </p>
          </div>

          <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-800/80 text-center shrink-0">
            <p className="text-xs text-neutral-400 font-medium">Progresso do Plano</p>
            <p className="text-2xl font-black text-rose-400 mt-0.5">
              {progressPercent}% <span className="text-xs font-normal text-neutral-400">({completedCount}/30)</span>
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5 relative z-10">
          <div className="w-full h-3 bg-neutral-950 rounded-full overflow-hidden p-0.5 border border-neutral-800">
            <div
              className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* 30 Days Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PLAN_30_DAYS.map((planItem) => {
          const isDone = completedPlanDays.includes(planItem.day);

          return (
            <div
              key={planItem.day}
              onClick={() => onTogglePlanDay(planItem.day)}
              className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative flex flex-col justify-between gap-3 ${
                isDone
                  ? 'bg-emerald-950/20 border-emerald-500/80 shadow-lg shadow-emerald-950/30'
                  : 'bg-neutral-900/90 border-neutral-800 hover:border-neutral-700 hover:-translate-y-0.5'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider ${
                      isDone
                        ? 'bg-emerald-500 text-neutral-950'
                        : 'bg-red-950 text-rose-300 border border-red-800/60'
                    }`}
                  >
                    Dia {planItem.day}
                  </span>

                  {isDone ? (
                    <span className="flex items-center gap-1 text-emerald-400 text-xs font-bold bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-800">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Concluído
                    </span>
                  ) : (
                    <span className="text-xs text-neutral-500 font-medium">
                      {planItem.category}
                    </span>
                  )}
                </div>

                <h3
                  className={`text-base font-bold ${
                    isDone ? 'text-emerald-200 line-through decoration-emerald-500/60' : 'text-white'
                  }`}
                >
                  {planItem.title}
                </h3>

                <p className="text-neutral-300 text-xs leading-relaxed">
                  {planItem.description}
                </p>

                {planItem.tip && (
                  <p className="text-[11px] text-neutral-400 italic bg-neutral-950 p-2 rounded-lg border border-neutral-800">
                    💡 {planItem.tip}
                  </p>
                )}
              </div>

              <div className="pt-2 border-t border-neutral-800/60 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-neutral-400">
                  {isDone ? 'Clique para desmarcar' : 'Toque para concluir missão'}
                </span>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center border ${
                    isDone
                      ? 'bg-emerald-500 border-emerald-400 text-neutral-950'
                      : 'border-neutral-700 text-transparent hover:border-red-500'
                  }`}
                >
                  ✓
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
