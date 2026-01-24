import { WordList, Word } from '../types';
import { word_privacy } from './entertainment';
import { word_cybercrime } from './society';
import { word_online_learning } from './learning';
import { word_access } from './general';

// --- 人工智能与创新 (AI & Innovation) ---
export const word_ai: Word = {
  group: '人工智能与创新',
  category: 'basic',
  word: 'artificial intelligence (AI)',
  emoji: '🤖',
  phonetic: '/ˌɑːrtɪˈfɪʃl ɪnˈtelɪdʒəns/',
  definition: '人工智能',
  example: 'Artificial intelligence is changing the way we live and work.'
};

export const word_robot: Word = {
  group: '人工智能与创新',
  category: 'basic',
  word: 'robot',
  emoji: '🦾',
  phonetic: '/ˈroʊbɑːt/',
  definition: '机器人',
  example: 'Many factories now use robots to perform repetitive tasks.'
};

export const word_machine_learning: Word = {
  group: '人工智能与创新',
  category: 'basic', // 调整为基础词汇
  word: 'machine learning',
  emoji: '🧠',
  phonetic: '/məˈʃiːn ˈlɜːrnɪŋ/',
  definition: '机器学习',
  example: 'Machine learning allows computers to learn from data without being explicitly programmed.'
};

export const word_automation: Word = {
  group: '人工智能与创新',
  category: 'advanced',
  word: 'automation',
  emoji: '⚙️',
  phonetic: '/ˌɔːtəˈmeɪʃn/',
  definition: '自动化',
  example: 'The automation of the warehouse has significantly increased efficiency.'
};

export const word_groundbreaking: Word = {
  group: '人工智能与创新',
  category: 'advanced',
  word: 'groundbreaking',
  emoji: '🌋',
  phonetic: '/ˈɡraʊndbreɪkɪŋ/',
  definition: '开创性的；突破性的',
  example: 'The researchers made a groundbreaking discovery in cancer treatment.'
};

export const word_state_of_the_art: Word = {
  group: '人工智能与创新',
  category: 'advanced',
  word: 'state-of-the-art',
  emoji: '🏙️',
  phonetic: '/ˌsteɪt əv ði ˈɑːrt/',
  definition: '最先进的；世界一流的',
  example: 'The new hospital is equipped with state-of-the-art medical technology.'
};

export const word_cutting_edge: Word = {
  group: '人工智能与创新',
  category: 'advanced',
  word: 'cutting-edge',
  emoji: '🔪',
  phonetic: '/ˌkʌtɪŋ ˈedʒ/',
  definition: '尖端的；领先的',
  example: 'Our company is at the cutting-edge of renewable energy research.'
};

export const word_algorithm: Word = {
  group: '人工智能与创新',
  category: 'advanced',
  word: 'algorithm',
  emoji: '🧬',
  phonetic: '/ˈælɡərɪðəm/',
  definition: '算法',
  example: 'The social media feed is controlled by a complex algorithm.'
};

// --- 数字生活与社交 (Digital Life & Social) ---
export const word_smartphone: Word = {
  group: '数字生活与社交',
  category: 'basic',
  word: 'smartphone',
  emoji: '📱',
  phonetic: '/ˈsmɑːrtfoʊn/',
  definition: '智能手机',
  example: 'Almost everyone carries a smartphone these days.'
};

export const word_social_media: Word = {
  group: '数字生活与社交',
  category: 'basic',
  word: 'social media',
  emoji: '🌐',
  phonetic: '/ˈsoʊʃl ˈmiːdiə/',
  definition: '社交媒体',
  example: 'Young people spend several hours a day on social media.'
};

export const word_app: Word = {
  group: '数字生活与社交',
  category: 'basic',
  word: 'app (application)',
  emoji: '📲',
  phonetic: '/æp/',
  definition: '应用程序',
  example: 'I downloaded a new app to help me track my fitness.'
};

export const word_video_call: Word = {
  group: '数字生活与社交',
  category: 'basic',
  word: 'video call',
  emoji: '📹',
  phonetic: '/ˈvɪdioʊ kɔːl/',
  definition: '视频通话',
  example: 'I have a video call with my grandmother every Sunday.'
};

export const word_vr: Word = {
  group: '数字生活与社交',
  category: 'basic',
  word: 'virtual reality (VR)',
  emoji: '🥽',
  phonetic: '/ˈvɜːrtʃuəl riˈæləti/',
  definition: '虚拟现实',
  example: 'Virtual reality provides an immersive gaming experience.'
};

