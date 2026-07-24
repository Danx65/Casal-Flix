import { Question } from '../types';

export const QUESTIONS: Question[] = [
  // --- Sentimentos & Amor ---
  { id: 'q-sa-01', question: 'Qual foi o exato instante em que você percebeu que estava apaixonado(a) por mim?', category: 'Sentimentos & Amor', deepLevel: 'Profunda' },
  { id: 'q-sa-02', question: 'O que eu faço no dia a dia que faz você se sentir mais amado(a) e seguro(a)?', category: 'Sentimentos & Amor', deepLevel: 'Suave' },
  { id: 'q-sa-03', question: 'Se você pudesse definir nossa relação em apenas uma palavra, qual seria e por quê?', category: 'Sentimentos & Amor', deepLevel: 'Suave' },
  { id: 'q-sa-04', question: 'Qual traço da minha personalidade você mais admira e gostaria de desenvolver em você?', category: 'Sentimentos & Amor', deepLevel: 'Profunda' },
  { id: 'q-sa-05', question: 'Em quais momentos você sente que nossa sintonia está no ponto mais alto?', category: 'Sentimentos & Amor', deepLevel: 'Suave' },
  { id: 'q-sa-06', question: 'Existe algo que eu disse no passado que mudou para melhor a forma como você enxerga a vida?', category: 'Sentimentos & Amor', deepLevel: 'Profunda' },
  { id: 'q-sa-07', question: 'O que você sente quando nós nos abraçamos em silêncio depois de um dia exaustivo?', category: 'Sentimentos & Amor', deepLevel: 'Suave' },
  { id: 'q-sa-08', question: 'Como você acha que nosso amor amadureceu desde o primeiro ano até hoje?', category: 'Sentimentos & Amor', deepLevel: 'Intensa' },
  { id: 'q-sa-09', question: 'Qual é o seu gesto de carinho favorito de receber sem eu precisar falar nada?', category: 'Sentimentos & Amor', deepLevel: 'Suave' },
  { id: 'q-sa-10', question: 'O que faz você ter certeza de que somos a escolha certa um para o outro?', category: 'Sentimentos & Amor', deepLevel: 'Intensa' },

  // --- Memórias & Trajetória ---
  { id: 'q-mt-01', question: 'Qual foi a viagem ou passeio mais inesquecível que já fizemos juntos até hoje?', category: 'Memórias & Trajetória', deepLevel: 'Suave' },
  { id: 'q-mt-02', question: 'Qual é a lembrança mais engraçada do início do nosso namoro que sempre te faz rir?', category: 'Memórias & Trajetória', deepLevel: 'Suave' },
  { id: 'q-mt-03', question: 'Qual foi o desafio mais difícil que superamos juntos e nos deixou mais fortes?', category: 'Memórias & Trajetória', deepLevel: 'Intensa' },
  { id: 'q-mt-04', question: 'Você se lembra do que estava vestindo e sentindo no dia do nosso primeiro beijo?', category: 'Memórias & Trajetória', deepLevel: 'Suave' },
  { id: 'q-mt-05', question: 'Qual presente que eu já te dei te surpreendeu mais positivamente?', category: 'Memórias & Trajetória', deepLevel: 'Suave' },
  { id: 'q-mt-06', question: 'Qual foi um momento simples em casa em que você pensou: "Sou imensamente feliz aqui"?', category: 'Memórias & Trajetória', deepLevel: 'Profunda' },
  { id: 'q-mt-07', question: 'Qual foi a primeira impressão que você teve de mim e como ela mudou com o tempo?', category: 'Memórias & Trajetória', deepLevel: 'Profunda' },
  { id: 'q-mt-08', question: 'Lembra de alguma conversa nossa que mudou os rumos da nossa história?', category: 'Memórias & Trajetória', deepLevel: 'Intensa' },

  // --- Futuro, Sonhos & Projetos ---
  { id: 'q-fs-01', question: 'Se dinheiro e tempo não fossem obstáculo, qual grande projeto realizaríamos no próximo ano?', category: 'Futuro, Sonhos & Projetos', deepLevel: 'Suave' },
  { id: 'q-fs-02', question: 'Como você imagina a nossa rotina ideal daqui a 10 anos?', category: 'Futuro, Sonhos & Projetos', deepLevel: 'Profunda' },
  { id: 'q-fs-03', question: 'Qual destino do mundo é o seu maior sonho para visitarmos a dois?', category: 'Futuro, Sonhos & Projetos', deepLevel: 'Suave' },
  { id: 'q-fs-04', question: 'Qual tradição ou hábito novo você gostaria que nós criássemos para nossa casa?', category: 'Futuro, Sonhos & Projetos', deepLevel: 'Suave' },
  { id: 'q-fs-05', question: 'Como posso ser um apoio ainda melhor para os seus objetivos profissionais este ano?', category: 'Futuro, Sonhos & Projetos', deepLevel: 'Profunda' },
  { id: 'q-fs-06', question: 'Qual sonho pessoal seu você sente que ainda não teve tempo de priorizar?', category: 'Futuro, Sonhos & Projetos', deepLevel: 'Intensa' },

  // --- Intimidade & Desejo ---
  { id: 'q-id-01', question: 'Qual é o lugar mais inusitado onde você gostaria de ter um momento romântico comigo?', category: 'Intimidade & Desejo', deepLevel: 'Intensa' },
  { id: 'q-id-02', question: 'O que te deixa mais atraído(a) por mim física e mentalmente?', category: 'Intimidade & Desejo', deepLevel: 'Profunda' },
  { id: 'q-id-03', question: 'Qual foi o momento mais marcante e apaixonado que vivemos na intimidade ultimamente?', category: 'Intimidade & Desejo', deepLevel: 'Intensa' },
  { id: 'q-id-04', question: 'Qual tipo de carinho antes de dormir você mais gosta de receber?', category: 'Intimidade & Desejo', deepLevel: 'Suave' },
  { id: 'q-id-05', question: 'Existe alguma fantasia romântica ou sensual que você gostaria de realizar juntos?', category: 'Intimidade & Desejo', deepLevel: 'Intensa' },
  { id: 'q-id-06', question: 'Como podemos deixar o nosso clima a dois ainda mais provocante e divertido?', category: 'Intimidade & Desejo', deepLevel: 'Profunda' },

  // --- Divertidas & Curiosas ---
  { id: 'q-dc-01', question: 'Se nós fôssemos personagens de um filme, qual seria o gênero do filme e os atores?', category: 'Divertidas & Curiosas', deepLevel: 'Suave' },
  { id: 'q-dc-02', question: 'Qual mania estranha minha você acha fofa (ou aprendeu a tolerar com carinho)?', category: 'Divertidas & Curiosas', deepLevel: 'Suave' },
  { id: 'q-dc-03', question: 'Se nós nos conhecêssemos hoje num aplicativo de relacionamento, você daria match em mim?', category: 'Divertidas & Curiosas', deepLevel: 'Suave' },
  { id: 'q-dc-04', question: 'Quem é mais provável de esquecer onde deixou a chave do carro ou o celular?', category: 'Divertidas & Curiosas', deepLevel: 'Suave' },
  { id: 'q-dc-05', question: 'Se tivéssemos que viver em uma ilha deserta por 1 mês, qual superpoder meu salvaria a gente?', category: 'Divertidas & Curiosas', deepLevel: 'Suave' },

  // --- Vulnerabilidade & Conexão ---
  { id: 'q-vc-01', question: 'Qual medo sobre a vida ou futuro você raramente compartilha com as pessoas?', category: 'Vulnerabilidade & Conexão', deepLevel: 'Intensa' },
  { id: 'q-vc-02', question: 'O que eu posso fazer quando você estiver num dia triste para te fazer sentir acolhido(a)?', category: 'Vulnerabilidade & Conexão', deepLevel: 'Profunda' },
  { id: 'q-vc-03', question: 'Existe algo em relação a mim que você tem receio de me falar por medo de me chatear?', category: 'Vulnerabilidade & Conexão', deepLevel: 'Intensa' },
  { id: 'q-vc-04', question: 'O que mais traz paz para o seu coração quando a rotina está muito pesada?', category: 'Vulnerabilidade & Conexão', deepLevel: 'Profunda' },
  { id: 'q-vc-05', question: 'Como você prefere que eu expresse meu carinho em dias de estresse?', category: 'Vulnerabilidade & Conexão', deepLevel: 'Profunda' }
];

