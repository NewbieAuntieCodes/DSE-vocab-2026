import React, { useState, useEffect, useCallback } from 'react';
import { styled, keyframes, css } from 'styled-components';
import { Word } from '../../types';
import { PracticeMode, PracticeQuestion } from '../../pages/LearnPage/types';
import { createPracticeQuestions, speak } from '../../pages/LearnPage/utils';
import { BigSpeakerIcon, SpeakerIcon } from '../Icons';

const PracticeGame: React.FC<{ words: Word[], allWords: Word[], mode: PracticeMode, onComplete: () => void }> = ({ words, allWords, mode, onComplete }) => {
    const [questions, setQuestions] = useState<PracticeQuestion[]>([]);
    const [masteredWords, setMasteredWords] = useState(new Set<string>());
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const resetGame = useCallback(() => {
        const initialQuestions = createPracticeQuestions(words, mode);
        setQuestions(initialQuestions);
        setMasteredWords(new Set<string>());
        setSelectedOption(null);
        setIsCorrect(null);
    }, [words, mode]);

    useEffect(() => {
        resetGame();
    }, [resetGame]);

    useEffect(() => {
        // 在“听音辨词”和“英译中”模式下自动播放英文单词发音
        if (questions.length > 0 && (mode === 'listen-to-eng' || mode === 'eng-to-chi')) {
            speak(questions[0].word.word);
        }
    }, [questions, mode]);
    
    const handleOptionClick = (option: string) => {
        if (selectedOption) return;

        const currentQuestion = questions[0];
        const correct = option === currentQuestion.correctAnswer;
        setSelectedOption(option);
        setIsCorrect(correct);

        setTimeout(() => {
            const remainingQuestions = questions.slice(1);

            if (correct) {
                setMasteredWords(prev => new Set(prev).add(currentQuestion.word.word));
                setQuestions(remainingQuestions);
                if (remainingQuestions.length === 0) {
                    setTimeout(onComplete, 500);
                }
            } else {
                const reinsertIndex = Math.min(3, remainingQuestions.length);
                const newQueue = [...remainingQuestions];
                newQueue.splice(reinsertIndex, 0, currentQuestion);
                setQuestions(newQueue);
            }
            
            setSelectedOption(null);
            setIsCorrect(null);
        }, correct ? 0 : 1000);
    };

    const getEmojiForOption = (option: string): string | undefined => {
        let wordObj;
        // Chinese options in 'eng-to-chi' mode.
        if (mode === 'eng-to-chi') {
            wordObj = allWords.find(w => w.definition === option);
        // English options in all other modes.
        } else {
            wordObj = allWords.find(w => w.word === option);
        }
        return wordObj?.emoji;
    };

    if (questions.length === 0) {
        return <GameCard><p>正在加载...</p></GameCard>;
    }
    
    const currentQuestion = questions[0];
    const totalQuestions = words.length;

    const getButtonState = (option: string) => {
        if (!selectedOption) return 'default';
        if (option === currentQuestion.correctAnswer) return 'correct';
        if (option === selectedOption) return 'incorrect';
        return 'disabled';
    };

    return (
        <GameCard>
             <ProgressBarContainer>
                <ProgressBar style={{ width: `${(masteredWords.size / totalQuestions) * 100}%` }} />
            </ProgressBarContainer>

            {mode === 'listen-to-eng' ? (
                <ListenPromptContainer>
                    <ListenButton onClick={() => speak(currentQuestion.word.word)} aria-label="Play sound"><BigSpeakerIcon /></ListenButton>
                </ListenPromptContainer>
            ) : (
                <PromptContainer>
                    <PromptContent>
                        <PracticePromptText $isSentence={mode === 'fill-in-the-blank'}>
                            {currentQuestion.prompt}
                        </PracticePromptText>
                        {mode === 'eng-to-chi' && (
                            <SmallSpeakButton 
                                onClick={() => speak(currentQuestion.word.word)} 
                                aria-label="播放发音"
                                title="播放发音"
                            >
                                <SpeakerIcon />
                            </SmallSpeakButton>
                        )}
                    </PromptContent>
                </PromptContainer>
            )}

            <OptionsGrid $isChinese={mode === 'eng-to-chi'}>
                {currentQuestion.options.map(option => {
                    const emoji = getEmojiForOption(option);
                    return (
                        <OptionButton key={option} onClick={() => handleOptionClick(option)} disabled={!!selectedOption} $state={getButtonState(option)}>
                            {emoji && <OptionEmoji role="img" aria-hidden="true">{emoji}</OptionEmoji>}
                            <span>{option}</span>
                        </OptionButton>
                    );
                })}
            </OptionsGrid>
        </GameCard>
    );
};

