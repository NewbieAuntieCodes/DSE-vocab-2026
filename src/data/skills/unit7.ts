import { WordList } from '../../types';
import { SkillsTopicIllustration } from '../../components/Illustrations';
import { word_could_you_explain, word_i_dont_understand } from '../lexicon';

export const skillsUnit7: WordList = {
  id: 'skills-unit-7',
  title: 'Unit 7',
  description: '学习在不理解时如何礼貌地请求解释。',
  illustration: SkillsTopicIllustration,
  theme: 'skills',
  category: 'skills',
  emoji: '❓',
  words: [
    word_could_you_explain,
    word_i_dont_understand,
  ],
};
