
import { WordList } from '../../types';
import { SkillsTopicIllustration } from '../../components/Illustrations';

// Atomic Imports from other data sources
import { 
  word_pros, 
  word_cons, 
  word_sum_up, 
  word_summarize, 
  word_in_summary, 
  word_to_sum_up, 
  word_agreement, 
  word_persuade, 
  word_involvement 
} from './shared_connectors';

import { 
  word_attend, 
  word_tutorial_class, 
  word_stay_organized, 
  word_todo_list, 
  word_time_limit, 
  word_benefit_from, 
  word_self_esteem, 
  word_gifted, 
  word_deal_with, 
  word_tutor, 
  word_weakness 
} from '../learning';

import { word_strength } from '../sports';
import { word_overcome } from '../social';

export const skillsUnit1: WordList = {
  id: 'skills-unit-1',
  title: 'Unit 1',
  description: '掌握 Unit 1 核心词汇：包括讨论优缺点、学习技巧、表达总结及达成共识的表达。',
  illustration: SkillsTopicIllustration,
  theme: 'skills',
  category: 'skills',
  emoji: '🗣️',
  words: [
    word_pros,
    word_cons,
    word_attend,
    word_tutorial_class,
    word_sum_up,
    word_summarize,
    word_stay_organized,
    word_in_summary,
    word_todo_list,
    word_time_limit,
    word_agreement,
    word_involvement,
    word_benefit_from,
    word_to_sum_up,
    word_self_esteem,
    word_gifted,
    word_deal_with,
    word_persuade,
    word_tutor,
    word_strength,
    word_weakness,
    word_overcome
  ],
};
