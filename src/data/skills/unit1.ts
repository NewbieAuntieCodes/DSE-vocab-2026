import { WordList } from '../../types';
import { SkillsTopicIllustration } from '../../components/Illustrations';

export const skillsUnit1: WordList = {
  id: 'skills-unit-1',
  title: 'Unit 1: 表达与总结',
  description: '掌握日常交流、表达意见、总结观点所需的核心词汇。',
  illustration: SkillsTopicIllustration,
  theme: 'skills',
  category: 'skills',
  emoji: '🗣️',
  words: [
    {
      word: 'In my opinion',
      emoji: '🤔',
      phonetic: '/ɪn maɪ əˈpɪnjən/',
      definition: '在我看来',
      example: 'In my opinion, the new policy will be very effective.',
    },
    {
      word: 'I believe that',
      emoji: '👍',
      phonetic: '/aɪ bɪˈliːv ðæt/',
      definition: '我相信',
      example: 'I believe that everyone deserves a second chance.',
    },
    {
      word: 'From my perspective',
      emoji: '👀',
      phonetic: '/frɒm maɪ pərˈspektɪv/',
      definition: '从我的角度来看',
      example: 'From my perspective, the problem is more complex than it seems.',
    },
    {
      word: 'summary',
      emoji: '📝',
      phonetic: '/ˈsʌməri/',
      definition: '总结；摘要',
      example: 'He gave a brief summary of the main points.'
    },
    {
      word: 'sum up',
      emoji: '✍️',
      phonetic: '/sʌm ʌp/',
      definition: '总结；概括',
      example: 'To sum up, we need to improve our communication.'
    }
  ],
};
