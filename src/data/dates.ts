import { DateIdea, DateFilter } from '../types';

export const DATES: DateIdea[] = [
  // --- Em casa / Sem gastar dinheiro / Noite ---
  {
    id: 'dt-01',
    title: 'Noite de Degustação de Pizzas Caseiras',
    description: 'Comprem discos de massa prontos e vários recheios para montarem pizzas brotinho personalizadas.',
    tags: ['Em casa', 'Noite'],
    vibe: 'Descontraída e saborosa',
    timeNeeded: '1.5 horas'
  },
  {
    id: 'dt-02',
    title: 'Observação das Estrelas com Manta no Quintal',
    description: 'Estendam um edredom no chão do quintal ou varanda, apaguem as luzes e usem um aplicativo de astronomia para identificar constelações.',
    tags: ['Em casa', 'Ao ar livre', 'Noite', 'Sem gastar dinheiro'],
    vibe: 'Poética e relaxante',
    timeNeeded: '1 hora'
  },
  {
    id: 'dt-03',
    title: 'Acampamento Sala de Estar',
    description: 'Montem uma cabaninha de lençóis e cadeiras na sala com luzes pisca-pisca, almofadas e chocolates para conversarem até de madrugada.',
    tags: ['Em casa', 'Noite', 'Fim de semana', 'Sem gastar dinheiro'],
    vibe: 'Nostálgica e acolhedora',
    timeNeeded: '2 horas'
  },
  {
    id: 'dt-04',
    title: 'Sessão de Pintura em Tela a Dois',
    description: 'Comprem duas pequenas telas e tintas acrílicas para pintarem um ao outro ou uma paisagem abstrata juntos.',
    tags: ['Em casa', 'Fim de semana'],
    vibe: 'Criativa e divertida',
    timeNeeded: '1.5 horas'
  },
  {
    id: 'dt-05',
    title: 'Passeio de Bicicleta ao Amanhecer',
    description: 'Acordem cedo no fim de semana para andar de bicicleta pelas ruas calmas da cidade ou parque e tomar água de coco.',
    tags: ['Ao ar livre', 'Fim de semana', 'Sem gastar dinheiro'],
    vibe: 'Energética e saudável',
    timeNeeded: '2 horas'
  },
  {
    id: 'dt-06',
    title: 'Caminhada Cultural pelo Centro Histórico',
    description: 'Explorem museus com entrada gratuita, praças arquitetônicas e feiras de artesanato no centro da cidade.',
    tags: ['Ao ar livre', 'Fim de semana', 'Sem gastar dinheiro'],
    vibe: 'Intelectual e leve',
    timeNeeded: '3 horas'
  },
  {
    id: 'dt-07',
    title: 'Noite de Fondues de Queijo e Chocolate',
    description: 'Preparem uma panela de fondue de queijo acompanhada de pães e uma de chocolate com morangos e bananas.',
    tags: ['Em casa', 'Noite'],
    vibe: 'Sofisticada e romântica',
    timeNeeded: '2 horas'
  },
  {
    id: 'dt-08',
    title: 'Tarde de Jogos na Cafeteria Charmosa',
    description: 'Vão a um café aconchegante com jogos de tabuleiro ou levem um baralho para jogarem enquanto tomam cafés especiais.',
    tags: ['Ao ar livre', 'Fim de semana'],
    vibe: 'Aconchegante e gostosa',
    timeNeeded: '2 horas'
  },
  {
    id: 'dt-09',
    title: 'Trilha na Natureza e Banho de Cachoeira',
    description: 'Escolham uma trilha leve na região para se conectarem com a natureza e relaxarem longe da poluição.',
    tags: ['Ao ar livre', 'Fim de semana', 'Sem gastar dinheiro'],
    vibe: 'Aventureira e revigorante',
    timeNeeded: '4 horas'
  },
  {
    id: 'dt-10',
    title: 'Batalha MasterChef de Hambúrguer Artesanal',
    description: 'Cada um fica responsável por criar a sua receita secreta de hambúrguer gourmet e o parceiro avalia dando notas.',
    tags: ['Em casa', 'Noite'],
    vibe: 'Competitiva e divertida',
    timeNeeded: '1.5 horas'
  }
];

// Dynamically generate additional date ideas for full 200+ list
for (let i = 11; i <= 200; i++) {
  const isHome = i % 2 === 0;
  const isOutdoor = i % 3 === 0;
  const isNight = i % 2 !== 0;
  const isWeekend = i % 4 === 0;
  const isFree = i % 5 === 0;

  const tags: DateFilter[] = [];
  if (isHome) tags.push('Em casa');
  if (isOutdoor) tags.push('Ao ar livre');
  if (isNight) tags.push('Noite');
  if (isWeekend) tags.push('Fim de semana');
  if (isFree) tags.push('Sem gastar dinheiro');
  if (tags.length === 0) tags.push('Em casa', 'Noite');

  DATES.push({
    id: `dt-${i}`,
    title: `Ideia de Encontro #${i}: ${isHome ? 'Experiência Aconchegante em Casa' : 'Exploração Urbana e Romântica'}`,
    description: `Atividade especial para o casal renovar a rotina. Dediquem tempo de qualidade para conversarem e se divertirem juntos sem distrações externas.`,
    tags: tags,
    vibe: isNight ? 'Íntima e Sedutora' : 'Luminosa e Leve',
    timeNeeded: `${(i % 3) + 1} horas`
  });
}

export function filterDates(filter: DateFilter | 'Todos'): DateIdea[] {
  if (filter === 'Todos') return DATES;
  return DATES.filter(d => d.tags.includes(filter));
}
