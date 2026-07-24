import React, { useState } from 'react';
import { UserProfile } from '../../types';
import { User, Calendar, RefreshCw, Heart, Download, Upload, Trash2, AlertTriangle, Check } from 'lucide-react';

interface Props {
  profile: UserProfile;
  totalCompleted: number;
  onUpdateProfile: (updated: UserProfile) => void;
  onResetData: () => void;
  onShowToast: (msg: string) => void;
}

export const ViewProfile: React.FC<Props> = ({
  profile,
  totalCompleted,
  onUpdateProfile,
  onResetData,
  onShowToast,
}) => {
  const [userName, setUserName] = useState(profile.userName || '');
  const [partnerName, setPartnerName] = useState(profile.partnerName || '');
  const [startDate, setStartDate] = useState(profile.relationshipStartDate || '');
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  // Calculate days using the app
  const createdAtDate = new Date(profile.createdAt || new Date());
  const today = new Date();
  const daysUsingApp = Math.max(1, Math.floor((today.getTime() - createdAtDate.getTime()) / (1000 * 3600 * 24)) + 1);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile({
      ...profile,
      userName: userName.trim(),
      partnerName: partnerName.trim(),
      relationshipStartDate: startDate,
    });
    onShowToast('Perfil atualizado com sucesso! ❤️');
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-20 animate-fade-in text-white">
      {/* Profile Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#1A1A26] via-[#12121A] to-[#1A1a26] border border-white/10 text-center relative overflow-hidden">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-red-600 to-rose-500 shadow-lg shadow-red-600/30 mb-3">
          <Heart className="w-8 h-8 text-white fill-white" />
        </div>
        <h2 className="text-2xl font-black text-white tracking-tight">
          {profile.userName || 'Você'} & {profile.partnerName || 'Parceiro(a)'}
        </h2>
        <p className="text-xs text-red-400 font-semibold mt-1">
          Casal do Guia 10X • {daysUsingApp} {daysUsingApp === 1 ? 'dia ativo' : 'dias ativos no app'}
        </p>

        <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto mt-6 pt-4 border-t border-white/10">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
            <span className="text-xl font-extrabold text-white block">{totalCompleted}</span>
            <span className="text-[10px] uppercase font-bold text-gray-400">Desafios Feitos</span>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
            <span className="text-xl font-extrabold text-white block">{daysUsingApp}</span>
            <span className="text-[10px] uppercase font-bold text-gray-400">Dias Juntos no App</span>
          </div>
        </div>
      </div>

      {/* Edit Names Form */}
      <form onSubmit={handleSave} className="p-6 rounded-2xl bg-[#14141E] border border-white/10 space-y-4">
        <h3 className="text-base font-extrabold text-white flex items-center gap-2">
          <User className="w-5 h-5 text-red-400" /> Editar Dados do Casal
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase text-gray-300 mb-1">
              Seu Nome
            </label>
            <input
              type="text"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#1A1A24] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-gray-300 mb-1">
              Nome do Parceiro(a)
            </label>
            <input
              type="text"
              required
              value={partnerName}
              onChange={(e) => setPartnerName(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#1A1A24] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-red-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase text-gray-300 mb-1">
            Data de Início do Relacionamento
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full px-4 py-2.5 bg-[#1A1A24] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-red-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs cursor-pointer shadow-md shadow-red-600/30 flex items-center justify-center gap-2"
        >
          <Check className="w-4 h-4" />
          <span>Salvar Alterações</span>
        </button>
      </form>

      {/* Danger Zone / Reset */}
      <div className="p-6 rounded-2xl bg-[#14141E] border border-red-900/40 space-y-3">
        <h3 className="text-base font-extrabold text-red-400 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-red-500" /> Área de Configuração Avançada
        </h3>
        <p className="text-xs text-gray-400 leading-relaxed">
          Os dados ficam salvos localmente no seu dispositivo. Caso deseje reiniciar o progresso e redefinir os nomes, utilize a opção abaixo.
        </p>

        {!showConfirmReset ? (
          <button
            onClick={() => setShowConfirmReset(true)}
            className="px-4 py-2.5 rounded-xl border border-red-500/40 text-red-400 hover:bg-red-950/40 text-xs font-bold transition cursor-pointer flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
            <span>Resetar / Limpar Todos os Dados</span>
          </button>
        ) : (
          <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/50 space-y-3 animate-fade-in">
            <p className="text-xs font-bold text-white">
              Tem certeza? Isso apagará o histórico de desafios concluídos, plano e favoritos salvos.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  onResetData();
                  setShowConfirmReset(false);
                }}
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs cursor-pointer"
              >
                Sim, Resetar Tudo
              </button>
              <button
                onClick={() => setShowConfirmReset(false)}
                className="px-4 py-2 rounded-lg bg-white/10 text-gray-300 text-xs font-semibold cursor-pointer"
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
