import { FlirtMessage, FlirtCategory } from '../types';

export const FLIRT_MESSAGES: FlirtMessage[] = [
  // --- Românticas ---
  {
    id: 'fl-rom-01',
    text: 'Estava lembrando do seu sorriso hoje no meio do trabalho e meu dia ficou instantaneamente mais leve. Te amo!',
    category: 'Românticas',
    tone: 'Carinhosa'
  },
  {
    id: 'fl-rom-02',
    text: 'Você é a minha escolha favorita todos os dias quando acordo. Mal posso esperar para voltar pra casa e te dar um abraço.',
    category: 'Românticas',
    tone: 'Profunda'
  },
  {
    id: 'fl-rom-03',
    text: 'Passando só para te lembrar que você é a pessoa mais incrível que eu já conheci. Que sorte a minha ter você.',
    category: 'Românticas',
    tone: 'Apaixonada'
  },
  {
    id: 'fl-rom-04',
    text: 'Sabe aquele abraço apertado que só você sabe dar? Estou contando os minutos para receber o meu hoje.',
    category: 'Românticas',
    tone: 'Aconchegante'
  },

  // --- Provocantes & Elegantes ---
  {
    id: 'fl-pro-01',
    text: 'Hoje eu escolhi a sua roupa favorita para você tirar mais tarde... Esteja preparado(a).',
    category: 'Provocantes & Elegantes',
    tone: 'Misteriosa'
  },
  {
    id: 'fl-pro-02',
    text: 'Tive um pensamento muito indiscreto com você agora pouco. Quando chegar em casa eu te conto no ouvido...',
    category: 'Provocantes & Elegantes',
    tone: 'Sedutora'
  },
  {
    id: 'fl-pro-03',
    text: 'Aviso importante: hoje à noite o celular fica desligado e a minha atenção é 100% sua.',
    category: 'Provocantes & Elegantes',
    tone: 'Direta & Elegante'
  },
  {
    id: 'fl-pro-04',
    text: 'Apenas uma pergunta: o que você prefere para hoje à noite — uma taça de vinho na cama ou uma massagem sem pressa?',
    category: 'Provocantes & Elegantes',
    tone: 'Envolvente'
  },

  // --- Divertidas & Descontraídas ---
  {
    id: 'fl-div-01',
    text: 'Você não é GPS, mas me perdi completamente no seu olhar hoje cedo. Como faz para voltar?',
    category: 'Divertidas & Descontraídas',
    tone: 'Brincalhona'
  },
  {
    id: 'fl-div-02',
    text: 'Se amar você fosse crime, eu já estaria cumprindo prisão perpetuamente sem direito a fiança!',
    category: 'Divertidas & Descontraídas',
    tone: 'Engraçada'
  },
  {
    id: 'fl-div-03',
    text: 'Tenho uma proposta irrecusável: você me traz um chocolate e eu te dou um beijo de recompensa.',
    category: 'Divertidas & Descontraídas',
    tone: 'Fofa'
  },

  // --- Elogios Sinceros ---
  {
    id: 'fl-elo-01',
    text: 'Amo a forma como você se dedica a tudo o que faz. Sua garra e paixão pela vida me inspiram demais!',
    category: 'Elogios Sinceros',
    tone: 'Admiradora'
  },
  {
    id: 'fl-elo-02',
    text: 'Ninguém no mundo consegue me fazer rir do jeito que você faz. Você tem a alma mais linda que conheço.',
    category: 'Elogios Sinceros',
    tone: 'Sensível'
  }
];

// Add dynamic generated items up to 100+
for (let i = 5; i <= 30; i++) {
  FLIRT_MESSAGES.push({
    id: `fl-rom-${i}`,
    text: `Mensagem Romântica #${i}: Você transforma qualquer terça-feira comum em uma celebração inesquecível só por estar ao meu lado.`,
    category: 'Românticas',
    tone: 'Apaixonada'
  });
  FLIRT_MESSAGES.push({
    id: `fl-pro-${i}`,
    text: `Mensagem Provocante #${i}: Coloquei seu perfume no meu pulso hoje só para sentir sua presença o dia inteiro... te espero à noite.`,
    category: 'Provocantes & Elegantes',
    tone: 'Sedutora'
  });
  FLIRT_MESSAGES.push({
    id: `fl-div-${i}`,
    text: `Mensagem Divertida #${i}: Notícia de última hora: o nível de saudade que sinto de você bateu todos os recordes históricos hoje.`,
    category: 'Divertidas & Descontraídas',
    tone: 'Brincalhona'
  });
  FLIRT_MESSAGES.push({
    id: `fl-elo-${i}`,
    text: `Elogio Sincero #${i}: Seu carinho e sua sabedoria tornam nossa casa o lugar mais seguro e gostoso do mundo.`,
    category: 'Elogios Sinceros',
    tone: 'Gratidão'
  });
}

export function filterFlirt(category: FlirtCategory | 'Todas'): FlirtMessage[] {
  if (category === 'Todas') return FLIRT_MESSAGES;
  return FLIRT_MESSAGES.filter(f => f.category === category);
}
