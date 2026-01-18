
import React from 'react';
import { WordList, Word } from '../types';

export const word_reviews: Word = { 
  word: 'reviews', 
  emoji: '⭐', 
  phonetic: '/rɪˈvjuːz/', 
  definition: '评价；评论', 
  example: 'The movie received positive reviews from critics.',
  category: 'basic'
};

export const entertainmentWordList: WordList = {
  id: 'dse-entertainment',
  title: 'DSE口语 - 娱乐类',
  description: '讨论名人文化、社交媒体、隐私和名望相关的话题。',
  illustration: () => null,
  theme: 'learn',
  category: 'dse',
  emoji: '🌟',
  words: [
    // 基础词汇 (Basic Vocabulary)
    { 
      word: 'privacy', 
      emoji: '🔒', 
      phonetic: '/ˈpraɪvəsi/', 
      definition: '隐私', 
      example: 'Celebrities often struggle to maintain their privacy.',
      category: 'basic'
    },
    { 
      word: 'celebrity', 
      emoji: '🌟', 
      phonetic: '/səˈlebrəti/', 
      definition: '名人', 
      example: 'Many young people dream of becoming a celebrity.',
      category: 'basic'
    },
    { 
      word: 'fame', 
      emoji: '🏆', 
      phonetic: '/feɪm/', 
      definition: '名声；名望', 
      example: 'Fame can bring both fortune and problems.',
      category: 'basic'
    },
    { 
      word: 'performance', 
      emoji: '🎭', 
      phonetic: '/pərˈfɔːrməns/', 
      definition: '表演；表现', 
      example: 'The actor gave a brilliant performance in the new movie.',
      category: 'basic'
    },
    { 
      word: 'media', 
      emoji: '📱', 
      phonetic: '/ˈmiːdiə/', 
      definition: '媒体', 
      example: 'The social media coverage of the event was huge.',
      category: 'basic'
    },
    { 
      word: 'fan', 
      emoji: '🙌', 
      phonetic: '/fæn/', 
      definition: '粉丝；狂热者', 
      example: 'Thousands of fans waited outside to see the singer.',
      category: 'basic'
    },
    { 
      word: 'gossip', 
      emoji: '👄', 
      phonetic: '/ˈɡɒsɪp/', 
      definition: '八卦；闲谈', 
      example: 'Don\'t believe everything you read in gossip columns.',
      category: 'basic'
    },
    { 
      word: 'popular', 
      emoji: '🔥', 
      phonetic: '/ˈpɒpjələr/', 
      definition: '受欢迎的；流行的', 
      example: 'The song quickly became popular among teenagers.',
      category: 'basic'
    },
    { 
      word: 'audience', 
      emoji: '👏', 
      phonetic: '/ˈɔːdiəns/', 
      definition: '观众', 
      example: 'The audience cheered loudly at the end of the play.',
      category: 'basic'
    },
    word_reviews,
    // 进阶词汇 (Advanced Vocabulary)
    { 
      word: 'paparazzi', 
      emoji: '📸', 
      phonetic: '/ˌpæpəˈrætsi/', 
      definition: '狗仔队', 
      example: 'The paparazzi followed the actress throughout her vacation.',
      category: 'advanced'
    },
    { 
      word: 'tabloid', 
      emoji: '🗞️', 
      phonetic: '/ˈtæblɔɪd/', 
      definition: '通俗小报', 
      example: 'Tabloids are often criticized for spreading rumors.',
      category: 'advanced'
    },
    { 
      word: 'endorsement', 
      emoji: '🖋️', 
      phonetic: '/ɪnˈdɔːrsmənt/', 
      definition: '代言；背书', 
      example: 'She earned millions from her sneaker endorsement deal.',
      category: 'advanced'
    },
    { 
      word: 'influential', 
      emoji: '💥', 
      phonetic: '/ˌɪnfluˈenʃl/', 
      definition: '有影响力的', 
      example: 'He is considered one of the most influential artists of his time.',
      category: 'advanced'
    },
    { 
      word: 'controversial', 
      emoji: '🗯️', 
      phonetic: '/ˌkɒntrəˈvɜːrʃl/', 
      definition: '有争议的', 
      example: 'The director\'s latest film received controversial reviews.',
      category: 'advanced'
    },
    { 
      word: 'scandal', 
      emoji: '📉', 
      phonetic: '/ˈskændl/', 
      definition: '丑闻', 
      example: 'The politician was forced to resign after the financial scandal.',
      category: 'advanced'
    },
    { 
      word: 'mainstream', 
      emoji: '🌊', 
      phonetic: '/ˈmeɪnstriːm/', 
      definition: '主流的', 
      example: 'Independent music is slowly becoming more mainstream.',
      category: 'advanced'
    },
    { 
      word: 'prestigious', 
      emoji: '🏛️', 
      phonetic: '/preˈstɪdʒəs/', 
      definition: '享有声望的', 
      example: 'Winning an Oscar is the most prestigious honor in film.',
      category: 'advanced'
    },
    { 
      word: 'limelight', 
      emoji: '🔦', 
      phonetic: '/ˈlaɪmlaɪt/', 
      definition: '公众注目的焦点', 
      example: 'She has been in the limelight since she was a child.',
      category: 'advanced'
    },
    { 
      word: 'copyright', 
      emoji: '©️', 
      phonetic: '/ˈkɒpiraɪt/', 
      definition: '版权', 
      example: 'The author holds the copyright to all her published works.',
      category: 'advanced'
    },
    { 
      word: 'put on a show', 
      emoji: '🎭', 
      phonetic: '/pʊt ɒn ə ʃoʊ/', 
      definition: '表演；上演', 
      example: 'The school students put on a show to raise money for charity.',
      category: 'advanced'
    }
  ],
};
