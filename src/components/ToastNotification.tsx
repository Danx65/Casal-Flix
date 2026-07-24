import React from 'react';
import { CheckCircle2, Heart } from 'lucide-react';

interface Props {
  message: string | null;
  onClose: () => void;
}

export const ToastNotification: React.FC<Props> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl bg-[#181824] border border-red-500/40 text-white shadow-[0_0_30px_rgba(229,9,20,0.3)] text-xs sm:text-sm font-bold flex items-center gap-2.5 animate-bounce">
      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
      <span>{message}</span>
    </div>
  );
};
