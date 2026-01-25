import React from 'react';
import { WordList } from '../types';
import {
  word_career,
  word_colleague,
  word_construction,
  word_employee,
  word_firefighter,
  word_promotion,
} from './lexicon';

export const workWordList: WordList = {
  id: 'dse-work',
  title: 'DSE口语 - 工作类',
  description: '讨论不同职业、工作环境和职业发展的词汇。',
  illustration: () => null,
  theme: 'learn',
  category: 'dse',
  emoji: '💼',
  words: [
    word_firefighter,
    word_construction,
    word_colleague,
    word_employee,
    word_promotion,
    word_career,
  ],
};
