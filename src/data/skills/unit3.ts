import { WordList } from '../../types';
import { SkillsTopicIllustration } from '../../components/Illustrations';
import { word_for_example, word_for_instance } from '../lexicon';

export const skillsUnit3: WordList = {
  id: 'skills-unit-3',
  title: 'Unit 3',
  description: '学习如何通过具体的例子来支撑你的观点。',
  illustration: SkillsTopicIllustration,
  theme: 'skills',
  category: 'skills',
  emoji: '👉',
  words: [
    word_for_example,
    word_for_instance,
  ],
};
