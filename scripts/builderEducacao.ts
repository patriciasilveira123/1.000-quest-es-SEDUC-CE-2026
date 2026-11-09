import fs from 'fs';
import path from 'path';
import { Question } from '../src/types/quiz';
import { questionsEducacao as originalEducacao } from '../src/data/questionsEducacao';

// Base of 50 existing questions (IDs 1 to 50)
const base50: Question[] = originalEducacao.slice(0, 50).map((q, idx) => ({
  ...q,
  id: idx + 1
}));

// Additional 200 questions for Educação Brasileira (IDs 51 to 250)
const extraEducacao: Question[] = [];

// Helper to add question with validation
function addQ(
  id: number,
  topicCode: string,
  topicTitle: string,
  stem: string,
  options: { A: string; B: string; C: string; D: string },
  correct: 'A' | 'B' | 'C' | 'D',
  explanation: string
) {
  extraEducacao.push({
    id,
    discipline: 'educacao',
    topicCode,
    topicTitle,
    stem,
    options,
    correct,
    explanation
  });
}

// =========================================================================
// 1.1 LDB LEI 9.394/96 — PRINCÍPIOS, ESTRUTURA E DISPOSITIVOS (Questões 51 a 90)
// =========================================================================
addQ(
  51,
  '1.1',
  'Lei Federal nº 9.394/1996 — Princípios e Fins da Educação Nacional',
  'O artigo 4º da Lei de Diretrizes e Bases da Educação Nacional (Lei nº 9.394/1996) estabelece os deveres do Estado com a educação escolar pública. Entre esses deveres expressos, inclui-se a garantia de',
  {
    A: 'educação básica obrigatória e gratuita dos 4 (quatro) aos 17 (dezessete) anos de idade.',
    B: 'escolarização compulsória restrita exclusivamente ao ensino fundamental dos 7 aos 14 anos.',
    C: 'fornecimento gratuito de transporte e alimentação unicamente aos estudantes de escolas rurais.',
    D: 'cobrança de mensalidades voluntárias em estabelecimentos estaduais para conservação predial.'
  },
  'A',
  'Nos termos do art. 4º, I, da LDB (com redação dada pela Lei nº 12.796/2013), o dever do Estado será efetivado mediante garantia de educação básica obrigatória e gratuita dos 4 aos 17 anos de idade, organizada em pré-escola, ensino fundamental e ensino médio.'
);

addQ(
  52,
  '1.1',
  'Lei Federal nº 9.394/1996 — Princípios e Fins da Educação Nacional',
  'De acordo com o artigo 5º da LDB, o acesso à educação básica obrigatória é um direito público subjetivo. Isso significa no plano jurídico e pedagógico que',
  {
    A: 'qualquer cidadão, grupo ou associação tem legitimidade para acionar o Poder Público para exigi-lo.',
    B: 'a oferta das vagas depende estritamente da discricionariedade e da prévia dotação do gestor local.',
    C: 'o não oferecimento do ensino pelo Poder Público não gera responsabilidade da autoridade competente.',
    D: 'o direito à matrícula nas séries iniciais está condicionado a prévia aprovação em exame de seleção.'
  },
  'A',
  'O direito público subjetivo (art. 5º, caput e § 1º) confere ao titular a prerrogativa de exigir judicial ou administrativamente o cumprimento da obrigação pelo Estado, cabendo ao Ministério Público e a qualquer cidadão ou associação acionar a autoridade competente.'
);

addQ(
  53,
  '1.1',
  'Lei Federal nº 9.394/1996 — Incumbências dos Estados e Municípios',
  'Em matéria de organização da educação nacional e regime de colaboração (arts. 8º a 11 da LDB), compete precipuamente aos Estados da Federação',
  {
    A: 'atuar prioritariamente no ensino fundamental e no ensino médio.',
    B: 'atuar prioritariamente na educação infantil e supletivamente no ensino fundamental.',
    C: 'financiar com recursos exclusivos todo o ensino superior da rede privada nacional.',
    D: 'elaborar o plano decenal municipal de transporte escolar e merenda comunitária.'
  },
  'A',
  'Segundo o art. 10, VI, da LDB, os Estados incumbir-se-ão de assegurar o ensino fundamental e oferecer, com prioridade, o ensino médio a todos que o demandarem, atuando em regime de colaboração com a União e os Municípios.'
);

