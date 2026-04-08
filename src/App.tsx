import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Landmark, Paintbrush, Boxes, Gavel, Globe, CheckCircle2, XCircle, Trophy, Sparkles, Languages } from 'lucide-react';
import confetti from 'canvas-confetti';
import { translations } from './translations';

type Language = 'ru' | 'en';

export default function App() {
  const [lang, setLang] = useState<Language>('ru');
  const t = translations[lang];

  const categories = [
    { id: 'hidden', name: t.categories.hidden, icon: Palette },
    { id: 'arch', name: t.categories.arch, icon: Landmark },
    { id: 'color', name: t.categories.color, icon: Paintbrush },
    { id: 'sculpt', name: t.categories.sculpt, icon: Boxes },
    { id: 'auctions', name: t.categories.auctions, icon: Gavel }
  ];

  const points = [100, 200, 300, 400, 500];
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<any>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [isFinalRound, setIsFinalRound] = useState(false);

  const handleQuestionClick = (catId: string, pt: number) => {
    if (answered.includes(`${catId}-${pt}`)) return;
    const catQuestions = (t.questions as any)[catId];
    const index = points.indexOf(pt);
    const question = catQuestions[index];
    setCurrentQuestion({ ...question, catId, pt });
    setShowAnswer(false);
  };

  const handleAnswer = (correct: boolean) => {
    if (correct) {
      setScore(s => s + current