import React, { useState } from 'react';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';
import { UserProfile } from '../types';

interface Props {
  initialProfile?: UserProfile;
  onSave: (profile: UserProfile) => void;
  isOpen: boolean;
}

export const OnboardingModal: React.FC<Props> = ({ initialProfile, onSave, isOpen }) => {
  const [userName, setUserName] = useState(initialProfile?.userName || '');
  const [partnerName, setPartnerName] = useState(initialProfile?.partnerName || '');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !partnerName.trim()) {
      setError('Por favor, preencha os dois nomes para continuar.');
      return;
    }

    onSave({
      userName: userName.trim(),
      partnerName: partnerName.trim(),
      onboarded: true,
      createdAt: initialProfile?.createdAt || new Date().toISOString(),
      relationshipStartDate: initialProfile?.relationshipStartDate || '',
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-md bg-neutral-900/90 border border-red-900/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-red-950/50 text-white relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center mb-8 relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-red-600 to-rose-500 shadow-lg shadow-red-600/30 mb-4 animate-pulse">
            <Heart className="w-8 h-8 text-white fill-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-rose-100 to-red-300 bg-clip-text text-transparent">
            Guia 10X Sua Relação
          </h1>
          <p className="text-neutral-400 text-sm mt-2 font-medium">
            "Pequenas atitudes diárias criam grandes histórias de amor."
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
              Seu Nome
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
                setError('');
              }}
              placeholder="Ex: Danilo"
              className="w-full px-4 py-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700/60 text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition duration-200"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
              Nome do Seu Amor / Parceiro(a)
            </label>
            <input
              type="text"
              value={partnerName}
              onChange={(e) => {
                setPartnerName(e.target.value);
                setError('');
              }}
              placeholder="Ex: Maria"
              className="w-full px-4 py-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700/60 text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition duration-200"
              required
            />
          </div>

          {error && (
            <p className="text-red-400 text-xs font-medium text-center bg-red-950/40 py-2 rounded-lg border border-red-800/30">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 text-white font-bold text-base shadow-lg shadow-red-600/30 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Começar Experiência Premium</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-neutral-500 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-rose-400" />
          <span>Seus dados ficam 100% privados no seu próprio navegador.</span>
        </div>
      </div>
    </div>
  );
};