addQ(
  54,
  '1.1',
  'Lei Federal nº 9.394/1996 — Incumbências dos Estabelecimentos de Ensino',
  'O artigo 12 da LDB elenca as incumbências dos estabelecimentos de ensino, respeitadas as normas comuns e as do seu sistema. Dentre elas, destaca-se expressamente o dever de',
  {
    A: 'elaborar e executar sua proposta pedagógica e administrar seu pessoal e seus recursos materiais.',
    B: 'homologar as diretrizes curriculares do Ministério da Educação sem consulta aos docentes.',
    C: 'fixar os salários dos professores contratados em desacordo com o piso salarial nacional.',
    D: 'suspender o atendimento aos alunos faltosos sem prestar notificação ao Conselho Tutelar.'
  },
  'A',
  'O art. 12 da LDB estabelece como incumbências da escola: I - elaborar e executar sua proposta pedagógica; II - administrar seu pessoal e seus recursos materiais e financeiros; além de promover medidas de conscientização, prevenção e combate a todos os tipos de violência (incluindo bullying).'
);

addQ(
  55,
  '1.1',
  'Lei Federal nº 9.394/1996 — Incumbências dos Docentes',
  'No que tange aos direitos e deveres dos professores, o artigo 13 da LDB estabelece que os docentes incumbir-se-ão de',
  {
    A: 'participar da elaboração da proposta pedagógica do estabelecimento e ministrar os dias letivos.',
    B: 'recusar a participação em reuniões pedagógicas colegiadas que ultrapassem a carga de sala de aula.',
    C: 'elaborar avaliações classificatórias com o objetivo expresso de selecionar os melhores estudantes.',
    D: 'delegar a elaboração do plano de trabalho docente aos auxiliares e monitores de informática.'
  },
  'A',
  'O art. 13 da LDB lista as atribuições dos docentes: I - participar da elaboração da proposta pedagógica; II - elaborar e cumprir plano de trabalho; III - zelar pela aprendizagem dos alunos; IV - estabelecer estratégias de recuperação para alunos de menor rendimento; V - ministrar dias letivos e horas-aula estabelecidos.'
);

addQ(
  56,
  '1.1',
  'Lei Federal nº 9.394/1996 — Organização da Educação Básica e Calendário',
  'Conforme o artigo 24, inciso I, da LDB, a carga horária mínima anual para o ensino fundamental e médio (ressalvada a ampliação do tempo integral) será de',
  {
    A: 'oitocentas horas distribuídas por um mínimo de duzentos dias de efetivo trabalho escolar.',
    B: 'seiscentas horas distribuídas por cento e oitenta dias de aulas presenciais e remotas.',
    C: 'mil e duzentas horas organizadas sem exigência mínima de quantidade de dias letivos.',
    D: 'quatrocentas horas letivas concentradas exclusivamente no primeiro semestre civil.'
  },
  'A',
  'O art. 24, I, da LDB dispõe expressamente que a carga horária mínima anual na educação básica é de 800 horas, distribuídas por um mínimo de 200 dias de efetivo trabalho escolar, excluído o tempo reservado aos exames finais, onde houver.'
);

addQ(
  57,
  '1.1',
  'Lei Federal nº 9.394/1996 — Verificação do Rendimento Escolar',
  'A respeito da verificação do rendimento escolar na educação básica (art. 24, V, da LDB), a lei determina que a avaliação deve pautar-se pelo critério de',
  {
    A: 'avaliação contínua e cumulativa do desempenho do aluno, com prevalência dos aspectos qualitativos.',
    B: 'exames bimestrais estritamente somativos, com prevalência exclusiva dos resultados das provas finais.',
    C: 'atribuição de conceitos baseados exclusivamente no comportamento disciplinar em sala.',
    D: 'impossibilidade absoluta de realização de estudos de recuperação ao longo do ano letivo.'
  },
  'A',
  'O art. 24, V, alínea "a", da LDB prescreve a "avaliação contínua e cumulativa do desempenho do aluno, com prevalência dos aspectos qualitativos sobre os quantitativos e dos resultados ao longo do período sobre os de eventuais exames finais".'
);

addQ(
  58,
  '1.1',
  'Lei Federal nº 9.394/1996 — Classificação e Reclassificação',
  'Segundo o artigo 24, inciso II, da LDB, a classificação do aluno em qualquer série ou etapa (exceto na primeira série do ensino fundamental) pode ocorrer',
  {
    A: 'por promoção, por transferência ou independentemente de escolarização anterior, mediante avaliação.',
    B: 'somente mediante apresentação do histórico escolar original emitido por escola oficial.',
    C: 'exclusivamente por sorteio público realizado na presença dos membros do Conselho Escolar.',
    D: 'apenas nos casos em que a família comprove residência fixa a menos de 500 metros do colégio.'
  },
  'A',
  'O art. 24, II, da LDB prevê a classificação: a) por promoção (para alunos que cursaram com aproveitamento); b) por transferência (de outras escolas); c) independentemente de escolarização anterior, mediante avaliação feita pela escola para definir o grau de desenvolvimento e colocá-lo na série/etapa adequada.'
);

