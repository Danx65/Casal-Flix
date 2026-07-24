import React from 'react';
import { Home, Flame, Heart, Calendar, User } from 'lucide-react';
import { NavTab } from '../types';

interface Props {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  favoriteCount: number;
}

export const BottomNav: React.FC<Props> = ({ activeTab, setActiveTab, favoriteCount }) => {
  const tabs = [
    { id: 'home' as NavTab, label: 'Home', icon: Home },
    { id: 'desafios' as NavTab, label: 'Desafios', icon: Flame },
    { id: 'favoritos' as NavTab, label: 'Favoritos', icon: Heart, badge: favoriteCount },
    { id: 'plano30' as NavTab, label: 'Calendário', icon: Calendar },
    { id: 'perfil' as NavTab, label: 'Perfil', icon: User },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0C]/90 backdrop-blur-xl border-t border-white/10 px-2 py-2">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex flex-col items-center justify-center w-16 py-1 text-xs font-medium rounded-xl transition-all duration-200 cursor-pointer ${
                isActive ? 'text-red-500 font-bold' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 mb-0.5 ${isActive ? 'text-red-500 scale-110' : 'text-gray-400'}`} />
                {tab.badge !== undefined && tab.badge > 0 && (
                  <span className="absolute -top-1 -right-2 flex items-center justify-center min-w-[16px] h-4 px-1 text-[10px] font-extrabold text-white bg-red-600 rounded-full">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span className="text-[10px] tracking-tight">{tab.label}</span>
              {isActive && (
                <span className="absolute -bottom-1 w-5 h-0.5 bg-red-500 rounded-full shadow-[0_0_8px_#E50914]" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
