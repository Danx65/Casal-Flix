import React from 'react';
import { NavTab } from '../types';
import {
  Home,
  Flame,
  MessageCircle,
  Wine,
  Gift,
  Sparkles,
  Calendar,
  Heart,
  BarChart3,
  User,
} from 'lucide-react';

interface Props {
  currentTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  badgeCounts?: {
    favoritesCount?: number;
    completedCount?: number;
  };
}

export const Navigation: React.FC<Props> = ({ currentTab, onTabChange, badgeCounts }) => {
  const desktopNavItems = [
    { id: 'home' as NavTab, label: 'Início', icon: Home },
    { id: 'desafios' as NavTab, label: 'Desafios', icon: Flame },
    { id: 'conversas' as NavTab, label: 'Conversas', icon: MessageCircle },
    { id: 'encontros' as NavTab, label: 'Encontros', icon: Wine },
    { id: 'surpresas' as NavTab, label: 'Surpresas', icon: Gift },
    { id: 'flerte' as NavTab, label: 'Flerte & Sedução', icon: Sparkles },
    { id: 'plano30' as NavTab, label: 'Plano 30 Dias', icon: Calendar },
    { id: 'favoritos' as NavTab, label: 'Favoritos', icon: Heart, badge: badgeCounts?.favoritesCount },
    { id: 'estatisticas' as NavTab, label: 'Estatísticas', icon: BarChart3 },
    { id: 'perfil' as NavTab, label: 'Perfil', icon: User },
  ];

  const mobileBottomItems = [
    { id: 'home' as NavTab, label: 'Home', icon: Home },
    { id: 'desafios' as NavTab, label: 'Desafios', icon: Flame },
    { id: 'favoritos' as NavTab, label: 'Favoritos', icon: Heart, badge: badgeCounts?.favoritesCount },
    { id: 'plano30' as NavTab, label: 'Calendário', icon: Calendar },
    { id: 'perfil' as NavTab, label: 'Perfil', icon: User },
  ];

  return (
    <>
      {/* Desktop Sidebar (visible on md screens and above) */}
      <aside className="hidden md:flex flex-col w-64 lg:w-72 bg-neutral-950 border-r border-neutral-800/80 p-5 shrink-0 h-screen sticky top-0 overflow-y-auto">
        {/* Brand Header */}
        <div className="flex items-center gap-3 mb-8 px-2 cursor-pointer" onClick={() => onTabChange('home')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 to-rose-500 flex items-center justify-center shadow-lg shadow-red-600/30 shrink-0">
            <Heart className="w-6 h-6 text-white fill-white" />
          </div>
          <div>
            <h2 className="text-base font-extrabold text-white tracking-wide leading-tight">
              GUIA 10X
            </h2>
            <p className="text-[11px] font-semibold tracking-wider uppercase text-rose-500">
              SUA RELAÇÃO
            </p>
          </div>
        </div>

        {/* Navigation List */}
        <nav className="space-y-1.5 flex-1">
          {desktopNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white shadow-md shadow-red-900/40 font-semibold'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900/80'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-neutral-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && item.badge > 0 && (
                  <span
                    className={`px-2 py-0.5 text-xs font-bold rounded-full ${
                      isActive ? 'bg-white text-red-600' : 'bg-red-950 text-rose-400 border border-red-800/50'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Inspirational Quote Card at Sidebar Bottom */}
        <div className="mt-6 p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800 text-center relative overflow-hidden">
          <p className="text-xs text-neutral-300 italic font-medium leading-relaxed">
            "Pequenas atitudes diárias constroem grandes histórias de amor."
          </p>
          <div className="mt-2 flex items-center justify-center">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Bar (visible on mobile screens) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 border-t border-neutral-800/80 backdrop-blur-xl px-2 py-1.5">
        <div className="flex items-center justify-around max-w-md mx-auto">
          {mobileBottomItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all duration-200 cursor-pointer relative ${
                  isActive ? 'text-rose-500' : 'text-neutral-500 hover:text-neutral-300'
                }`}
              >
                <div className="relative">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-rose-500 scale-110' : ''}`} />
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="absolute -top-1 -right-2 w-4 h-4 bg-red-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className={`text-[10px] font-medium mt-1 ${isActive ? 'font-bold text-rose-400' : ''}`}>
                  {item.label}
                </span>
                {isActive && (
                  <span className="w-1 h-1 bg-rose-500 rounded-full mt-0.5" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
