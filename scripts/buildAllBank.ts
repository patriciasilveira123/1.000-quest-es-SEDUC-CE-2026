import fs from 'fs';
import path from 'path';
import { getFullEducacaoQuestions } from './generateEducacao';
import { getFullAdministracaoQuestions } from './generateAdministracao';
import { getFullPortuguesQuestions } from './generatePortugues';
import { getFullDadosQuestions } from './generateDados';

console.log('Generating 1.000 questions bank (250 per discipline)...');

const educacao = getFullEducacaoQuestions();
const administracao = getFullAdministracaoQuestions();
const portugues = getFullPortuguesQuestions();
const dados = getFullDadosQuestions();

console.log(`Educação count: ${educacao.length} (IDs ${educacao[0].id}..${educacao[educacao.length - 1].id})`);
console.log(`Administração count: ${administracao.length} (IDs ${administracao[0].id}..${administracao[administracao.length - 1].id})`);
console.log(`Português count: ${portugues.length} (IDs ${portugues[0].id}..${portugues[portugues.length - 1].id})`);
console.log(`Dados count: ${dados.length} (IDs ${dados[0].id}..${dados[dados.length - 1].id})`);

const total = educacao.length + administracao.length + portugues.length + dados.length;
console.log(`TOTAL QUESTIONS: ${total}`);

if (total !== 1000) {
  throw new Error(`Total must be exactly 1000, got ${total}`);
}

const srcDataDir = path.resolve(process.cwd(), 'src/data');

// 1. Write questionsEducacao.ts
const educacaoContent = `import { Question } from '../types/quiz';

export const questionsEducacao: Question[] = ${JSON.stringify(educacao, null, 2)};
`;
fs.writeFileSync(path.join(srcDataDir, 'questionsEducacao.ts'), educacaoContent, 'utf-8');
console.log('Successfully wrote src/data/questionsEducacao.ts');

// 2. Write questionsAdministracao.ts
const administracaoContent = `import { Question } from '../types/quiz';

export const questionsAdministracao: Question[] = ${JSON.stringify(administracao, null, 2)};
`;
fs.writeFileSync(path.join(srcDataDir, 'questionsAdministracao.ts'), administracaoContent, 'utf-8');
console.log('Successfully wrote src/data/questionsAdministracao.ts');

// 3. Write questionsPortugues.ts
const portuguesContent = `import { Question } from '../types/quiz';

export const questionsPortugues: Question[] = ${JSON.stringify(portugues, null, 2)};
`;
fs.writeFileSync(path.join(srcDataDir, 'questionsPortugues.ts'), portuguesContent, 'utf-8');
console.log('Successfully wrote src/data/questionsPortugues.ts');

// 4. Write questionsDados.ts
const dadosContent = `import { Question } from '../types/quiz';

export const questionsDados: Question[] = ${JSON.stringify(dados, null, 2)};
`;
fs.writeFileSync(path.join(srcDataDir, 'questionsDados.ts'), dadosContent, 'utf-8');
console.log('Successfully wrote src/data/questionsDados.ts');

console.log('ALL 1.000 QUESTIONS WRITTEN SUCCESSFULLY!');
