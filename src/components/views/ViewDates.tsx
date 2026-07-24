import React, { useState } from 'react';
import { DATES, filterDates } from '../../data/dates';
import { DateFilter, DateIdea } from '../../types';
import { Wine, Search, Heart, CheckCircle2, Shuffle, Clock, Compass, Sparkles } from 'lucide-react';

interface Props {
  favoriteIds: string[];
  executedIds: string[];
  onToggleFavorite: (id: string) => void;
  onToggleExecuted: (id: string) => void;
}

const FILTERS: ('Todos' | DateFilter)[] = [
  'Todos',
  'Em casa',
  'Ao ar livre',
  'Noite',
  'Fim de semana',
  'Sem gastar dinheiro',
];

export const ViewDates: React.FC<Props> = ({
  favoriteIds,
  executedIds,
  onToggleFavorite,
  onToggleExecuted,
}) => {
  const [activeFilter, setActiveFilter] = useState<'Todos' | DateFilter>('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [rouletteModal, setRouletteModal] = useState<DateIdea | null>(null);

  const list = filterDates(activeFilter).filter((d) =>
    d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDrawRandomDate = () => {
    const available = list.length > 0 ? list : DATES;
    const rand = available[Math.floor(Math.random() * available.length)];
    setRouletteModal(rand);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20 animate-fade-in">
      {/* Header */}
      <div className="p-6 rounded-2xl bg-[#12121A] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 mb-1">
            <Wine className="w-4 h-4" /> +200 Ideias de Encontros
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            Encontros Inesquecíveis
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 mt-1">
            Projetado para criar momentos mágicos em casa, na cidade ou ao ar livre.
          </p>
        </div>

        <button
          onClick={handleDrawRandomDate}
          className="px-5 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm shrink-0 transition flex items-center gap-2 cursor-pointer shadow-md shadow-red-600/30"
        >
          <Shuffle className="w-4 h-4" />
          <span>Roleta do Encontro</span>
        </button>
      </div>

      {/* Search & Filter Tags */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Filtrar encontros..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-[#161622] border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-red-500 transition"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {FILTERS.map((f) => {
            const isActive = activeFilter === f;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer border ${
                  isActive
                    ? 'bg-red-600 border-red-500 text-white shadow-md shadow-red-600/30'
                    : 'bg-[#161622] border-white/10 text-gray-300 hover:bg-white/10'
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>
      </div>

      {/* Dates Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {list.map((item) => {
          const isExec = executedIds.includes(item.id);
          const isFav = favoriteIds.includes(item.id);

          return (
            <div
              key={item.id}
              className={`p-5 rounded-2xl border transition flex flex-col justify-between ${
                isExec
                  ? 'bg-[#101914] border-emerald-500/30'
                  : 'bg-[#14141E] border-white/10 hover:border-red-500/30'
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-600/20 text-red-300 border border-red-500/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-base font-bold text-white mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 line-clamp-3 mb-3 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5 text-rose-400" /> {item.vibe}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-rose-400" /> {item.timeNeeded}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/10 gap-2">
                <button
                  onClick={() => onToggleFavorite(item.id)}
                  className={`p-2 rounded-lg border transition cursor-pointer ${
                    isFav
                      ? 'bg-red-600/20 border-red-500 text-red-400'
                      : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isFav ? 'fill-red-500 text-red-500' : ''}`} />
                </button>

                <button
                  onClick={() => onToggleExecuted(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
                    isExec
                      ? 'bg-emerald-600 text-white'
                      : 'bg-red-600 hover:bg-red-500 text-white'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isExec ? 'Já Realizamos' : 'Marcar como Feito'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Roulette Modal */}
      {rouletteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md p-6 bg-[#161622] border border-red-500/40 rounded-2xl text-white shadow-2xl text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-600/20 text-red-500 mb-3">
              <Sparkles className="w-6 h-6 animate-spin" />
            </div>

            <h3 className="text-xs font-bold uppercase text-red-400 mb-1">Encontro Sorteado</h3>
            <h4 className="text-xl font-black text-white mb-2">{rouletteModal.title}</h4>
            <p className="text-xs text-gray-300 mb-6 leading-relaxed">{rouletteModal.description}</p>

            <button
              onClick={() => setRouletteModal(null)}
              className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs cursor-pointer"
            >
              Uau, Vamos Fazer Esse!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
