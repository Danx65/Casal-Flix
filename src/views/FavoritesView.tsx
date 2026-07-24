import React from 'react';
import { CHALLENGES } from '../data/challenges';
import { QUESTIONS } from '../data/questions';
import { DATES } from '../data/dates';
import { SURPRISES } from '../data/surprises';
import { FLIRT_MESSAGES } from '../data/flirt';
import { Heart, Bookmark, Trash2 } from 'lucide-react';

interface Props {
  favoriteIds: string[];
  onRemoveFavorite: (id: string) => void;
}

export const FavoritesView: React.FC<Props> = ({ favoriteIds, onRemoveFavorite }) => {
  // Collect favorited items from all modules
  const favChallenges = CHALLENGES.filter((c) => favoriteIds.includes(c.id));
  const favQuestions = QUESTIONS.filter((q) => favoriteIds.includes(q.id));
  const favDates = DATES.filter((d) => favoriteIds.includes(d.id));
  const favSurprises = SURPRISES.filter((s) => favoriteIds.includes(s.id));
  const favFlirt = FLIRT_MESSAGES.filter((f) => favoriteIds.includes(f.id));

  const totalFavs =
    favChallenges.length +
    favQuestions.length +
    favDates.length +
    favSurprises.length +
    favFlirt.length;

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950 border border-red-800/60 text-rose-400 text-xs font-semibold mb-2">
          <Bookmark className="w-3.5 h-3.5 fill-rose-400" />
          <span>Seu Baú de Memórias e Ideias</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Favoritos Salvos ({totalFavs})
        </h1>
        <p className="text-neutral-400 text-sm mt-1">
          Tudo o que você mais gostou e guardou para colocar em prática a dois.
        </p>
      </div>

      {totalFavs === 0 ? (
        <div className="p-12 text-center bg-neutral-900/60 border border-neutral-800 rounded-3xl space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-neutral-800 flex items-center justify-center mx-auto text-neutral-500">
            <Bookmark className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-white">Nenhum item favoritado ainda</h3>
          <p className="text-neutral-400 text-sm max-w-sm mx-auto">
            Ao navegar pelas seções de Desafios, Conversas, Encontros ou Flertes, clique no ícone do marcador para guardar aqui.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Fav Challenges */}
          {favChallenges.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span>🔥 Desafios Favoritados</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-neutral-800 text-rose-400">
                  {favChallenges.length}
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {favChallenges.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-start justify-between gap-3"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="text-base font-bold text-white mt-0.5">{item.title}</h3>
                      <p className="text-xs text-neutral-300 mt-1">{item.description}</p>
                    </div>
                    <button
                      onClick={() => onRemoveFavorite(item.id)}
                      className="p-2 text-neutral-500 hover:text-red-400 transition cursor-pointer"
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
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span>💬 Perguntas Favoritadas</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-neutral-800 text-rose-400">
                  {favQuestions.length}
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {favQuestions.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-start justify-between gap-3"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider">
                        {item.category}
                      </span>
                      <p className="text-sm font-semibold text-white mt-1">"{item.question}"</p>
                    </div>
                    <button
                      onClick={() => onRemoveFavorite(item.id)}
                      className="p-2 text-neutral-500 hover:text-red-400 transition cursor-pointer"
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
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span>🍷 Encontros Favoritados</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-neutral-800 text-rose-400">
                  {favDates.length}
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {favDates.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-start justify-between gap-3"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider">
                        Vibe: {item.vibe}
                      </span>
                      <h3 className="text-base font-bold text-white mt-0.5">{item.title}</h3>
                      <p className="text-xs text-neutral-300 mt-1">{item.description}</p>
                    </div>
                    <button
                      onClick={() => onRemoveFavorite(item.id)}
                      className="p-2 text-neutral-500 hover:text-red-400 transition cursor-pointer"
                      title="Remover"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fav Surprises */}
          {favSurprises.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span>🎁 Surpresas Favoritadas</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-neutral-800 text-rose-400">
                  {favSurprises.length}
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {favSurprises.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-start justify-between gap-3"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider">
                        {item.estimatedCost}
                      </span>
                      <h3 className="text-base font-bold text-white mt-0.5">{item.title}</h3>
                      <p className="text-xs text-neutral-300 mt-1">{item.description}</p>
                    </div>
                    <button
                      onClick={() => onRemoveFavorite(item.id)}
                      className="p-2 text-neutral-500 hover:text-red-400 transition cursor-pointer"
                      title="Remover"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fav Flirt */}
          {favFlirt.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span>✨ Frases de Flerte Favoritadas</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-neutral-800 text-rose-400">
                  {favFlirt.length}
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {favFlirt.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-start justify-between gap-3"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider">
                        {item.category}
                      </span>
                      <p className="text-sm font-medium italic text-white mt-1">"{item.text}"</p>
                    </div>
                    <button
                      onClick={() => onRemoveFavorite(item.id)}
                      className="p-2 text-neutral-500 hover:text-red-400 transition cursor-pointer"
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
