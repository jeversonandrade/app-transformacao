export const BLOCKS = [
  {
    number: 1,
    title: 'A VERDADE BRUTAL',
    subtitle: 'Hora 0–3',
    objective: 'Confrontar a realidade sem filtros para abrir o processo de mudança.',
    color: 'from-blue-900 to-blue-700',
    tasks: [
      {
        id: 'carta_vida_atual',
        type: 'textarea',
        title: 'Carta da Vida Atual',
        description: 'Descreve a tua vida exatamente como ela está hoje, sem fugir da verdade.',
        required: true
      },
      {
        id: 'exercicio_espelho',
        type: 'textarea',
        title: 'Exercício do Espelho',
        description: 'Encara-te 2 minutos no espelho. O que vejo? O que evito ver?',
        required: true
      },
      {
        id: 'compromissos_quebrados',
        type: 'list',
        title: 'Lista dos 10 Compromissos Quebrados',
        description: 'Liste 10 compromissos que quebrou consigo mesmo',
        required: true,
        count: 10
      },
      {
        id: 'compromisso_principal',
        type: 'select',
        title: 'Compromisso Principal',
        description: 'Selecione 1 compromisso principal a restaurar durante as 24h',
        required: true
      }
    ]
  },
  {
    number: 2,
    title: 'CORTE COM O PASSADO',
    subtitle: 'Hora 3–6',
    objective: 'Libertar peso emocional e criar espaço para o novo.',
    color: 'from-indigo-900 to-indigo-700',
    tasks: [
      {
        id: 'ressentimentos',
        type: 'list',
        title: 'Lista dos 5 Maiores Ressentimentos',
        description: 'Liste os 5 maiores ressentimentos que carrega',
        required: true,
        count: 5
      },
      {
        id: 'ritual_perdao',
        type: 'textarea',
        title: 'Ritual de Perdão Rápido',
        description: 'Escreva seu ritual de perdão',
        required: true
      },
      {
        id: 'item_fisico',
        type: 'upload',
        title: 'Eliminar 1 Item Físico',
        description: 'Tire uma foto do item que vai eliminar (opcional)',
        required: false
      },
      {
        id: 'quem_nao_sou',
        type: 'textarea',
        title: 'Quem Eu Já Não Sou',
        description: 'Quem eu já não sou a partir de hoje?',
        required: true
      }
    ]
  },
  {
    number: 3,
    title: 'IDENTIDADE ONE SHIFT',
    subtitle: 'Hora 6–9',
    objective: 'Definir a nova identidade emocional e comportamental.',
    color: 'from-purple-900 to-purple-700',
    tasks: [
      {
        id: 'bio_novo_eu',
        type: 'textarea',
        title: 'Bio do Novo Eu',
        description: 'Escreva a biografia do seu novo eu',
        required: true
      },
      {
        id: 'valores_inegociaveis',
        type: 'list',
        title: '3 Valores Inegociáveis',
        description: 'Selecione 3 valores inegociáveis',
        required: true,
        count: 3
      },
      {
        id: 'comportamentos_imediatos',
        type: 'list',
        title: '3 Comportamentos Imediatos',
        description: 'Defina 3 comportamentos imediatos',
        required: true,
        count: 3
      },
      {
        id: 'audio_futuro',
        type: 'audio',
        title: 'Mensagem para o Meu Eu do Futuro',
        description: 'Grave um áudio com sua mensagem',
        required: false
      }
    ]
  },
  {
    number: 4,
    title: 'CORPO E ENERGIA',
    subtitle: 'Hora 9–12',
    objective: 'Libertar energia presa e alterar o estado emocional.',
    color: 'from-cyan-900 to-cyan-700',
    tasks: [
      {
        id: 'movimento_fisico',
        type: 'timer',
        title: 'Movimento Físico de 30 Minutos',
        description: 'Complete 30 minutos de movimento físico',
        required: true,
        duration: 1800
      },
      {
        id: 'banho_consciente',
        type: 'checkbox',
        title: 'Banho Consciente',
        description: 'Tome um banho consciente',
        required: true
      },
      {
        id: 'refeicao_consciente',
        type: 'textarea',
        title: 'Refeição Consciente',
        description: 'Descreva sua refeição consciente',
        required: true
      },
      {
        id: 'corpo_pedido',
        type: 'textarea',
        title: 'Reflexão Corporal',
        description: 'Como o meu corpo me tem pedido ajuda?',
        required: true
      }
    ]
  },
  {
    number: 5,
    title: 'DINHEIRO E PROPÓSITO',
    subtitle: 'Hora 12–15',
    objective: 'Enfrentar a verdade financeira e criar direção.',
    color: 'from-amber-900 to-amber-700',
    tasks: [
      {
        id: 'verdade_dinheiro',
        type: 'textarea',
        title: 'A Verdade Sobre o Meu Dinheiro Hoje',
        description: 'Escreva a verdade sobre sua situação financeira',
        required: true
      },
      {
        id: 'preco_vida',
        type: 'textarea',
        title: 'O Preço da Vida Que Quero Viver',
        description: 'Defina o preço da vida que deseja',
        required: true
      },
      {
        id: 'acao_concreta',
        type: 'textarea',
        title: 'Ação Concreta',
        description: 'Crie 1 ação concreta para os próximos 3 dias',
        required: true
      },
      {
        id: 'responsabilidade',
        type: 'checkbox',
        title: 'Assumir Responsabilidade',
        description: 'Eu assumo responsabilidade pelo meu dinheiro',
        required: true
      }
    ]
  },
  {
    number: 6,
    title: 'RELAÇÕES E FAMÍLIA',
    subtitle: 'Hora 15–18',
    objective: 'Curar laços e reconectar com o que importa.',
    color: 'from-rose-900 to-rose-700',
    tasks: [
      {
        id: 'quem_firo',
        type: 'list',
        title: 'Quem Estou a Ferir',
        description: 'Quem estou a ferir pela minha estagnação?',
        required: true,
        count: 5
      },
      {
        id: 'mensagem_reconexao',
        type: 'textarea',
        title: 'Mensagem de Reconexão',
        description: 'Escreva uma mensagem de reconexão',
        required: true
      },
      {
        id: 'eu_ideal',
        type: 'textarea',
        title: 'Eu Ideal',
        description: 'Defina o "Eu ideal" como pai/mãe/parceiro',
        required: true
      },
      {
        id: 'gesto_concreto',
        type: 'textarea',
        title: 'Gesto Concreto',
        description: 'Escolha 1 gesto concreto para fazer hoje',
        required: true
      }
    ]
  },
  {
    number: 7,
    title: 'CORAGEM',
    subtitle: 'Hora 18–21',
    objective: 'Romper a paralisia através de uma ação real.',
    color: 'from-orange-900 to-orange-700',
    tasks: [
      {
        id: 'coisas_adiadas',
        type: 'list',
        title: '10 Coisas Adiadas',
        description: 'Liste 10 coisas adiadas há meses',
        required: true,
        count: 10
      },
      {
        id: 'acao_hoje',
        type: 'textarea',
        title: 'Escolher 1 e Agir Hoje',
        description: 'Escolha 1 e descreva a ação',
        required: true
      },
      {
        id: 'video_selfie',
        type: 'upload',
        title: 'Vídeo-Selfie',
        description: 'Grave um vídeo-selfie (opcional)',
        required: false
      },
      {
        id: 'sentimento_acao',
        type: 'textarea',
        title: 'O Que Senti ao Agir',
        description: 'O que senti ao agir?',
        required: true
      }
    ]
  },
  {
    number: 8,
    title: 'RITUAL DE FECHO',
    subtitle: 'Hora 21–24',
    objective: 'Encerrar o ciclo e consolidar a decisão.',
    color: 'from-slate-900 to-slate-700',
    tasks: [
      {
        id: 'revisao_24h',
        type: 'textarea',
        title: 'Revisão das 24h',
        description: 'Revise sua jornada de 24 horas',
        required: true
      },
      {
        id: 'carta_1_ano',
        type: 'textarea',
        title: 'Carta para o Eu de 1 Ano',
        description: 'Escreva uma carta para você daqui a 1 ano',
        required: true
      },
      {
        id: 'ritual_final',
        type: 'checkbox',
        title: 'Ritual Final',
        description: 'Complete o ritual final',
        required: true
      },
      {
        id: 'audio_reprogramacao',
        type: 'audio_player',
        title: 'Áudio de Reprogramação',
        description: 'Ouça o áudio de reprogramação',
        required: true
      }
    ]
  }
]

export const PRICING = {
  initial: {
    amount: 9.97,
    currency: 'EUR',
    duration: 30,
    description: 'Acesso completo por 30 dias'
  },
  renewal: {
    amount: 4.97,
    currency: 'EUR',
    description: 'Renovação mensal automática'
  },
  premium: {
    amount: 49.90,
    currency: 'EUR',
    description: 'Sessão Mestra One Shift 90 min'
  }
}

export const THEME = {
  colors: {
    primary: '#1e3a8a', // azul-marinho
    secondary: '#d97706', // dourado
    background: '#ffffff',
    text: '#1f2937'
  }
}
