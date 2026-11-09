import React, { useState } from 'react';
import {
  BookOpen,
  Eye,
  EyeOff,
  GraduationCap,
  KeyRound,
  Lock,
  LogIn,
  Mail,
  Palette,
  ShieldCheck,
  User,
  UserPlus
} from 'lucide-react';
import { AuthSession } from '../types/auth';
import { loginUser, registerUser } from '../utils/authStorage';

export type ReadingTheme = 'light' | 'gray' | 'ochre' | 'sepia' | 'dark';

export const AUTH_THEME_OPTIONS: ReadonlyArray<{
  id: ReadingTheme;
  label: string;
  description: string;
  swatchClass: string;
}> = [
  {
    id: 'light',
    label: 'Claro',
    description: 'Tema claro editorial',
    swatchClass: 'swatch-light'
  },
  {
    id: 'gray',
    label: 'Cinza',
    description: 'Página em cinza suave (estilo E-Ink)',
    swatchClass: 'swatch-gray'
  },
  {
    id: 'ochre',
    label: 'Amarelo',
    description: 'Tons amarelos mais fechados / papel ocre',
    swatchClass: 'swatch-ochre'
  },
  {
    id: 'sepia',
    label: 'Sépia',
    description: 'Modo sépia em tons escuros e ouro envelhecido',
    swatchClass: 'swatch-sepia'
  },
  {
    id: 'dark',
    label: 'Escuro',
    description: 'Tema noturno em ardósia escura',
    swatchClass: 'swatch-dark'
  }
];

interface AuthModalProps {
  onSuccess: (session: AuthSession) => void;
  activeTheme: ReadingTheme;
  onThemeChange: (theme: ReadingTheme) => void;
}

