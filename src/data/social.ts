
import React from 'react';
import { WordList, Word } from '../types';

export const word_passion: Word = { 
  word: 'passion', 
  emoji: '❤️', 
  phonetic: '/ˈpæʃn/', 
  definition: '激情；热诚', 
  example: 'Music has always been his true passion.',
  category: 'basic'
};

export const word_favour: Word = { 
  word: 'favour', 
  emoji: '🤝', 
  phonetic: '/ˈfeɪvər/', 
  definition: '恩惠；偏爱', 
  example: 'Could you do me a favour and help me carry these boxes?',
  category: 'basic'
};

export const word_annoying: Word = { 
  word: 'annoying', 
  emoji: '😤', 
  phonetic: '/əˈnɔɪɪŋ/', 
  definition: '恼人的；讨厌的', 
  example: 'It is very annoying when the internet keeps cutting out.',
  category: 'basic'
};

export const word_irritating: Word = { 
  word: 'irritating', 
  emoji: '💢', 
  phonetic: '/ˈɪrɪteɪtɪŋ/', 
  definition: '令人烦躁的；刺激的', 
  example: 'She has an irritating habit of interrupting people.',
  category: 'advanced'
};

export const word_influence: Word = { 
  word: 'have huge influence on', 
  emoji: '🌊', 
  phonetic: '/hæv hjuːdʒ ˈɪnfluəns ɒn/', 
  definition: '对...有巨大影响', 
  example: 'Social media can have a huge influence on young people.',
  category: 'advanced'
};

export const word_overcome: Word = {
  word: 'overcome',
  emoji: '💪',
  phonetic: '/ˌoʊvərˈkʌm/',
  definition: '克服',
  example: 'He had to overcome many difficulties to succeed.',
  category: 'basic'
};

export const word_stranger: Word = {
  word: 'stranger',
  emoji: '👤',
  phonetic: '/ˈstreɪndʒər/',
  definition: '陌生人',
  example: 'It\'s not always safe to talk to a stranger.',
  category: 'basic'
};

export const word_first_impression: Word = {
  word: 'first impression',
  emoji: '✨',
  phonetic: '/fɜːrst ɪmˈpreʃn/',
  definition: '第一印象',
  example: 'You only get one chance to make a first impression.',
  category: 'basic'
};

export const word_encouragement: Word = {
  word: 'encouragement',
  emoji: '👏',
  phonetic: '/ɪnˈkʌrɪdʒmənt/',
  definition: '鼓励',
  example: 'A little encouragement can go a long way.',
  category: 'basic'
};

export const word_reunion: Word = {
  word: 'reunion',
  emoji: '🤝',
  phonetic: '/ˌriːˈjuːniən/',
  definition: '团聚；重聚',
  example: 'We are planning a family reunion next summer.',
  category: 'basic'
};

export const word_meet_ups: Word = {
  word: 'meet-ups',
  emoji: '☕',
  phonetic: '/miːt ʌps/',
  definition: '聚会；见面',
  example: 'Regular meet-ups help friends stay close.',
  category: 'basic'
};

export const word_stay_in_touch: Word = {
  word: 'stay in touch',
  emoji: '📱',
  phonetic: '/steɪ ɪn tʌtʃ/',
  definition: '保持联系',
  example: 'Let\'s stay in touch after we graduate.',
  category: 'basic'
};

export const word_anxiety: Word = {
  word: 'anxiety',
  emoji: '😰',
  phonetic: '/æŋˈzaɪəti/',
  definition: '焦虑；担心',
  example: 'Public speaking often causes a lot of anxiety.',
  category: 'advanced'
};

export const word_member: Word = {
  word: 'member',
  emoji: '🆔',
  phonetic: '/ˈmembər/',
  definition: '成员',
  example: 'He is a new member of our team.',
  category: 'basic'
};

export const word_avoidant_behavior: Word = {
  word: 'avoidant behavior',
  emoji: '🚶‍♂️',
  phonetic: '/əˈvɔɪdənt bɪˈheɪvjər/',
  definition: '逃避行为',
  example: 'Avoidant behavior can prevent people from solving their problems.',
  category: 'advanced'
};

export const word_refuse: Word = {
  word: 'refuse',
  emoji: '🙅‍♂️',
  phonetic: '/rɪˈfjuːz/',
  definition: '拒绝',
  example: 'He had to refuse the offer because he was too busy.',
  category: 'basic'
};

