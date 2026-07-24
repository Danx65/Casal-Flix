import React, { useState } from 'react';
import { Question, QuestionCategory } from '../types';
import { QUESTIONS } from '../data/questions';
import { MessageCircle, Dices, Bookmark, CheckCircle2, Search, Sparkles } from 'lucide-react';

interface Props {
  answeredIds: string[];
  favoriteIds: string[];
  onToggleAnswered: (id: string) => void;
  onToggleFavorite: (id: string) => void;
}

const CATEGORIES: (QuestionCategory | 'Todas')[] = [
  'Todas',
  'Sentimentos & Amor',
  'Memórias & Trajetória',
  'Futuro, Sonhos & Projetos',
  'Intimidade & Desejo',
  'Divertidas & Curiosas',
  'Vulnerabilidade & Conexão',
];

export const QuestionsView: React.FC<Props> = ({
  answeredIds,
  favoriteIds,
  onToggleAnswered,
  onToggleFavorite,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<QuestionCategory | 'Todas'>('Todas');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeRandom, setActiveRandom] = useState<Question | null>(null);

  const filteredQuestions = QUESTIONS.filter((q) => {
    const matchesCat = selectedCategory === 'Todas' || q.category === selectedCategory;
    const matchesSearch = q.question.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleDrawRandom = () => {
    const pool = filteredQuestions.length > 0 ? filteredQuestions : QUESTIONS;
    const randomIndex = Math.floor(Math.random() * pool.length);
    setActiveRandom(pool[randomIndex]);
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950 border border-red-800/60 text-rose-400 text-xs font-semibold mb-2">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Mais de 300 Perguntas Profundas</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Área de Conversas
          </h1>
          <p className="text-neutral-400 text-sm mt-1">
            Perguntas para criar vulnerabilidade, dar boas risadas e reacender a intimidade.
          </p>
        </div>

        <button
          onClick={handleDrawRandom}
          className="px-5 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-sm shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer transition active:scale-95 shrink-0"
        >
          <Dices className="w-5 h-5" />
          <span>Sortear Pergunta</span>
        </button>
      </div>

      {/* Featured Drawn Question Drawer Modal or Highlight */}
      {activeRandom && (
        <div className="p-6 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-rose-950/50 border border-rose-600/50 shadow-2xl relative animate-scale-up">
          <div className="flex items-center justify-between mb-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-rose-400">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Pergunta Sorteada
            </span>
            <button
              onClick={() => setActiveRandom(null)}
              className="text-neutral-400 hover:text-white text-xs underline cursor-pointer"
            >
              Fechar
            </button>
          </div>

          <p className="text-lg sm:text-2xl font-bold text-white leading-snug mb-4">
            "{activeRandom.question}"
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-neutral-800">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-red-950 border border-red-800 text-rose-300 text-xs font-bold">
                {activeRandom.category}
              </span>
              <span className="text-xs text-neutral-400 font-medium">
                Nível: {activeRandom.deepLevel}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleAnswered(activeRandom.id)}
                className="px-3 py-1.5 rounded-xl bg-neutral-800 text-xs font-semibold text-neutral-200 hover:text-white cursor-pointer"
              >
                {answeredIds.includes(activeRandom.id) ? 'Respondida ✓' : 'Marcar Respondida'}
              </button>
              <button
                onClick={() => onToggleFavorite(activeRandom.id)}
                className="p-2 rounded-xl bg-neutral-800 text-neutral-300 hover:text-white cursor-pointer"
              >
                <Bookmark
                  className={`w-4 h-4 ${favoriteIds.includes(activeRandom.id) ? 'fill-rose-400 text-rose-400' : ''}`}
                />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Search & Categories */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar pergunta por assunto..."
            className="w-full pl-11 pr-4 py-3 bg-neutral-900 border border-neutral-800 rounded-2xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition"
          />
        </div>

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

      {/* Questions Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredQuestions.map((q) => {
          const isAnswered = answeredIds.includes(q.id);
          const isFavorited = favoriteIds.includes(q.id);

          return (
            <div
              key={q.id}
              className={`p-5 rounded-2xl bg-neutral-900/90 border transition-all duration-200 flex flex-col justify-between gap-4 ${
                isAnswered ? 'border-emerald-800/60 bg-emerald-950/10' : 'border-neutral-800'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-md bg-neutral-800 border border-neutral-700 text-rose-300 text-[11px] font-bold">
                    {q.category}
                  </span>
                  <span className="text-[11px] text-neutral-400 font-medium bg-neutral-950 px-2 py-0.5 rounded-full border border-neutral-800">
                    Nível {q.deepLevel}
                  </span>
                </div>

                <p className="text-base font-semibold text-white leading-relaxed">
                  "{q.question}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-neutral-800/80">
                <button
                  onClick={() => onToggleAnswered(q.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                    isAnswered
                      ? 'bg-emerald-900/80 text-emerald-300 border border-emerald-700'
                      : 'bg-neutral-800 text-neutral-300 hover:text-white'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isAnswered ? 'Respondida' : 'Marcar Respondida'}</span>
                </button>

                <button
                  onClick={() => onToggleFavorite(q.id)}
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