export const AuthScreen: React.FC<AuthModalProps> = ({ onSuccess, activeTheme, onThemeChange }) => {
  const [mode, setMode] = useState<'login' | 'register'>('login');

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Status & feedback
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (mode === 'login') {
      const res = loginUser(email, password);
      if (!res.success || !res.session) {
        setErrorMsg(res.error || 'Falha ao autenticar.');
        return;
      }

      // Transição instantânea sem atrasos artificiais
      onSuccess(res.session);
    } else {
      // Validação do cadastro
      if (password !== confirmPassword) {
        setErrorMsg('A confirmação de senha não confere com a senha digitada.');
        return;
      }
      const res = registerUser(name, email, password);
      if (!res.success || !res.session) {
        setErrorMsg(res.error || 'Falha ao criar conta.');
        return;
      }

      // Transição instantânea
      onSuccess(res.session);
    }
  };

  const handleFillDemo = () => {
    setEmail('professor@seduc.ce.gov.br');
    setPassword('seduc2026');
    setErrorMsg(null);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Decorative Brand Header */}
      <div className="w-full max-w-md mx-auto mb-6 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-sky-700/10 dark:bg-sky-500/15 border border-sky-600/30 text-sky-700 dark:text-sky-300 mb-3 shadow-xs">
          <GraduationCap className="w-7 h-7" />
        </div>
        <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-700 dark:text-sky-400 mb-1">
          <span>SEDUC-CE 2026</span>
          <span>·</span>
          <span>Edital nº 014/2026</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Apostila SEDUC CE 2026
        </h1>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          1.000 Questões FUNECE comentadas com gabarito alternado e simulado
        </p>
      </div>

      {/* Color / Theme Selector Directly at Login Screen Entry */}
      <div className="w-full max-w-md mx-auto mb-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xs border border-slate-200 dark:border-slate-800 rounded-2xl p-3 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-2 px-1">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <Palette className="w-3.5 h-3.5 text-sky-700 dark:text-sky-400" />
            <span>Cor da Página / Tema de Leitura:</span>
          </div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {AUTH_THEME_OPTIONS.find((t) => t.id === activeTheme)?.label}
          </span>
        </div>

        <div className="grid grid-cols-5 gap-1.5" role="group" aria-label="Alterar cor da página na entrada">
          {AUTH_THEME_OPTIONS.map((opt) => {
            const isSelected = activeTheme === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => onThemeChange(opt.id)}
                title={`${opt.label} — ${opt.description}`}
                className={`flex flex-col items-center justify-center gap-1.5 py-2 px-1 rounded-xl text-[11px] font-semibold transition-all cursor-pointer border ${
                  isSelected
                    ? 'border-sky-600 bg-sky-50/80 dark:bg-sky-950/60 text-sky-900 dark:text-sky-100 ring-2 ring-sky-600/30 font-bold'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-600 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-950/40'
                }`}
                aria-pressed={isSelected}
              >
                <span
                  className={`w-4 h-4 rounded-full border shadow-xs transition-transform ${opt.swatchClass} ${
                    isSelected ? 'scale-110 ring-2 ring-offset-1 ring-sky-600' : ''
                  }`}
                />
                <span className="truncate max-w-full text-[10.5px]">{opt.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Auth Card */}
      <div className="w-full max-w-md mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
        {/* Tab Toggle: Entrar / Criar Conta */}
        <div className="grid grid-cols-2 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/50 p-1.5">
          <button
            type="button"
            onClick={() => {
              setMode('login');
              setErrorMsg(null);
            }}
            className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              mode === 'login'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            <LogIn className="w-4 h-4" />
            <span>Já tenho conta</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setMode('register');
              setErrorMsg(null);
            }}
            className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              mode === 'register'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            <UserPlus className="w-4 h-4" />
            <span>Criar nova conta</span>
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          <div className="mb-5">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              {mode === 'login' ? 'Entrar na Apostila' : 'Cadastre-se para acessar'}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {mode === 'login'
                ? 'Digite seu e-mail e senha para retomar seus simulados e anotações.'
                : 'Crie seu acesso exclusivo com nome, e-mail e senha para desbloquear todo o caderno.'}
            </p>
          </div>

          {errorMsg && (
            <div className="mb-4 p-3 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-xs text-rose-800 dark:text-rose-200 leading-relaxed flex items-start gap-2">
              <span className="font-bold shrink-0">Atenção:</span>
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <div>
                <label
                  htmlFor="reg-name"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  Nome Completo
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="reg-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Prof. Maria Ferreira de Lima"
                    className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-950/60 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-2 focus:outline-sky-600 transition-colors"
                  />
                </div>
              </div>
            )}

            <div>
              <label
                htmlFor="auth-email"
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
              >
                E-mail
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="auth-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seuemail@exemplo.com"
                  className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-950/60 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-2 focus:outline-sky-600 transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="auth-password"
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Senha
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="auth-password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
                  className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-950/60 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-2 focus:outline-sky-600 transition-colors font-mono-tabular"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer p-1"
                  title={showPassword ? 'Ocultar senha' : 'Ver senha digitada'}
                  aria-label={showPassword ? 'Ocultar senha' : 'Ver senha digitada'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {mode === 'register' && (
              <div>
                <label
                  htmlFor="reg-confirm-password"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  Confirmar Senha
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="reg-confirm-password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Repita sua senha exatamente"
                    className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-950/60 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-2 focus:outline-sky-600 transition-colors font-mono-tabular"
                  />
                </div>
              </div>
            )}

            {mode === 'login' && (
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 text-slate-600 dark:text-slate-400 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-slate-300 text-sky-700 focus:ring-sky-500"
                  />
                  <span>Lembrar de mim neste dispositivo</span>
                </label>

                <button
                  type="button"
                  onClick={handleFillDemo}
                  className="text-sky-700 dark:text-sky-400 hover:underline font-medium cursor-pointer"
                  title="Preencher conta demo de teste"
                >
                  Usar conta teste
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full mt-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-sky-700 hover:bg-sky-800 dark:bg-sky-600 dark:hover:bg-sky-700 active:scale-[0.99] transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2"
            >
              {mode === 'login' ? (
                <>
                  <LogIn className="w-4 h-4" />
                  <span>Entrar na Apostila</span>
                </>
              ) : (
                <>
                  <UserPlus className="w-4 h-4" />
                  <span>Criar Minha Conta e Entrar</span>
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Access Box */}
          {mode === 'login' && (
            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 bg-slate-50/60 dark:bg-slate-950/50 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 sm:p-8">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold text-slate-700 dark:text-slate-300">
                    Conta de demonstração pré-configurada:
                  </p>
                  <p className="font-mono-tabular text-[11px] text-slate-600 dark:text-slate-400">
                    E-mail: <strong className="text-slate-900 dark:text-slate-100">professor@seduc.ce.gov.br</strong>
                  </p>
                  <p className="font-mono-tabular text-[11px] text-slate-600 dark:text-slate-400">
                    Senha: <strong className="text-slate-900 dark:text-slate-100">seduc2026</strong>
                  </p>
                  <button
                    type="button"
                    onClick={handleFillDemo}
                    className="inline-block mt-1 font-semibold text-sky-700 dark:text-sky-400 hover:underline cursor-pointer"
                  >
                    Clique aqui para preencher automaticamente
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Trust & Programmatic Details Footer */}
      <div className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400 max-w-sm space-y-1">
        <p className="flex items-center justify-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-sky-700 dark:text-sky-400" />
          <span>Apostila SEDUC CE 2026 · Professor Efetivo</span>
        </p>
        <p>Acesso exclusivo aos 4 blocos da prova objetiva com banca FUNECE</p>
      </div>
    </div>
  );
};