export const socialWordList: WordList = {
  id: 'dse-social',
  title: 'DSE口语 - 社交类',
  description: '学习讨论人际关系、社交活动和情感表达的词汇。',
  illustration: () => null,
  theme: 'learn',
  category: 'dse',
  emoji: '👋',
  words: [
    { word: 'isolated', emoji: '👤', phonetic: '/ˈaɪsəleɪtɪd/', definition: '孤立的；隔离的', example: 'After moving to the new city, he felt very isolated.' },
    { word: 'lonely', emoji: '😔', phonetic: '/ˈloʊnli/', definition: '孤独的；寂寞的', example: 'She felt lonely even in a crowded room.' },
    { word: 'sociable', emoji: '🎉', phonetic: '/ˈsoʊʃəbl/', definition: '好交际的', example: 'My friend is very sociable and loves parties.' },
    { word: 'hang out', emoji: '👫', phonetic: '/hæŋ aʊt/', definition: '（与朋友）待在一起；闲逛', example: 'Do you want to hang out at the mall this weekend?' },
    { word: 'get along with', emoji: '🤝', phonetic: '/ɡet əˈlɒŋ wɪð/', definition: '与...和睦相处', example: 'I get along with my colleagues very well.' },
    { word: 'admire', emoji: '🤩', phonetic: '/ədˈmaɪər/', definition: '钦佩；欣赏', example: 'I really admire her for her courage.' },
    { word: 'appreciate', emoji: '🙏', phonetic: '/əˈpriːʃieɪt/', definition: '欣赏；感激', example: 'I really appreciate all the help you have given me.' },
    { word: 'socialize', emoji: '🗣️', phonetic: '/ˈsoʊʃəlaɪz/', definition: '参加社交活动；交际', example: 'It\'s important to socialize with your colleagues outside of work.' },
    { word: 'closer', emoji: '🤗', phonetic: '/ˈkloʊsər/', definition: '更亲近的', example: 'Sharing experiences can bring people closer together.' },
    { word: 'misunderstandings', emoji: '😕', phonetic: '/ˌmɪsʌndərˈstændɪŋz/', definition: '误解', example: 'Clear communication can prevent misunderstandings.' },
    { word: 'impression', emoji: '✨', phonetic: '/ɪmˈpreʃn/', definition: '印象', example: 'He made a good impression on his first day at work.' },
    word_overcome,
    { word: 'shyness', emoji: '😊', phonetic: '/ˈsɪnəs/', definition: '害羞；腼腆', example: 'She is trying to overcome her shyness by joining a public speaking club.' },
    { word: 'confidence', emoji: '😎', phonetic: '/ˈkɒnfɪdəns/', definition: '自信', example: 'Having confidence in yourself is key to success.' },
    { word: 'chat with', emoji: '💬', phonetic: '/tʃæt wɪð/', definition: '与...聊天', example: 'I like to chat with my friends online in the evening.' },
    word_stranger,
    { word: 'stay calm', emoji: '😌', phonetic: '/steɪ kɑːm/', definition: '保持冷静', example: 'In an emergency, it\'s important to stay calm and think clearly.' },
    { word: 'appearance', emoji: '👕', phonetic: '/əˈpɪərəns/', definition: '外貌；外观', example: 'His smart appearance helped him make a good first impression.' },
    { word: 'role model', emoji: '🌟', phonetic: '/ˈroʊl ˌmɒdl/', definition: '榜样', example: 'Many athletes are positive role models for young people.' },
    { word: 'inspire', emoji: '💡', phonetic: '/ɪnˈspaɪər/', definition: '激励；鼓舞', example: 'His story of overcoming adversity inspired millions.' },
    { word: 'recognize', emoji: '👀', phonetic: '/ˈrekəɡnaɪz/', definition: '认出；承认', example: 'It is important to recognize the contributions of others.' },
    word_first_impression,
    word_encouragement,
    word_reunion,
    word_meet_ups,
    word_stay_in_touch,
    word_anxiety,
    word_member,
    word_avoidant_behavior,
    word_refuse,
    word_passion,
    word_favour,
    word_annoying,
    word_irritating,
    word_influence
  ],
};
