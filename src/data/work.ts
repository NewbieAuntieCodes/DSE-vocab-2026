import React from 'react';
import { WordList } from '../types';

export const workWordList: WordList = {
  id: 'dse-work',
  title: 'DSE口语 - 工作类',
  description: '讨论不同职业、工作环境和职业发展的词汇。',
  illustration: () => null,
  theme: 'learn',
  category: 'dse',
  emoji: '💼',
  words: [
    { 
      word: 'firefighter', 
      emoji: '👨‍🚒',
      phonetic: '/ˈfaɪərfaɪtər/', 
      definition: '消防员', 
      example: 'Being a firefighter is a brave and demanding job.'
    },
    { 
      word: 'construction', 
      emoji: '👷',
      phonetic: '/kənˈstrʌkʃn/', 
      definition: '建造；建筑业', 
      example: 'The construction of the new bridge will take two years.'
    },
    { 
      word: 'colleague', 
      emoji: '👥',
      phonetic: '/ˈkɒliːɡ/', 
      definition: '同事', 
      example: 'I get along well with all of my colleagues at work.'
    },
    { 
      word: 'employee', 
      emoji: '🧑‍💼',
      phonetic: '/ɪmˈplɔɪiː/', 
      definition: '雇员', 
      example: 'The company has over 500 employees.'
    },
    { 
      word: 'promotion', 
      emoji: '📈',
      phonetic: '/prəˈmoʊʃn/', 
      definition: '晋升', 
      example: 'She worked hard and earned a promotion to manager.'
    },
    {
      word: 'career',
      emoji: '🚀',
      phonetic: '/kəˈrɪər/',
      definition: '职业；生涯',
      example: 'He is focused on building a successful career in finance.'
    }
  ],
};