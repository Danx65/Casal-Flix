import React, { useState } from 'react';
import { Flame, CheckCircle2, RefreshCw, Heart, Info, Play, Plus, Sparkles, X, Clock, Award, Lightbulb } from 'lucide-react';
import { Challenge, UserProfile, NavTab } from '../types';
import { CATEGORY_IMAGES } from '../data/categoryImages';

interface Props {
  user: UserProfile;
  streakDays: number;
  dailyChallenge: Challenge;
  isCompleted: boolean;
  isFavorite: boolean;
  completedCount: number;
  planPercent: number;
  onToggleComplete: () => void;
  onShuffle: () => void;
  onToggleFavorite: () => void;
  onSelectTab: (tab: NavTab) => void;
}

export const NetflixHero: React.FC<Props> = ({
  user,
  streakDays,
  dailyChallenge,
  isCompleted,
  isFavorite,
  completedCount,
  planPercent,
  onToggleComplete,
  onShuffle,
  onToggleFavorite,
  onSelectTab,
}) => {
  const [showInfoModal, setShowInfoModal] = useState(false);

  const userDisplayName = user.userName || 'Você';
  const partnerDisplayName = user.partnerName || 'Seu Amor';

  // Get backdrop image based on challenge category
  const categoryKey = (dailyChallenge.category?.toLowerCase() || 'desafios') as keyof typeof CATEGORY_IMAGES;
  const backdropImage = CATEGORY_IMAGES[categoryKey] || CATEGORY_IMAGES.desafios;

  return (
    <div className="space-y-6 mb-8">
      {/* Top Netflix Brand Header Bar */}
      <div className="flex items-center justify-between p-3 sm:p-4 rounded-2xl bg-[#0D0D14]/90 border border-white/10 backdrop-blur-md shadow-lg">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-black text-lg sm:text-xl tracking-tighter text-white">
            <span className="px-2 py-0.5 rounded bg-[#E50914] text-white font-extrabold text-xs shadow-md">
              N
            </span>
            <span className="tracking-tight">CASAL<span className="text-[#E50914]">FLIX</span></span>
          </div>
          <span className="hidden sm:inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
            PREMIUM
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-[10px] text-gray-400 font-medium">Bem-vindos</p>
            <p className="text-xs sm:text-sm font-bold text-white truncate max-w-[160px]">
              {userDisplayName} & {partnerDisplayName}
            </p>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-950/60 border border-red-500/40 text-white shadow-inner">
            <Flame className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span className="text-xs font-extrabold">{streakDays}d</span>
          </div>
        </div>
      </div>

      {/* Main Netflix Billboard / Spotlight Hero */}
      <div className="relative rounded-3xl overflow-hidden border border-red-600/30 shadow-[0_10px_50px_rgba(229,9,20,0.2)] bg-[#12121A]">
        {/* Background image & cinematic gradient overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src={backdropImage}
            alt={dailyChallenge.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-90 scale-105"
          />
          {/* Netflix style gradient overlay: dark left to transparent right, black gradient bottom */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D14] via-[#0D0D14]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D14] via-[#0D0D14]/60 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 p-6 sm:p-10 flex flex-col justify-end min-h-[380px] sm:min-h-[440px] text-white">
          
          {/* Netflix Badge Row */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-1 rounded-md bg-[#E50914] text-white text-[11px] font-black uppercase tracking-wider flex items-center gap-1 shadow-md">
              <Sparkles className="w-3 h-3 fill-white" /> SÉRIE ORIGINAL
            </span>
            <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-gray-200 text-[11px] font-bold">
              EM DESTAQUE HOJE
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-none mb-3 drop-shadow-lg max-w-2xl">
            {dailyChallenge.title}
          </h1>

          {/* Netflix Metadata Row */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-gray-300 mb-4">
            <span className="text-[#46d369] font-black text-sm flex items-center gap-1">
              99% de Match
            </span>
            <span className="px-1.5 py-0.5 rounded bg-red-600/30 text-red-400 border border-red-500/40 text-[10px] font-extrabold uppercase">
              Top 1 Hoje
            </span>
            <span className="px-1.5 py-0.5 rounded border border-gray-500 text-[10px]">
              18+
            </span>
            <span className="flex items-center gap-1 text-gray-300">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
              {dailyChallenge.estimatedTime}
            </span>
            <span className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] font-bold text-gray-200">
              4K Ultra HD
            </span>
            <span className="px-2 py-0.5 rounded-full bg-white/10 text-xs font-medium text-rose-200">
              {dailyChallenge.category}
            </span>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl line-clamp-3 mb-6 leading-relaxed drop-shadow-md">
            {dailyChallenge.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onToggleComplete}
              className={`px-6 py-3.5 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition cursor-pointer active:scale-95 shadow-xl ${
                isCompleted
                  ? 'bg-[#46d369] text-black hover:bg-[#3db85c]'
                  : 'bg-white text-black hover:bg-gray-200'
              }`}
            >
              {isCompleted ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-black" />
                  <span>Concluído Hoje</span>
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 fill-black text-black" />
                  <span>Iniciar Experiência</span>
                </>
              )}
            </button>

            <button
              onClick={onToggleFavorite}
              className={`px-4 py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 backdrop-blur-md transition cursor-pointer border ${
                isFavorite
                  ? 'bg-red-600/30 border-red-500 text-white'
                  : 'bg-black/60 hover:bg-black/80 border-white/20 text-white'
              }`}
            >
              {isFavorite ? (
                <>
                  <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                  <span>Na Minha Lista</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 text-white" />
                  <span>Minha Lista</span>
                </>
              )}
            </button>

            <button
              onClick={() => setShowInfoModal(true)}
              className="px-4 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-black/60 hover:bg-black/80 border border-white/20 text-white backdrop-blur-md flex items-center gap-2 transition cursor-pointer"
            >
              <Info className="w-4 h-4 text-white" />
              <span>Mais Informações</span>
            </button>

            <button
              onClick={onShuffle}
              title="Próxima Sugestão"
              className="p-3.5 rounded-xl bg-black/60 hover:bg-black/80 border border-white/20 text-gray-300 hover:text-white backdrop-blur-md transition cursor-pointer flex items-center justify-center"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Netflix Quick Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 rounded-xl bg-[#12121A] border border-white/10 flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-red-600/20 text-red-500">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Desafios Concluídos</p>
            <p className="text-base font-extrabold text-white">{completedCount} <span className="text-xs text-gray-400 font-normal">experiências</span></p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#12121A] border border-white/10 flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-red-600/20 text-red-500">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Sequência Ativa</p>
            <p className="text-base font-extrabold text-white">{streakDays} <span className="text-xs text-gray-400 font-normal">dias seguidos</span></p>
          </div>
        </div>

        <div 
          onClick={() => onSelectTab('plano30')}
          className="p-4 rounded-xl bg-[#12121A] hover:bg-[#181824] border border-white/10 hover:border-red-500/40 flex items-center gap-3 cursor-pointer transition"
        >
          <div className="p-2.5 rounded-lg bg-amber-600/20 text-amber-400">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Jornada 30 Dias</p>
            <p className="text-base font-extrabold text-white">{planPercent}% <span className="text-xs text-gray-400 font-normal">completo</span></p>
          </div>
        </div>
      </div>

      {/* Modal Details Info */}
      {showInfoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg p-6 bg-[#161622] border border-red-500/30 rounded-2xl text-white shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowInfoModal(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-lg bg-white/5 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-black uppercase bg-[#E50914] text-white">
                Série Original
              </span>
              <span className="text-[#46d369] font-bold text-xs">99% de Match</span>
              <span className="text-xs text-gray-400">• {dailyChallenge.estimatedTime}</span>
            </div>

            <h3 className="text-2xl font-black text-white mb-2">{dailyChallenge.title}</h3>
            <p className="text-xs sm:text-sm text-gray-300 mb-5 leading-relaxed">{dailyChallenge.description}</p>

            {dailyChallenge.tip && (
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 mb-6">
                <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase text-amber-300 mb-1">Dica de Especialista</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">{dailyChallenge.tip}</p>
                </div>
              </div>
            )}

            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  onToggleComplete();
                  setShowInfoModal(false);
                }}
                className={`flex-1 py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition ${
                  isCompleted
                    ? 'bg-[#46d369] text-black font-extrabold'
                    : 'bg-[#E50914] hover:bg-red-600 text-white font-bold'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{isCompleted ? 'Concluído!' : 'Marcar como Concluído'}</span>
              </button>

              <button
                onClick={() => {
                  onToggleFavorite();
                }}
                className={`p-3.5 rounded-xl border transition cursor-pointer ${
                  isFavorite
                    ? 'bg-red-600/30 border-red-500 text-red-400'
                    : 'bg-white/10 border-white/10 text-gray-300'
                }`}
              >
                <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
