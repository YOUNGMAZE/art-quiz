import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  X, 
  CheckCircle2, 
  Crown,
  Sparkles,
  ArrowRight,
  RefreshCcw,
  Palette,
  TowerControl as Tower,
  History as HistoryIcon,
  Hammer,
  Gem,
  Languages,
  ImageOff,
  Loader2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  Language, 
  Question, 
  CATEGORIES as CATEGORIES_DATA, 
  QUESTIONS_DATA, 
  FINAL_QUESTION_DATA, 
  UI_STRINGS 
} from './translations';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  hd: <Sparkles className="w-5 h-5" />,
  ar: <Tower className="w-5 h-5" />,
  ca: <Palette className="w-5 h-5" />,
  sc: <Gem className="w-5 h-5" />,
  ap: <Hammer className="w-5 h-5" />,
};

// Robust Image Component with loading/error states
const ArtImage = ({ src, alt }: { src: string; alt: string }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-zinc-900/50 flex items-center justify-center">
      {loading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
          <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
        </div>
      )}
      
      {error ? (
        <div className="flex flex-col items-center gap-2 text-zinc-500 p-4 text-center">
          <ImageOff className="w-12 h-12 opacity-20" />
          <p className="text-xs uppercase font-bold tracking-widest">{alt}</p>
        </div>
      ) : (
        <img 
          src={src} 
          alt={alt}
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
          className={`w-full h-full object-cover transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('ru');
  const [gameState, setGameState] = useState<'intro' | 'board' | 'question' | 'final' | 'results'>('intro');
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [answeredIds, setAnsweredIds] = useState<Set<string>>(new Set());
  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);

  const ui = UI_STRINGS[lang];
  const categories = CATEGORIES_DATA[lang];
  const questions = QUESTIONS_DATA[lang].map(q => ({
    ...q,
    isAnswered: answeredIds.has(q.id)
  }));
  const activeQuestion = questions.find(q => q.id === activeQuestionId) || null;
  const finalQuestion = FINAL_QUESTION_DATA[lang];

  const totalAnswered = answeredIds.size;
  const isBoardComplete = totalAnswered === questions.length;

  const handleSelectQuestion = (q: Question) => {
    if (q.isAnswered) return;
    setActiveQuestionId(q.id);
    setGameState('question');
    setShowAnswer(false);
  };

  const handleCorrect = () => {
    if (!activeQuestion) return;
    setScore(prev => prev + activeQuestion.points);
    setAnsweredIds(prev => new Set([...prev, activeQuestion.id]));
    setGameState('board');
  };

  const handleIncorrect = () => {
    if (!activeQuestion) return;
    setAnsweredIds(prev => new Set([...prev, activeQuestion.id]));
    setGameState('board');
  };

  const resetGame = () => {
    setAnsweredIds(new Set());
    setScore(0);
    setGameState('intro');
  };

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'ru' : 'en');
  };

  return (
    <div className="relative min-h-screen text-white font-sans overflow-hidden bg-black selection:bg-purple-500/30">
      {/* Background Liquid Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/20 blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-pink-600/20 blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute top-[30%] right-[20%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[120px] animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-2xl liquid-gradient flex items-center justify-center shadow-lg shadow-purple-500/20">
              <Palette className="text-white w-7 h-7" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-gradient">{ui.title}</h1>
            </div>
          </motion.div>

          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={toggleLanguage}
              className="glass-morphism px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <Languages className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-bold uppercase tracking-wider">{lang === 'en' ? 'English' : 'Русский'}</span>
            </motion.button>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-morphism px-6 py-3 rounded-2xl flex items-center gap-4"
            >
              <div className="text-right">
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">{ui.totalScore}</p>
                <p className="text-2xl font-black text-white tabular-nums">{score}</p>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Trophy className="w-5 h-5 text-yellow-500" />
              </div>
            </motion.div>
          </div>
        </header>

        {/* Game Area */}
        <main className="flex-1 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {gameState === 'intro' && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="max-w-2xl mx-auto text-center space-y-8"
              >
                <div className="space-y-4">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="w-24 h-24 mx-auto rounded-3xl liquid-gradient flex items-center justify-center shadow-2xl mb-8"
                  >
                    <Sparkles className="w-12 h-12 text-white" />
                  </motion.div>
                  <h2 className="text-6xl font-black tracking-tighter sm:text-7xl leading-tight">
                    {ui.introTitle} <br />
                    <span className="text-gradient">{ui.introSubtitle}</span>
                  </h2>
                  <p className="text-zinc-400 text-lg max-w-md mx-auto leading-relaxed">
                    {ui.introDesc}
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setGameState('board')}
                    className="glass-button px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 group"
                  >
                    {ui.startExhibition}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            )}

            {gameState === 'board' && (
              <motion.div
                key="board"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-5 gap-4">
                  {categories.map((cat, idx) => (
                    <motion.div
                      key={cat.id}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="glass-card rounded-2xl p-4 flex flex-col items-center gap-2 text-center"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-purple-400">
                        {CATEGORY_ICONS[cat.id]}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-300">
                        {cat.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-5 gap-4">
                  {categories.map((cat) => (
                    <div key={cat.id} className="space-y-4">
                      {questions
                        .filter((q) => q.id.startsWith(cat.id))
                        .sort((a, b) => a.points - b.points)
                        .map((q, qIdx) => (
                          <motion.button
                            key={q.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: qIdx * 0.1 + 0.3 }}
                            disabled={q.isAnswered}
                            onClick={() => handleSelectQuestion(q)}
                            className={`w-full aspect-square rounded-2xl flex items-center justify-center text-xl font-black transition-all duration-300 ${
                              q.isAnswered 
                              ? 'bg-zinc-900/40 text-zinc-700 border border-zinc-800 pointer-events-none' 
                              : 'glass-card hover:shadow-purple-500/20 active:scale-95 text-white'
                            }`}
                          >
                            {q.isAnswered ? <CheckCircle2 className="w-8 h-8 opacity-20" /> : q.points}
                          </motion.button>
                        ))}
                    </div>
                  ))}
                </div>

                {isBoardComplete && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-center pt-8"
                  >
                    <button
                      onClick={() => {
                        setShowAnswer(false);
                        setGameState('final');
                      }}
                      className="glass-button px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-3 border-purple-500/30 hover:border-purple-500"
                    >
                      <Crown className="w-6 h-6 text-yellow-500" />
                      {ui.finalRound}
                      <Crown className="w-6 h-6 text-yellow-500" />
                    </button>
                  </motion.div>
                )}
              </motion.div>
            )}

            {gameState === 'question' && activeQuestion && (
              <motion.div
                key="question"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="max-w-3xl mx-auto w-full"
              >
                <div className="glass-morphism rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="relative z-10 space-y-8 sm:space-y-12">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-400">
                          {activeQuestion.category}
                        </span>
                        <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">{activeQuestion.points} {ui.points}</h3>
                      </div>
                      <button 
                        onClick={() => setGameState('board')}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-button flex items-center justify-center"
                      >
                        <X className="w-5 h-5 sm:w-6 sm:h-6" />
                      </button>
                    </div>

                    <div className="min-h-[150px] flex items-center">
                      <p className="text-2xl sm:text-3xl leading-snug font-medium text-zinc-100 italic">
                        "{activeQuestion.question}"
                      </p>
                    </div>

                    <div className="space-y-4">
                      {!showAnswer ? (
                        <button
                          onClick={() => setShowAnswer(true)}
                          className="w-full py-5 rounded-2xl glass-button font-black text-xl"
                        >
                          {ui.revealAnswer}
                        </button>
                      ) : (
                        <div className="space-y-8">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                          >
                            <ArtImage src={activeQuestion.imageUrl} alt={activeQuestion.answer} />
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="p-6 rounded-2xl bg-white/10 border border-white/20 text-center"
                          >
                            <p className="text-[10px] uppercase tracking-widest font-black text-zinc-400 mb-2">{ui.answerLabel}</p>
                            <p className="text-3xl font-black text-gradient">{activeQuestion.answer}</p>
                          </motion.div>
                          <div className="grid grid-cols-2 gap-4">
                            <button
                              onClick={() => {
                                handleCorrect();
                                confetti({
                                  particleCount: 150,
                                  spread: 70,
                                  origin: { y: 0.6 },
                                  colors: ['#6366f1', '#a855f7', '#ec4899']
                                });
                              }}
                              className="py-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-bold hover:bg-emerald-500/30 transition-colors"
                            >
                              {ui.correct}
                            </button>
                            <button
                              onClick={handleIncorrect}
                              className="py-4 rounded-2xl bg-rose-500/20 border border-rose-500/30 text-rose-400 font-bold hover:bg-rose-500/30 transition-colors"
                            >
                              {ui.incorrect}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {gameState === 'final' && (
              <motion.div
                key="final"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-3xl mx-auto w-full text-center space-y-12"
              >
                <div className="space-y-4">
<div className="w-24 h-24 mx-auto rounded-full liquid-gradient flex items-center justify-center shadow-2xl mb-8">
  <HistoryIcon className="w-12 h-12 text-white" />
</div>
                  <h2 className="text-6xl font-black tracking-tighter uppercase italic">{ui.finalTitle}</h2>
                  <p className="text-zinc-400 text-xl font-medium tracking-wide">{ui.finalSubtitle}</p>
                </div>

                <div className="glass-morphism rounded-[2.5rem] p-8 sm:p-12 space-y-12">
                  <p className="text-2xl sm:text-3xl leading-relaxed italic">
                    "{finalQuestion.question}"
                  </p>

                  {!showAnswer ? (
                    <button
                      onClick={() => setShowAnswer(true)}
                      className="w-full py-6 rounded-2xl glass-button font-black text-2xl shadow-xl shadow-purple-500/10"
                    >
                      {ui.showMasterpiece}
                    </button>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-8"
                    >
                      <ArtImage src={finalQuestion.imageUrl} alt={finalQuestion.answer} />

                      <div className="p-8 rounded-2xl bg-white/10 border border-white/20">
                        <p className="text-4xl sm:text-5xl font-black text-gradient">{finalQuestion.answer}</p>
                      </div>
                      <button
                        onClick={() => setGameState('results')}
                        className="px-12 py-5 rounded-2xl liquid-gradient font-black text-xl hover:scale-105 transition-transform"
                      >
                        {ui.finishExhibition}
                      </button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}

            {gameState === 'results' && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md mx-auto text-center space-y-12"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500/40 blur-[100px] rounded-full" />
                  <div className="relative z-10 glass-morphism rounded-[2.5rem] p-12 space-y-8">
                    <div className="w-20 h-20 mx-auto rounded-3xl liquid-gradient flex items-center justify-center shadow-2xl">
                      <Trophy className="w-10 h-10 text-white" />
                    </div>
                    
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-zinc-400 uppercase tracking-widest">{ui.finalScoreLabel}</h2>
                      <p className="text-7xl font-black text-white">{score}</p>
                    </div>

                    <div className="flex flex-col gap-4">
                      <button
                        onClick={resetGame}
                        className="w-full py-5 rounded-2xl glass-button font-black text-xl flex items-center justify-center gap-2"
                      >
                        <RefreshCcw className="w-5 h-5" />
                        {ui.playAgain}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Footer info */}
        <footer className="mt-12 text-center">
          <p className="text-[10px] text-zinc-600 uppercase tracking-[0.4em] font-bold">
            ELIZAVETA ALEKSEEVA 2026
          </p>
        </footer>
      </div>
    </div>
  );
}
