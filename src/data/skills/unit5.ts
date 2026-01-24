import { WordList } from '../../types';
import { SkillsTopicIllustration } from '../../components/Illustrations';
import { word_how_about, word_i_suggest } from '../lexicon';

export const skillsUnit5: WordList = {
  id: 'skills-unit-5',
  title: 'Unit 5',
  description: '学习如何给出建议和推荐。',
  illustration: SkillsTopicIllustration,
  theme: 'skills',
  category: 'skills',
  emoji: '💡',
  words: [
    word_i_suggest,
    word_how_about,
  ],
};
