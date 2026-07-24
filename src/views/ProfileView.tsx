import React, { useState } from 'react';
import { AppState } from '../types';
import { User, Heart, Trash2, Edit3, ShieldCheck, Check, Sparkles } from 'lucide-react';

interface Props {
  state: AppState;
  onUpdateNames: (userName: string, partnerName: string) => void;
  onClearData: () => void;
}

export const ProfileView: React.FC<Props> = ({ state, onUpdateNames, onClearData }) => {
  const [userName, setUserName] = useState(state.user.userName);
  const [partnerName, setPartnerName] = useState(state.user.partnerName);
  const [isEditing, setIsEditing] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Calculate days using app
  const createdAt = new Date(state.user.createdAt || Date.now());
  const now = new Date();
  const diffDays = Math.max(
    1,
    Math.ceil(Math.abs(now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24))
  );

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !partnerName.trim()) return;
    onUpdateNames(userName.trim(), partnerName.trim());
    setIsEditing(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in max-w-3xl mx-auto">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950 border border-red-800/60 text-rose-400 text-xs font-semibold mb-2">
          <User className="w-3.5 h-3.5" />
          <span>Perfil do Casal</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Configurações & Dados
        </h1>
        <p className="text-neutral-400 text-sm mt-1">
          Gerencie o nome do casal e os dados salvos localmente no seu dispositivo.
        </p>
      </div>

      {/* Couple Card */}
      <div className="p-6 rounded-3xl bg-neutral-900/90 border border-neutral-800 space-y-6 relative overflow-hidden shadow-xl">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-red-600 to-rose-500 flex items-center justify-center text-white shadow-lg shadow-red-600/30">
              <Heart className="w-6 h-6 fill-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">
                {state.user.userName} & {state.user.partnerName}
              </h2>
              <p className="text-xs text-neutral-400">
                Ativos há {diffDays} {diffDays === 1 ? 'dia' : 'dias'} no Guia 10X
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-3.5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>{isEditing ? 'Cancelar' : 'Editar Nomes'}</span>
          </button>
        </div>

        {savedSuccess && (
          <div className="p-3 bg-emerald-950/80 border border-emerald-700 text-emerald-300 text-xs font-bold rounded-xl flex items-center gap-2">
            <Check className="w-4 h-4" />
            <span>Nomes do casal atualizados com sucesso!</span>
          </div>
        )}

        {/* Edit Form */}
        {isEditing && (
          <form onSubmit={handleSave} className="space-y-4 pt-2 animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Seu Nome
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-700 text-white text-sm focus:outline-none focus:border-red-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Nome do Seu Amor
                </label>
                <input
                  type="text"
                  value={partnerName}
                  onChange={(e) => setPartnerName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-700 text-white text-sm focus:outline-none focus:border-red-500"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold text-sm shadow-md cursor-pointer hover:from-red-500 hover:to-rose-500 transition"
            >
              Salvar Nomes
            </button>
          </form>
        )}

        {/* Quick Summary Stats inside Profile */}
        <div className="grid grid-cols-3 gap-3 pt-2">
          <div className="p-3.5 rounded-2xl bg-neutral-950 text-center border border-neutral-800">
            <p className="text-[10px] text-neutral-400 uppercase font-semibold">Desafios</p>
            <p className="text-xl font-bold text-white mt-0.5">
              {state.completedChallengeIds.length}
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-neutral-950 text-center border border-neutral-800">
            <p className="text-[10px] text-neutral-400 uppercase font-semibold">Plano 30D</p>
            <p className="text-xl font-bold text-rose-400 mt-0.5">
              {state.completedPlanDays.length}/30
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-neutral-950 text-center border border-neutral-800">
            <p className="text-[10px] text-neutral-400 uppercase font-semibold">Favoritos</p>
            <p className="text-xl font-bold text-amber-400 mt-0.5">
              {state.favoriteIds.length}
            </p>
          </div>
        </div>
      </div>

      {/* Local Storage Privacy Info */}
      <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 flex items-start gap-3.5">
        <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h3 className="text-sm font-bold text-white">Privacidade & Armazenamento Local</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Este aplicativo não possui backend nem exige logins. Suas respostas, desafios e nomes ficam 100% gravados apenas no LocalStorage do seu próprio navegador e funcionam offline.
          </p>
        </div>
      </div>

      {/* Danger Zone: Clear Data */}
      <div className="p-6 rounded-3xl bg-neutral-900/90 border border-red-950/60 space-y-4">
        <h3 className="text-base font-bold text-red-400 flex items-center gap-2">
          <Trash2 className="w-4 h-4" />
          <span>Zona de Gerenciamento de Dados</span>
        </h3>
        <p className="text-xs text-neutral-400 leading-relaxed">
          Caso queira reiniciar sua jornada do zero com um novo ciclo de 30 dias ou alterar totalmente os dados salvos.
        </p>

        {!showResetConfirm ? (
          <button
            onClick={() => setShowResetConfirm(true)}
            className="px-4 py-2.5 rounded-xl border border-red-800/60 text-red-400 hover:bg-red-950/60 font-semibold text-xs transition cursor-pointer"
          >
            Limpar todos os dados e reiniciar
          </button>
        ) : (
          <div className="p-4 bg-red-950/80 border border-red-800 rounded-2xl space-y-3">
            <p className="text-xs text-rose-200 font-semibold">
              Tem certeza? Isso apagará todos os desafios concluídos, conquistas e histórico.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={onClearData}
                className="px-4 py-2 rounded-xl bg-red-600 text-white font-bold text-xs cursor-pointer hover:bg-red-500"
              >
                Sim, Limpar Tudo
              </button>
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-2 rounded-xl bg-neutral-800 text-neutral-300 font-bold text-xs cursor-pointer hover:bg-neutral-700"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