// --- STYLED COMPONENTS ---
const popIn = keyframes`0% { opacity: 0; transform: scale(0.9); } 100% { opacity: 1; transform: scale(1); }`;

const GameCard = styled.div`
    background-color: ${({ theme }) => theme.colors.cardBg}; border-radius: 24px; box-shadow: ${({ theme }) => theme.shadows.main}; border: 1px solid ${({ theme }) => theme.colors.border};
    width: 100%; max-width: 700px; margin: 0 auto; padding: 2.5rem; display: flex; flex-direction: column; align-items: center; position: relative; overflow: hidden; min-height: 450px;
    animation: ${popIn} 0.3s ease-out;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { padding: 1.5rem; min-height: 400px; }
`;

const ProgressBarContainer = styled.div`position: absolute; top: 0; left: 0; width: 100%; height: 8px; background-color: ${({ theme }) => theme.colors.boxBg};`;
const ProgressBar = styled.div`height: 100%; background-color: ${({ theme }) => theme.colors.learn}; transition: width 0.3s ease;`;

const PromptContainer = styled.div`
    width: 100%; 
    height: 200px; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    margin-bottom: 2rem;
`;

const PromptContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
`;

const SmallSpeakButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.label};
    padding: 0.75rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    flex-shrink: 0;
    
    &:hover {
        color: ${({ theme }) => theme.colors.learn};
        background-color: ${({ theme }) => theme.colors.boxBg};
        transform: scale(1.1);
    }

    svg {
        width: 28px;
        height: 28px;
    }
`;

const ListenPromptContainer = styled(PromptContainer)``;
const PracticePromptText = styled.h2<{ $isSentence?: boolean }>`
    font-size: ${({ $isSentence }) => $isSentence ? '1.75rem' : '2.5rem'};
    color: ${({ theme }) => theme.colors.header};
    font-weight: 700;
    text-align: center;
    line-height: ${({ $isSentence }) => $isSentence ? '1.5' : '1.2'};
    padding: 0;
    margin: 0;
`;

const ListenButton = styled.button`
    background-color: ${({ theme }) => theme.colors.learnLight}; border: none; width: 120px; height: 120px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer;
    color: ${({ theme }) => theme.colors.learn}; transition: all 0.2s ease;
    &:hover { transform: scale(1.1); background-color: #D6F2EB; }
`;

const OptionsGrid = styled.div<{ $isChinese?: boolean }>`
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; width: 100%; max-width: 500px;
    button { font-size: ${({ $isChinese }) => $isChinese ? '1.1rem' : '1.25rem'}; }
`;

const OptionEmoji = styled.span`
    margin-right: 0.75rem;
    font-size: 1.2rem;
    line-height: 1;
`;

const OptionButton = styled.button<{ $state: 'default' | 'correct' | 'incorrect' | 'disabled' }>`
    font-family: inherit; font-weight: 600; padding: 1.25rem; border-radius: 16px; cursor: pointer; transition: all 0.2s ease;
    border: 2px solid ${({ theme }) => theme.colors.border}; background-color: ${({ theme }) => theme.colors.cardBg}; color: ${({ theme }) => theme.colors.header};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    
    & > span {
        flex-shrink: 1;
        min-width: 0;
    }

    &:not(:disabled):hover { border-color: ${({ theme }) => theme.colors.learn}; color: ${({ theme }) => theme.colors.learn}; }
    ${({ $state, theme }) => {
        switch ($state) {
            case 'correct': return css`background-color: #E6F8F2; border-color: ${theme.colors.learn}; color: ${theme.colors.learn}; transform: scale(1.05);`;
            case 'incorrect': return css`background-color: #FDF2F2; border-color: ${theme.colors.primaryRed}; color: ${theme.colors.primaryRed};`;
            case 'disabled': return css`opacity: 0.5; cursor: not-allowed;`;
            default: return '';
        }
    }}
`;

export default PracticeGame;