import { FlirtMessage, FlirtCategory } from '../types';

export const FLIRT_MESSAGES: FlirtMessage[] = [
  // --- Mensagens Românticas ---
  {
    id: 'fl-rom-01',
    text: 'Estava aqui trabalhando e de repente me peguei sorrindo sozinho(a) lembrando do seu abraço de hoje de manhã. Você é meu melhor refúgio.',
    category: 'Românticas',
    tone: 'Carinhoso'
  },
  {
    id: 'fl-rom-02',
    text: 'A vida ficou infinitamente mais bonita, leve e cheia de sentido depois que você chegou. Obrigado(a) por ser meu amor e minha melhor companhia.',
    category: 'Românticas',
    tone: 'Poético'
  },
  {
    id: 'fl-rom-03',
    text: 'Não importa quantos anos passem, a sensação de frio na barriga quando ouço sua voz na porta de casa continua exatamente a mesma.',
    category: 'Românticas',
    tone: 'Apaixonado'
  },
  {
    id: 'fl-rom-04',
    text: 'Só queria te lembrar, no meio da correria do dia, que você é o pensamento mais bonito que habita na minha mente.',
    category: 'Românticas',
    tone: 'Doce'
  },
  {
    id: 'fl-rom-05',
    text: 'Amar você é a escolha mais fácil e feliz que eu faço todos os dias. Mal posso esperar para estar no seu colo hoje à noite.',
    category: 'Românticas',
    tone: 'Profundo'
  },

  // --- Mensagens Provocantes & Elegantes ---
  {
    id: 'fl-pro-01',
    text: 'Coloquei um perfume novo hoje pensando no nosso encontro mais tarde... Espero que você esteja preparado(a) para me dar total atenção.',
    category: 'Provocantes & Elegantes',
    tone: 'Sedutor'
  },
  {
    id: 'fl-pro-02',
    text: 'Apenas um aviso: hoje à noite a TV vai ficar desligada e o celular em modo avião. O único entretenimento da noite somos nós dois.',
    category: 'Provocantes & Elegantes',
    tone: 'Direto'
  },
  {
    id: 'fl-pro-03',
    text: 'Seu sorriso naquela foto de hoje me deu umas ideias perigosas para quando você chegar em casa... Não demore.',
    category: 'Provocantes & Elegantes',
    tone: 'Misterioso'
  },
  {
    id: 'fl-pro-04',
    text: 'O que você acha de pularmos a janta e irmos direto para a sobremesa hoje? Fica o convite.',
    category: 'Provocantes & Elegantes',
    tone: 'Atrevido'
  },
  {
    id: 'fl-pro-05',
    text: 'Estou contando os minutos para tirar esse seu terno/roupa e sentir sua pele colada na minha. Tenha um ótimo final de dia.',
    category: 'Provocantes & Elegantes',
    tone: 'Intenso'
  },

  // --- Mensagens Divertidas & Descontraídas ---
  {
    id: 'fl-div-01',
    text: 'Pesquisas científicas comprovam que um beijo seu agora aumentaria minha produtividade em 300%. Fica a dica profissional!',
    category: 'Divertidas & Descontraídas',
    tone: 'Engraçado'
  },
  {
    id: 'fl-div-02',
    text: 'Vim te avisar que roubar meu coração é um crime grave, mas estou disposto(a) a não prestar queixa se você me pagar em cafuné hoje.',
    category: 'Divertidas & Descontraídas',
    tone: 'Brincalhão'
  },
  {
    id: 'fl-div-03',
    text: 'Se você estivesse num cardápio de restaurante, com certeza seria o prato principal mais cobiçado e caro do lugar!',
    category: 'Divertidas & Descontraídas',
    tone: 'Criativo'
  },
  {
    id: 'fl-div-04',
    text: 'Passando apenas para informar que o sistema detectou uma deficiência severa de abraços e necessita de recarga imediata hoje.',
    category: 'Divertidas & Descontraídas',
    tone: 'Leve'
  },

  // --- Elogios Sinceros ---
  {
    id: 'fl-elo-01',
    text: 'A forma como você cuida das coisas e se dedica às pessoas ao seu redor me faz admirar você ainda mais a cada dia.',
    category: 'Elogios Sinceros',
    tone: 'Admirado'
  },
  {
    id: 'fl-elo-02',
    text: 'Você fica incrivelmente atraente quando está concentrado(a) fazendo algo que gosta. Orgulho imenso de ter você do meu lado.',
    category: 'Elogios Sinceros',
    tone: 'Inspirador'
  },
  {
    id: 'fl-elo-03',
    text: 'Seu abraço tem o poder mágico de desligar todo o barulho do mundo lá fora. Obrigado(a) por ser minha paz.',
    category: 'Elogios Sinceros',
    tone: 'Acolhedor'
  }
];

// Generate 120+ entries dynamically for comprehensive list
for (let i = 6; i <= 35; i++) {
  FLIRT_MESSAGES.push({
    id: `fl-rom-${i}`,
    text: `Mensagem Romântica #${i}: Passando para lembrar que cada detalhe em você me fascina. Meu dia fica 10x melhor só de saber que tenho você ao meu lado.`,
    category: 'Românticas',
    tone: 'Carinhoso'
  });
  FLIRT_MESSAGES.push({
    id: `fl-pro-${i}`,
    text: `Mensagem Sedutora #${i}: Guarde um pouco de energia para hoje à noite. Tenho uma surpresa reservada que você não vai esquecer tão cedo...`,
    category: 'Provocantes & Elegantes',
    tone: 'Provocante'
  });
  FLIRT_MESSAGES.push({
    id: `fl-div-${i}`,
    text: `Mensagem Divertida #${i}: Notícia urgente: foi emitido um mandado de busca e apreensão para os seus beijos hoje após as 19h!`,
    category: 'Divertidas & Descontraídas',
    tone: 'Divertido'
  });
  FLIRT_MESSAGES.push({
    id: `fl-elo-${i}`,
    text: `Elogio Sincero #${i}: Você tem um talento único para transformar momentos simples nas melhores memórias da minha vida.`,
    category: 'Elogios Sinceros',
    tone: 'Sincero'
  });
}
