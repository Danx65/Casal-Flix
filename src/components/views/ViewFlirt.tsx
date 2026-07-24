import React, { useState } from 'react';
import { FLIRT_MESSAGES } from '../../data/flirtMessages';
import { FlirtCategory } from '../../types';
import { Sparkles, Search, Copy, Check, Heart } from 'lucide-react';

interface Props {
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
  onShowToast: (msg: string) => void;
}

const CATEGORIES: ('Todas' | FlirtCategory)[] = [
  'Todas',
  'Românticas',
  'Provocantes & Elegantes',
  'Divertidas & Descontraídas',
  'Elogios Sinceros',
];

export const ViewFlirt: React.FC<Props> = ({
  favoriteIds,
  onToggleFavorite,
  onShowToast,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'Todas' | FlirtCategory>('Todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered = FLIRT_MESSAGES.filter((m) => {
    const matchCat = selectedCategory === 'Todas' || m.category === selectedCategory;
    const matchSearch = m.text.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    onShowToast('Mensagem copiada com sucesso! ❤️');
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20 animate-fade-in">
      {/* Header */}
      <div className="p-6 rounded-2xl bg-[#12121A] border border-white/10">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 mb-1">
          <Sparkles className="w-4 h-4" /> Frases & Flerte
        </div>
        <h2 className="text-2xl font-black text-white tracking-tight">
          Flerte & Mensagens Prontas
        </h2>
        <p className="text-xs sm:text-sm text-gray-300 mt-1">
          Mensagens românticas, sedutoras e provocantes prontas para copiar e enviar no WhatsApp ou cartão.
        </p>
      </div>

      {/* Category Pills & Search */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar por palavras na mensagem..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-[#161622] border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-red-500 transition"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
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
      </div>

      {/* Flirt Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((item) => {
          const isFav = favoriteIds.includes(item.id);
          const isCopied = copiedId === item.id;

          return (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-[#14141E] border border-white/10 hover:border-rose-500/30 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-600/20 text-rose-300 border border-rose-500/30">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-medium text-gray-400">
                    Tom: {item.tone}
                  </span>
                </div>

                <p className="text-sm font-medium text-gray-200 leading-relaxed italic mb-4">
                  "{item.text}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <button
                  onClick={() => onToggleFavorite(item.id)}
                  className={`p-2 rounded-lg border transition cursor-pointer ${
                    isFav
                      ? 'bg-rose-600/20 border-rose-500 text-rose-400'
                      : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
                </button>

                <button
                  onClick={() => handleCopy(item.id, item.text)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition cursor-pointer ${
                    isCopied
                      ? 'bg-emerald-600 text-white'
                      : 'bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-600/30'
                  }`}
                >
                  {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{isCopied ? 'Copiado!' : 'Copiar Texto'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
