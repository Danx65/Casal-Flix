import React, { useState } from 'react';
import { Surprise, PriceTier } from '../types';
import { SURPRISES } from '../data/surprises';
import { Gift, CheckCircle2, Bookmark, DollarSign, Layers } from 'lucide-react';

interface Props {
  executedIds: string[];
  favoriteIds: string[];
  onToggleExecuted: (id: string) => void;
  onToggleFavorite: (id: string) => void;
}

const PRICE_TABS: { id: PriceTier | 'all'; label: string }[] = [
  { id: 'all', label: 'Todas as Ideias' },
  { id: 'free', label: 'Grátis (R$0)' },
  { id: 'up50', label: 'Até R$50' },
  { id: 'up100', label: 'Até R$100' },
  { id: 'up300', label: 'Até R$300' },
];

export const SurprisesView: React.FC<Props> = ({
  executedIds,
  favoriteIds,
  onToggleExecuted,
  onToggleFavorite,
}) => {
  const [selectedTier, setSelectedTier] = useState<PriceTier | 'all'>('all');

  const filteredSurprises = SURPRISES.filter(
    (s) => selectedTier === 'all' || s.priceTier === selectedTier
  );

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950 border border-red-800/60 text-rose-400 text-xs font-semibold mb-2">
          <Gift className="w-3.5 h-3.5" />
          <span>Surpresas que Encantam</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Ideias de Surpresas
        </h1>
        <p className="text-neutral-400 text-sm mt-1">
          Separadas por orçamento para você encantar quem ama em qualquer momento.
        </p>
      </div>

      {/* Price Tier Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {PRICE_TABS.map((tab) => {
          const isActive = selectedTier === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setSelectedTier(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md shadow-red-900/40'
                  : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Surprises List */}
      <div className="space-y-5">
        {filteredSurprises.map((item) => {
          const isExecuted = executedIds.includes(item.id);
          const isFavorited = favoriteIds.includes(item.id);

          return (
            <div
              key={item.id}
              className={`p-6 rounded-3xl bg-neutral-900/90 border transition-all duration-200 space-y-4 ${
                isExecuted ? 'border-emerald-800/60 bg-emerald-950/10' : 'border-neutral-800'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>{item.title}</span>
                  {isExecuted && (
                    <span className="text-emerald-400 text-xs font-semibold px-2 py-0.5 bg-emerald-950 rounded-full border border-emerald-800">
                      Realizada ✓
                    </span>
                  )}
                </h3>
                <span className="px-3 py-1 rounded-full bg-red-950 border border-red-800/60 text-rose-300 font-bold text-xs shrink-0 self-start sm:self-auto">
                  Investimento: {item.estimatedCost}
                </span>
              </div>

              <p className="text-neutral-300 text-sm">{item.description}</p>

              {/* Materials needed */}
              {item.materials && item.materials.length > 0 && (
                <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-800/80 space-y-1.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>O que você vai precisar:</span>
                  </h4>
                  <ul className="list-disc list-inside text-xs text-neutral-300 space-y-1">
                    {item.materials.map((mat, idx) => (
                      <li key={idx}>{mat}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Step-by-step instructions */}
              {item.steps && item.steps.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Passo a Passo de Execução:
                  </h4>
                  <ol className="space-y-1.5">
                    {item.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <span className="w-5 h-5 rounded-full bg-red-950 border border-red-800 text-rose-400 font-bold flex items-center justify-center shrink-0 text-[10px]">
                          {idx + 1}
                        </span>
                        <span className="pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center justify-between pt-3 border-t border-neutral-800/80">
                <button
                  onClick={() => onToggleExecuted(item.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                    isExecuted
                      ? 'bg-emerald-900/80 text-emerald-300 border border-emerald-700'
                      : 'bg-red-950/80 text-rose-200 border border-red-800/80 hover:bg-red-900'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isExecuted ? 'Surpresa Realizada!' : 'Marcar como Realizada'}</span>
                </button>

                <button
                  onClick={() => onToggleFavorite(item.id)}
                  className={`p-2.5 rounded-xl border transition cursor-pointer ${
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
