import React from 'react';
import { Flame, CheckCircle2, RefreshCw, Heart, Clock, Lightbulb } from 'lucide-react';
import { Challenge } from '../types';

interface Props {
  challenge: Challenge;
  isCompleted: boolean;
  isFavorite: boolean;
  onToggleComplete: () => void;
  onShuffle: () => void;
  onToggleFavorite: () => void;
}

export const DailyChallengeCard: React.FC<Props> = ({
  challenge,
  isCompleted,
  isFavorite,
  onToggleComplete,
  onShuffle,
  onToggleFavorite,
}) => {
  return (
    <div className={`relative p-6 sm:p-7 rounded-2xl transition-all duration-300 border ${
      isCompleted 
        ? 'bg-gradient-to-br from-emerald-950/40 via-[#121A16] to-emerald-950/30 border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.15)]' 
        : 'bg-gradient-to-br from-[#1A1A26] via-[#14141E] to-[#1E1218] border-red-500/30 shadow-[0_0_35px_rgba(229,9,20,0.15)]'
    } text-white mb-8 overflow-hidden`}>
      
      {/* Decorative ambient background */}
      <div className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none ${
        isCompleted ? 'bg-emerald-500/10' : 'bg-red-600/10'
      }`} />

      {/* Header Badges */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-red-600 to-rose-600 text-white flex items-center gap-1.5 shadow-sm">
            <Flame className="w-3.5 h-3.5 fill-white" /> Desafio do Dia
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-200 border border-white/10">
            {challenge.category}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-gray-300 font-medium">
          <Clock className="w-3.5 h-3.5 text-red-400" />
          <span>{challenge.estimatedTime}</span>
        </div>
      </div>

      {/* Title & Description */}
      <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 leading-tight">
        {challenge.title}
      </h3>
      <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
        {challenge.description}
      </p>

      {/* Tip Box */}
      {challenge.tip && (
        <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5 mb-6 text-xs sm:text-sm text-gray-300">
          <Lightbulb className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-yellow-300 font-semibold">Dica Prática: </strong>
            <span>{challenge.tip}</span>
          </div>
        </div>
      )}

      {/* Actions Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/10">
        <button
          onClick={onToggleComplete}
          className={`flex-1 min-w-[160px] py-3 px-5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition cursor-pointer active:scale-95 shadow-md ${
            isCompleted
              ? 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-emerald-600/30'
              : 'bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-red-600/40'
          }`}
        >
          <CheckCircle2 className="w-5 h-5" />
          <span>{isCompleted ? 'Desafio Concluído!' : 'Marcar como Concluído'}</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={onShuffle}
            title="Gerar outro desafio"
            className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-gray-200 transition cursor-pointer flex items-center justify-center gap-1 text-xs font-semibold"
          >
            <RefreshCw className="w-4 h-4" />
            <span className="hidden sm:inline">Gerar outro</span>
          </button>

          <button
            onClick={onToggleFavorite}
            title={isFavorite ? 'Remover dos favoritos' : 'Favoritar'}
            className={`p-3 rounded-xl border transition cursor-pointer flex items-center justify-center ${
              isFavorite
                ? 'bg-red-600/30 border-red-500 text-red-400'
                : 'bg-white/10 border-white/10 text-gray-300 hover:text-white'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
};