export const word_high_tech: Word = {
  group: '数字生活与社交',
  category: 'basic',
  word: 'high-tech',
  emoji: '🏗️',
  phonetic: '/ˌhaɪ ˈtek/',
  definition: '高科技的',
  example: 'The new office building has many high-tech features.'
};

export const word_gadget: Word = {
  group: '数字生活与社交',
  category: 'advanced', // 调整为进阶词汇
  word: 'gadget',
  emoji: '⌚',
  phonetic: '/ˈɡædʒɪt/',
  definition: '小配件；小玩意',
  example: 'He loves buying the latest kitchen gadgets.'
};

export const word_tech_savvy: Word = {
  group: '数字生活与社交',
  category: 'advanced',
  word: 'tech-savvy',
  emoji: '🧙‍♂️',
  phonetic: '/ˌtek ˈsævi/',
  definition: '精通科技的',
  example: 'The younger generation is generally more tech-savvy than their parents.'
};

export const word_digital_native: Word = {
  group: '数字生活与社交',
  category: 'advanced',
  word: 'digital native',
  emoji: '👶💻',
  phonetic: '/ˌdɪdʒɪtl ˈneɪtɪv/',
  definition: '数字原住民（出生在数字时代的人）',
  example: 'As digital natives, they find it natural to use tablets and computers.'
};

export const word_ar: Word = {
  group: '数字生活与社交',
  category: 'advanced',
  word: 'augmented reality (AR)',
  emoji: '🕶️',
  phonetic: '/ɔːɡˌmentɪd riˈæləti/',
  definition: '增强现实',
  example: 'Pokemon Go is a famous example of augmented reality.'
};

// --- 网络安全与隐私 (Cybersecurity & Privacy) ---
export const word_hacker: Word = {
  group: '网络安全与隐私',
  category: 'advanced', // 调整为进阶词汇
  word: 'hacker',
  emoji: '👤💻',
  phonetic: '/ˈhækər/',
  definition: '黑客',
  example: 'A hacker managed to gain access to the company\'s database.'
};

export const word_password: Word = {
  group: '网络安全与隐私',
  category: 'basic',
  word: 'password',
  emoji: '🔑',
  phonetic: '/ˈpæswɜːrd/',
  definition: '密码',
  example: 'You should use a strong password to protect your account.'
};

export const word_cybersecurity: Word = {
  group: '网络安全与隐私',
  category: 'basic', // 调整为基础词汇
  word: 'cybersecurity',
  emoji: '🛡️',
  phonetic: '/ˌsaɪbərsɪˈkjʊərəti/',
  definition: '网络安全',
  example: 'Cybersecurity is a growing concern for businesses and governments.'
};

export const word_encryption: Word = {
  group: '网络安全与隐私',
  category: 'advanced',
  word: 'encryption',
  emoji: '🔒',
  phonetic: '/ɪnˈkrɪpʃn/',
  definition: '加密',
  example: 'All sensitive data is protected by high-level encryption.'
};

export const word_biometric: Word = {
  group: '网络安全与隐私',
  category: 'advanced',
  word: 'biometric',
  emoji: '🧬',
  phonetic: '/ˌbaɪoʊˈmetrɪk/',
  definition: '生物识别的',
  example: 'Biometric security, like fingerprint scanning, is becoming common.'
};

export const word_facial_recognition: Word = {
  group: '网络安全与隐私',
  category: 'advanced',
  word: 'facial recognition',
  emoji: '🎭',
  phonetic: '/ˈfeɪʃl ˌrekəɡˈnɪʃn/',
  definition: '面部识别',
  example: 'The airport uses facial recognition for faster immigration checks.'
};

// --- 科技影响与未来 (Impact & Future) ---
export const word_update: Word = {
  group: '科技影响与未来',
  category: 'basic',
  word: 'update',
  emoji: '🔄',
  phonetic: '/ˌʌpˈdeɪt/',
  definition: '更新',
  example: 'You need to update your software to fix the security bug.'
};

export const word_screen_time: Word = {
  group: '科技影响与未来',
  category: 'basic',
  word: 'screen time',
  emoji: '📺',
  phonetic: '/ˈskriːn taɪm/',
  definition: '屏幕使用时间',
  example: 'Parents should limit their children\'s daily screen time.'
};

