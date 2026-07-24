import React from 'react';
import { Heart, X, Sparkles } from 'lucide-react';

interface Props {
  onDismiss: () => void;
  onOpenDaily: () => void;
}

export const NotificationBanner: React.FC<Props> = ({ onDismiss, onOpenDaily }) => {
  return (
    <div className="bg-gradient-to-r from-red-950/90 via-rose-900/80 to-red-950/90 border-b border-red-800/40 px-4 py-2.5 text-white flex items-center justify-between shadow-lg backdrop-blur-md animate-slide-down">
      <div
        onClick={onOpenDaily}
        className="flex items-center gap-2.5 cursor-pointer hover:opacity-90 transition-opacity flex-1 min-w-0"
      >
        <div className="w-7 h-7 rounded-full bg-red-600/30 border border-red-500/50 flex items-center justify-center shrink-0">
          <Heart className="w-4 h-4 text-rose-400 fill-rose-400 animate-pulse" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs sm:text-sm font-semibold text-rose-100 flex items-center gap-1.5 truncate">
            <span>❤️ Desafio do dia disponível!</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          </p>
          <p className="text-[11px] text-rose-300/80 truncate">
            Toque aqui para ver e apimentar sua relação hoje.
          </p>
        </div>
      </div>

      <button
        onClick={onDismiss}
        className="p-1.5 hover:bg-white/10 rounded-full text-neutral-400 hover:text-white transition-colors shrink-0 ml-2"
        title="Fechar notificação"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
