import React from 'react';
import { Flame, Bell, Heart, Sparkles } from 'lucide-react';
import { UserProfile } from '../types';

interface Props {
  user: UserProfile;
  streakDays: number;
  onOpenDailyChallenge?: () => void;
  notificationDismissed?: boolean;
}

export const HeaderGreeting: React.FC<Props> = ({
  user,
  streakDays,
  onOpenDailyChallenge,
}) => {
  // Determine greeting based on hour
  const getGreetingTime = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'Bom dia';
    if (hour >= 12 && hour < 18) return 'Boa tarde';
    return 'Boa noite';
  };

  const userDisplayName = user.userName || 'Casal';
  const partnerDisplayName = user.partnerName || 'Parceiro';
  const greeting = `${getGreetingTime()} ${userDisplayName} e ${partnerDisplayName} ❤️`;

  return (
    <div className="space-y-4 mb-6">
      {/* Top Banner Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-[#1A1A26] via-[#12121A] to-[#1A1A26] border border-white/10 shadow-lg">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-red-500/20 text-red-400 border border-red-500/30 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Guia Premium Active
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            {greeting}
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 mt-0.5">
            "Pequenas atitudes diárias criam grandes histórias de amor."
          </p>
        </div>

        {/* Streak Counter Pill */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-950/40 border border-red-500/30 text-white shadow-md">
            <Flame className="w-5 h-5 text-red-500 fill-red-500 animate-pulse" />
            <div>
              <p className="text-[10px] text-gray-300 uppercase tracking-wider font-semibold">Sequência</p>
              <p className="text-sm font-extrabold text-white">{streakDays} {streakDays === 1 ? 'Dia' : 'Dias'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Internal Notification Banner */}
      <div className="flex items-center justify-between p-3.5 px-4 rounded-xl bg-gradient-to-r from-red-900/30 via-rose-900/20 to-red-900/30 border border-red-500/30 text-white text-xs sm:text-sm shadow-md animate-fade-in">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-red-600/30 text-red-400 shrink-0">
            <Bell className="w-4 h-4 animate-bounce text-red-400" />
          </div>
          <span className="font-medium text-gray-200">
            <strong className="text-white font-bold"> Notificação:</strong> ❤️ Desafio do dia disponível para vocês dois!
          </span>
        </div>
        {onOpenDailyChallenge && (
          <button
            onClick={onOpenDailyChallenge}
            className="ml-2 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs shrink-0 transition cursor-pointer flex items-center gap-1"
          >
            <Heart className="w-3.5 h-3.5 fill-white" /> Ver Agora
          </button>
        )}
      </div>
    </div>
  );
};
