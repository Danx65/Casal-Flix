import React, { useState } from 'react';
import { CHALLENGES, getRandomChallenge } from '../../data/challenges';
import { Challenge, ChallengeCategory } from '../../types';
import { Flame, Search, CheckCircle2, Heart, Clock, Shuffle, Lightbulb, X } from 'lucide-react';

interface Props {
  completedIds: string[];
  favoriteIds: string[];
  onToggleComplete: (id: string) => void;
  onToggleFavorite: (id: string) => void;
}

const CATEGORIES: ('Todos' | ChallengeCategory)[] = [
  'Todos',
  'Romance',
  'Sedução',
  'Comunicação',
  'Surpresas',
  'Encontros',
  'Diversão',
  'Conexão',
  'Inteligência Emocional',
];

export const ViewChallenges: React.FC<Props> = ({
  completedIds,
  favoriteIds,
  onToggleComplete,
  onToggleFavorite,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'Todos' | ChallengeCategory>('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalChallenge, setActiveModalChallenge] = useState<Challenge | null>(null);

  const filtered = CHALLENGES.filter((c) => {
    const matchesCat = selectedCategory === 'Todos' || c.category === selectedCategory;
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleRandomDraw = () => {
    const rand = getRandomChallenge(completedIds);
    setActiveModalChallenge(rand);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20 animate-fade-in">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-[#12121A] border border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 mb-1">
            <Flame className="w-4 h-4 fill-red-500" /> +100 Desafios a Dois
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            Catálogo Completo de Desafios
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 mt-1">
            Escolha uma categoria e quebre a rotina hoje mesmo com atividades inspiradoras.
          </p>
        </div>

        <button
          onClick={handleRandomDraw}
          className="px-5 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm shrink-0 transition flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-red-600/30"
        >
          <Shuffle className="w-4 h-4" />
          <span>Sortear Desafio Surpresa</span>
        </button>
      </div>

      {/* Category Pills & Search */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar por nome ou palavra-chave..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-[#161622] border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-red-500 transition"
          />
        </div>

        {/* Scrollable Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer border ${
                  isActive
                    ? 'bg-red-600 border-red-500 text-white shadow-md shadow-red-600/30'
                    : 'bg-[#161622] border-white/10 text-gray-300 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Challenges Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((item) => {
          const isDone = completedIds.includes(item.id);
          const isFav = favoriteIds.includes(item.id);

          return (
            <div
              key={item.id}
              className={`p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                isDone
                  ? 'bg-[#101914] border-emerald-500/30'
                  : 'bg-[#14141E] border-white/10 hover:border-red-500/30'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/10 text-red-300 border border-white/10">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>{item.estimatedTime}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 line-clamp-3 mb-4 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/10 gap-2">
                <button
                  onClick={() => setActiveModalChallenge(item)}
                  className="text-xs font-semibold text-red-400 hover:text-red-300 underline cursor-pointer"
                >
                  Ver Detalhes & Dicas
                </button>

                <div className="flex items-center gap-2">
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
                    onClick={() => onToggleComplete(item.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
                      isDone
                        ? 'bg-emerald-600 text-white'
                        : 'bg-red-600 hover:bg-red-500 text-white'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{isDone ? 'Concluído' : 'Concluir'}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Detail View */}
      {activeModalChallenge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg p-6 bg-[#161622] border border-red-500/30 rounded-2xl text-white shadow-2xl">
            <button
              onClick={() => setActiveModalChallenge(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-lg bg-white/5 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-red-600/30 text-red-300 mb-3">
              {activeModalChallenge.category}
            </span>

            <h3 className="text-xl font-black text-white mb-2">
              {activeModalChallenge.title}
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              {activeModalChallenge.description}
            </p>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6 flex items-start gap-3 text-xs sm:text-sm text-gray-300">
              <Lightbulb className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-yellow-300 font-bold block mb-0.5">Dica de Execução:</strong>
                <span>{activeModalChallenge.tip}</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
              <button
                onClick={() => {
                  onToggleComplete(activeModalChallenge.id);
                  setActiveModalChallenge(null);
                }}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer transition ${
                  completedIds.includes(activeModalChallenge.id)
                    ? 'bg-emerald-600 text-white'
                    : 'bg-red-600 hover:bg-red-500 text-white shadow-md shadow-red-600/30'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  {completedIds.includes(activeModalChallenge.id)
                    ? 'Desafio Concluído'
                    : 'Marcar como Concluído'}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
