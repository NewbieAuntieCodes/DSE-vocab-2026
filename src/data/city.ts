import React from 'react';
import { WordList } from '../types';

export const cityWordList: WordList = {
  id: 'dse-city',
  title: 'DSE口语 - 城市生活',
  description: '关于城市设施、交通和生活的词汇。',
  illustration: () => null,
  theme: 'learn',
  category: 'dse',
  emoji: '🏙️',
  words: [
    { word: 'skyscraper', emoji: '🏙️', phonetic: '/ˈskaɪskreɪpər/', definition: '摩天大楼', example: 'Hong Kong is famous for its skyline filled with skyscrapers.' },
    { word: 'metropolis', emoji: '🌆', phonetic: '/məˈtrɑːpəlɪs/', definition: '大都市', example: 'Tokyo is a bustling metropolis with millions of residents.' },
    { word: 'overcrowded', emoji: '👨‍👩‍👧‍👦', phonetic: '/ˌoʊvərˈkraʊdɪd/', definition: '过于拥挤的', example: 'The subway is often overcrowded during rush hour.' },
    { word: 'commute', emoji: '🚗', phonetic: '/kəˈmjuːt/', definition: '通勤', example: 'My daily commute to work takes about an hour.' },
    { word: 'infrastructure', emoji: '🏗️', phonetic: '/ˈɪnfrəstrʌktʃər/', definition: '基础设施', example: 'The city is investing in its infrastructure to support growth.' },
    { word: 'downtown', emoji: '🏢', phonetic: '/ˈdaʊntaʊn/', definition: '市中心', example: 'The downtown area is full of shops, restaurants, and theaters.' },
    { word: 'suburb', emoji: '🏡', phonetic: '/ˈsʌbɜːrb/', definition: '郊区', example: 'Many families prefer to live in the suburbs where it\'s quieter.' },
    { word: 'avenue', emoji: '🛣️', phonetic: '/ˈævənuː/', definition: '大道', example: 'Fifth Avenue is a famous shopping street in New York.' },
    { word: 'crossroad', emoji: '🚦', phonetic: '/ˈkrɒsroʊd/', definition: '十字路口', example: 'Be careful when you are at a busy crossroad.' },
    { word: 'square', emoji: '⛲', phonetic: '/skweər/', definition: '广场', example: 'People gathered in the town square for the festival.' },
    { word: 'crosswalk', emoji: '🚶', phonetic: '/ˈkrɒswɔːk/', definition: '人行横道', example: 'Always use the crosswalk to cross the street safely.' },
    { word: 'tunnel', emoji: '🚇', phonetic: '/ˈtʌnl/', definition: '隧道', example: 'The train goes through a long tunnel under the mountain.' },
    { word: 'nightlife', emoji: '🌃', phonetic: '/ˈnaɪtlaɪf/', definition: '夜生活', example: 'This city is known for its vibrant nightlife with many bars and clubs.' },
  ],
};