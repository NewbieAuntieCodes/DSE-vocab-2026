
import React from 'react';
import { WordList } from '../types';

export const societyWordList: WordList = {
  id: 'dse-society',
  title: 'DSE口语 - 社会类',
  description: '探讨歧视、犯罪、贫富差距、人口政策及社会道德等核心议题。',
  illustration: () => null,
  theme: 'learn',
  category: 'dse',
  emoji: '🌍',
  words: [
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
      word: 'gender pay gap',
      emoji: '💸',
      phonetic: '/ˈdʒendər peɪ ɡæp/',
      definition: '性别薪酬差距',
      example: 'The government is taking steps to close the gender pay gap.',
      category: 'advanced'
    },
    {
      group: '歧视与平等',
      word: 'ethnic minority group',
      emoji: '🌍',
      phonetic: '/ˈeθnɪk maɪˈnɒrəti ɡruːp/',
      definition: '少数族裔群体',
      example: 'The festival celebrates the diverse cultures of ethnic minority groups.',
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
      word: 'glass ceiling',
      emoji: '🔨',
      phonetic: '/ɡlæs ˈsiːlɪŋ/',
      definition: '玻璃天花板（无形障碍）',
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
    {
      group: '歧视与平等',
      word: 'social inclusion',
      emoji: '🔗',
      phonetic: '/ˈsoʊʃl ɪnˈkluːʒn/',
      definition: '社会包容/融合',
      example: 'Promoting social inclusion is vital for a healthy, unified community.',
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
    {
      group: '犯罪与法律',
      word: 'cybercrime',
      emoji: '💻⚠️',
      phonetic: '/ˈsaɪbərkraɪm/',
      definition: '网络犯罪',
      example: 'Cybercrime has become a significant threat in the digital age.',
      category: 'basic'
    },
    {
      group: '犯罪与法律',
      word: 'white-collar crime',
      emoji: '👔💸',
      phonetic: '/ˌwaɪt ˈkɑːlər kraɪm/',
      definition: '白领犯罪/经济犯罪',
      example: 'White-collar crime, such as fraud, can damage the entire economy.',
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
      word: 'public safety',
      emoji: '🚓',
      phonetic: '/ˈpʌblɪk ˈseɪfti/',
      definition: '公共安全',
      example: 'The police are responsible for maintaining public safety.',
      category: 'basic'
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
      word: 'minimum wage',
      emoji: '💴',
      phonetic: '/ˈmɪnɪməm weɪdʒ/',
      definition: '最低工资',
      example: 'Raising the minimum wage can help improve living standards.',
      category: 'basic'
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
      word: 'housing crisis',
      emoji: '🏠🆘',
      phonetic: '/ˈhaʊzɪŋ ˈkraɪsɪs/',
      definition: '住房危机',
      example: 'The government needs urgent measures to tackle the housing crisis.',
      category: 'basic'
    },
    {
      group: '贫富差距与住房',
      word: 'affordable housing',
      emoji: '🏘️✅',
      phonetic: '/əˈfɔːrdəbl ˈhaʊzɪŋ/',
      definition: '可负担住房',
      example: 'There is a high demand for affordable housing in urban areas.',
      category: 'basic'
    },
    {
      group: '贫富差距与住房',
      word: 'cost of living',
      emoji: '💸',
      phonetic: '/kɒst əv ˈlɪvɪŋ/',
      definition: '生活成本',
      example: 'The high cost of living is a burden for many young adults.',
      category: 'basic'
    },

    // --- 退休与老龄化 (Retirement & Aging) ---
    {
      group: '退休与老龄化',
      word: 'aging population',
      emoji: '👴👵',
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
      word: 'retirement age',
      emoji: '📅',
      phonetic: '/rɪˈtaɪərmənt eɪdʒ/',
      definition: '退休年龄',
      example: 'Some people suggest extending the mandatory retirement age.',
      category: 'basic'
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
      word: 'silver economy',
      emoji: '👵💰',
      phonetic: '/ˈsɪlvər ɪˈkɒnəmi/',
      definition: '银发经济',
      example: 'Companies are developing products to cater to the silver economy.',
      category: 'advanced'
    },

    // --- 移民与融合 (Immigration & Integration) ---
    {
      group: '移民与融合',
      word: 'immigrant',
      emoji: '🧳',
      phonetic: '/ˈɪmɪɡrənt/',
      definition: '移民',
      example: 'Immigrants contribute to the cultural diversity of the city.',
      category: 'basic'
    },
    {
      group: '移民与融合',
      word: 'brain drain',
      emoji: '🧠🏃',
      phonetic: '/breɪn dreɪn/',
      definition: '人才流失',
      example: 'The country is worried about the brain drain of young doctors.',
      category: 'advanced'
    },
    {
      group: '移民与融合',
      word: 'social integration',
      emoji: '🤝',
      phonetic: '/ˈsoʊʃl ˌɪntɪˈɡreɪʃn/',
      definition: '社会融合',
      example: 'Language classes help newcomers with their social integration.',
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
      emoji: '😡🚫',
      phonetic: '/ˌzenəˈfoʊbiə/',
      definition: '仇外心理',
      example: 'Xenophobia can lead to social tension and conflict.',
      category: 'advanced'
    },
    {
      group: '移民与融合',
      word: 'expatriate',
      emoji: '🌍✈️',
      phonetic: '/ˌeksˈpeɪtriət/',
      definition: '外籍人士 (Expats)',
      example: 'Hong Kong has a large community of expatriates.',
      category: 'basic'
    },

    // --- 社区、道德与责任 (Ethics & Responsibility) ---
    {
      group: '社区、道德与责任',
      word: 'social responsibility',
      emoji: '🏢❤️',
      phonetic: '/ˈsoʊʃl rɪˌspɒnsəˈbɪləti/',
      definition: '社会责任',
      example: 'Corporate social responsibility (CSR) is important for big brands.',
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
      word: 'volunteerism',
      emoji: '🙋‍♂️',
      phonetic: '/ˌvɒlənˈtɪərɪzəm/',
      definition: '志愿服务精神',
      example: 'Volunteerism can strengthen the bonds within a community.',
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
      word: 'humanitarian aid',
      emoji: '📦🆘',
      phonetic: '/hjuːˌmænɪˈteriən eɪd/',
      definition: '人道主义援助',
      example: 'International organizations provide humanitarian aid to war zones.',
      category: 'advanced'
    }
  ],
};
