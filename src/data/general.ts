
import React from 'react';
import { WordList, Word } from '../types';

/**
 * 通用词库：仅保留无法明确归类到特定话题（如学习、社交、环保）的跨场景高频词。
 * 已搬迁词汇索引：
 * - 学习类 (learning.ts): knowledge, curiosity, achievement, strategy, practical
 * - 社会类 (society.ts): community
 * - 社交类 (social.ts): passion, favour, annoying, irritating, have huge influence on
 * - 娱乐类 (entertainment.ts): reviews
 * - 环保类 (environmental.ts): virus
 */

export const word_annual: Word = { 
  word: 'annual', 
  emoji: '📅', 
  phonetic: '/ˈænjuəl/', 
  definition: '每年的；年度的', 
  example: 'The company holds an annual meeting every summer.',
  category: 'basic'
};

export const word_spacious: Word = { 
  word: 'spacious', 
  emoji: '🏞️', 
  phonetic: '/ˈspeɪʃəs/', 
  definition: '宽敞的', 
  example: 'The hotel room was spacious and comfortable.',
  category: 'advanced'
};

export const word_insecure: Word = { 
  word: 'insecure', 
  emoji: '😟', 
  phonetic: '/ˌɪnsɪˈkjʊər/', 
  definition: '不安全的；没信心的', 
  example: 'He felt insecure about his ability to do the job.',
  category: 'advanced'
};

export const word_maturity: Word = { 
  word: 'maturity', 
  emoji: '🌳', 
  phonetic: '/məˈtʃʊərəti/', 
  definition: '成熟', 
  example: 'He showed great maturity in dealing with the situation.',
  category: 'advanced'
};

export const word_recommend: Word = {
  word: 'recommend',
  emoji: '👍',
  phonetic: '/ˌrekəˈmend/',
  definition: '推荐',
  example: 'Could you recommend a good Italian restaurant?',
  category: 'basic'
};

export const word_inexpensive: Word = {
  word: 'inexpensive',
  emoji: '🪙',
  phonetic: '/ˌɪnɪkˈspensɪv/',
  definition: '便宜的；不贵的',
  example: 'There are many inexpensive ways to have fun in the city.',
  category: 'basic'
};

export const word_regularly: Word = {
  word: 'regularly',
  emoji: '🔄',
  phonetic: '/ˈreɡjələrli/',
  definition: '定期地',
  example: 'It is important to exercise regularly.',
  category: 'basic'
};

export const word_exchange: Word = {
  word: 'exchange',
  emoji: '🔄',
  phonetic: '/ɪksˈtʃeɪndʒ/',
  definition: '交流；交换',
  example: 'Cultural exchange programs help broaden your horizons.',
  category: 'basic'
};

export const word_frequently: Word = {
  word: 'frequently',
  emoji: '📉',
  phonetic: '/ˈfriːkwəntli/',
  definition: '频繁地',
  example: 'This problem occurs frequently during the winter.',
  category: 'basic'
};

export const word_positive: Word = {
  word: 'positive',
  emoji: '➕',
  phonetic: '/ˈpɒzətɪv/',
  definition: '积极的',
  example: 'A positive attitude can help you achieve your goals.',
  category: 'basic'
};

export const word_negative: Word = {
  word: 'negative',
  emoji: '➖',
  phonetic: '/ˈneɡətɪv/',
  definition: '消极的',
  example: 'Negative thinking can hinder your progress.',
  category: 'basic'
};

export const word_unfamiliar: Word = {
  word: 'unfamiliar',
  emoji: '❓',
  phonetic: '/ˌʌnfəˈmɪliər/',
  definition: '不熟悉的',
  example: 'The surroundings were unfamiliar to him.',
  category: 'basic'
};

export const word_available: Word = { 
  word: 'available', 
  emoji: '✅', 
  phonetic: '/əˈveɪləbl/', 
  definition: '可获得的；有空的', 
  example: 'Are there any rooms available for tonight?',
  category: 'basic'
};

export const generalWordList: WordList = {
  id: 'general-topics',
  title: '综合主题',
  description: '涵盖跨场景的通用高频词汇，适合各种口语话题的灵活运用。',
  illustration: () => null,
  theme: 'learn',
  category: 'dse',
  emoji: '🌐',
  words: [
    word_annual,
    word_available,
    { 
      word: 'storage', 
      emoji: '📦', 
      phonetic: '/ˈstɔːrɪdʒ/', 
      definition: '存储；仓库', 
      example: 'We need to find more storage space for our books.',
      category: 'basic'
    },
    word_spacious,
    word_insecure,
    { 
      word: 'mature', 
      emoji: '🌳', 
      phonetic: '/məˈtʃʊər/', 
      definition: '成熟的', 
      example: 'She is very mature for her age.',
      category: 'advanced'
    },
    { 
      word: 'access', 
      emoji: '🔑', 
      phonetic: '/ˈækses/', 
      definition: '进入；使用权', 
      example: 'You need a password to access the computer system.',
      category: 'advanced'
    },
    word_recommend,
    word_inexpensive,
    word_regularly,
    word_exchange,
    word_frequently,
    word_positive,
    word_negative,
    word_unfamiliar,
    word_maturity
  ],
};
