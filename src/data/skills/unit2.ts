
import { WordList } from '../../types';
import { SkillsTopicIllustration } from '../../components/Illustrations';

// Atomic Imports from Learning
import { 
  word_receive, 
  word_feedback, 
  word_schedule, 
  word_relieve_stress, 
  word_recharge,
  word_cope_with,
  word_study_tips,
  word_study_breaks,
  word_skip_class
} from '../learning';

// Atomic Imports from Social
import {
  word_encouragement,
  word_reunion,
  word_meet_ups,
  word_stay_in_touch,
  word_first_impression,
  word_overcome,
  word_stranger,
  word_anxiety,
  word_member,
  word_avoidant_behavior,
  word_refuse
} from '../social';

// Atomic Imports from General
import {
  word_recommend,
  word_inexpensive,
  word_spacious,
  word_annual,
  word_regularly,
  word_exchange,
  word_frequently,
  word_insecure,
  word_unfamiliar,
  word_positive,
  word_negative,
  word_maturity
} from '../general';

// Other imports
import { word_flexible, word_emotional } from '../sports';

export const skillsUnit2: WordList = {
  id: 'skills-unit-2',
  title: 'Unit 2',
  description: '掌握 Unit 2 核心词汇：关于讨论生活、观点、学习技巧及人际互动的深度表达。',
  illustration: SkillsTopicIllustration,
  theme: 'skills',
  category: 'skills',
  emoji: '💬',
  words: [
    word_recommend,
    word_inexpensive,
    { word: 'available', emoji: '📅', phonetic: '/əˈveɪləbl/', definition: '可获得的；有空的', example: 'The manager is available for a meeting now.', category: 'basic' },
    word_spacious,
    word_receive,
    word_feedback,
    word_cope_with,
    word_study_tips,
    word_schedule,
    word_study_breaks,
    word_relieve_stress,
    word_recharge,
    word_encouragement,
    word_reunion,
    word_meet_ups,
    word_annual,
    word_regularly,
    word_exchange,
    word_stay_in_touch,
    word_frequently,
    word_flexible,
    word_first_impression,
    word_overcome,
    word_insecure,
    word_unfamiliar,
    word_stranger,
    word_anxiety,
    word_member,
    word_avoidant_behavior,
    word_skip_class,
    word_emotional,
    word_positive,
    word_negative,
    word_maturity,
    word_refuse
  ],
};
