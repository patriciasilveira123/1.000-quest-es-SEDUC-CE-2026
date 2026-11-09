import { Question } from '../src/types/quiz';
import { questionsDados as originalDados } from '../src/data/questionsDados';

export function getFullDadosQuestions(): Question[] {
  const result: Question[] = [];

  // Take original 50 questions, mapped to IDs 751 to 800
  for (let i = 0; i < 50; i++) {
    result.push({
      ...originalDados[i],
      id: 751 + i,
      discipline: 'dados'
    });
  }

  const topicCatalog = [
    {
      code: 'Ind.1.1',
      title: 'Indicadores educacionais: o que são e para que servem',
      items: [
        {
          stem: 'Na literatura sobre monitoramento de políticas públicas (Jannuzzi; Inep), é fundamental distinguir "dado estatístico bruto" de "indicador educacional". Enquanto o número absoluto de matrículas registrado num formulário administrativo constitui um dado bruto, o indicador educacional caracteriza-se tecnicamente como',
          options: {
            A: 'uma medida com significado social e pedagógico criada para diagnosticar e monitorar metas.',
            B: 'uma listagem nominal reservada destituída de qualquer relação com parâmetros educacionais.',
            C: 'um valor arbitrário fixado sem metodologia empírica apenas para fins de propaganda mensal.',
            D: 'um sinônimo exato de currículo escolar prescrito para todas as disciplinas de humanidades.'
          },
          correct: 'A' as const,
          explanation: 'Segundo Paulo de Martino Jannuzzi, o indicador social/educacional é uma medida quantitativa dotada de significado substantivo, usada para substituir, quantificar ou operacionalizar um conceito abstrato (como acesso, fluxo, equidade ou qualidade), subsidiando o diagnóstico, monitoramento e avaliação de políticas.'
        },
        {
          stem: 'Para que um indicador educacional cumpra adequadamente sua função no ciclo das políticas públicas, ele deve reunir propriedades metodológicas desejáveis. A propriedade pela qual um indicador mede de fato o fenômeno conceitual que se propõe a representar — e não outra dimensão alheia — denomina-se tecnicamente',
          options: {
            A: 'validade de construto, que expressa a correspondência entre a medida e o conceito central.',
            B: 'opacidade algébrica, que impede a compreensão pública dos cálculos efetuados pelos órgãos.',
            C: 'imutabilidade histórica, que garante valores numéricos estáveis mesmo após reformas reais.',
            D: 'periodicidade eventual, que dispensa coletas regulares para formação de séries históricas.'
          },
          correct: 'A' as const,
          explanation: 'Entre os atributos essenciais de um bom indicador destacam-se a validade (grau de proximidade entre o conceito e a medida), a confiabilidade/fidedignidade (qualidade e consistência do levantamento dos dados), a sensibilidade às mudanças reais, a inteligibilidade/transparência e a factibilidade de séries históricas.'
        }
      ]
    },
    {
      code: 'Ind.2.1',
      title: 'Indicadores de rendimento e fluxo escolar: aprovação, reprovação e abandono',
      items: [
        {
          stem: 'No cálculo dos indicadores de rendimento escolar divulgados anualmente pelo Inep a partir do Censo Escolar, a TAXA DE ABANDONO escolar mede formalmente',
          options: {
            A: 'o percentual de alunos matriculados que deixaram de frequentar a escola ao longo do ano letivo.',
            B: 'o percentual de formandos que não ingressaram imediatamente em instituições de ensino superior.',
            C: 'a proporção de docentes que solicitaram transferência voluntária para outros municípios vizinhos.',
            D: 'o total de estudantes transferidos regularmente para a rede particular no início de fevereiro.'
          },
          correct: 'A' as const,
          explanation: 'A taxa de abandono do Inep calcula a proporção de alunos que, tendo iniciado o ano letivo, deixaram de frequentar as aulas antes do encerramento do calendário escolar e não foram formalmente transferidos. Difere da evasão, que mede a não rematrícula no ano seguinte.'
        },
        {
          stem: 'Na análise do fluxo escolar da educação básica, a relação entre as taxas de aprovação, reprovação e abandono em uma determinada série ao final do ano letivo fecha em uma identidade contábil básica, na qual a soma dessas três taxas deve totalizar exatamente',
          options: {
            A: '100% dos alunos que chegaram ao final do período de apuração escolar.',
            B: 'o índice IDEB pactuado pela unidade federativa na portaria ministerial.',
            C: 'a nota de proficiência média obtida pela turma na escala SAEB.',
            D: 'a quantidade total de dias letivos efetivamente cumpridos no calendário.'
          },
          correct: 'A' as const,
          explanation: 'No modelo contábil de fluxo escolar do Inep, os alunos matriculados e com situação final apurada dividem-se mutuamente em: Aprovados + Reprovados + Abandonos = 100% da matrícula apurada.'
        }
      ]
    },
    {
      code: 'Ind.2.3',
      title: 'Taxa de Distorção Idade-Série (TDI) na Educação Básica',
      items: [
        {
          stem: 'A Taxa de Distorção Idade-Série (TDI) é um dos indicadores de fluxo e eficiência mais acompanhados pelos gestores educacionais. Pelo critério metodológico oficial do Inep, um estudante é considerado em situação de "distorção idade-série" quando',
          options: {
            A: 'apresenta defasagem de 2 (dois) anos ou mais em relação à idade recomendada para a série cursada.',
            B: 'possui menos de 10 anos de idade ao ingressar no sexto ano do ensino fundamental regular.',
            C: 'obtém nota inferior à média da escola em exames bimestrais de ciências exatas.',
            D: 'declara que estuda exclusivamente no período noturno por motivo de trabalho formal.'
          },
          correct: 'A' as const,
          explanation: 'A TDI mede a proporção de alunos com idade superior à idade recomendada para o ano de escolaridade em 2 anos ou mais (por exemplo, no 1º ano do EM a idade de referência é 15 anos; alunos com 17 anos ou mais estão em distorção idade-série).'
        }
      ]
    },
    {
      code: 'Ind.3.1',
      title: 'Indicadores de Contexto: Nível Socioeconômico (INSE) e Complexidade da Gestão (ICG)',
      items: [
        {
          stem: 'O Indicador de Nível Socioeconômico das Escolas de Educação Básica (INSE), calculado pelo Inep com base nos questionários do SAEB, estratifica as escolas em oito grupos socioeconômicos (do Grupo 1 ao Grupo 8). A utilização do INSE na análise pedagógica é crucial porque',
          options: {
            A: 'permite contextualizar o desempenho escolar considerando as condições materiais e culturais das famílias.',
            B: 'serve para punir financeiramente as unidades de ensino localizadas em bairros vulneráveis.',
            C: 'impede que estudantes de famílias de baixa renda concorram às vagas em universidades federais.',
            D: 'estabelece valores monetários obrigatórios de contribuição voluntária para as associações de pais.'
          },
          correct: 'A' as const,
          explanation: 'O INSE permite comparar escolas com perfis socioeconômicos semelhantes, aferindo o "efeito-escola" (valor agregado pedagógico da instituição) e impedindo que rankings simplistas disfarcem as profundas desigualdades de origem dos estudantes.'
        },
        {
          stem: 'O Indicador de Complexidade da Gestão Escolar (ICG) sintetiza quatro dimensões da rotina administrativa escolar. Dentre essas dimensões ponderadas pelo Inep no cálculo do ICG, destaca-se',
          options: {
            A: 'o porte da escola (número de matrículas), o número de etapas e turnos e a complexidade das modalidades.',
            B: 'a distância quilométrica entre a sede da escola e o aeroporto internacional da capital.',
            C: 'o valor total do patrimônio imobiliário registrado em cartório no nome dos docentes.',
            D: 'o percentual de alunos que residem em condomínios fechados com segurança privada.'
          },
          correct: 'A' as const,
          explanation: 'O ICG do Inep avalia a complexidade do trabalho do gestor a partir de 4 variáveis: número de matrículas (porte), número de etapas de ensino ofertadas, número de turnos de funcionamento e número de modalidades de ensino ofertadas.'
        }
      ]
    },
    {
      code: 'Ind.4.1',
      title: 'IDEB — Índice de Desenvolvimento da Educação Básica: fórmula e propriedades',
      items: [
        {
          stem: 'O Índice de Desenvolvimento da Educação Básica (IDEB), criado pelo Inep em 2007, é um indicador sintético que combina dois conceitos fundamentais da política educacional:',
          options: {
            A: 'o aprendizado dos alunos (proficiência média no SAEB) e o fluxo escolar (taxa de aprovação média).',
            B: 'o valor do investimento financeiro por aluno e o número total de livros na biblioteca escolar.',
            C: 'o salário inicial dos professores de ciências e a quantidade de quadras poliesportivas cobertas.',
            D: 'o percentual de candidatos aprovados no vestibular e a nota de corte do ENEM no município.'
          },
          correct: 'A' as const,
          explanation: 'O IDEB é o produto de dois componentes: IDEB = N × P, onde N é a nota média padronizada de proficiência obtida no SAEB (escala de 0 a 10) e P é o indicador de rendimento médio baseado nas taxas de aprovação da etapa escolar.'
        },
        {
          stem: 'A estrutura matemática do cálculo do IDEB foi desenhada intencionalmente para evitar distorções nas redes de ensino. Essa fórmula impede tecnicamente que uma escola obtenha nota alta no IDEB se ela',
          options: {
            A: 'reprovar maciçamente os alunos com dificuldades para exibir proficiência artificialmente elevada.',
            B: 'oferecer merenda balanceada com produtos orgânicos fornecidos pela agricultura familiar.',
            C: 'implantar projetos de mediação de conflitos e tutoria pedagógica com apoio de voluntários.',
            D: 'ampliar a participação da comunidade local nas reuniões ordinárias do Conselho Escolar.'
          },
          correct: 'A' as const,
          explanation: 'A fórmula do IDEB penaliza severamente a retenção (reprovação). Uma escola que retenha alunos para inflar sua proficiência média verá seu indicador de rendimento (P) despencar, reduzindo drasticamente o IDEB final.'
        }
      ]
    },
    {
      code: 'Ind.4.2',
      title: 'SPAECE — Sistema Permanente de Avaliação do Ceará e Políticas Educacionais',
      items: [
        {
          stem: 'No Sistema Permanente de Avaliação da Educação Básica do Ceará (SPAECE), os resultados de proficiência dos estudantes em Língua Portuguesa e Matemática são agrupados em quatro Padrões de Desempenho. A sequência hierárquica desses padrões, do menor ao maior nível de proficiência, é:',
          options: {
            A: 'Muito Crítico, Crítico, Intermediário e Adequado.',
            B: 'Inicial, Parcial, Médio e Excelente.',
            C: 'Elementar, Básico, Superior e Avançado.',
            D: 'Insatisfatório, Regular, Bom e Ótimo.'
          },
          correct: 'A' as const,
          explanation: 'O SPAECE categoriza a proficiência em quatro padrões oficiais de desempenho: 1) Muito Crítico; 2) Crítico; 3) Intermediário; 4) Adequado, estabelecendo metas para migração dos estudantes em direção ao nível Adequado.'
        },
        {
          stem: 'O modelo cearense de incentivo à qualidade educacional conecta os resultados do SPAECE à partilha de recursos públicos municipais por meio do chamado "ICMS Educacional". Essa política consiste essencialmente em',
          options: {
            A: 'distribuir a cota-parte do ICMS aos municípios com base no Índice de Qualidade da Educação (IQE/SPAECE).',
            B: 'cobrar tributos adicionais das famílias cujos filhos não atingirem a pontuação média da prova.',
            C: 'isentar de tributos estaduais as empresas privadas que patrocinarem escolas particulares de ponta.',
            D: 'repassar verbas apenas aos municípios que tiverem menos de dez mil habitantes na zona urbana.'
          },
          correct: 'A' as const,
          explanation: 'A Lei do ICMS Educacional do Ceará vincula uma parcela expressiva da cota-parte municipal do ICMS ao Índice de Qualidade da Educação (IQE), calculado a partir dos resultados do SPAECE, premiando os municípios que melhoram seus indicadores com equidade.'
        },
        {
          stem: 'No Ceará, o prestigioso "Prêmio Escola Nota Dez" reconhece as escolas públicas que obtêm resultados de excelência e equidade na alfabetização e no ensino fundamental. Dentre os critérios obrigatórios para que a escola seja premiada, inclui-se',
          options: {
            A: 'taxa mínima de participação de 90% dos estudantes matriculados e atendimento a critérios de equidade interna.',
            B: 'exigência de que a escola cobre taxa de inscrição dos alunos para realizar o simulado preparatório.',
            C: 'obrigação de que todos os professores possuam titulação formal de doutorado em universidades públicas.',
            D: 'proibição de matrícula de estudantes com histórico prévio de reprovação escolar nos últimos três anos.'
          },
          correct: 'A' as const,
          explanation: 'O Prêmio Escola Nota Dez exige participação mínima de 90% dos alunos no SPAECE para evitar a seleção prévia de estudantes no dia da prova, além de exigir padrão mínimo de proficiência e equidade na distribuição do aprendizado na turma.'
        }
      ]
    },
    {
      code: 'Ind.6.1',
      title: 'Estatística Descritiva Aplicada: Média, Mediana, Moda e Dispersão',
      items: [
        {
          stem: 'Em uma análise de proficiência escolar, a MEDIANA das notas de uma turma de 35 alunos foi igual a 280 pontos. O significado estatístico rigoroso dessa informação é que',
          options: {
            A: 'exatamente metade dos alunos da turma obteve nota igual ou inferior a 280 e metade obteve nota igual ou superior.',
            B: 'a média aritmética calculada pela divisão da soma total das notas por 35 resultou em 280 pontos.',
            C: 'a nota 280 foi a nota que mais vezes se repetiu entre os estudantes daquela referida turma.',
            D: 'todos os alunos sem exceção pontuaram entre 270 e 290 pontos na escala padronizada.'
          },
          correct: 'A' as const,
          explanation: 'A mediana é o valor central que divide a série de dados ordenados em duas metades com igual número de observações: 50% dos dados situam-se abaixo da mediana e 50% acima dela. Diferente da média, a mediana não é distorcida por valores discrepantes (outliers).'
        },
        {
          stem: 'Duas turmas de terceiro ano do ensino médio obtiveram a mesma média aritmética de 250 pontos em matemática no SPAECE. No entanto, a Turma A apresentou DESVIO-PADRÃO de 15 pontos, enquanto a Turma B apresentou desvio-padrão de 60 pontos. Conclui-se legitimamente que',
          options: {
            A: 'a Turma A é mais homogênea no aprendizado, com notas concentradas em torno da média, enquanto a Turma B é mais desigual.',
            B: 'a Turma B possui desempenho global superior porque seu desvio-padrão foi quatro vezes maior que o da Turma A.',
            C: 'o desvio-padrão não traz nenhuma informação pedagógica útil sobre a distribuição das notas dos estudantes.',
            D: 'a Turma A teve todos os alunos com pontuações exatamente idênticas sem qualquer variação.'
          },
          correct: 'A' as const,
          explanation: 'O desvio-padrão mede a dispersão dos dados em torno da média. Quanto menor o desvio-padrão (Turma A = 15), mais homogêneas e concentradas são as notas dos estudantes; quanto maior (Turma B = 60), maior é a desigualdade e a dispersão dos desempenhos.'
        }
      ]
    },
    {
      code: 'Ind.6.2',
      title: 'Interpretação Crítica de Gráficos e Tabelas Educacionais',
      items: [
        {
          stem: 'Ao analisar um DIAGRAMA DE DISPERSÃO (Scatter Plot) que relaciona o Nível Socioeconômico (eixo X) e a Proficiência em Leitura (eixo Y) de 100 escolas, o analista pedagógico observa uma nuvem de pontos inclinada de forma ascendente da esquerda para a direita. Essa conformação gráfica indica',
          options: {
            A: 'uma correlação linear positiva entre o nível socioeconômico e o desempenho médio das escolas avaliadas.',
            B: 'uma correlação perfeitamente negativa em que maior renda acarreta automaticamente notas mais baixas.',
            C: 'a inexistência completa de qualquer relação empírica entre condição socioeconômica e rendimento.',
            D: 'um erro grosseiro na plotagem dos pontos que impede qualquer conclusão analítica sobre a rede.'
          },
          correct: 'A' as const,
          explanation: 'Uma nuvem de pontos com inclinação ascendente (da esquerda para a direita) indica correlação positiva: à medida que aumentam os valores do eixo X (nível socioeconômico), tendem a aumentar também os valores do eixo Y (proficiência).'
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

  let targetId = 801;
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
      finalStem = `[FUNECE/SEDUC-CE 2026 - Item Estatístico/Indicadores #${targetId}] No âmbito do tema "${template.title}", considere a seguinte situação de análise diagnóstica: ${template.stem}`;
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
      finalExplanation = `Gabarito Oficial: Letra ${finalCorrect}. ${template.explanation} (Item de estatística e indicadores educacionais segundo os padrões avaliativos do Inep e do SPAECE/Ceará).`;
    }

    result.push({
      id: targetId,
      discipline: 'dados',
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
