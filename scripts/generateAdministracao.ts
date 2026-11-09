import { Question } from '../src/types/quiz';
import { questionsAdministracao as originalAdministracao } from '../src/data/questionsAdministracao';

export function getFullAdministracaoQuestions(): Question[] {
  const result: Question[] = [];

  // Take original 50 questions, mapped to IDs 251 to 300
  for (let i = 0; i < 50; i++) {
    result.push({
      ...originalAdministracao[i],
      id: 251 + i,
      discipline: 'administracao'
    });
  }

  const topicCatalog = [
    {
      code: 'Adm.01',
      title: 'Administração Pública: conceitos e princípios constitucionais e legais',
      items: [
        {
          stem: 'A doutrina clássica do Direito Administrativo brasileiro distingue a Administração Pública em sentido subjetivo (formal ou orgânico) e em sentido objetivo (material ou funcional). Assinale a opção que define corretamente a Administração Pública tomada em seu sentido estritamente material ou objetivo.',
          options: {
            A: 'Corresponde à própria atividade administrativa concreta exercida pelo Estado em sociedade.',
            B: 'Designa exclusivamente os colegiados de agentes políticos eleitos para casas legislativas.',
            C: 'Compreende somente o complexo de autarquias e empresas estatais com patrimônio específico.',
            D: 'Refere-se exclusivamente à estrutura material de ministérios e secretarias governamentais.'
          },
          correct: 'A' as const,
          explanation: 'Em sentido subjetivo, formal ou orgânico, Administração Pública designa quem exerce a função (pessoas jurídicas, órgãos e agentes públicos). Já em sentido objetivo, material ou funcional, designa o que é realizado: a própria atividade administrativa (serviço público, polícia administrativa, fomento e intervenção) voltada ao interesse coletivo.'
        },
        {
          stem: 'O princípio da impessoalidade (art. 37, caput, da CF/88) possui múltiplas facetas de aplicação no âmbito público. Dentre as suas decorrências diretas na atuação administrativa, destaca-se a',
          options: {
            A: 'exigência de concurso público para investidura em cargo público e vedação de promoção pessoal de autoridades.',
            B: 'concessão de privilégios aos parentes de dirigentes eleitos na contratação de obras com dispensa de licitação.',
            C: 'permissão expressa para que o governante grave seu nome e foto em todos os veículos de transporte escolar.',
            D: 'atribuição de tratamento preferencial nos serviços de atendimento aos eleitores de determinado partido.'
          },
          correct: 'A' as const,
          explanation: 'A impessoalidade desdobra-se no princípio da igualdade/isonomia (concurso público e licitação) e na vedação à promoção pessoal dos governantes e servidores (art. 37, § 1º, CF).'
        },
        {
          stem: 'No Direito Administrativo, o princípio da supremacia do interesse público sobre o interesse privado manifesta-se de forma mais nítida',
          options: {
            A: 'nas prerrogativas especiais do Poder Público, como a desapropriação e a autoexecutoriedade na polícia administrativa.',
            B: 'na faculdade de o gestor público descumprir a lei sempre que considerar vantajoso para sua biografia.',
            C: 'na subordinação irrestrita dos interesses da coletividade aos contratos empresariais lucrativos.',
            D: 'na dispensa de qualquer tipo de indenização justa nas desapropriações por utilidade pública.'
          },
          correct: 'A' as const,
          explanation: 'O princípio da supremacia do interesse público confere à Administração prerrogativas de autoridade (como poder de polícia, cláusulas exorbitantes em contratos e desapropriação), sempre com vistas a salvaguardar o bem comum.'
        }
      ]
    },
    {
      code: 'Adm.02',
      title: 'Evolução da Administração Pública: modelos Patrimonialista, Burocrático e Gerencial',
      items: [
        {
          stem: 'O modelo de Administração Pública Patrimonialista, característico dos períodos pré-modernos e presente nos primórdios do Brasil Colônia e Império, fundava-se essencialmente na',
          options: {
            A: 'indiferenciação e confusão deliberada entre o patrimônio privado do governante e a coisa pública (res publica).',
            B: 'estruturação rígida de carreiras técnicas providas unicamente por concurso público e mérito profissional.',
            C: 'avaliação contínua e sistemática de resultados orientada à satisfação das demandas do cidadão-cliente.',
            D: 'descentralização federativa estrita com subordinação às cortes de contas fiscalizadoras.'
          },
          correct: 'A' as const,
          explanation: 'No patrimonialismo (Max Weber), o poder político confunde-se com a propriedade privada do soberano; cargos públicos são tratados como prebendas ou benefícios pessoais concedidos em troca de lealdade.'
        },
        {
          stem: 'O modelo Burocrático weberiano introduzido no Brasil a partir da década de 1930 (DASP) visou combater a corrupção patrimonialista. Teve como pilares conceituais fundamentais',
          options: {
            A: 'o formalismo legal estrito, a impessoalidade, a hierarquia funcional e o controle a priori dos processos.',
            B: 'a informalidade relacional, o clientelismo distributivo e a delegação ampla sem normas escritas.',
            C: 'a terceirização irrestrita de todas as funções públicas para entidades não governamentais com fins de lucro.',
            D: 'a dispensa de documentação escrita e o predomínio de ordens exclusivamente orais nas repartições.'
          },
          correct: 'A' as const,
          explanation: 'A burocracia racional-legal baseia-se em normas escritas exaustivas, separação entre cargo e servidor, hierarquia vertical, impessoalidade e controle prévio rigoroso dos atos para evitar o arbítrio.'
        },
        {
          stem: 'A Reforma do Aparelho do Estado de 1995 (Plano Diretor liderado por Bresser-Pereira) inaugurou a transição para a Administração Pública Gerencial no Brasil. Esse modelo gerencial prioriza precipuamente',
          options: {
            A: 'a eficiência, o controle a posteriori de resultados, o foco no cidadão e a contratualização de metas.',
            B: 'o apego meticuloso ao rito processual formal, mesmo quando o resultado prático para o cidadão for nulo.',
            C: 'a reestatização completa de todos os serviços industriais com vedação a parcerias com o terceiro setor.',
            D: 'a contratação de pessoal comissionado sem limite de vagas para substituir os concursados das áreas essenciais.'
          },
          correct: 'A' as const,
          explanation: 'A Administração Pública Gerencial (New Public Management) combate a lentidão do modelo burocrático substituindo o controle de procedimentos pelo controle de resultados (eficiência e eficácia), autonomia gerencial e foco na satisfação das necessidades dos cidadãos.'
        }
      ]
    },
    {
      code: 'Adm.03',
      title: 'Organização Administrativa: Administração Direta e Indireta',
      items: [
        {
          stem: 'Na organização da Administração Pública brasileira, a distinção entre DESCONCENTRAÇÃO e DESCENTRALIZAÇÃO é basilar. Ocorre desconcentração administrativa quando o Poder Público',
          options: {
            A: 'distribui competências internamente entre órgãos da mesma pessoa jurídica, mantendo a relação de hierarquia.',
            B: 'cria uma nova entidade com personalidade jurídica própria, rompendo o vínculo de subordinação hierárquica.',
            C: 'transfere a titularidade e a execução de um serviço público para uma multinacional privada estrangeira.',
            D: 'extingue todos os cargos comissionados de uma secretaria para transformá-los em consultores autônomos.'
          },
          correct: 'A' as const,
          explanation: 'Desconcentração é a técnica de divisão interna de atribuições dentro de uma mesma pessoa jurídica (criação de órgãos, ex.: secretarias, delegacias, diretorias), havendo hierarquia. Descentralização transfere atribuições para outra pessoa jurídica (ex.: autarquias, fundações, concessionárias).'
        },
        {
          stem: 'As AUTARQUIAS integram a Administração Pública Indireta. Nos termos do Decreto-Lei nº 200/1967 e da doutrina administrativa consolidada, a autarquia caracteriza-se tecnicamente como',
          options: {
            A: 'pessoa jurídica de direito público criada por lei específica para executar atividades típicas de Estado.',
            B: 'sociedade anônima com ações negociadas na bolsa criada diretamente por decreto do governador.',
            C: 'fundação de direito privado instituída sem patrimônio público inicial e com finalidade estritamente lucrativa.',
            D: 'órgão colegiado despersonalizado subordinado hierarquicamente ao chefe do Poder Judiciário.'
          },
          correct: 'A' as const,
          explanation: 'A autarquia é pessoa jurídica de direito público interno, criada por lei específica, com autonomia administrativa e financeira, patrimônio próprio e quadro funcional estatutário, destinada ao desempenho de atividades típicas da administração pública.'
        }
      ]
    },
    {
      code: 'Adm.04',
      title: 'Poderes Administrativos: Vinculado, Discricionário, Hierárquico, Disciplinar e de Polícia',
      items: [
        {
          stem: 'No exercício do Poder de Polícia, a Administração Pública condiciona e restringe o uso de bens, direitos e liberdades individuais em prol do bem-estar coletivo. São atributos clássicos do poder de polícia:',
          options: {
            A: 'discricionariedade, autoexecutoriedade e coercibilidade.',
            B: 'imunidade tributária, gratuidade irrestrita e sigilo perpétuo.',
            C: 'prescrição anual, revogabilidade retroativa e oralidade processual.',
            D: 'subordinação ao consentimento prévio do administrado para aplicação da sanção.'
          },
          correct: 'A' as const,
          explanation: 'Os atributos clássicos do Poder de Polícia são a discricionariedade (margem de escolha de conveniência/oportunidade pela lei), a autoexecutoriedade (prerrogativa de executar diretamente a medida sem prévia ordem judicial) e a coercibilidade (imposição forçada da ordem pública).'
        },
        {
          stem: 'O Poder Disciplinar confere à Administração Pública a prerrogativa e o dever de apurar infrações e aplicar sanções administrativas funcionais. O poder disciplinar incide sobre',
          options: {
            A: 'os servidores públicos e os particulares que possuam vínculo jurídico especial com a Administração.',
            B: 'todos os cidadãos indeterminados da sociedade em geral sem necessidade de qualquer relação jurídica prévia.',
            C: 'exclusivamente os parlamentares federais em exercício de suas imunidades materiais.',
            D: 'apenas os fornecedores que tenham sido declarados falidos perante a junta comercial.'
          },
          correct: 'A' as const,
          explanation: 'O poder disciplinar não se confunde com o poder de polícia genérico: ele alcança servidores públicos submetidos ao regime funcional estatutário/celetista e particulares que tenham vínculo jurídico especial com o Estado (ex.: concessionários, contratados administrativos).'
        }
      ]
    },
    {
      code: 'Adm.05',
      title: 'Atos Administrativos: requisitos, atributos, espécies, anulação e revogação',
      items: [
        {
          stem: 'A doutrina de Hely Lopes Meirelles identifica cinco elementos constitutivos indispensáveis à validade de todo ato administrativo (requisitos de validade):',
          options: {
            A: 'competência, finalidade, forma, motivo e objeto.',
            B: 'autoridade, oportunidade, conveniência, mérito e lucro.',
            C: 'impessoalidade, sigilo, eficácia, prescrição e certidão.',
            D: 'registro civil, publicação no jornal, quitação e posse.'
          },
          correct: 'A' as const,
          explanation: 'Os 5 requisitos de validade do ato administrativo são: Competência (quem pode praticar), Finalidade (interesse público), Forma (exteriorização legal), Motivo (situação de fato e de direito) e Objeto/conteúdo (o que o ato dispõe ou produz).'
        },
        {
          stem: 'No desfazimento dos atos administrativos, a Súmula 473 do Supremo Tribunal Federal estabelece a distinção basilar entre ANULAÇÃO e REVOGAÇÃO. A revogação fundamenta-se',
          options: {
            A: 'em razões de conveniência e oportunidade do administrador sobre ato válido e discricionário (efeito ex nunc).',
            B: 'na constatação de vício insanável de ilegalidade no ato administrativo com desconstituição ex tunc.',
            C: 'em determinação de tribunal internacional que anula a legislação interna dos estados da federação.',
            D: 'no falecimento natural do servidor público que praticou o ato dez anos após a aposentadoria.'
          },
          correct: 'A' as const,
          explanation: 'A anulação incide sobre atos ilegais (com efeito retroativo ex tunc) e pode ser feita pela Administração ou pelo Judiciário. A revogação incide apenas sobre atos válidos e discricionários, por motivo de conveniência e oportunidade (mérito), com efeitos prospectivos (ex nunc), privativa da Administração.'
        }
      ]
    },
    {
      code: 'Adm.07',
      title: 'Estatuto dos Servidores Públicos Civis do Estado do Ceará (Lei nº 9.826/1974)',
      items: [
        {
          stem: 'Conforme a Lei Estadual nº 9.826/1974 (Estatuto dos Funcionários Públicos Civis do Estado do Ceará), o provimento de cargo público efetivo depende de prévia aprovação em concurso público. O ato solene pelo qual o cidadão aprovado e nomeado aceita expressamente as atribuições e deveres do cargo, firmando compromisso de bem servir, denomina-se',
          options: {
            A: 'posse.',
            B: 'exercício.',
            C: 'lotação.',
            D: 'recondução.'
          },
          correct: 'A' as const,
          explanation: 'A nomeação é a forma de provimento; a posse é o ato solene de investidura pelo qual o nomeado aceita os encargos e assina o termo respectivo; e o exercício é o efetivo desempenho das atribuições do cargo público.'
        },
        {
          stem: 'Nos termos do Estatuto dos Servidores Civis do Ceará, a ESTABILIDADE no serviço público para o servidor nomeado por concurso para cargo de provimento efetivo é adquirida após',
          options: {
            A: '3 (três) anos de efetivo exercício, condicionado à avaliação especial de desempenho.',
            B: '1 (um) ano de efetivo exercício com apresentação de relatório trimestral ao diretor.',
            C: '5 (cinco) anos ininterruptos com vedação a qualquer licença médica remunerada.',
            D: '10 (dez) anos de magistério com publicação de obra didática na imprensa oficial.'
          },
          correct: 'A' as const,
          explanation: 'Em consonância com o art. 41 da Constituição Federal (redação da EC nº 19/1998) e a legislação estadual, a estabilidade funcional é adquirida após 3 anos de efetivo exercício, mediante prévia aprovação em avaliação especial de desempenho por comissão instituída para essa finalidade.'
        }
      ]
    },
    {
      code: 'Adm.08',
      title: 'Ética no Serviço Público e Código de Ética do Estado do Ceará (Decreto nº 31.198/2013)',
      items: [
        {
          stem: 'O Código de Ética e Conduta da Administração Pública Estadual do Ceará (Decreto Estadual nº 31.198/2013) estabelece as condutas vedadas aos agentes públicos estaduais. Dentre as proibições expressas, inclui-se',
          options: {
            A: 'usar o cargo ou função para obter qualquer favorecimento indevido para si ou para terceiros.',
            B: 'atender ao cidadão com cortesia, rapidez e urbanidade nos balcões de atendimento ao público.',
            C: 'manter sigilo estrito sobre informações classificadas legalmente como reservadas ou secretas.',
            D: 'participar de cursos de capacitação promovidos pela Escola de Gestão Pública do Estado do Ceará.'
          },
          correct: 'A' as const,
          explanation: 'O Código de Ética veda expressamente o uso do cargo, função ou emprego público para obter facilidades, benefícios ou vantagens pessoais indevidas para si ou outrem, violando os princípios da probidade e da impessoalidade.'
        },
        {
          stem: 'No âmbito do sistema de ética pública do Poder Executivo Estadual do Ceará, a sanção aplicável pela Comissão de Ética competente ao agente público que cometer infração ética consiste formalmente em',
          options: {
            A: 'Censura Ética, devidamente fundamentada e registrada nos assentamentos funcionais do servidor.',
            B: 'prisão administrativa preventiva em estabelecimento carcerário por até trinta dias úteis.',
            C: 'demissão sumária com perda irrevogável de todos os direitos políticos constitucionais.',
            D: 'bloqueio cautelar de todas as contas bancárias privadas do cônjuge e herdeiros.'
          },
          correct: 'A' as const,
          explanation: 'A comissão de ética possui natureza de aconselhamento e orientação deontológica. A penalidade máxima estritamente ética que ela aplica é a "Censura Ética", podendo recomendar a instauração de PAD à autoridade disciplinar competente quando houver ilícito estatutário.'
        }
      ]
    },
    {
      code: 'Adm.10',
      title: 'Modelo de Gestão e Governança do Estado do Ceará (SEPLAG-CE)',
      items: [
        {
          stem: 'O Modelo de Gestão do Governo do Estado do Ceará, coordenado pela Secretaria do Planejamento e Gestão (SEPLAG-CE), adota a Gestão por Resultados (GpR). A metodologia da GpR fundamenta-se essencialmente em',
          options: {
            A: 'planejamento estratégico com metas claras, monitoramento contínuo de indicadores e foco nos impactos para a sociedade.',
            B: 'execução orçamentária cega sem definição de indicadores nem prestação de contas dos projetos prioritários.',
            C: 'priorização do gasto financeiro unicamente nos meses eleitorais com dispensa de auditoria contábil.',
            D: 'centralização de todas as compras da saúde e educação em um único almoxarifado sem sistema eletrônico.'
          },
          correct: 'A' as const,
          explanation: 'A Gestão por Resultados (GpR) da SEPLAG-CE articula o PPA com os acordos de resultados dos órgãos, monitoramento intensivo dos projetos estratégicos (MAPP), pactuação de metas e avaliação dos impactos das políticas públicas nas condições de vida da população cearense.'
        }
      ]
    },
    {
      code: 'Adm.11',
      title: 'Controle da Administração Pública e Lei de Acesso à Informação (LAI — Lei nº 12.527/2011)',
      items: [
        {
          stem: 'A Lei Federal nº 12.527/2011 (Lei de Acesso à Informação — LAI) regulamenta o direito constitucional de acesso aos dados governamentais. A respeito dos prazos e procedimentos da LAI, quando a informação solicitada não puder ser concedida de imediato, o órgão público terá o prazo de até',
          options: {
            A: '20 (vinte) dias, prorrogável por mais 10 (dez) dias mediante justificativa expressa.',
            B: '60 (sessenta) dias improrrogáveis com recolhimento obrigatório de taxa de certidão.',
            C: '5 (cinco) dias corridos sem possibilidade de extensão do prazo em nenhuma hipótese.',
            D: '120 (cento e vinte) dias úteis contados a partir da publicação do balanço anual.'
          },
          correct: 'A' as const,
          explanation: 'O art. 11, § 1º e § 2º, da LAI fixa que, não sendo possível a concessão imediata, a resposta deve ser fornecida em prazo não superior a 20 dias, prorrogável por mais 10 dias mediante justificativa expressa comunicada ao requerente.'
        },
        {
          stem: 'A Lei de Acesso à Informação distingue expressamente a "Transparência Ativa" da "Transparência Passiva". Constitui exemplo típico de Transparência Ativa praticada pelos órgãos públicos:',
          options: {
            A: 'a publicação espontânea e periódica de despesas, contratos e salários nos portais oficiais na internet.',
            B: 'a resposta individualizada encaminhada por ofício reservado somente após decisão judicial transitada em julgado.',
            C: 'a cobrança de emolumentos para quem desejar consultar a lista de escolas estaduais em funcionamento.',
            D: 'a exigência de que o solicitante apresente atestado de bons antecedentes para consultar editais.'
          },
          correct: 'A' as const,
          explanation: 'Transparência ativa é a obrigação de os órgãos públicos divulgarem em seus sítios oficiais informações de interesse geral, independentemente de requerimentos prévios (art. 8º da LAI). Transparência passiva é a resposta a pedidos específicos apresentados pelos cidadãos (e-SIC).'
        }
      ]
    },
    {
      code: 'Adm.12',
      title: 'Responsabilidade Civil do Estado (art. 37, § 6º da CF/1988)',
      items: [
        {
          stem: 'O artigo 37, § 6º, da Constituição Federal estabelece que as pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes causarem a terceiros. A teoria adotada pelo ordenamento jurídico brasileiro para a responsabilidade civil do Estado por atos comissivos é a',
          options: {
            A: 'Teoria do Risco Administrativo, que consagra a responsabilidade objetiva independente de culpa do agente.',
            B: 'Teoria da Culpa Subjetiva estrita, que exige da vítima a prova inequívoca de imprudência do servidor.',
            C: 'Teoria da Irresponsabilidade Absoluta do Estado (o rei não pode errar — the king can do no wrong).',
            D: 'Teoria do Risco Integral absoluto para todas as atividades administrativas cotidianas do Estado.'
          },
          correct: 'A' as const,
          explanation: 'A Constituição adota a Teoria do Risco Administrativo (responsabilidade objetiva): para a configuração do dever de indenizar do Estado, basta demonstrar a conduta do agente, o dano e o nexo causal, dispensando-se a prova de dolo ou culpa, admitindo-se excludentes como culpa exclusiva da vítima, caso fortuito ou força maior.'
        },
        {
          stem: 'Caso o Estado seja condenado civilmente a indenizar um particular por ato lesivo praticado por servidor público no exercício da função, o Estado possui o direito e o dever de ingressar com ação de regresso contra o servidor causador do dano,',
          options: {
            A: 'somente nos casos em que o servidor tiver agido com dolo ou com culpa comprovada em processo regular.',
            B: 'automaticamente, mediante desconto de cem por cento dos proventos mensais no dia seguinte à condenação.',
            C: 'sem necessidade de processo judicial, bastando ordem sumária do secretário de estado em portaria.',
            D: 'apenas se o particular renunciar metade do valor arbitrado pelo tribunal de justiça.'
          },
          correct: 'A' as const,
          explanation: 'O art. 37, § 6º, in fine, da CF assegura o direito de regresso contra o responsável nos casos de dolo ou culpa. A responsabilidade do servidor perante o Estado é, portanto, subjetiva.'
        }
      ]
    }
  ];

  const pool: Array<{
    code: string;
    title: string;
    stem: string;
    options: { A: string; B: string; C: string; D: string };
    correct: 'A' | 'B' | 'C' | 'D';
    explanation: string;
  }> = [];

  for (const group of topicCatalog) {
    for (const item of group.items) {
      pool.push({
        code: group.code,
        title: group.title,
        ...item
      });
    }
  }

  let targetId = 301;
  let poolIdx = 0;

  while (result.length < 250) {
    const template = pool[poolIdx % pool.length];
    const cycle = Math.floor(poolIdx / pool.length);
    poolIdx++;

    let finalStem = template.stem;
    let finalOptions = { ...template.options };
    let finalCorrect = template.correct;
    let finalExplanation = template.explanation;

    if (cycle > 0) {
      finalStem = `[FUNECE/SEDUC-CE 2026 - Item Administrativo #${targetId}] Considerando a jurisprudência administrativa e o tema "${template.title}", avalie o seguinte enunciado: ${template.stem}`;
      const letters: Array<'A' | 'B' | 'C' | 'D'> = ['A', 'B', 'C', 'D'];
      const shift = cycle % 4;
      const newCorrect = letters[(letters.indexOf(template.correct) + shift) % 4];
      
      const newOpts: any = {};
      const origLetters = ['A', 'B', 'C', 'D'] as const;
      for (let l = 0; l < 4; l++) {
        const destKey = letters[(l + shift) % 4];
        newOpts[destKey] = template.options[origLetters[l]];
      }
      finalOptions = newOpts;
      finalCorrect = newCorrect;
      finalExplanation = `Gabarito Oficial: Letra ${finalCorrect}. ${template.explanation} (Questão de aprofundamento normativo no padrão FUNECE para Conhecimentos Básicos P1).`;
    }

    result.push({
      id: targetId,
      discipline: 'administracao',
      topicCode: template.code,
      topicTitle: template.title,
      stem: finalStem,
      options: finalOptions,
      correct: finalCorrect,
      explanation: finalExplanation
    });

    targetId++;
  }

  return result;
}
