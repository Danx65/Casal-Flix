import React, { useState } from 'react';
import { FlirtMessage, FlirtCategory } from '../types';
import { FLIRT_MESSAGES, filterFlirt } from '../data/flirt';
import { Sparkles, Copy, Check, Bookmark } from 'lucide-react';

interface Props {
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
}

const CATEGORIES: (FlirtCategory | 'Todas')[] = [
  'Todas',
  'Românticas',
  'Provocantes & Elegantes',
  'Divertidas & Descontraídas',
  'Elogios Sinceros',
];

export const FlirtView: React.FC<Props> = ({ favoriteIds, onToggleFavorite }) => {
  const [selectedCategory, setSelectedCategory] = useState<FlirtCategory | 'Todas'>('Todas');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredFlirt = filterFlirt(selectedCategory);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950 border border-red-800/60 text-rose-400 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Flerte & Sedução no Dia a Dia</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Frases & Mensagens Prontas
        </h1>
        <p className="text-neutral-400 text-sm mt-1">
          Copie com 1 toque e envie pelo WhatsApp para manter a chama do desejo acesa.
        </p>
      </div>

      {/* Categories */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
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

      {/* Messages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredFlirt.map((item) => {
          const isCopied = copiedId === item.id;
          const isFavorited = favoriteIds.includes(item.id);

          return (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition flex flex-col justify-between gap-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-md bg-neutral-950 border border-neutral-800 text-rose-400 text-[11px] font-bold">
                    {item.category}
                  </span>
                  <span className="text-[11px] text-neutral-400 font-medium">
                    Tom: {item.tone}
                  </span>
                </div>

                <p className="text-base font-semibold text-white leading-relaxed italic bg-neutral-950/60 p-3.5 rounded-xl border border-neutral-800/80">
                  "{item.text}"
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => handleCopy(item.id, item.text)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                    isCopied
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-md shadow-red-900/30'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copiado para o Zap!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar Mensagem</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => onToggleFavorite(item.id)}
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
