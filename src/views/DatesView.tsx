import React, { useState } from 'react';
import { DateIdea, DateFilter } from '../types';
import { DATES, filterDates } from '../data/dates';
import { Wine, Clock, CheckCircle2, Bookmark, Sparkles, Filter } from 'lucide-react';

interface Props {
  executedIds: string[];
  favoriteIds: string[];
  onToggleExecuted: (id: string) => void;
  onToggleFavorite: (id: string) => void;
}

const FILTERS: (DateFilter | 'Todos')[] = [
  'Todos',
  'Em casa',
  'Ao ar livre',
  'Noite',
  'Fim de semana',
  'Sem gastar dinheiro',
];

export const DatesView: React.FC<Props> = ({
  executedIds,
  favoriteIds,
  onToggleExecuted,
  onToggleFavorite,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<DateFilter | 'Todos'>('Todos');

  const filteredDates = filterDates(selectedFilter);

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950 border border-red-800/60 text-rose-400 text-xs font-semibold mb-2">
          <Wine className="w-3.5 h-3.5" />
          <span>Mais de 200 Encontros Inesquecíveis</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Ideias de Encontros
        </h1>
        <p className="text-neutral-400 text-sm mt-1">
          Fuja do clássico "jantar na mesa de sempre" com experiências pensadas para renovar a química.
        </p>
      </div>

      {/* Filter Pill Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {FILTERS.map((filter) => {
          const isActive = selectedFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md shadow-red-900/40'
                  : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800'
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* Dates Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredDates.map((date) => {
          const isExecuted = executedIds.includes(date.id);
          const isFavorited = favoriteIds.includes(date.id);

          return (
            <div
              key={date.id}
              className={`p-5 rounded-2xl bg-neutral-900/90 border transition-all duration-200 flex flex-col justify-between gap-4 ${
                isExecuted ? 'border-emerald-800/60 bg-emerald-950/10' : 'border-neutral-800'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-rose-400 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Vibe: {date.vibe}</span>
                  </span>
                  <span className="flex items-center gap-1 text-neutral-400 text-xs font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{date.timeNeeded}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white leading-snug">
                  {date.title}
                </h3>

                <p className="text-neutral-300 text-sm leading-relaxed">
                  {date.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {date.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-neutral-950 border border-neutral-800 text-neutral-400 text-[10px] font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-3 border-t border-neutral-800/80">
                <button
                  onClick={() => onToggleExecuted(date.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                    isExecuted
                      ? 'bg-emerald-900/80 text-emerald-300 border border-emerald-700'
                      : 'bg-red-950/80 text-rose-200 border border-red-800/80 hover:bg-red-900'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isExecuted ? 'Encontro Realizado' : 'Já Fizemos Este'}</span>
                </button>

                <button
                  onClick={() => onToggleFavorite(date.id)}
                  className={`p-2 rounded-xl border transition cursor-pointer ${
                    isFavorited
                      ? 'bg-rose-950 border-rose-700 text-rose-300'
                      : 'bg-neutral-800 border-neutral-700 text-neutral-400 hover:text-white'
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${isFavorited ? 'fill-rose-400 text-rose-400' : ''}`} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
