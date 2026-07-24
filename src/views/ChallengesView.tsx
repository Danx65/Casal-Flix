import React, { useState } from 'react';
import { Challenge, ChallengeCategory } from '../types';
import { CHALLENGES } from '../data/challenges';
import { Flame, Clock, CheckCircle2, Bookmark, Search, Filter } from 'lucide-react';

interface Props {
  completedIds: string[];
  favoriteIds: string[];
  onToggleComplete: (id: string) => void;
  onToggleFavorite: (id: string) => void;
}

const CATEGORIES: (ChallengeCategory | 'Todas')[] = [
  'Todas',
  'Romance',
  'Sedução',
  'Comunicação',
  'Surpresas',
  'Encontros',
  'Diversão',
  'Conexão',
  'Inteligência Emocional',
];

export const ChallengesView: React.FC<Props> = ({
  completedIds,
  favoriteIds,
  onToggleComplete,
  onToggleFavorite,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ChallengeCategory | 'Todas'>('Todas');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredChallenges = CHALLENGES.filter((c) => {
    const matchesCategory = selectedCategory === 'Todas' || c.category === selectedCategory;
    const matchesSearch =
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950 border border-red-800/60 text-rose-400 text-xs font-semibold mb-2">
          <Flame className="w-3.5 h-3.5" />
          <span>Mais de 100 Desafios</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Desafios para o Casal
        </h1>
        <p className="text-neutral-400 text-sm mt-1">
          Atividades práticas para sair da rotina e cultivar momentos de paixão e conexão.
        </p>
      </div>

      {/* Search Bar & Category Filters */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar desafio por palavra-chave..."
            className="w-full pl-11 pr-4 py-3 bg-neutral-900 border border-neutral-800 rounded-2xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition"
          />
        </div>

        {/* Category Pill Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md shadow-red-900/40'
                    : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Challenges List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredChallenges.map((challenge) => {
          const isCompleted = completedIds.includes(challenge.id);
          const isFavorited = favoriteIds.includes(challenge.id);

          return (
            <div
              key={challenge.id}
              className={`p-5 rounded-2xl bg-neutral-900/90 border transition-all duration-200 flex flex-col justify-between gap-4 ${
                isCompleted
                  ? 'border-emerald-800/60 bg-emerald-950/10'
                  : 'border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-md bg-neutral-800 border border-neutral-700 text-rose-300 text-[11px] font-bold">
                    {challenge.category}
                  </span>
                  <span className="flex items-center gap-1 text-neutral-400 text-xs font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{challenge.estimatedTime}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>{challenge.title}</span>
                  {isCompleted && (
                    <span className="text-emerald-400 text-xs font-semibold px-2 py-0.5 bg-emerald-950 rounded-full border border-emerald-800">
                      Concluído ✓
                    </span>
                  )}
                </h3>

                <p className="text-neutral-300 text-sm leading-relaxed">
                  {challenge.description}
                </p>

                {challenge.tip && (
                  <p className="text-xs text-rose-200/80 bg-neutral-950 p-2.5 rounded-lg border border-neutral-800 italic">
                    💡 {challenge.tip}
                  </p>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-between pt-3 border-t border-neutral-800/80">
                <button
                  onClick={() => onToggleComplete(challenge.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                    isCompleted
                      ? 'bg-emerald-900/80 border border-emerald-700 text-emerald-300'
                      : 'bg-red-950/80 hover:bg-red-900/90 border border-red-800/80 text-rose-200'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isCompleted ? 'Concluído' : 'Concluir'}</span>
                </button>

                <button
                  onClick={() => onToggleFavorite(challenge.id)}
                  className={`p-2 rounded-xl border transition cursor-pointer ${
                    isFavorited
                      ? 'bg-rose-950 border-rose-700 text-rose-300'
                      : 'bg-neutral-800/80 border-neutral-700 text-neutral-400 hover:text-white'
                  }`}
                  title={isFavorited ? 'Remover dos favoritos' : 'Favoritar'}
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