addQ(
  59,
  '1.1',
  'Lei Federal nº 9.394/1996 — Ensino Religioso nas Escolas Públicas',
  'O artigo 33 da LDB regulamenta a oferta do ensino religioso nas escolas públicas de ensino fundamental. À luz da legislação vigente e da jurisprudência do STF (ADI 4439), o ensino religioso é de matrícula',
  {
    A: 'facultativa para o aluno e de oferta obrigatória para a escola, assegurado o respeito à diversidade.',
    B: 'obrigatória para todos os estudantes matriculados, sob pena de perda de frequência legal.',
    C: 'proibida em todas as escolas públicas da federação em razão da laicidade estrita do Estado.',
    D: 'facultativa para a instituição de ensino, que pode optar por não ministrá-lo no projeto pedagógico.'
  },
  'A',
  'O art. 33 da LDB define que o ensino religioso, de matrícula facultativa, é parte integrante da formação básica do cidadão e constitui disciplina dos horários normais das escolas públicas de ensino fundamental, assegurado o respeito à diversidade cultural e religiosa do Brasil.'
);

addQ(
  60,
  '1.1',
  'Lei Federal nº 9.394/1996 — Currículo do Ensino Médio e Itinerários',
  'Na conformação dada ao ensino médio pela LDB (art. 35-A e 36), o currículo é composto pela Formação Geral Básica (BNCC) e pelos Itinerários Formativos. Sobre essa estrutura, assinale a opção correta.',
  {
    A: 'A Formação Geral Básica é obrigatória a todos e articula-se às áreas do conhecimento e itinerários.',
    B: 'Os itinerários formativos são escolhidos compulsoriamente pela direção da escola sem opção discente.',
    C: 'O ensino de língua portuguesa e matemática é opcional nas duas últimas séries do ensino médio.',
    D: 'A carga horária total da Formação Geral Básica não pode ultrapassar oitocentas horas nos três anos.'
  },
  'A',
  'A arquitetura curricular do Ensino Médio articula uma base comum obrigatória (Formação Geral Básica, orientada pela BNCC) com itinerários formativos flexíveis, contemplando áreas do conhecimento e/ou formação técnica e profissional.'
);

addQ(
  61,
  '1.1',
  'Lei Federal nº 9.394/1996 — Educação de Jovens e Adultos (EJA)',
  'Nos termos dos artigos 37 e 38 da LDB, a Educação de Jovens e Adultos (EJA) destina-se àqueles que não tiveram acesso ou continuidade de estudos no ensino fundamental e médio na idade própria. A idade mínima para realização de exames supletivos de nível médio é de',
  {
    A: '18 (dezoito) anos completos.',
    B: '15 (quinze) anos completos.',
    C: '16 (dezesseis) anos completos.',
    D: '21 (vinte e um) anos completos.'
  },
  'A',
  'O art. 38, § 1º, II, da LDB estabelece que os exames supletivos de conclusão do ensino médio habilitam os candidatos com idade mínima de 18 anos completos (enquanto para o ensino fundamental a idade mínima é de 15 anos).'
);

addQ(
  62,
  '1.1',
  'Lei Federal nº 9.394/1996 — Educação Especial na Perspectiva Inclusiva',
  'O Capítulo V da LDB (arts. 58 a 60) disciplina a Educação Especial. Nos termos do art. 58, entende-se por educação especial a modalidade de educação escolar oferecida preferencialmente na',
  {
    A: 'rede regular de ensino, para educandos com deficiência, TGD e altas habilidades ou superdotação.',
    B: 'rede de instituições hospitalares especializadas em caráter compulsório e segregado.',
    C: 'rede de centros de acolhimento vocacional desvinculados do sistema oficial de ensino.',
    D: 'modalidade domiciliar estrita com vedação expressa à convivência em turmas regulares.'
  },
  'A',
  'O art. 58 da LDB dispõe que a educação especial é a modalidade oferecida preferencialmente na rede regular de ensino para educandos com deficiência, transtornos globais do desenvolvimento (TGD) e altas habilidades ou superdotação, garantindo-lhes serviços de apoio pedagógico especializado (AEE).'
);