export const word_viral: Word = {
  group: '科技影响与未来',
  category: 'basic',
  word: 'viral',
  emoji: '📈',
  phonetic: '/ˈvaɪrəl/',
  definition: '病毒式传播的；爆红的',
  example: 'The funny cat video went viral within hours.'
};

export const word_user_friendly: Word = {
  group: '科技影响与未来',
  category: 'basic',
  word: 'user-friendly',
  emoji: '🤝',
  phonetic: '/ˌjuːzər ˈfrendli/',
  definition: '用户友好的；操作简单的',
  example: 'The new operating system is much more user-friendly.'
};

export const word_innovative: Word = {
  group: '科技影响与未来',
  category: 'advanced',
  word: 'innovative',
  emoji: '💡',
  phonetic: '/ˈɪnəveɪtɪv/',
  definition: '创新的',
  example: 'The company is known for its innovative approach to design.'
};

export const word_revolutionize: Word = {
  group: '科技影响与未来',
  category: 'advanced',
  word: 'revolutionize',
  emoji: '🌋',
  phonetic: '/ˌrevəˈluːʃənaɪz/',
  definition: '彻底改变',
  example: 'The internet has revolutionized the way we share information.'
};

export const word_obsolete: Word = {
  group: '科技影响与未来',
  category: 'advanced',
  word: 'obsolete',
  emoji: '📻',
  phonetic: '/ˌɒbsəˈliːt/',
  definition: '过时的；淘汰的',
  example: 'Many traditional skills are becoming obsolete in the digital age.'
};

export const word_information_overload: Word = {
  group: '科技影响与未来',
  category: 'advanced',
  word: 'information overload',
  emoji: '🤯',
  phonetic: '/ˌɪnfərˈmeɪʃn ˌoʊvərˈloʊd/',
  definition: '信息过载',
  example: 'We often experience information overload due to the 24-hour news cycle.'
};

export const word_netiquette: Word = {
  group: '科技影响与未来',
  category: 'advanced',
  word: 'netiquette',
  emoji: '🧐',
  phonetic: '/ˈnetɪket/',
  definition: '网络礼仪',
  example: 'It is important to follow basic netiquette when posting in forums.'
};

export const word_sophisticated: Word = {
  group: '科技影响与未来',
  category: 'advanced',
  word: 'sophisticated',
  emoji: '🎻',
  phonetic: '/səˈfɪstɪkeɪtɪd/',
  definition: '复杂的；高级的',
  example: 'The hackers used sophisticated software to bypass the security system.'
};

export const word_breakthrough: Word = {
  group: '科技影响与未来',
  category: 'advanced',
  word: 'breakthrough',
  emoji: '🚪',
  phonetic: '/ˈbreɪkθruː/',
  definition: '重大突破',
  example: 'Scientists are hoping for a breakthrough in Alzheimer\'s research.'
};

export const technologyWordList: WordList = {
  id: 'dse-technology',
  title: 'DSE口语 - 科技类',
  description: '探讨人工智能、社交媒体、网络安全及科技对生活的影响。',
  illustration: () => null,
  theme: 'learn',
  category: 'dse',
  emoji: '💻',
  words: [
    // --- 人工智能与创新 ---
    word_ai,
    word_robot,
    word_machine_learning,
    { ...word_access, group: '人工智能与创新' } as Word,
    word_automation,
    word_algorithm,
    word_cutting_edge,
    word_groundbreaking,
    word_state_of_the_art,

    // --- 数字生活与社交 ---
    word_smartphone,
    word_social_media,
    word_app,
    word_video_call,
    word_vr,
    word_high_tech,
    { ...word_online_learning, group: '数字生活与社交' } as Word,
    word_gadget,
    word_digital_native,
    word_tech_savvy,
    word_ar,

    // --- 网络安全与隐私 ---
    word_password,
    { ...word_privacy, group: '网络安全与隐私' } as Word,
    { ...word_cybercrime, group: '网络安全与隐私' } as Word,
    word_cybersecurity,
    word_hacker,
    word_facial_recognition,
    word_encryption,
    word_biometric,

    // --- 科技影响与未来 ---
    word_update,
    word_screen_time,
    word_viral,
    word_user_friendly,
    word_breakthrough,
    word_innovative,
    word_revolutionize,
    word_obsolete,
    word_information_overload,
    word_netiquette,
    word_sophisticated,
  ],
};