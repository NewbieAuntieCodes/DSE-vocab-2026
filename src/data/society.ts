
import React from 'react';
import { WordList, Word } from '../types';

export const word_community: Word = { 
  word: 'community', 
  emoji: '🏘️', 
  phonetic: '/kəˈmjuːnəti/', 
  definition: '社区', 
  example: 'Volunteering helps to build a strong community.',
  category: 'basic'
};

// Exported for use in other word lists (e.g. technology.ts)
export const word_cybercrime: Word = {
  group: '犯罪与法律',
  word: 'cybercrime',
  emoji: '💻⚠️',
  phonetic: '/ˈsaɪbərkraɪm/',
  definition: '网络犯罪',
  example: 'Cybercrime has become a significant threat in the digital age.',
  category: 'basic'
};

export const societyWordList: WordList = {
  id: 'dse-society',
  title: 'DSE口语 - 社会类',
  description: '深度探讨歧视、犯罪、贫富差距、人口政策、移民融入及社会道德等核心议题。',
  illustration: () => null,
  theme: 'learn',
  category: 'dse',
  emoji: '🌍',
  words: [
    word_community,
    // --- 歧视与平等 (Discrimination & Equality) ---
    {
      group: '歧视与平等',
      word: 'discrimination',
      emoji: '🚫',
      phonetic: '/dɪˌskrɪmɪˈneɪʃn/',
      definition: '歧视',
      example: 'Discrimination based on age is illegal in many workplaces.',
      category: 'basic'
    },
    {
      group: '歧视与平等',
      word: 'gender discrimination',
      emoji: '🚻',
      phonetic: '/ˈdʒendər dɪˌskrɪmɪˈneɪʃn/',
      definition: '性别歧视',
      example: 'Gender discrimination in hiring processes remains a challenge.',
      category: 'basic'
    },
    {
      group: '歧视与平等',
      word: 'disability discrimination',
      emoji: '♿',
      phonetic: '/ˌdɪsəˈbɪləti dɪˌskrɪmɪˈneɪʃn/',
      definition: '残疾歧视',
      example: 'The law protects people from disability discrimination at school or work.',
      category: 'advanced'
    },
    {
      group: '歧视与平等',
      word: 'equal opportunities',
      emoji: '⚖️',
      phonetic: '/ˈiːkwəl ˌɒpərˈtuːnətiz/',
      definition: '平等机会',
      example: 'We must ensure equal opportunities for all members of society.',
      category: 'basic'
    },
    {
      group: '歧视与平等',
      word: 'racial prejudice',
      emoji: '✊',
      phonetic: '/ˈreɪʃl ˈpredʒudɪs/',
      definition: '种族偏见',
      example: 'Education is the most effective tool to combat racial prejudice.',
      category: 'advanced'
    },
    {
      group: '歧视与平等',
      word: 'stereotypes',
      emoji: '🏷️',
      phonetic: '/ˈsteriətaɪps/',
      definition: '刻板印象',
      example: 'We should avoid judging people based on cultural stereotypes.',
      category: 'basic'
    },
    {
      group: '歧视与平等',
      word: 'unfair treatment',
      emoji: '😠',
      phonetic: '/ˌʌnˈfer ˈtriːtmənt/',
      definition: '不公平待遇',
      example: 'Many workers complained about the unfair treatment they received.',
      category: 'basic'
    },
    {
      group: '歧视与平等',
      word: 'glass ceiling',
      emoji: '🔨',
      phonetic: '/ɡlæs ˈsiːlɪŋ/',
      definition: '玻璃天花板（职场无形障碍）',
      example: 'Many women still face a glass ceiling when seeking senior positions.',
      category: 'advanced'
    },
    {
      group: '歧视与平等',
      word: 'marginalized groups',
      emoji: '🏚️',
      phonetic: '/ˈmɑːrdʒɪnəlaɪzd ɡruːps/',
      definition: '边缘群体/弱势群体',
      example: 'Social policies should aim to support marginalized groups in our city.',
      category: 'advanced'
    },

    // --- 犯罪与法律 (Crime & Law) ---
    {
      group: '犯罪与法律',
      word: 'crime rate',
      emoji: '📈',
      phonetic: '/kraɪm reɪt/',
      definition: '犯罪率',
      example: 'Low crime rates make the city a safer place to live.',
      category: 'basic'
    },
    {
      group: '犯罪与法律',
      word: 'juvenile delinquency',
      emoji: '👦🚫',
      phonetic: '/ˈdʒuːvənaɪl dɪˈlɪŋkwənsi/',
      definition: '青少年犯罪',
      example: 'Early intervention can help prevent juvenile delinquency.',
      category: 'advanced'
    },
    word_cybercrime,
    {
      group: '犯罪与法律',
      word: 'recidivism',
      emoji: '🔄',
      phonetic: '/rɪˈsɪdɪvɪzəm/',
      definition: '累犯/再次犯罪',
      example: 'Rehabilitation programs aim to reduce the rate of recidivism.',
      category: 'advanced'
    },
    {
      group: '犯罪与法律',
      word: 'law-abiding citizen',
      emoji: '👮',
      phonetic: '/ˈlɔː əˌbaɪdɪŋ ˈsɪtɪzn/',
      definition: '守法公民',
      example: 'Every law-abiding citizen contributes to social stability.',
      category: 'advanced'
    },
    {
      group: '犯罪与法律',
      word: 'rehabilitation',
      emoji: '🌱',
      phonetic: '/ˌriːəˌbɪlɪˈteɪʃn/',
      definition: '康复；改过自新',
      example: 'Rehabilitation programs help former prisoners rejoin society.',
      category: 'advanced'
    },
    {
      group: '犯罪与法律',
      word: 'community service',
      emoji: '🧹',
      phonetic: '/kəˈmjuːnəti ˈsɜːrvɪs/',
      definition: '社区服务（常作为轻微犯罪惩罚）',
      example: 'The judge sentenced the teenager to 50 hours of community service.',
      category: 'basic'
    },
    {
      group: '犯罪与法律',
      word: 'deterrent',
      emoji: '🛑',
      phonetic: '/dɪˈtɜːrənt/',
      definition: '威慑力/震慑物',
      example: 'Cameras act as a deterrent to potential shoplifters.',
      category: 'advanced'
    },

    // --- 贫富差距与住房 (Wealth Gap & Housing) ---
    {
      group: '贫富差距与住房',
      word: 'wealth gap',
      emoji: '⚖️💰',
      phonetic: '/welθ ɡæp/',
      definition: '贫富差距',
      example: 'The widening wealth gap is a major challenge for modern cities.',
      category: 'basic'
    },
    {
      group: '贫富差距与住房',
      word: 'social mobility',
      emoji: '🪜',
      phonetic: '/ˈsoʊʃl moʊˈbɪləti/',
      definition: '社会流动性',
      example: 'Quality education improves social mobility for the younger generation.',
      category: 'advanced'
    },
    {
      group: '贫富差距与住房',
      word: 'intergenerational poverty',
      emoji: '📉',
      phonetic: '/ˌɪntərdʒenəˈreɪʃənl ˈpɒvərti/',
      definition: '跨代贫困',
      example: 'Governments strive to break the cycle of intergenerational poverty.',
      category: 'advanced'
    },
    {
      group: '贫富差距与住房',
      word: 'poverty alleviation',
      emoji: '🤲',
      phonetic: '/ˈpɒvərti əˌliːviˈeɪʃn/',
      definition: '扶贫/脱贫',
      example: 'The new policy is designed for long-term poverty alleviation.',
      category: 'advanced'
    },
    {
      group: '贫富差距与住房',
      word: 'subdivided flats',
      emoji: '📦🏠',
      phonetic: '/ˌsʌbdɪˈvaɪdɪd flæts/',
      definition: '劏房',
      example: 'Many low-income families in Hong Kong live in subdivided flats.',
      category: 'advanced'
    },
    {
      group: '贫富差距与住房',
      word: 'public housing estates',
      emoji: '🏢',
      phonetic: '/ˈpʌblɪk ˈhaʊzɪŋ ɪˈsteɪts/',
      definition: '公共屋邨 (公屋)',
      example: 'Public housing estates provide affordable homes for thousands.',
      category: 'basic'
    },
    {
      group: '贫富差距与住房',
      word: 'standard of living',
      emoji: '🛋️',
      phonetic: '/ˈstændərd əv ˈlɪvɪŋ/',
      definition: '生活水平',
      example: 'The overall standard of living has improved significantly over the decade.',
      category: 'basic'
    },
    {
      group: '贫富差距与住房',
      word: 'safety net',
      emoji: '🕸️',
      phonetic: '/ˈseɪfti net/',
      definition: '（社会）安全网',
      example: 'Social welfare acts as a safety net for those who lose their jobs.',
      category: 'advanced'
    },

    // --- 退休与老龄化 (Retirement & Aging) ---
    {
      group: '退休与老龄化',
      word: 'aging population',
      emoji: '👴',
      phonetic: '/ˈeɪdʒɪŋ ˌpɒpjuˈleɪʃn/',
      definition: '人口老化',
      example: 'An aging population leads to a shortage of labor force.',
      category: 'basic'
    },
    {
      group: '退休与老龄化',
      word: 'dependency ratio',
      emoji: '⚖️',
      phonetic: '/dɪˈpendənsi ˈreɪʃioʊ/',
      definition: '扶养比率',
      example: 'A high dependency ratio puts pressure on the working population.',
      category: 'advanced'
    },
    {
      group: '退休与老龄化',
      word: 'mandatory retirement',
      emoji: '📅',
      phonetic: '/ˈmændətɔːri rɪˈtaɪərmənt/',
      definition: '强制退休',
      example: 'There are debates about whether mandatory retirement should be abolished.',
      category: 'advanced'
    },
    {
      group: '退休与老龄化',
      word: 'active aging',
      emoji: '🏃‍♂️👴',
      phonetic: '/ˈæktɪv ˈeɪdʒɪŋ/',
      definition: '积极乐颐年/活跃老化',
      example: 'Active aging encourages elderly people to stay healthy and social.',
      category: 'advanced'
    },
    {
      group: '退休与老龄化',
      word: 'pension scheme',
      emoji: '🏦',
      phonetic: '/ˈpenʃn skiːm/',
      definition: '退休金计划',
      example: 'A reliable pension scheme is essential for post-retirement life.',
      category: 'advanced'
    },
    {
      group: '退休与老龄化',
      word: 'nursing home',
      emoji: '🏥',
      phonetic: '/ˈnɜːrsɪŋ hoʊm/',
      definition: '安老院/疗养院',
      example: 'Quality care in nursing homes is a top priority for families.',
      category: 'basic'
    },
    {
      group: '退休与老龄化',
      word: 'senior citizens',
      emoji: '👵',
      phonetic: '/ˈsiːniər ˈsɪtɪznz/',
      definition: '长者/高龄公民',
      example: 'Public transport offers discounts for senior citizens.',
      category: 'basic'
    },
    {
      group: '退休与老龄化',
      word: 'loneliness',
      emoji: '😔',
      phonetic: '/ˈloʊnlɪnəs/',
      definition: '孤独感',
      example: 'Loneliness among the elderly is a serious social issue.',
      category: 'basic'
    },

    // --- 移民与融合 (Immigration & Integration) ---
    {
      group: '移民与融合',
      word: 'immigrant',
      emoji: '🧳',
      phonetic: '/ˈɪmɪɡrənt/',
      definition: '移民 (人)',
      example: 'Immigrants contribute to the cultural diversity of the city.',
      category: 'basic'
    },
    {
      group: '移民与融合',
      word: 'integrate',
      emoji: '🧩',
      phonetic: '/ˈɪntɪɡreɪt/',
      definition: '融合/融入 (动词)',
      example: 'It can be difficult for new arrivals to integrate into the local community.',
      category: 'advanced'
    },
    {
      group: '移民与融合',
      word: 'social integration',
      emoji: '🤝',
      phonetic: '/ˈsoʊʃl ˌɪntɪˈɡreɪʃn/',
      definition: '社会融合 (名词)',
      example: 'Language classes help newcomers with their social integration.',
      category: 'advanced'
    },
    {
      group: '移民与融合',
      word: 'brain drain',
      emoji: '🧠🏃',
      phonetic: '/breɪn dreɪn/',
      definition: '人才流失',
      example: 'The country is worried about the brain drain of young professionals.',
      category: 'advanced'
    },
    {
      group: '移民与融合',
      word: 'multiculturalism',
      emoji: '🌈',
      phonetic: '/ˌmʌltiˈkʌltʃərəˌlɪzəm/',
      definition: '多元文化主义',
      example: 'The city prides itself on its spirit of multiculturalism.',
      category: 'advanced'
    },
    {
      group: '移民与融合',
      word: 'xenophobia',
      emoji: '😡',
      phonetic: '/ˌzenəˈfoʊbiə/',
      definition: '仇外心理',
      example: 'Xenophobia can lead to social tension and conflict.',
      category: 'advanced'
    },
    {
      group: '移民与融合',
      word: 'push and pull factors',
      emoji: '↔️',
      phonetic: '/pʊʃ ænd pʊl ˈfæktərz/',
      definition: '推拉因素 (导致移民的原因)',
      example: 'Economists study the push and pull factors of global migration.',
      category: 'advanced'
    },
    {
      group: '移民与融合',
      word: 'cultural diversity',
      emoji: '🌍',
      phonetic: '/ˈkʌltʃərəl daɪˈvɜːrsəti/',
      definition: '文化多样性',
      example: 'Cultural diversity enriches our society with new perspectives.',
      category: 'basic'
    },

    // --- 社区、道德与责任 (Ethics & Responsibility) ---
    {
      group: '社区、道德与责任',
      word: 'social responsibility',
      emoji: '🏢❤️',
      phonetic: '/ˈsoʊʃl rɪˌspɒnsəˈbɪləti/',
      definition: '社会责任',
      example: 'Corporate social responsibility (CSR) is important for modern brands.',
      category: 'advanced'
    },
    {
      group: '社区、道德与责任',
      word: 'civic duty',
      emoji: '🗳️',
      phonetic: '/ˈsɪvɪk ˈdjuːti/',
      definition: '公民义务/责任',
      example: 'Voting in elections is a fundamental civic duty.',
      category: 'basic'
    },
    {
      group: '社区、道德与责任',
      word: 'altruism',
      emoji: '🤲',
      phonetic: '/ˈæltruɪzəm/',
      definition: '利他主义',
      example: 'Altruism drives many people to volunteer for charities.',
      category: 'advanced'
    },
    {
      group: '社区、道德与责任',
      word: 'moral compass',
      emoji: '🧭',
      phonetic: '/ˈmɔːrəl ˈkʌmpəs/',
      definition: '道德准则',
      example: 'A strong moral compass helps people make the right decisions.',
      category: 'advanced'
    },
    {
      group: '社区、道德与责任',
      word: 'sense of belonging',
      emoji: '🏠',
      phonetic: '/sens əv bɪˈlɒŋɪŋ/',
      definition: '归属感',
      example: 'Community events help residents develop a sense of belonging.',
      category: 'basic'
    },
    {
      group: '社区、道德与责任',
      word: 'empathy',
      emoji: '❤️',
      phonetic: '/ˈempəθi/',
      definition: '同理心',
      example: 'Empathy allows us to understand the feelings of others.',
      category: 'basic'
    },
    {
      group: '社区、道德与责任',
      word: 'public interest',
      emoji: '📢',
      phonetic: '/ˈpʌblɪk ˈɪntrəst/',
      definition: '公共利益',
      example: 'The government should always act in the public interest.',
      category: 'basic'
    },
    {
      group: '社区、道德与责任',
      word: 'ethical dilemma',
      emoji: '❓',
      phonetic: '/ˈeθɪkl daɪˈlemə/',
      definition: '道德困境/伦理两难',
      example: 'The doctor faced an ethical dilemma regarding the patient\'s care.',
      category: 'advanced'
    }
  ],
};
