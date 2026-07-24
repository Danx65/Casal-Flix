import React, { useState } from 'react';
import { SURPRISES } from '../../data/surprises';
import { PriceTier, Surprise } from '../../types';
import { Gift, CheckCircle2, Heart, DollarSign, ListChecks, ArrowRight, X } from 'lucide-react';

interface Props {
  favoriteIds: string[];
  executedIds: string[];
  onToggleFavorite: (id: string) => void;
  onToggleExecuted: (id: string) => void;
}

const PRICE_TIERS: { id: 'all' | PriceTier; label: string; badgeColor: string }[] = [
  { id: 'all', label: 'Todas as Surpresas', badgeColor: 'bg-white/10 text-white' },
  { id: 'free', label: '💚 Grátis (R$0)', badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
  { id: 'up50', label: '💙 Até R$50', badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  { id: 'up100', label: '💜 Até R$100', badgeColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
  { id: 'up300', label: '❤️ Até R$300', badgeColor: 'bg-rose-500/20 text-rose-400 border-rose-500/30' },
];

export const ViewSurprises: React.FC<Props> = ({
  favoriteIds,
  executedIds,
  onToggleFavorite,
  onToggleExecuted,
}) => {
  const [selectedTier, setSelectedTier] = useState<'all' | PriceTier>('all');
  const [activeModalSurprise, setActiveModalSurprise] = useState<Surprise | null>(null);

  const filtered = SURPRISES.filter(
    (s) => selectedTier === 'all' || s.priceTier === selectedTier
  );

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20 animate-fade-in">
      {/* Header */}
      <div className="p-6 rounded-2xl bg-[#12121A] border border-white/10">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 mb-1">
          <Gift className="w-4 h-4" /> Ideias de Surpresas
        </div>
        <h2 className="text-2xl font-black text-white tracking-tight">
          Surpresas que Encantam
        </h2>
        <p className="text-xs sm:text-sm text-gray-300 mt-1">
          Ideias práticas divididas por orçamento para você surpreender quem ama a qualquer momento.
        </p>
      </div>

      {/* Price Tier Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {PRICE_TIERS.map((tier) => {
          const isActive = selectedTier === tier.id;
          return (
            <button
              key={tier.id}
              onClick={() => setSelectedTier(tier.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer border ${
                isActive
                  ? 'bg-rose-600 border-rose-500 text-white shadow-md shadow-rose-600/30'
                  : 'bg-[#161622] border-white/10 text-gray-300 hover:bg-white/10'
              }`}
            >
              {tier.label}
            </button>
          );
        })}
      </div>

      {/* Surprises Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((item) => {
          const isExec = executedIds.includes(item.id);
          const isFav = favoriteIds.includes(item.id);

          return (
            <div
              key={item.id}
              className={`p-5 rounded-2xl border transition flex flex-col justify-between ${
                isExec
                  ? 'bg-[#101914] border-emerald-500/30'
                  : 'bg-[#14141E] border-white/10 hover:border-rose-500/30'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-600/20 text-rose-300 border border-rose-500/30">
                    Custo estimado: {item.estimatedCost}
                  </span>
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
                  onClick={() => setActiveModalSurprise(item)}
                  className="text-xs font-semibold text-rose-400 hover:text-rose-300 underline cursor-pointer flex items-center gap-1"
                >
                  <ListChecks className="w-3.5 h-3.5" /> Ver Materiais & Passo a Passo
                </button>

                <div className="flex items-center gap-2">
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
                    onClick={() => onToggleExecuted(item.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
                      isExec
                        ? 'bg-emerald-600 text-white'
                        : 'bg-rose-600 hover:bg-rose-500 text-white'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{isExec ? 'Executada' : 'Marcar Feita'}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Detail for Step-by-Step Instructions */}
      {activeModalSurprise && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg p-6 bg-[#161622] border border-rose-500/30 rounded-2xl text-white shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalSurprise(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-lg bg-white/5 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-rose-600/30 text-rose-300 mb-2">
              {activeModalSurprise.estimatedCost}
            </span>

            <h3 className="text-xl font-black text-white mb-2">{activeModalSurprise.title}</h3>
            <p className="text-xs text-gray-300 mb-4">{activeModalSurprise.description}</p>

            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="text-xs font-bold uppercase text-rose-400 mb-2">O que você vai precisar:</h4>
                <ul className="list-disc list-inside text-xs text-gray-300 space-y-1">
                  {activeModalSurprise.materials.map((m, idx) => (
                    <li key={idx}>{m}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="text-xs font-bold uppercase text-rose-400 mb-2">Passo a Passo da Preparação:</h4>
                <ol className="space-y-2 text-xs text-gray-300">
                  {activeModalSurprise.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-bold text-rose-400 shrink-0">{idx + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <button
              onClick={() => {
                onToggleExecuted(activeModalSurprise.id);
                setActiveModalSurprise(null);
              }}
              className="w-full py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs cursor-pointer flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Marcar Surpresa como Realizada</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
