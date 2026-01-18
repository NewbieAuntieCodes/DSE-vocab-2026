
import React from 'react';
import { WordList, Word } from '../types';

export const word_attend: Word = { 
  word: 'attend', 
  emoji: '🏫',
  phonetic: '/əˈtend/', 
  definition: '出席；参加', 
  example: 'All students are required to attend the assembly.',
  category: 'basic'
};

export const word_tutorial: Word = { 
  word: 'tutorial', 
  emoji: '💻', 
  phonetic: '/tuːˈtɔːriəl/', 
  definition: '教程；辅导课', 
  example: 'I watched an online tutorial to learn the software.', 
  category: 'advanced' 
};

export const word_tutorial_class: Word = {
  word: 'tutorial class',
  emoji: '📖',
  phonetic: '/tuːˈtɔːriəl klæs/',
  definition: '补习班；辅导课',
  example: 'Many students attend tutorial classes after school.',
  category: 'basic'
};

export const word_gifted: Word = { 
  word: 'gifted', 
  emoji: '🎁',
  phonetic: '/ˈɡɪftɪd/', 
  definition: '有天赋的；天才的', 
  example: 'He is a gifted musician.',
  category: 'advanced'
};

export const word_deal_with: Word = { 
  word: 'deal with', 
  emoji: '🤝', 
  phonetic: '/diːl wɪð/', 
  definition: '处理；应付', 
  example: 'Students need to learn how to deal with stress.',
  category: 'basic'
};

export const word_stay_organized: Word = {
  word: 'stay organized',
  emoji: '📂',
  phonetic: '/steɪ ˈɔːrɡənaɪzd/',
  definition: '保持井井有条',
  example: 'Using a planner helps me stay organized during exams.',
  category: 'advanced'
};

export const word_todo_list: Word = {
  word: 'to-do list',
  emoji: '📝',
  phonetic: '/tuː duː lɪst/',
  definition: '待办事项清单',
  example: 'I check my to-do list every morning to prioritize tasks.',
  category: 'basic'
};

export const word_time_limit: Word = {
  word: 'time limit',
  emoji: '⏳',
  phonetic: '/taɪm ˈlɪmɪt/',
  definition: '时间限制',
  example: 'There is a 30-minute time limit for the writing task.',
  category: 'basic'
};

export const word_benefit_from: Word = {
  word: 'benefit from',
  emoji: '📈',
  phonetic: '/ˈbenɪfɪt frəm/',
  definition: '受益于',
  example: 'Students can benefit from participating in extracurricular activities.',
  category: 'advanced'
};

export const word_self_esteem: Word = {
  word: 'self-esteem',
  emoji: '✨',
  phonetic: '/ˌself ɪˈstiːm/',
  definition: '自尊心',
  example: 'Positive feedback can help boost a student\'s self-esteem.',
  category: 'advanced'
};

export const word_tutor: Word = {
  word: 'tutor',
  emoji: '🧑‍🏫',
  phonetic: '/ˈtuːtər/',
  definition: '导师；家庭教师',
  example: 'My parents hired a tutor to help me with my math.',
  category: 'basic'
};

export const word_weakness: Word = {
  word: 'weakness',
  emoji: '📉',
  phonetic: '/ˈwiːknəs/',
  definition: '弱点；劣势',
  example: 'Public speaking has always been my greatest weakness.',
  category: 'basic'
};

export const word_receive: Word = {
  word: 'receive',
  emoji: '📥',
  phonetic: '/rɪˈsiːv/',
  definition: '收到；接收',
  example: 'Did you receive my email?',
  category: 'basic'
};

export const word_feedback: Word = {
  word: 'feedback',
  emoji: '💬',
  phonetic: '/ˈfiːdbæk/',
  definition: '反馈意见',
  example: 'We received a lot of positive feedback from our customers.',
  category: 'basic'
};

export const word_schedule: Word = {
  word: 'schedule',
  emoji: '🗓️',
  phonetic: '/ˈskedʒuːl/',
  definition: '日程表；计划',
  example: 'What\'s your schedule for next week?',
  category: 'basic'
};

export const word_relieve_stress: Word = {
  word: 'relieve stress',
  emoji: '😌',
  phonetic: '/rɪˈliːv stres/',
  definition: '缓解压力',
  example: 'Listening to music is a great way to relieve stress.',
  category: 'basic'
};

export const word_recharge: Word = {
  word: 'recharge',
  emoji: '🔋',
  phonetic: '/ˌriːˈtʃɑːrdʒ/',
  definition: '充电；恢复精力',
  example: 'I need a weekend getaway to recharge my batteries.',
  category: 'basic'
};

export const word_cope_with: Word = {
  word: 'cope with',
  emoji: '🧘',
  phonetic: '/koʊp wɪð/',
  definition: '对付；应付（困难）',
  example: 'He is learning new ways to cope with his workload.',
  category: 'advanced'
};

export const word_study_tips: Word = {
  word: 'study tips',
  emoji: '💡',
  phonetic: '/ˈstʌdi tɪps/',
  definition: '学习技巧',
  example: 'Can you share some study tips for the upcoming exams?',
  category: 'basic'
};

export const word_study_breaks: Word = {
  word: 'study breaks',
  emoji: '☕',
  phonetic: '/ˈstʌdi breɪks/',
  definition: '学习休息时间',
  example: 'Taking short study breaks can help you stay focused.',
  category: 'basic'
};

export const word_skip_class: Word = {
  word: 'skip class',
  emoji: '🏃‍♂️',
  phonetic: '/skɪp klæs/',
  definition: '逃课',
  example: 'It is not a good idea to skip class regularly.',
  category: 'basic'
};

