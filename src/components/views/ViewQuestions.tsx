import React, { useState } from 'react';
import { QUESTIONS } from '../../data/questions';
import { QuestionCategory } from '../../types';
import { MessageCircle, Heart, ChevronRight, ChevronLeft, Shuffle, CheckCircle2, Sparkles } from 'lucide-react';

interface Props {
  favoriteIds: string[];
  answeredIds: string[];
  onToggleFavorite: (id: string) => void;
  onToggleAnswered: (id: string) => void;
}

const CATEGORIES: ('Todas' | QuestionCategory)[] = [
  'Todas',
  'Sentimentos & Amor',
  'Memórias & Trajetória',
  'Futuro, Sonhos & Projetos',
  'Intimidade & Desejo',
  'Divertidas & Curiosas',
  'Vulnerabilidade & Conexão',
];

export const ViewQuestions: React.FC<Props> = ({
  favoriteIds,
  answeredIds,
  onToggleFavorite,
  onToggleAnswered,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'Todas' | QuestionCategory>('Todas');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filtered = QUESTIONS.filter(
    (q) => selectedCategory === 'Todas' || q.category === selectedCategory
  );

  const currentQ = filtered[currentIndex] || QUESTIONS[0];
  const isFav = favoriteIds.includes(currentQ.id);
  const isAnswered = answeredIds.includes(currentQ.id);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filtered.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  const handleRoulette = () => {
    const randomIndex = Math.floor(Math.random() * filtered.length);
    setCurrentIndex(randomIndex);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20 animate-fade-in">
      {/* Header */}
      <div className="p-6 rounded-2xl bg-[#12121A] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 mb-1">
            <MessageCircle className="w-4 h-4" /> +300 Perguntas Profundas
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            Conversas que Conectam
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 mt-1">
            Perguntas feitas para acender conversas profundas, risadas e memórias marcantes.
          </p>
        </div>

        <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 shrink-0 text-center">
          <span className="font-bold text-white text-base block">{answeredIds.length} / {QUESTIONS.length}</span>
          <span>Perguntas Conversadas</span>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer border ${
                isActive
                  ? 'bg-rose-600 border-rose-500 text-white shadow-md shadow-rose-600/30'
                  : 'bg-[#161622] border-white/10 text-gray-300 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Main Interactive Deck Card */}
      <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#1A1A28] via-[#141420] to-[#18121E] border border-rose-500/30 shadow-[0_0_50px_rgba(244,63,94,0.15)] text-center text-white min-h-[320px] flex flex-col justify-between overflow-hidden">
        
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Card Header */}
        <div className="flex items-center justify-between text-xs font-bold text-rose-300">
          <span className="px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/30">
            {currentQ.category}
          </span>

          <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-gray-300">
            Intimidade: {currentQ.deepLevel}
          </span>
        </div>

        {/* Question Text */}
        <div className="my-8 px-2 sm:px-6">
          <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-relaxed tracking-tight">
            "{currentQ.question}"
          </p>
        </div>

        {/* Card Actions Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleAnswered(currentQ.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition cursor-pointer ${
                isAnswered
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white/10 hover:bg-white/20 text-gray-300'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isAnswered ? 'Já Conversamos' : 'Marcar como Conversada'}</span>
            </button>

            <button
              onClick={() => onToggleFavorite(currentQ.id)}
              className={`p-2.5 rounded-xl border transition cursor-pointer ${
                isFav
                  ? 'bg-rose-600/20 border-rose-500 text-rose-400'
                  : 'bg-white/10 border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleRoulette}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-md cursor-pointer hover:opacity-95"
            >
              <Shuffle className="w-4 h-4" />
              <span>Roleta</span>
            </button>

            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
