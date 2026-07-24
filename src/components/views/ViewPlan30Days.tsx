import React, { useState } from 'react';
import { PLAN_30_DAYS } from '../../data/plan30Days';
import { PlanDay } from '../../types';
import { Calendar, CheckCircle2, Award, Lightbulb, Sparkles, X, ChevronRight } from 'lucide-react';
import { triggerConfetti } from '../../lib/storage';

interface Props {
  completedPlanDays: number[];
  onTogglePlanDay: (day: number) => void;
}

export const ViewPlan30Days: React.FC<Props> = ({
  completedPlanDays,
  onTogglePlanDay,
}) => {
  const [activeDayModal, setActiveDayModal] = useState<PlanDay | null>(null);

  const completedCount = completedPlanDays.length;
  const progressPercent = Math.round((completedCount / 30) * 100);

  const handleToggleComplete = (day: number) => {
    onTogglePlanDay(day);
    if (!completedPlanDays.includes(day)) {
      triggerConfetti();
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20 animate-fade-in">
      {/* Header */}
      <div className="p-6 rounded-2xl bg-[#12121A] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 mb-1">
            <Calendar className="w-4 h-4" /> Plano de 30 Dias
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            Calendário de Transformação 10X
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 mt-1">
            Uma missão simples por dia. Ao concluir cada dia, o indicador fica verde!
          </p>
        </div>

        {/* Progress Circle / Box */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 shrink-0 text-center min-w-[160px]">
          <span className="text-2xl font-black text-emerald-400 block">{progressPercent}%</span>
          <span className="text-xs text-gray-400 font-semibold">{completedCount} de 30 Dias</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="p-4 rounded-2xl bg-[#14141E] border border-white/10">
        <div className="flex items-center justify-between text-xs font-bold text-gray-300 mb-2">
          <span>Progresso do Plano de 30 Dias</span>
          <span className="text-emerald-400">{completedCount} Dias Concluídos</span>
        </div>
        <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden p-0.5">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500 shadow-[0_0_12px_#10B981]"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* 30 Days Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-6 gap-3">
        {PLAN_30_DAYS.map((item) => {
          const isDone = completedPlanDays.includes(item.day);

          return (
            <div
              key={item.day}
              onClick={() => setActiveDayModal(item)}
              className={`relative p-4 rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col justify-between h-28 text-center overflow-hidden active:scale-95 ${
                isDone
                  ? 'bg-gradient-to-br from-emerald-950/80 to-[#101914] border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                  : 'bg-[#14141E] border-white/10 hover:border-red-500/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs font-black px-2 py-0.5 rounded-full ${
                  isDone ? 'bg-emerald-500 text-black' : 'bg-white/10 text-gray-300'
                }`}>
                  Dia {item.day}
                </span>
                {isDone && <CheckCircle2 className="w-4 h-4 text-emerald-400 fill-emerald-400" />}
              </div>

              <p className="text-xs font-bold text-white line-clamp-2 my-auto leading-snug">
                {item.title}
              </p>

              <span className="text-[10px] text-gray-400 block truncate font-medium">
                {isDone ? 'Concluído ✨' : 'Clique para ver'}
              </span>
            </div>
          );
        })}
      </div>

      {/* Day Mission Detail Modal */}
      {activeDayModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md p-6 bg-[#161622] border border-rose-500/30 rounded-2xl text-white shadow-2xl">
            <button
              onClick={() => setActiveDayModal(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-lg bg-white/5 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-rose-600 text-white">
                DIA {activeDayModal.day} DE 30
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-gray-300">
                {activeDayModal.category}
              </span>
            </div>

            <h3 className="text-xl font-black text-white mb-2">{activeDayModal.title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">{activeDayModal.description}</p>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 mb-6 flex items-start gap-2.5 text-xs text-gray-300">
              <Lightbulb className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-yellow-300 font-bold block mb-0.5">Dica para Hoje:</strong>
                <span>{activeDayModal.tip}</span>
              </div>
            </div>

            <button
              onClick={() => handleToggleComplete(activeDayModal.day)}
              className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition cursor-pointer ${
                completedPlanDays.includes(activeDayModal.day)
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                  : 'bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-lg shadow-red-600/40'
              }`}
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>
                {completedPlanDays.includes(activeDayModal.day)
                  ? 'Dia Concluído! (Ficou Verde)'
                  : 'Marcar Dia como Concluído!'}
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
