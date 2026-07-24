import React, { useState } from 'react';
import { CHALLENGES } from '../../data/challenges';
import { QUESTIONS } from '../../data/questions';
import { DATES } from '../../data/dates';
import { SURPRISES } from '../../data/surprises';
import { FLIRT_MESSAGES } from '../../data/flirtMessages';
import { Heart, Trash2, CheckCircle2, Copy } from 'lucide-react';

interface Props {
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
  onShowToast: (msg: string) => void;
}

export const ViewFavorites: React.FC<Props> = ({
  favoriteIds,
  onToggleFavorite,
  onShowToast,
}) => {
  const [filterType, setFilterType] = useState<'all' | 'ch' | 'q' | 'dt' | 'sur' | 'fl'>('all');

  const favChallenges = CHALLENGES.filter((c) => favoriteIds.includes(c.id));
  const favQuestions = QUESTIONS.filter((q) => favoriteIds.includes(q.id));
  const favDates = DATES.filter((d) => favoriteIds.includes(d.id));
  const favSurprises = SURPRISES.filter((s) => favoriteIds.includes(s.id));
  const favMessages = FLIRT_MESSAGES.filter((m) => favoriteIds.includes(m.id));

  const totalFavs = favoriteIds.length;

  const handleCopyMessage = (text: string) => {
    navigator.clipboard.writeText(text);
    onShowToast('Mensagem copiada! ❤️');
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20 animate-fade-in">
      {/* Header */}
      <div className="p-6 rounded-2xl bg-[#12121A] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 mb-1">
            <Heart className="w-4 h-4 fill-rose-500" /> Seus Favoritos
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            Baú de Guardados do Casal
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 mt-1">
            Tudo o que vocês mais gostaram salvo em um só lugar para fácil acesso.
          </p>
        </div>

        <div className="px-4 py-2.5 rounded-xl bg-rose-600/20 border border-rose-500/30 text-rose-300 font-bold text-sm shrink-0">
          {totalFavs} {totalFavs === 1 ? 'Item Salvo' : 'Itens Salvos'}
        </div>
      </div>

      {totalFavs === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-[#14141E] border border-white/10 text-gray-400 space-y-3">
          <Heart className="w-12 h-12 text-gray-600 mx-auto stroke-1" />
          <h3 className="text-lg font-bold text-white">Nenhum favorito salvo ainda</h3>
          <p className="text-xs max-w-md mx-auto text-gray-400">
            Enquanto navega pelas abas de Desafios, Conversas, Encontros, Surpresas e Flerte, clique no ícone de coração para guardar suas ideias favoritas aqui.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Fav Challenges */}
          {favChallenges.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-rose-400 uppercase tracking-wider flex items-center gap-2">
                🔥 Desafios Favoritos ({favChallenges.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {favChallenges.map((item) => (
                  <div key={item.id} className="p-4 rounded-xl bg-[#14141E] border border-white/10 flex justify-between items-start gap-3">
                    <div>
                      <span className="text-[10px] font-bold text-rose-300 uppercase">{item.category}</span>
                      <h4 className="text-sm font-bold text-white mt-0.5">{item.title}</h4>
                      <p className="text-xs text-gray-300 mt-1 line-clamp-2">{item.description}</p>
                    </div>
                    <button
                      onClick={() => onToggleFavorite(item.id)}
                      className="p-2 text-rose-400 hover:text-red-500 cursor-pointer"
                      title="Remover"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fav Questions */}
          {favQuestions.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-rose-400 uppercase tracking-wider flex items-center gap-2">
                💬 Perguntas Favoritas ({favQuestions.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {favQuestions.map((item) => (
                  <div key={item.id} className="p-4 rounded-xl bg-[#14141E] border border-white/10 flex justify-between items-start gap-3">
                    <div>
                      <span className="text-[10px] font-bold text-rose-300 uppercase">{item.category}</span>
                      <p className="text-xs font-semibold text-white mt-1">"{item.question}"</p>
                    </div>
                    <button
                      onClick={() => onToggleFavorite(item.id)}
                      className="p-2 text-rose-400 hover:text-red-500 cursor-pointer"
                      title="Remover"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fav Dates */}
          {favDates.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-rose-400 uppercase tracking-wider flex items-center gap-2">
                🍷 Encontros Favoritos ({favDates.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {favDates.map((item) => (
                  <div key={item.id} className="p-4 rounded-xl bg-[#14141E] border border-white/10 flex justify-between items-start gap-3">
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-gray-300 mt-1 line-clamp-2">{item.description}</p>
                    </div>
                    <button
                      onClick={() => onToggleFavorite(item.id)}
                      className="p-2 text-rose-400 hover:text-red-500 cursor-pointer"
                      title="Remover"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fav Messages */}
          {favMessages.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-rose-400 uppercase tracking-wider flex items-center gap-2">
                ✨ Mensagens Favoritas ({favMessages.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {favMessages.map((item) => (
                  <div key={item.id} className="p-4 rounded-xl bg-[#14141E] border border-white/10 flex justify-between items-start gap-3">
                    <div>
                      <p className="text-xs font-medium text-gray-200 italic">"{item.text}"</p>
                      <button
                        onClick={() => handleCopyMessage(item.text)}
                        className="mt-2 text-[10px] font-bold text-rose-400 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <Copy className="w-3 h-3" /> Copiar para Enviar
                      </button>
                    </div>
                    <button
                      onClick={() => onToggleFavorite(item.id)}
                      className="p-2 text-rose-400 hover:text-red-500 cursor-pointer"
                      title="Remover"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
