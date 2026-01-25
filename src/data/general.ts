import { WordList } from '../types';
import {
  word_access,
  word_annual,
  word_available,
  word_exchange,
  word_frequently,
  word_inexpensive,
  word_insecure,
  word_mature,
  word_maturity,
  word_negative,
  word_positive,
  word_recommend,
  word_regularly,
  word_spacious,
  word_storage,
  word_unfamiliar,
} from './lexicon';

/**
 * 通用词库：仅保留无法明确归类到特定话题（如学习、社交、环保）的跨场景高频词。
 * 已搬迁词汇索引：
 * - 学习类 (learning.ts): knowledge, curiosity, achievement, strategy, practical
 * - 社会类 (society.ts): community
 * - 社交类 (social.ts): passion, favour, annoying, irritating, have huge influence on
 * - 娱乐类 (entertainment.ts): reviews
 * - 环保类 (environmental.ts): virus
 */
export {
  word_access,
  word_annual,
  word_available,
  word_exchange,
  word_frequently,
  word_inexpensive,
  word_insecure,
  word_maturity,
  word_negative,
  word_positive,
  word_recommend,
  word_regularly,
  word_spacious,
  word_unfamiliar,
} from './lexicon';

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
    word_storage,
    word_spacious,
    word_insecure,
    word_mature,
    word_access,
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
