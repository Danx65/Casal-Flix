import { Surprise } from '../types';

export const SURPRISES: Surprise[] = [
  // --- GRÁTIS (R$0) ---
  {
    id: 'sur-free-01',
    title: 'Sessão de SPA e Massagem em Casa',
    description: 'Transforme o quarto em um santuário de relaxamento com iluminação indireta e playlist relaxante.',
    priceTier: 'free',
    estimatedCost: 'R$ 0,00',
    materials: ['Creme ou óleo hidratante que já tem em casa', 'Toalhas macias', 'Velas ou iluminação fraca', 'Música relaxante'],
    steps: [
      'Arrume a cama com lençóis limpos.',
      'Coloque uma música ambiente instrumental em volume baixo.',
      'Aqueça o creme nas mãos antes de tocar a pele.',
      'Ofereça uma massagem nas costas, ombros e pés por 30 minutos.'
    ]
  },
  {
    id: 'sur-free-02',
    title: 'A Trilha Sonora dos Nossos Momentos',
    description: 'Monte uma playlist secreta com áudios de voz intercalados entre as músicas favoritas do casal.',
    priceTier: 'free',
    estimatedCost: 'R$ 0,00',
    materials: ['Celular', 'Aplicativo de música (Spotify/YouTube Music)'],
    steps: [
      'Grave curtos áudios de 15 segundos relembrando momentos especiais.',
      'Adicione na playlist entre as músicas marcantes.',
      'Envie o link com a mensagem: "Ouça no fone de ouvido voltando para casa".'
    ]
  },
  {
    id: 'sur-free-03',
    title: 'Carta Aberta em Formato de Sanfona',
    description: 'Um cartão dobrado artesanalmente com fotos impressas ou desenhos simples e memórias do casal.',
    priceTier: 'free',
    estimatedCost: 'R$ 0,00',
    materials: ['Papel A4 ou cartolina', 'Canetas coloridas', 'Tesoura', 'Cola'],
    steps: [
      'Dobre o papel em tiras como uma sanfona.',
      'Em cada dobra, escreva uma memória ou um motivo pelo qual você ama seu par.',
      'Deixe sobre a mesa com uma xícara de chá ou café.'
    ]
  },
  {
    id: 'sur-free-04',
    title: 'Cinema VIP no Quarto com Bar de Pipoca',
    description: 'Crie uma experiência de cinema gourmet utilizando o que você já tem na despensa.',
    priceTier: 'free',
    estimatedCost: 'R$ 0,00',
    materials: ['Pipoca de milho', 'Temperos (canela, queijo ralado ou leite em pó)', 'Almofadas', 'Cobras confortáveis'],
    steps: [
      'Prepare dois tipos de pipoca (doce e salgada).',
      'Faça uma "credencial VIP" de papel para o cinema.',
      'Coloque o filme escolhido pelo seu amor e curtam juntinhos.'
    ]
  },

  // --- ATÉ R$50 ---
  {
    id: 'sur-50-01',
    title: 'Caixa dos Sentidos (Versão Econômica)',
    description: 'Uma caixa especial com 5 itens que estimulam os 5 sentidos: Visão, Audição, Paladar, Olfato e Tato.',
    priceTier: 'up50',
    estimatedCost: 'R$ 35,00 a R$ 45,00',
    materials: ['Caixa de papelão decorada', 'Chocolate (Paladar)', 'Foto impressa (Visão)', 'Sachê perfumado (Olfato)', 'Penas/Óleo (Tato)', 'QR Code da playlist (Audição)'],
    steps: [
      'Embalar cada item com uma etiqueta com o nome do sentido.',
      'Entregar para o parceiro abrir um por um.',
      'Aproveitar as sensações trazidas por cada presente.'
    ]
  },
  {
    id: 'sur-50-02',
    title: 'Buquê de Doces & Mimos',
    description: 'Um arranjo feito em casa com as guloseimas e chocolates favoritos do seu amor em vez de flores tradicionais.',
    priceTier: 'up50',
    estimatedCost: 'R$ 30,00 a R$ 40,00',
    materials: ['Chocolates e biscoitos favoritos', 'Palitos de churrasco', 'Fita adesiva', 'Papel de presente de seda', 'Laço vermelho'],
    steps: [
      'Fixe os chocolates nos palitos com fita adesiva.',
      'Junte todos formando um buquê.',
      'Embrulhe no papel de seda com o laço bonito e um bilhete amoroso.'
    ]
  },
  {
    id: 'sur-50-03',
    title: 'Vinho & Queijo sob as Estrelas',
    description: 'Um minipicnic noturno na varanda ou quintal com vinho e aperitivos simples.',
    priceTier: 'up50',
    estimatedCost: 'R$ 45,00',
    materials: ['Garrafa de vinho reservado', 'Queijo muçarela ou prato fatiado com azeitonas', 'Torradinhas', 'Manta para sentar'],
    steps: [
      'Monte uma tábua simples mas caprichada.',
      'Estenda a manta na varanda ou quintal.',
      'Desfrutem do vinho conversando sobre planos sob as estrelas.'
    ]
  },

  // --- ATÉ R$100 ---
  {
    id: 'sur-100-01',
    title: 'Jantar Temático de País Estrangeiro',
    description: 'Transforme a sala de jantar em uma cantina italiana, bistrô francês ou noite de tacos mexicanos.',
    priceTier: 'up100',
    estimatedCost: 'R$ 70,00 a R$ 90,00',
    materials: ['Ingredientes do prato temático', 'Toalha de mesa charmosa', 'Velas decorativas', 'Playlist típica do país'],
    steps: [
      'Crie um menu impresso com o nome dos pratos.',
      'Cozinhe o jantar e sirva à meia-luz.',
      'Coloque a música típica do país para imersão total.'
    ]
  },
  {
    id: 'sur-100-02',
    title: 'Quadro Personalizado com Mapa das Estrelas',
    description: 'Imprima o mapa das estrelas do dia exato em que se conheceram ou deram o primeiro beijo.',
    priceTier: 'up100',
    estimatedCost: 'R$ 60,00 a R$ 85,00',
    materials: ['Moldura de foto A4', 'Impressão em alta qualidade do mapa estelar', 'Embalagem de presente com laço'],
    steps: [
      'Gere o mapa estelar da data histórica do casal.',
      'Imprima em papel fotográfico e coloque na moldura.',
      'Entregue durante uma conversa carinhosa sobre aquele dia.'
    ]
  },

  // --- ATÉ R$300 ---
  {
    id: 'sur-300-01',
    title: 'Diária Surpresa em Pousada ou Hotel Boutique',
    description: 'Reserve uma diária rápida em um hotel romântico na cidade para mudarem de ar sem precisar viajar longe.',
    priceTier: 'up300',
    estimatedCost: 'R$ 220,00 a R$ 290,00',
    materials: ['Mala rápida com roupas do parceiro escondidas', 'Confirmação da reserva'],
    steps: [
      'Arrume a mala do parceiro sem ele perceber.',
      'Busque-o no trabalho e dirija direto para o hotel.',
      'Aproveitem a piscina, hidromassagem e café da manhã especial.'
    ]
  },
  {
    id: 'sur-300-02',
    title: 'Jantar nas Alturas em Restaurante Panorâmico',
    description: 'Uma reserva surpresa em um restaurante sofisticado com vista linda da cidade.',
    priceTier: 'up300',
    estimatedCost: 'R$ 250,00 a R$ 300,00',
    materials: ['Reserva antecipada na janela', 'Trajes elegantes'],
    steps: [
      'Peça para seu par se arrumar para um "compromisso surpresa".',
      'Leve-o ao restaurante com vista privilegiada.',
      'Celebrem o amor com um brinde especial.'
    ]
  }
];
