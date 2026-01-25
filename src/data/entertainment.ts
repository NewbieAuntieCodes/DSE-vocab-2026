
import React from 'react';
import { WordList } from '../types';
import {
  word_audience,
  word_celebrity,
  word_controversial,
  word_copyright,
  word_endorsement,
  word_fame,
  word_fan,
  word_gossip,
  word_influential,
  word_limelight,
  word_mainstream,
  word_media,
  word_paparazzi,
  word_performance,
  word_popular,
  word_prestigious,
  word_privacy,
  word_put_on_a_show,
  word_reviews,
  word_scandal,
  word_tabloid,
} from './lexicon';

export { word_privacy, word_reviews } from './lexicon';

export const entertainmentWordList: WordList = {
  id: 'dse-entertainment',
  title: 'DSE口语 - 娱乐类',
  description: '讨论名人文化、社交媒体、隐私和名望相关的话题。',
  illustration: () => null,
  theme: 'learn',
  category: 'dse',
  emoji: '🌟',
  words: [
    // 基础词汇 (Basic Vocabulary)
    word_privacy,
    word_celebrity,
    word_fame,
    word_performance,
    word_media,
    word_fan,
    word_gossip,
    word_popular,
    word_audience,
    word_reviews,
    // 进阶词汇 (Advanced Vocabulary)
    word_paparazzi,
    word_tabloid,
    word_endorsement,
    word_influential,
    word_controversial,
    word_scandal,
    word_mainstream,
    word_prestigious,
    word_limelight,
    word_copyright,
    word_put_on_a_show,
  ],
};
