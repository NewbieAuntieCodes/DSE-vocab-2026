import React from 'react';
import { WordList } from '../types';

export const generalWordList: WordList = {
  id: 'general-topics',
  title: '综合主题',
  description: '涵盖多个领域的常用词汇，适合日常交流与口语表达。',
  illustration: () => null,
  theme: 'learn',
  category: 'dse',
  emoji: '🌐',
  words: [
    // 基础词汇 (Basic Vocabulary)
    { 
      word: 'knowledge', 
      emoji: '🧠', 
      phonetic: '/ˈnɒlɪdʒ/', 
      definition: '知识', 
      example: 'Reading books is a great way to gain knowledge.',
      category: 'basic'
    },
    { 
      word: 'community', 
      emoji: '🏘️', 
      phonetic: '/kəˈmjuːnəti/', 
      definition: '社区', 
      example: 'Volunteering helps to build a strong community.',
      category: 'basic'
    },
    { 
      word: 'annual', 
      emoji: '📅', 
      phonetic: '/ˈænjuəl/', 
      definition: '每年的；年度的', 
      example: 'The company holds an annual meeting every summer.',
      category: 'basic'
    },
    { 
      word: 'favour', 
      emoji: '🤝', 
      phonetic: '/ˈfeɪvər/', 
      definition: '恩惠；偏爱', 
      example: 'Could you do me a favour and help me carry these boxes?',
      category: 'basic'
    },
    { 
      word: 'reviews', 
      emoji: '⭐', 
      phonetic: '/rɪˈvjuːz/', 
      definition: '评价；评论', 
      example: 'The movie received positive reviews from critics.',
      category: 'basic'
    },
    { 
      word: 'passion', 
      emoji: '❤️', 
      phonetic: '/ˈpæʃn/', 
      definition: '激情；热诚', 
      example: 'Music has always been his true passion.',
      category: 'basic'
    },
    { 
      word: 'available', 
      emoji: '✅', 
      phonetic: '/əˈveɪləbl/', 
      definition: '可获得的；有空的', 
      example: 'Are there any rooms available for tonight?',
      category: 'basic'
    },
    { 
      word: 'storage', 
      emoji: '📦', 
      phonetic: '/ˈstɔːrɪdʒ/', 
      definition: '存储；仓库', 
      example: 'We need to find more storage space for our books.',
      category: 'basic'
    },
    { 
      word: 'annoying', 
      emoji: '😤', 
      phonetic: '/əˈnɔɪɪŋ/', 
      definition: '恼人的；讨厌的', 
      example: 'It is very annoying when the internet keeps cutting out.',
      category: 'basic'
    },
    { 
      word: 'virus', 
      emoji: '🦠', 
      phonetic: '/ˈvaɪrəs/', 
      definition: '病毒', 
      example: 'Wash your hands regularly to prevent the spread of the virus.',
      category: 'basic'
    },

    // 进阶词汇 (Advanced Vocabulary)
    { 
      word: 'curiosity', 
      emoji: '🤔', 
      phonetic: '/ˌkjʊərɪˈɒsɪti/', 
      definition: '好奇心', 
      example: 'A sense of curiosity is essential for learning.',
      category: 'advanced'
    },
    { 
      word: 'achievement', 
      emoji: '🏅', 
      phonetic: '/əˈtʃiːvmənt/', 
      definition: '成就', 
      example: 'Winning the competition was a great achievement.',
      category: 'advanced'
    },
    { 
      word: 'spacious', 
      emoji: '🏞️', 
      phonetic: '/ˈspeɪʃəs/', 
      definition: '宽敞的', 
      example: 'The hotel room was spacious and comfortable.',
      category: 'advanced'
    },
    { 
      word: 'strategy', 
      emoji: '♟️', 
      phonetic: '/ˈstrætədʒi/', 
      definition: '策略；战略', 
      example: 'We need to develop a clear strategy for our business.',
      category: 'advanced'
    },
    { 
      word: 'insecure', 
      emoji: '😟', 
      phonetic: '/ˌɪnsɪˈkjʊər/', 
      definition: '不安全的；没信心的', 
      example: 'He felt insecure about his ability to do the job.',
      category: 'advanced'
    },
    { 
      word: 'mature', 
      emoji: '🌳', 
      phonetic: '/məˈtʃʊər/', 
      definition: '成熟的', 
      example: 'She is very mature for her age.',
      category: 'advanced'
    },
    { 
      word: 'practical', 
      emoji: '🛠️', 
      phonetic: '/ˈpræktɪkl/', 
      definition: '实际的；实用的', 
      example: 'We need a practical solution to this problem.',
      category: 'advanced'
    },
    { 
      word: 'have huge influence on', 
      emoji: '🌊', 
      phonetic: '/hæv hjuːdʒ ˈɪnfluəns ɒn/', 
      definition: '对...有巨大影响', 
      example: 'Social media can have a huge influence on young people.',
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
    { 
      word: 'irritating', 
      emoji: '💢', 
      phonetic: '/ˈɪrɪteɪtɪŋ/', 
      definition: '令人烦躁的；刺激的', 
      example: 'She has an irritating habit of interrupting people.',
      category: 'advanced'
    },
  ],
};