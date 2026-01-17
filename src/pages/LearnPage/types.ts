import { Word } from '../../types';

export type Step = 'selection' | 'learning' | 'practice-eng-to-chi' | 'practice-chi-to-eng' | 'practice-listen-to-eng' | 'practice-fill-in-the-blank' | 'results';

export type PracticeMode = 'eng-to-chi' | 'chi-to-eng' | 'listen-to-eng' | 'fill-in-the-blank';

export interface PracticeQuestion {
    prompt: string;
    correctAnswer: string;
    options: string[];
    word: Word;
}
