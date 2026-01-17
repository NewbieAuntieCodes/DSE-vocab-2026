import { Word } from '../../types';
import { wordLists } from '../../vocabulary';
import { PracticeQuestion, PracticeMode } from './types';

// --- HELPER FUNCTIONS ---
export const shuffleArray = <T,>(array: T[]): T[] => array.sort(() => Math.random() - 0.5);

export const speak = (text: string) => {
    if (!('speechSynthesis' in window)) {
        console.warn('Speech synthesis not supported.');
        return;
    }

    const performSpeak = () => {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        const voices = window.speechSynthesis.getVoices();
        
        if (voices.length === 0) {
            return;
        }

        // 优先级排序：尝试寻找各平台最好的原生或在线增强语音
        const priorityPatterns = [
            // 1. 微软 Edge 的在线自然语音 (目前公认效果最好)
            (v: SpeechSynthesisVoice) => v.name.includes('Online (Natural)') && v.lang.startsWith('en-'),
            // 2. 谷歌 Chrome 的高清语音
            (v: SpeechSynthesisVoice) => v.name === 'Google US English' || v.name === 'Google UK English Female',
            // 3. 苹果/Safari/iPad 的高质量语音 (Samantha 和 Daniel 是高质量代表)
            (v: SpeechSynthesisVoice) => (v.name.includes('Enhanced') || v.name.includes('Premium')) && (v.name.includes('Samantha') || v.name.includes('Daniel')),
            (v: SpeechSynthesisVoice) => v.name === 'Samantha' || v.name === 'Daniel',
            // 4. 其他包含 "Enhanced" 或 "Premium" 字样的英语语音
            (v: SpeechSynthesisVoice) => (v.name.includes('Enhanced') || v.name.includes('Premium')) && v.lang.startsWith('en-'),
            // 5. 本地服务的高质量语音
            (v: SpeechSynthesisVoice) => v.lang.startsWith('en-') && v.localService,
            // 6. 任何英语语音
            (v: SpeechSynthesisVoice) => v.lang.startsWith('en-')
        ];

        let selectedVoice = null;
        for (const pattern of priorityPatterns) {
            selectedVoice = voices.find(pattern);
            if (selectedVoice) break;
        }
            
        utterance.voice = selectedVoice || null;
        utterance.lang = selectedVoice ? selectedVoice.lang : 'en-US';
        utterance.rate = 0.9; // 稍微放慢一点点，方便听清 DSE 词汇
        utterance.pitch = 1;

        window.speechSynthesis.speak(utterance);
    };

    // 语音列表可能是异步加载的
    if (window.speechSynthesis.getVoices().length === 0) {
        window.speechSynthesis.onvoiceschanged = () => {
            performSpeak();
            window.speechSynthesis.onvoiceschanged = null;
        };
    } else {
        performSpeak();
    }
};

export const practiceModes: PracticeMode[] = ['eng-to-chi', 'chi-to-eng', 'listen-to-eng', 'fill-in-the-blank'];

// All words from all lists, for use as a global pool of distractors.
export const allWords: Word[] = wordLists.flatMap(list => list.words);

// --- QUESTION GENERATION ---
export const createPracticeQuestions = (words: Word[], mode: PracticeMode): PracticeQuestion[] => {
    // Pre-process distractors to improve performance
    const wordsInCurrentSet = new Set(words.map(w => w.word));
    const globalDistractors = shuffleArray(allWords.filter(w => !wordsInCurrentSet.has(w.word)));

    return shuffleArray([...words]).map(correctWord => {
        // 1. Prioritize distractors from the current word list.
        const localDistractors = shuffleArray(words.filter(w => w.word !== correctWord.word));
        
        // 2. Combine with global distractors to ensure we have enough options.
        const combinedDistractors = [...localDistractors, ...globalDistractors];

        // 3. Take the first 3 unique distractors.
        const finalDistractors = combinedDistractors.slice(0, 3);
        
        if (mode === 'eng-to-chi') {
            const incorrectOptions = finalDistractors.map(w => w.definition);
            return {
                prompt: correctWord.word,
                correctAnswer: correctWord.definition,
                options: shuffleArray([correctWord.definition, ...incorrectOptions]),
                word: correctWord
            };
        } else if (mode === 'chi-to-eng') {
            const incorrectOptions = finalDistractors.map(w => w.word);
            return {
                prompt: correctWord.definition,
                correctAnswer: correctWord.word,
                options: shuffleArray([correctWord.word, ...incorrectOptions]),
                word: correctWord
            };
        } else if (mode === 'listen-to-eng') {
            // "听音辨词练习" (Listen and identify word): Sound prompt, English word options with icons.
            const incorrectOptions = finalDistractors.map(w => w.word);
            return {
                prompt: correctWord.word, // For audio playback
                correctAnswer: correctWord.word, // Correct answer is the English word itself
                options: shuffleArray([correctWord.word, ...incorrectOptions]),
                word: correctWord
            };
        } else { // 'fill-in-the-blank'
            const incorrectOptions = finalDistractors.map(w => w.word);
            const promptSentence = correctWord.example.replace(new RegExp(`\\b${correctWord.word}\\b`, 'i'), '_______');

            return {
                prompt: promptSentence,
                correctAnswer: correctWord.word,
                options: shuffleArray([correctWord.word, ...incorrectOptions]),
                word: correctWord
            };
        }
    });
};