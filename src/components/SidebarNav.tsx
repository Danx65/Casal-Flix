import React from 'react';
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
  User 
} from 'lucide-react';
import { NavTab } from '../types';

interface Props {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  favoriteCount: number;
}

export const SidebarNav: React.FC<Props> = ({ activeTab, setActiveTab, favoriteCount }) => {
  const navItems = [
    { id: 'home' as NavTab, label: 'Início', icon: Home },
    { id: 'desafios' as NavTab, label: 'Desafios', icon: Flame },
    { id: 'conversas' as NavTab, label: 'Conversas', icon: MessageCircle },
    { id: 'encontros' as NavTab, label: 'Encontros', icon: Wine },
    { id: 'surpresas' as NavTab, label: 'Surpresas', icon: Gift },
    { id: 'flerte' as NavTab, label: 'Flerte e Sedução', icon: Sparkles },
    { id: 'plano30' as NavTab, label: 'Plano 30 Dias', icon: Calendar },
    { id: 'favoritos' as NavTab, label: 'Favoritos', icon: Heart, badge: favoriteCount },
    { id: 'estatisticas' as NavTab, label: 'Estatísticas', icon: BarChart3 },
    { id: 'perfil' as NavTab, label: 'Perfil', icon: User },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-72 h-screen sticky top-0 bg-[#0E0E14]/90 border-r border-white/10 p-5 overflow-y-auto backdrop-blur-md shrink-0">
      {/* Brand Header */}
      <div className="flex items-center gap-3 px-2 py-3 mb-6 border-b border-white/10">
        <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-red-600 to-rose-500 shadow-md shadow-red-600/30 shrink-0">
          <Flame className="w-6 h-6 text-white fill-white" />
        </div>
        <div>
          <h1 className="font-extrabold text-base tracking-tight text-white leading-tight">
            GUIA 10X
          </h1>
          <p className="text-xs text-red-400 font-medium">SUA RELAÇÃO ❤️</p>
        </div>
      </div>

      {/* Nav List */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold shadow-md shadow-red-600/30'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                <span>{item.label}</span>
              </div>
              {item.badge !== undefined && item.badge > 0 && (
                <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${
                  isActive ? 'bg-white text-red-600' : 'bg-red-500/20 text-red-400'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Quote Widget */}
      <div className="mt-6 p-4 rounded-2xl bg-[#161622] border border-red-500/20 text-center">
        <Heart className="w-5 h-5 text-red-500 fill-red-500 mx-auto mb-2 animate-pulse" />
        <p className="text-xs italic text-gray-300 leading-relaxed">
          "Pequenas atitudes diárias constroem grandes histórias de amor."
        </p>
      </div>
    </aside>
  );
};
