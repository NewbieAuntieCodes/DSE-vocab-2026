import React from 'react';
import { WordList } from '../types';

export const societyWordList: WordList = {
  id: 'dse-society',
  title: 'DSE口语 - 社会类',
  description: '学习讨论社会问题、社区服务和公民责任的词汇。',
  illustration: () => null,
  theme: 'learn',
  category: 'dse',
  emoji: '🌍',
  words: [
    { 
      word: 'volunteer', 
      emoji: '🙋',
      phonetic: '/ˌvɒlənˈtɪər/', 
      definition: '志愿者；自愿参加', 
      example: 'She works as a volunteer at the local animal shelter.'
    },
    { 
      word: 'community', 
      emoji: '🏘️',
      phonetic: '/kəˈmjuːnəti/', 
      definition: '社区', 
      example: 'It\'s important to be an active member of your community.'
    },
    { 
      word: 'charity', 
      emoji: '💖',
      phonetic: '/ˈtʃærəti/', 
      definition: '慈善机构；慈善', 
      example: 'He donates to a local charity every month.'
    },
    { 
      word: 'poverty', 
      emoji: '🏚️',
      phonetic: '/ˈpɒvəti/', 
      definition: '贫困', 
      example: 'The government has programs to help people living in poverty.'
    },
    { 
      word: 'donation', 
      emoji: '💰',
      phonetic: '/doʊˈneɪʃn/', 
      definition: '捐赠；捐款', 
      example: 'The school received a generous donation for its new library.'
    },
    { 
      word: 'homelessness', 
      emoji: '⛺',
      phonetic: '/ˈhoʊmləsnəs/', 
      definition: '无家可归', 
      example: 'Homelessness is a growing problem in many urban areas.'
    },
    {
      word: 'charity runs',
      emoji: '🏃‍♀️💖',
      phonetic: '/ˈtʃærəti rʌnz/',
      definition: '慈善跑',
      example: 'Many people participate in charity runs to raise money for good causes.'
    },
    {
      word: 'in need',
      emoji: '❤️',
      phonetic: '/ɪn niːd/',
      definition: '有困难的；需要帮助的',
      example: 'The organization provides food and shelter for families in need.'
    },
    {
      word: 'fundraising',
      emoji: '募捐',
      phonetic: '/ˈfʌndˌreɪzɪŋ/',
      definition: '筹款',
      example: 'The school is holding a fundraising event for its new sports facilities.'
    }
  ],
};