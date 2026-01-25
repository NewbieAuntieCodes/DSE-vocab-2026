import React from 'react';
import { WordList } from '../types';
import {
  word_avenue,
  word_commute,
  word_crossroad,
  word_crosswalk,
  word_downtown,
  word_infrastructure,
  word_metropolis,
  word_nightlife,
  word_overcrowded,
  word_skyscraper,
  word_square,
  word_suburb,
  word_tunnel,
} from './lexicon';

export const cityWordList: WordList = {
  id: 'dse-city',
  title: 'DSE口语 - 城市生活',
  description: '关于城市设施、交通和生活的词汇。',
  illustration: () => null,
  theme: 'learn',
  category: 'dse',
  emoji: '🏙️',
  words: [
    word_skyscraper,
    word_metropolis,
    word_overcrowded,
    word_commute,
    word_infrastructure,
    word_downtown,
    word_suburb,
    word_avenue,
    word_crossroad,
    word_square,
    word_crosswalk,
    word_tunnel,
    word_nightlife,
  ],
};
