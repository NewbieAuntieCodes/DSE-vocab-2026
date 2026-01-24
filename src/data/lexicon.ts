import { Word } from '../types';

// Central lexicon: define each word/phrase once, then reference from topic/unit lists.
// Naming: W_ prefix + snake_case for fast autocomplete and to avoid duplicates.

// --- Skills: Shared Connectors ---
export const W_pros: Word = {
  word: 'pros',
  emoji: '➕',
  phonetic: '/proʊz/',
  definition: '优点；赞成论点',
  example: 'We need to weigh the pros and cons of the new proposal.',
  category: 'basic',
};
export const word_pros = W_pros;

export const W_cons: Word = {
  word: 'cons',
  emoji: '➖',
  phonetic: '/kɒnz/',
  definition: '缺点；反对论点',
  example: 'One of the cons of living in a city is the high cost of living.',
  category: 'basic',
};
export const word_cons = W_cons;

export const W_sum_up: Word = {
  word: 'sum up',
  emoji: '✍️',
  phonetic: '/sʌm ʌp/',
  definition: '（动词短语）总结；归纳',
  example: 'Let me sum up the main points.',
  category: 'basic',
};
export const word_sum_up = W_sum_up;

export const W_summarize: Word = {
  word: 'summarize',
  emoji: '📝',
  phonetic: '/ˈsʌməraɪz/',
  definition: '（正式动词）概述；概括',
  example: 'Could you summarize the main points of the meeting?',
  category: 'advanced',
};
export const word_summarize = W_summarize;

export const W_in_summary: Word = {
  word: 'in summary',
  emoji: '📋',
  phonetic: '/ɪn ˈsʌməri/',
  definition: '（衔接词）总之；总括而言',
  example: 'In summary, the project was a great success.',
  category: 'advanced',
};
export const word_in_summary = W_in_summary;

export const W_to_sum_up: Word = {
  word: 'to sum up',
  emoji: '🔚',
  phonetic: '/tu sʌm ʌp/',
  definition: '（衔接词）总而言之；综上所述',
  example: 'To sum up, everyone has a role to play in environmental protection.',
  category: 'basic',
};
export const word_to_sum_up = W_to_sum_up;

export const W_come_to_an_agreement: Word = {
  word: 'come to an agreement',
  emoji: '🤝',
  phonetic: '/kʌm tu ən əˈɡriːmənt/',
  definition: '达成共识',
  example: 'After a long discussion, they finally came to an agreement.',
  category: 'advanced',
};
export const word_agreement = W_come_to_an_agreement;

export const W_persuade: Word = {
  word: 'persuade',
  emoji: '🗣️',
  phonetic: '/pəˈsweɪd/',
  definition: '说服',
  example: 'It is difficult to persuade people to change their habits.',
  category: 'advanced',
};
export const word_persuade = W_persuade;

export const W_involvement: Word = {
  word: 'involvement',
  emoji: '🙋',
  phonetic: '/ɪnˈvɒlvmənt/',
  definition: '参与；投入',
  example: 'Community involvement is key to the success of this initiative.',
  category: 'advanced',
};
export const word_involvement = W_involvement;

// --- Skills: Unit 3–8 ---
export const W_for_example: Word = {
  word: 'For example',
  emoji: '👉',
  phonetic: '/fɔːr ɪɡˈzæmpl/',
  definition: '（衔接词）例如；比如说',
  example: 'Many countries, for example Sweden, have a high recycling rate.',
  category: 'basic',
};
export const word_for_example = W_for_example;

export const W_for_instance: Word = {
  word: 'For instance',
  emoji: '👉',
  phonetic: '/fɔːr ˈɪnstəns/',
  definition: '（衔接词）例如；举例来说',
  example: 'Some hobbies are very relaxing. For instance, I enjoy painting.',
  category: 'basic',
};
export const word_for_instance = W_for_instance;

export const W_on_the_other_hand: Word = {
  word: 'On the other hand',
  emoji: '↔️',
  phonetic: '/ɒn ði ˈʌðər hænd/',
  definition: '（衔接词）另一方面',
  example: 'Living in the city is exciting. On the other hand, it can be very expensive.',
  category: 'basic',
};
export const word_on_the_other_hand = W_on_the_other_hand;

export const W_similarly: Word = {
  word: 'Similarly',
  emoji: '🤝',
  phonetic: '/ˈsɪmələrli/',
  definition: '（衔接词）同样地；类似地',
  example: 'Cars cause pollution. Similarly, airplanes have a negative environmental impact.',
  category: 'basic',
};
export const word_similarly = W_similarly;

export const W_i_suggest: Word = {
  word: 'I suggest',
  emoji: '💡',
  phonetic: '/aɪ səˈdʒest/',
  definition: '（表达建议）我建议',
  example: 'I suggest we take a short break before continuing.',
  category: 'basic',
};
export const word_i_suggest = W_i_suggest;

export const W_how_about: Word = {
  word: 'How about',
  emoji: '🤔',
  phonetic: '/haʊ əˈbaʊt/',
  definition: '（提出建议）……怎么样？',
  example: 'How about going to the movies tonight?',
  category: 'basic',
};
export const word_how_about = W_how_about;

export const W_i_feel: Word = {
  word: 'I feel',
  emoji: '😊',
  phonetic: '/aɪ fiːl/',
  definition: '（表达感受）我感觉……',
  example: 'I feel very happy about the good news.',
  category: 'basic',
};
export const word_i_feel = W_i_feel;

export const W_it_makes_me_feel: Word = {
  word: 'It makes me feel',
  emoji: '😄',
  phonetic: '/ɪt meɪks mi fiːl/',
  definition: '（表达感受）这让我感觉……',
  example: 'Listening to classical music makes me feel relaxed.',
  category: 'basic',
};
export const word_it_makes_me_feel = W_it_makes_me_feel;

export const W_could_you_explain: Word = {
  word: 'Could you explain',
  emoji: '❓',
  phonetic: '/kʊd ju ɪkˈspleɪn/',
  definition: '（请求解释）你能解释一下吗',
  example: 'Could you explain what you mean by that?',
  category: 'basic',
};
export const word_could_you_explain = W_could_you_explain;

export const W_i_dont_understand: Word = {
  word: "I don't understand",
  emoji: '🤷',
  phonetic: '/aɪ doʊnt ˌʌndərˈstænd/',
  definition: '（请求解释）我不明白',
  example: "I'm sorry, I don't understand the question.",
  category: 'basic',
};
export const word_i_dont_understand = W_i_dont_understand;

export const W_firstly: Word = {
  word: 'Firstly',
  emoji: '1️⃣',
  phonetic: '/ˈfɜːrstli/',
  definition: '（衔接词）首先',
  example: "Firstly, I'd like to thank everyone for coming.",
  category: 'basic',
};
export const word_firstly = W_firstly;

export const W_in_conclusion: Word = {
  word: 'In conclusion',
  emoji: '🏁',
  phonetic: '/ɪn kənˈkluːʒn/',
  definition: '（衔接词）总而言之；最后',
  example: 'In conclusion, I believe we should move forward with the plan.',
  category: 'basic',
};
export const word_in_conclusion = W_in_conclusion;

