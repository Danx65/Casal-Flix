import React from 'react';
import { CATEGORY_IMAGES } from '../data/categoryImages';
import { NavTab } from '../types';

interface Props {
  onSelectCategory: (tab: NavTab) => void;
}

export const CategoryGrid: React.FC<Props> = ({ onSelectCategory }) => {
  const cards = [
    {
      id: 'desafios' as NavTab,
      title: 'DESAFIOS',
      subtitle: 'para fazer a dois',
      image: CATEGORY_IMAGES.desafios,
      count: '100+ Ideias'
    },
    {
      id: 'conversas' as NavTab,
      title: 'CONVERSAS',
      subtitle: 'que conectam',
      image: CATEGORY_IMAGES.conversas,
      count: '300+ Perguntas'
    },
    {
      id: 'encontros' as NavTab,
      title: 'ENCONTROS',
      subtitle: 'inesquecíveis',
      image: CATEGORY_IMAGES.encontros,
      count: '200+ Ideias'
    },
    {
      id: 'surpresas' as NavTab,
      title: 'SURPRESAS',
      subtitle: 'que encantam',
      image: CATEGORY_IMAGES.surpresas,
      count: 'Por Valor'
    },
    {
      id: 'flerte' as NavTab,
      title: 'FLERTE E SEDUÇÃO',
      subtitle: 'no dia a dia',
      image: CATEGORY_IMAGES.flerte,
      count: 'Pronto p/ Copiar'
    },
    {
      id: 'plano30' as NavTab,
      title: 'PLANO DE 30 DIAS',
      subtitle: 'para fortalecer',
      image: CATEGORY_IMAGES.plano30,
      count: 'Guia Diário'
    }
  ];

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
            Explore por Categoria
          </h3>
          <p className="text-xs text-gray-400">
            Escolha uma área e viva momentos incríveis a dois hoje.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => onSelectCategory(card.id)}
            className="group relative h-48 sm:h-52 rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-red-500/50 transition-all duration-300 shadow-lg active:scale-[0.98]"
          >
            {/* Background Image with dark luxury gradient overlay */}
            <img
              src={card.image}
              alt={card.title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            {/* Top Badge */}
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-gray-200">
              {card.count}
            </div>

            {/* Bottom Content overlay matching reference style */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
              <h4 className="text-base sm:text-lg font-black tracking-wider text-white uppercase drop-shadow-md">
                {card.title}
              </h4>
              <p className="text-xs text-red-300 font-medium tracking-wide">
                {card.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