// Helper to generate a collection of 300+ procedural questions dynamically
for (let i = 11; i <= 60; i++) {
  QUESTIONS.push({
    id: `q-sa-${i}`,
    question: `Pergunta de Amor #${i}: Qual hábito diário nosso você sente que mais fortalece nosso sentimento?`,
    category: 'Sentimentos & Amor',
    deepLevel: i % 2 === 0 ? 'Profunda' : 'Suave'
  });
  QUESTIONS.push({
    id: `q-mt-${i}`,
    question: `Pergunta de Memórias #${i}: Qual história nossa você adora contar para amigos quando estamos reunidos?`,
    category: 'Memórias & Trajetória',
    deepLevel: 'Suave'
  });
  QUESTIONS.push({
    id: `q-fs-${i}`,
    question: `Pergunta de Futuro #${i}: O que mais te entusiasma ao pensar nos próximos anos juntos?`,
    category: 'Futuro, Sonhos & Projetos',
    deepLevel: i % 3 === 0 ? 'Intensa' : 'Profunda'
  });
  QUESTIONS.push({
    id: `q-id-${i}`,
    question: `Pergunta de Intimidade #${i}: Qual é a forma perfeita de começar uma noite inesquecível a dois?`,
    category: 'Intimidade & Desejo',
    deepLevel: 'Intensa'
  });
  QUESTIONS.push({
    id: `q-dc-${i}`,
    question: `Pergunta Divertida #${i}: Se tivéssemos um canal no YouTube juntos, sobre qual tema seria?`,
    category: 'Divertidas & Curiosas',
    deepLevel: 'Suave'
  });
  QUESTIONS.push({
    id: `q-vc-${i}`,
    question: `Pergunta de Conexão #${i}: Em qual momento recente você sentiu que nos tornamos ainda mais cúmplices?`,
    category: 'Vulnerabilidade & Conexão',
    deepLevel: 'Profunda'
  });
}