export const learningWordList: WordList = {
  id: 'dse-learning',
  title: 'DSE口语 - 学习类',
  description: '讨论学习、压力与放松相关话题的词汇。',
  illustration: () => null,
  theme: 'learn',
  category: 'dse',
  emoji: '📚',
  words: [
    word_tutorial,
    { word: 'literacy', emoji: '📖', phonetic: '/ˈlɪtərəsi/', definition: '读写能力', example: 'The campaign aims to improve adult literacy.', category: 'advanced' },
    word_recharge,
    { word: 'pressure', emoji: '🏋️', phonetic: '/ˈpreʃər/', definition: '压力', example: 'Students are under a lot of pressure to perform well.', category: 'basic' },
    { word: 'relaxation', emoji: '🧘', phonetic: '/ˌriːlækˈseɪʃn/', definition: '放松；松弛', example: 'Yoga is a great form of relaxation for the mind and body.', category: 'basic' },
    word_attend,
    word_schedule,
    { word: 'talent', emoji: '✨', phonetic: '/ˈtælənt/', definition: '天赋；才能', example: 'She has a great talent for music.', category: 'advanced' },
    word_gifted,
    { word: 'talented', emoji: '🌟', phonetic: '/ˈtæləntɪd/', definition: '有才能的；多才多艺的', example: 'She is a very talented painter.', category: 'advanced' },
    { word: 'academic', emoji: '🎓', phonetic: '/ˌækəˈdemɪk/', definition: '学术的；学院的', example: 'Her academic performance has been excellent.', category: 'advanced' },
    { word: 'grades', emoji: '📝', phonetic: '/ɡreɪdz/', definition: '成绩；等级', example: 'He is working hard to improve his grades.', category: 'basic' },
    { word: 'scores', emoji: '💯', phonetic: '/skɔːrz/', definition: '分数', example: 'The final scores for the exam will be posted tomorrow.', category: 'basic' },
    word_feedback,
    word_receive,
    { word: 'relieve', emoji: '😌', phonetic: '/rɪˈliːv/', definition: '减轻；解除', example: 'This medicine will help relieve the pain.', category: 'basic' },
    { word: 'stress', emoji: '🤯', phonetic: '/stres/', definition: '压力；紧张', example: 'I\'m feeling a lot of stress from my exams.', category: 'basic' },
    { word: 'broaden', emoji: '🌍', phonetic: '/ˈbrɔːdn/', definition: '拓宽；使变宽', example: 'Travel can help to broaden your horizons.', category: 'advanced' },
    { word: 'horizon', emoji: '🌅', phonetic: '/həˈraɪzn/', definition: '地平线；眼界', example: 'Studying abroad expanded my intellectual horizons.', category: 'advanced' },
    { word: 'knowledge', emoji: '🧠', phonetic: '/ˈnɒlɪdʒ/', definition: '知识', example: 'He has a wide knowledge of history.', category: 'advanced' },
    { word: 'extracurricular', emoji: '🎨', phonetic: '/ˌekstrəkəˈrɪkjələr/', definition: '课外的', example: 'She participates in many extracurricular activities, such as debate club and volleyball.', category: 'advanced' },
    { word: 'extracurriculum', emoji: '🏀', phonetic: '/ˌekstrəkəˈrɪkjələm/', definition: '课外课程；课外活动', example: 'The school offers a rich extracurriculum to develop students\' interests.', category: 'advanced' },
    { word: 'manage time', emoji: '⏰', phonetic: '/ˈmænɪdʒ taɪm/', definition: '管理时间', example: 'It is important for students to learn how to manage their time effectively.', category: 'basic' },
    { word: 'time management', emoji: '⏳', phonetic: '/taɪm ˈmænɪdʒmənt/', definition: '时间管理', example: 'Good time management skills are essential for success in university.', category: 'basic' },
    { word: 'online learning', emoji: '💻', phonetic: '/ˈɒnlaɪn ˈlɜːrnɪŋ/', definition: '在线学习', example: 'Online learning has become more popular in recent years.', category: 'basic' },
    { word: 'efficient', emoji: '⚡️', phonetic: '/ɪˈfɪʃnt/', definition: '有效率的', example: 'We need a more efficient way to handle these tasks.', category: 'advanced' },
    { word: 'efficiency', emoji: '⚙️', phonetic: '/ɪ|ˈfɪʃnsi/', definition: '效率', example: 'The new system has greatly improved the efficiency of our work.', category: 'advanced' },
    { word: 'lifestyle', emoji: '🏃‍♀️', phonetic: '/ˈlaɪfstaɪl/', definition: '生活方式', example: 'A healthy lifestyle includes a balanced diet and regular exercise.', category: 'basic' },
    { word: 'reduce stress', emoji: '🧘‍♂️', phonetic: '/rɪˈdjuːs stres/', definition: '减轻压力', example: 'Listening to music is a good way to reduce stress.', category: 'basic' },
    word_deal_with,
    { word: 'focus', emoji: '🎯', phonetic: '/ˈfoʊkəs/', definition: '集中注意力', example: 'It\'s hard to focus on my studies with all this noise.', category: 'basic' },
    { word: 'attitude', emoji: '😊', phonetic: '/ˈætɪtjuːd/', definition: '态度', example: 'A positive attitude is important for success in learning.', category: 'basic' },
    word_weakness,
    word_tutor,
    word_cope_with,
    word_study_tips,
    word_study_breaks,
    word_skip_class
  ],
};
