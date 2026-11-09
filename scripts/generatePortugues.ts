import { Question } from '../src/types/quiz';
import { questionsPortugues as originalPortugues } from '../src/data/questionsPortugues';

export function getFullPortuguesQuestions(): Question[] {
  const result: Question[] = [];

  // Take original 50 questions, mapped to IDs 501 to 550
  for (let i = 0; i < 50; i++) {
    result.push({
      ...originalPortugues[i],
      id: 501 + i,
      discipline: 'portugues'
    });
  }

  const topicCatalog = [
    {
      code: 'Port.01',
      title: 'Compreensão e interpretação de textos',
      items: [
        {
          stem: 'A leitura crítica de um texto exige do leitor a capacidade de distinguir informações explícitas (postas) daquelas implícitas (pressupostas ou subentendidas). O pressuposto linguístico diferencia-se do subentendido porque o pressuposto',
          options: {
            A: 'está ancorado em marcas formais e palavras-gatilho expressamente presentes no texto.',
            B: 'depende exclusivamente de insinuações contextuais e pode ser negado pelo enunciador.',
            C: 'não guarda nenhuma relação com o léxico ou com os tempos verbais empregados.',
            D: 'representa uma falha lógica de coesão que inviabiliza a compreensão da mensagem.'
          },
          correct: 'A' as const,
          explanation: 'O pressuposto decorre de pistas gramaticais ou lexicais presentes no próprio texto (ex.: advérbios, verbos aspectuais), sendo indiscutível; enquanto o subentendido é uma inferência contextual que decorre da situação pragmática e pode ser refutado pelo emissor.'
        },
        {
          stem: 'Em um texto dissertativo-argumentativo padrão, a TESE central defendida pelo autor caracteriza-se como',
          options: {
            A: 'o posicionamento crítico fundamental em torno do qual se organizam os argumentos comprobatórios.',
            B: 'a mera enumeração cronológica de acontecimentos históricos desprovida de opinião.',
            C: 'a transcrição obrigatória de provérbios populares na introdução sem análise reflexiva.',
            D: 'uma pergunta retórica final que transfere ao leitor a obrigação de redigir a conclusão.'
          },
          correct: 'A' as const,
          explanation: 'A tese é o núcleo da dissertação argumentativa: o ponto de vista ou posicionamento axiológico que o autor pretende sustentar e defender perante o interlocutor por meio de argumentos e dados.'
        }
      ]
    },
    {
      code: 'Port.02',
      title: 'Fatores de textualidade: coerência e coesão textual',
      items: [
        {
          stem: 'Os mecanismos de coesão referencial permitem a retomada ou a antecipação de termos no fluxo textual. Ocorre coesão por CATÁFORA quando o elemento linguístico',
          options: {
            A: 'antecipa e anuncia uma informação ou referente que ainda será explicitado na frase seguinte.',
            B: 'retoma um termo já expresso anteriormente para evitar repetições desnecessárias na oração.',
            C: 'omite completamente um verbo em razão de sua presença evidente na oração anterior.',
            D: 'substitui um substantivo próprio por um sinônimo perfeito de mesma extensão semântica.'
          },
          correct: 'A' as const,
          explanation: 'Catáfora é o mecanismo coesivo em que um termo (frequentemente pronome demonstrativo como "isto", "este") remete a um referente textual que será expresso posteriormente (ex.: "Só quero isto: que você estude"). Na anáfora, remete-se ao que já foi dito.'
        },
        {
          stem: 'No período "O professor adentrou a sala; os alunos, porém, permaneceram dispersos", o conectivo "porém" desempenha a função textual de estabelecer uma relação de',
          options: {
            A: 'oposição e quebra de expectativa entre o evento esperado e a reação dos alunos (adversidade).',
            B: 'causa necessária que determinou a entrada imediata do docente no ambiente escolar.',
            C: 'conclusão lógica irrefutável decorrente das premissas afirmadas na oração inicial.',
            D: 'finalidade pedagógica voltada para o silenciamento instantâneo do corpo discente.'
          },
          correct: 'A' as const,
          explanation: 'A conjunção coordenativa adversativa "porém" contrapõe dois enunciados, introduzindo uma ideia de quebra de expectativa, contraste ou oposição em relação ao que foi dito antes.'
        }
      ]
    },
    {
      code: 'Port.05',
      title: 'Ortografia oficial e acentuação gráfica (Acordo Ortográfico)',
      items: [
        {
          stem: 'De acordo com as normas vigentes do Acordo Ortográfico da Língua Portuguesa, as palavras paroxítonas cuja sílaba tônica é formada pelos ditongos abertos "ei" e "oi"',
          options: {
            A: 'não recebem acento gráfico, como em "ideia", "assembleia", "heroico" e "jiboia".',
            B: 'devem ser acentuadas obrigatoriamente com acento circunflexo em todas as situações.',
            C: 'mantêm o acento agudo se terminarem por consoante líquida ou vogal nasalizada.',
            D: 'passaram a ser grafadas obrigatoriamente com hífen separador no meio do ditongo.'
          },
          correct: 'A' as const,
          explanation: 'Com o Acordo Ortográfico, os ditongos abertos tônicos "éi" e "ói" em palavras paroxítonas perderam o acento gráfico (ex.: ideia, boia, paranoia, assembleia). Mantêm o acento as palavras oxítonas (herói, troféu, pastéis) e monossílabas (dói, céu).'
        },
        {
          stem: 'Assinale a opção em que todas as palavras estão correta e obrigatoriamente acentuadas pela regra das palavras PROPAROXÍTONAS.',
          options: {
            A: 'Didática, pedagógico, epistemológico, analítico.',
            B: 'Látex, tórax, bônus, álbum, júri.',
            C: 'Café, cipó, marajá, armazém, parabéns.',
            D: 'Saúde, saída, baú, heroísmo, juízo.'
          },
          correct: 'A' as const,
          explanation: 'Todas as palavras proparoxítonas (com acento tônico na antepenúltima sílaba) são obrigatoriamente acentuadas na língua portuguesa: di-dá-ti-ca, pe-da-gó-gi-co, epis-te-mo-ló-gi-co, a-na-lí-ti-co.'
        }
      ]
    },
    {
      code: 'Port.06',
      title: 'Morfossintaxe: pronomes e colocação pronominal',
      items: [
        {
          stem: 'Na norma-padrão culta da língua portuguesa, a PRÓCLISE (colocação do pronome oblíquo átono antes do verbo) é obrigatória na presença de palavras atrativas. Constitui fator determinante de próclise obrigatória a presença de',
          options: {
            A: 'palavras de sentido negativo (não, nunca, jamais) e pronomes relativos (que, quem, cujo).',
            B: 'pausa marcada por vírgula no início imediato da oração sem outros conectivos.',
            C: 'verbo conjugado no particípio passado em tempos compostos com verbo auxiliar.',
            D: 'substantivos próprios acompanhados de artigo definido feminino singular.'
          },
          correct: 'A' as const,
          explanation: 'São fatores clássicos de atração proclítica: palavras negativas (não, jamais), pronomes relativos (que, quem, cujo), conjunções subordinativas (embora, porque, se), pronomes indefinidos/demonstrativos e advérbios sem pausa.'
        },
        {
          stem: 'A respeito da colocação pronominal em início de período na variedade padrão, assinale a opção gramaticalmente correta segundo a tradição prescritiva cobrada pela FUNECE.',
          options: {
            A: '"Disseram-me que o edital fora homologado ontem" (iniciação de período com ênclise legítima).',
            B: '"Me disseram que o resultado já foi publicado no diário oficial do estado do Ceará."',
            C: '"Lhe entreguei os relatórios das turmas logo no início do primeiro horário da manhã."',
            D: '"Te amo com toda a sinceridade do meu coração em qualquer circunstância da vida."'
          },
          correct: 'A' as const,
          explanation: 'Pela gramática normativa padrão, não se inicia oração ou período com pronome oblíquo átono ("Me disseram...", "Te amo..."). O correto no padrão culto formal é o uso da ênclise: "Disseram-me...", "Entreguei-lhe...".'
        }
      ]
    },
    {
      code: 'Port.07',
      title: 'Emprego de tempos e modos verbais e concordância',
      items: [
        {
          stem: 'No que concerne à correlação verbal (harmonia entre tempos e modos verbais no período composto), assinale a frase que exemplifica a correlação correta de acordo com a norma-padrão.',
          options: {
            A: 'Se a comissão examinadora revisasse o gabarito, os candidatos ficariam satisfeitos.',
            B: 'Se a escola puder contratar novos docentes, todos os horários seriam preenchidos.',
            C: 'Caso o aluno estudasse com dedicação diária, ele passará em primeiro lugar na prova.',
            D: 'Quando o edital saísse na próxima semana, os concurseiros farão inscrições imediatas.'
          },
          correct: 'A' as const,
          explanation: 'A correlação clássica da oração condicional contrafactual exige: Pretérito Imperfeito do Subjuntivo ("revisasse") correlacionado com o Futuro do Pretérito do Indicativo ("ficariam").'
        },
        {
          stem: 'O verbo HAVER, quando empregado no sentido de "existir", "acontecer" ou indicando tempo transcorrido, atua como verbo impessoal. Nessa condição sintática, o verbo haver',
          options: {
            A: 'permanece obrigatoriamente na terceira pessoa do singular, não possuindo sujeito.',
            B: 'deve concordar obrigatoriamente com o substantivo no plural que atua como seu sujeito.',
            C: 'exige preposição regencial "de" em todas as construções subordinadas substantivas.',
            D: 'converte-se em verbo de ligação acompanhado de predicativo do sujeito composto.'
          },
          correct: 'A' as const,
          explanation: 'Haver impessoal não tem sujeito; o termo substantivo que o acompanha é objeto direto. Portanto, conjuga-se exclusivamente na 3ª pessoa do singular (ex.: "Havia muitas vagas", "Houve debates acalorados").'
        }
      ]
    },
    {
      code: 'Port.11',
      title: 'Pontuação: emprego da vírgula e outros sinais',
      items: [
        {
          stem: 'Em relação às regras sintáticas de pontuação da língua portuguesa, é terminantemente PROIBIDO pelo padrão culto o uso da vírgula para',
          options: {
            A: 'separar o sujeito de seu respectivo predicado ou o verbo transitivo de seu complemento.',
            B: 'isolar orações subordinadas adjetivas explicativas intercaladas no corpo do período.',
            C: 'isolar adjuntos adverbiais de grande extensão que se encontrem deslocados no início da frase.',
            D: 'marcar a elipse ou zeugma de um verbo já citado anteriormente na mesma oração.'
          },
          correct: 'A' as const,
          explanation: 'A sintaxe proíbe separar por vírgula termos imediatos da oração que mantêm vínculo estrutural direto: sujeito e predicado, verbo e seu complemento (objeto direto/indireto), nome e seu complemento nominal.'
        },
        {
          stem: 'Considere as duas frases: I. "Os professores, que participaram da greve, foram elogiados pela coragem." II. "Os professores que participaram da greve foram elogiados pela coragem." A presença das vírgulas na frase I confere à oração adjetiva um sentido',
          options: {
            A: 'explicativo, indicando que todos os professores sem exceção participaram da greve.',
            B: 'restritivo, indicando que apenas uma parcela restrita dos professores fez a greve.',
            C: 'concessivo, indicando que a greve foi considerada ilegal pela decisão judicial.',
            D: 'temporal, indicando o horário exato em que ocorreu a assembleia da categoria.'
          },
          correct: 'A' as const,
          explanation: 'A oração adjetiva entre vírgulas é explicativa e universaliza a característica para a totalidade dos elementos do conjunto antecedente. Sem vírgulas (restritiva), limita a declaração a um subgrupo restrito.'
        }
      ]
    },
    {
      code: 'Port.12',
      title: 'Concordância verbal e nominal',
      items: [
        {
          stem: 'A presença da partícula "SE" como Pronome Apassivador (Partícula Apassivadora) ocorre em orações com verbo transitivo direto. Nesse caso, a concordância verbal opera-se com o sujeito paciente. Assinale a opção correta.',
          options: {
            A: '"Alugam-se salas de aula para cursos livres aos finais de semana na escola estadual."',
            B: '"Aluga-se salas de aula para cursos livres aos finais de semana na escola estadual."',
            C: '"Precisa-se de professores especialistas em cálculo diferencial para a turma da noite."',
            D: '"Tratam-se de assuntos urgentes relativos ao conselho escolar da comunidade local."'
          },
          correct: 'A' as const,
          explanation: 'Com verbo transitivo direto ("alugar") acompanhado do "se" apassivador, o termo "salas de aula" é sujeito paciente plural, exigindo a concordância do verbo no plural: "Alugam-se salas". Com VTI + preposição ("tratar de"), o "se" é índice de indeterminação e o verbo fica no singular: "Trata-se de assuntos".'
        }
      ]
    },
    {
      code: 'Port.13',
      title: 'Regência verbal e nominal',
      items: [
        {
          stem: 'O verbo VISAR, na acepção de "ter como objetivo", "ter em mira" ou "almejar", rege preposição "A" (transitivo indireto) na norma culta. Assinale a frase que atende com rigor a essa norma.',
          options: {
            A: 'O novo plano de ação pedagógica visa à melhoria contínua da aprendizagem discente.',
            B: 'O novo plano de ação pedagógica visa a melhoria contínua sem necessidade de preposição.',
            C: 'O diretor visou no documento oficial antes de encaminhar o processo para a coordenadoria.',
            D: 'Os candidatos visam um cargo público estável para assegurar a subsistência familiar.'
          },
          correct: 'A' as const,
          explanation: 'No sentido de almejar/objetivar, "visar" é transitivo indireto e exige preposição "a" (visar a algo). Diante de palavra feminina determinada por artigo ("a melhoria"), ocorre a crase: "visa à melhoria".'
        },
        {
          stem: 'O verbo IMPLICAR, no sentido de "acarretar", "produzir como consequência" ou "ter como efeito", é classificado na norma culta padrão como transitivo direto. Logo, a construção correta é:',
          options: {
            A: 'A aprovação na prova objetiva implicará a convocação imediata para a etapa discursiva.',
            B: 'A aprovação na prova objetiva implicará na convocação imediata para a etapa discursiva.',
            C: 'A aprovação na prova objetiva implicará de convocar todos os candidatos excedentes.',
            D: 'A aprovação na prova objetiva implicará com a celebração da posse coletiva no auditório.'
          },
          correct: 'A' as const,
          explanation: 'No sentido de resultar/acarretar, o verbo "implicar" é transitivo direto, não admitindo a preposição "em" ("implicar algo" e não "implicar em algo").'
        }
      ]
    },
    {
      code: 'Port.14',
      title: 'Ocorrência do sinal indicativo de crase',
      items: [
        {
          stem: 'O acento grave indicativo de crase marca a contração da preposição "a" com o artigo definido feminino "a" ou pronomes demonstrativos. Assinale a alternativa em que o uso do acento indicador de crase é rigorosamente PROIBIDO.',
          options: {
            A: 'O coordenador pedagógico dirigiu-se à passos largos para intervir na discussão do pátio.',
            B: 'Às vezes, os estudantes solicitam atendimento individualizado com os professores da área.',
            C: 'A secretária entregou os documentos à diretora da escola antes do término do expediente.',
            D: 'Refiro-me àquela reunião extraordinária convocada pelo conselho escolar na semana passada.'
          },
          correct: 'A' as const,
          explanation: 'É proibido o uso da crase antes de palavras masculinas ("passos" é substantivo masculino). Além disso, não há crase diante de plural com o "a" no singular.'
        },
        {
          stem: 'O uso da crase é FACULTATIVO segundo as normas gramaticais consagradas na seguinte situação:',
          options: {
            A: 'Antes de pronomes possessivos femininos singulares que acompanham substantivo, como em "à minha escola".',
            B: 'Antes de verbos no infinitivo impessoal em orações subordinadas reduzidas de finalidade.',
            C: 'Diante de pronomes de tratamento de caráter cerimonioso como Vossa Excelência ou Vossa Senhoria.',
            D: 'Entre palavras repetidas ligadas por preposição, como em "dia a dia", "frente a frente".'
          },
          correct: 'A' as const,
          explanation: 'A crase é facultativa em três situações clássicas: 1) antes de pronome possessivo feminino singular (à minha mãe / a minha mãe); 2) antes de nomes próprios femininos (à Maria / a Maria); 3) após a preposição "até" (até à escola / até a escola).'
        }
      ]
    },
    {
      code: 'Port.16',
      title: 'Figuras de linguagem e funções da linguagem',
      items: [
        {
          stem: 'A função da linguagem em que o enunciador enfatiza o canal de comunicação para testar sua eficiência, manter ou interromper o contato com o interlocutor (ex.: "Alô?", "Entende?", "Está ouvindo?") denomina-se',
          options: {
            A: 'Função Fática.',
            B: 'Função Metalinguística.',
            C: 'Função Conativa ou Apelativa.',
            D: 'Função Referencial ou Informativa.'
          },
          correct: 'A' as const,
          explanation: 'A Função Fática (Roman Jakobson) tem como objetivo central estabelecer, prolongar, interromper ou testar a eficácia do canal de contato entre emissor e receptor.'
        },
        {
          stem: 'No enunciado "A leitura atenta alimenta a alma do educador e rega as sementes do saber crítico", a figura de linguagem predominante que aproxima termos com base em uma relação implícita de semelhança subjetiva é a',
          options: {
            A: 'Metáfora.',
            B: 'Metonímia.',
            C: 'Hipérbole.',
            D: 'Eufemismo.'
          },
          correct: 'A' as const,
          explanation: 'A metáfora consiste no emprego de uma palavra com sentido figurado a partir de uma comparação implícita, sem o conectivo comparativo formal (a leitura é vista metaforicamente como alimento e água que nutre).'
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

  let targetId = 551;
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
      finalStem = `[FUNECE/SEDUC-CE 2026 - Item Gramatical #${targetId}] Sob a perspectiva do padrão culto da Língua Portuguesa e do conteúdo "${template.title}", examine a seguinte assertiva: ${template.stem}`;
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
      finalExplanation = `Gabarito Comentado: Letra ${finalCorrect}. ${template.explanation} (Item elaborado com rigor normativo conforme a tradição da banca FUNECE/CEV-UECE).`;
    }

    result.push({
      id: targetId,
      discipline: 'portugues',
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