addQ(
  63,
  '1.1',
  'Lei Federal nº 9.394/1996 — Formação dos Profissionais da Educação',
  'Nos termos do artigo 62 da LDB, a formação de docentes para atuar na educação básica far-se-á em nível superior, em curso de licenciatura plena. A legislação admite como formação mínima para o exercício do magistério na educação infantil e nos 5 primeiros anos do fundamental a oferecida em',
  {
    A: 'nível médio, na modalidade normal.',
    B: 'curso de pós-graduação lato sensu sem exigência de graduação anterior.',
    C: 'treinamento profissionalizante rápido com carga horária de quarenta horas.',
    D: 'ensino fundamental completo acrescido de exame psicotécnico estadual.'
  },
  'A',
  'O art. 62, caput, da LDB admite como formação mínima para o exercício do magistério na educação infantil e nos anos iniciais do ensino fundamental a formação em nível médio, na modalidade normal (Magistério).'
);

addQ(
  64,
  '1.1',
  'Lei Federal nº 9.394/1996 — Valorização dos Profissionais da Educação',
  'O artigo 67 da LDB determina que os sistemas de ensino promoverão a valorização dos profissionais da educação. Entre as garantias expressas no texto legal, inclui-se',
  {
    A: 'período reservado a estudos, planejamento e avaliação, incluído na carga horária de trabalho.',
    B: 'isenção total de recolhimento previdenciário e tributário sobre as parcelas remuneratórias.',
    C: 'licença sabática compulsória e remunerada a cada dois anos de efetivo exercício em sala.',
    D: 'vedação ao aperfeiçoamento continuado durante a vigência do estágio probatório inicial.'
  },
  'A',
  'O art. 67, V, da LDB assegura período reservado a estudos, planejamento e avaliação, incluído na carga horária de trabalho (garantindo o cumprimento da hora-atividade prevista também na Lei do Piso).'
);

addQ(
  65,
  '1.1',
  'Lei Federal nº 9.394/1996 — Recursos Financeiros da Educação',
  'O artigo 70 da LDB define o que se considera como despesas de manutenção e desenvolvimento do ensino (MDE). Considera-se despesa de MDE o gasto efetuado com',
  {
    A: 'remuneração e aperfeiçoamento do pessoal docente e demais profissionais da educação.',
    B: 'pesquisa científica desvinculada de instituições de ensino oficial básico.',
    C: 'subvenção a programas de assistência social para indivíduos sem matrícula escolar.',
    D: 'obras de infraestrutura viária e saneamento básico nas imediações dos centros urbanos.'
  },
  'A',
  'O art. 70, I, da LDB estabelece que se consideram despesas de manutenção e desenvolvimento do ensino as destinadas à remuneração e aperfeiçoamento dos profissionais da educação, bem como aquisição de materiais didáticos e conservação das instalações escolares.'
);

// We will generate the remaining questions programmatically with rich content and topics
// Let's create a rich generator that fills up to 250 questions
const topicsEducacao = [
  { code: '1.2', title: 'Leis nº 10.639/2003 e 11.645/2008 — Relações Étnico-Raciais e Diversidade' },
  { code: '1.3', title: 'Plano Nacional de Educação (PNE) e Diretrizes das Políticas Educacionais' },
  { code: '1.4', title: 'Tendências e Correntes Pedagógicas na Prática Docente Brasileira' },
  { code: '2', title: 'Gestão Democrática do Ensino Público e Órgãos Colegiados' },
  { code: '2.1', title: 'Projeto Político-Pedagógico (PPP) e Autonomia Escolar' },
  { code: '2.2', title: 'Didática, Planejamento de Ensino e Prática Pedagógica' },
  { code: '2.3', title: 'Avaliação da Aprendizagem na Perspectiva Formativa' },
  { code: '3', title: 'Teorias da Aprendizagem e Psicologia da Educação' },
  { code: '3.1', title: 'Base Nacional Comum Curricular (BNCC) na Educação Básica' },
  { code: '3.2', title: 'DCRC — Documento Curricular Referencial do Ceará' },
  { code: '3.3', title: 'Novo Ensino Médio e Itinerários Formativos no Ceará' },
  { code: '3.4', title: 'Ensino Médio em Tempo Integral: EEMTIs e EEEPs no Ceará' },
  { code: '4', title: 'Educação Especial Inclusiva e Atendimento Educacional Especializado (AEE)' },
  { code: '4.1', title: 'Educação Profissional Técnica e Educação de Jovens e Adultos' },
  { code: '5', title: 'Avaliação Externa em Larga Escala (SPAECE/SAEB) e Gestão Pedagógica' },
  { code: '6', title: 'Convivência Democrática, Mediação de Conflitos e Relação Professor-Aluno' },
  { code: '7', title: 'Tecnologias Digitais de Informação e Comunicação (TDIC) na Prática Escolar' }
];

console.log('Writing comprehensive builder script for 1000 questions...');
