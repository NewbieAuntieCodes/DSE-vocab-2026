
import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { WordList } from '../../types';
import { speak } from '../../pages/LearnPage/utils';
import { PrevIcon, NextIcon, SpeakerIcon } from '../Icons';

const LearnStep: React.FC<{ topic: WordList, onComplete: () => void }> = ({ topic, onComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentWord = topic.words[currentIndex];

    const handleSpeak = useCallback((text: string) => {
        speak(text);
    }, []);

    useEffect(() => {
        const speakOnLoad = () => setTimeout(() => handleSpeak(currentWord.word), 100);
        if ('speechSynthesis' in window) {
            if (window.speechSynthesis.getVoices().length > 0) speakOnLoad();
            else window.speechSynthesis.onvoiceschanged = speakOnLoad;
        }
        return () => { if ('speechSynthesis' in window) window.speechSynthesis.onvoiceschanged = null; };
    }, [currentWord, handleSpeak]);

    const handleNext = () => setCurrentIndex(i => Math.min(i + 1, topic.words.length - 1));
    const handlePrev = () => setCurrentIndex(i => Math.max(i - 1, 0));
    
    return (
        <StepContainer>
            <Flashcard>
                {currentWord.illustration && <IllustrationContainer><currentWord.illustration /></IllustrationContainer>}
                <WordDetails>
                    {currentWord.emoji && <EmojiDisplay role="img" aria-hidden="true">{currentWord.emoji}</EmojiDisplay>}
                    <WordRow>
                        <WordText>
                            {currentWord.word}
                        </WordText>
                        <SpeakButton onClick={() => handleSpeak(currentWord.word)} aria-label={`Listen to ${currentWord.word}`}><SpeakerIcon /></SpeakButton>
                    </WordRow>
                    <PhoneticText>{currentWord.phonetic}</PhoneticText>
                    <DefinitionText>{currentWord.definition}</DefinitionText>
                    <ExampleText>"{currentWord.example}"</ExampleText>
                </WordDetails>
            </Flashcard>
            <FlashcardNav>
                <NavButton onClick={handlePrev} disabled={currentIndex === 0}><PrevIcon/></NavButton>
                <ProgressText>{currentIndex + 1} / {topic.words.length}</ProgressText>
                {currentIndex === topic.words.length - 1 ? (
                    <CompleteButton onClick={onComplete} $themeColor="learn">开始练习</CompleteButton>
                ) : (
                    <NavButton onClick={handleNext}><NextIcon/></NavButton>
                )}
            </FlashcardNav>
        </StepContainer>
    );
};

// --- STYLED COMPONENTS ---
const popIn = keyframes`0% { opacity: 0; transform: scale(0.9); } 100% { opacity: 1; transform: scale(1); }`;

const StepContainer = styled.div`
    animation: ${popIn} 0.3s ease-out;
`;

const Flashcard = styled.div`
    background-color: ${({ theme }) => theme.colors.cardBg}; border-radius: 24px; box-shadow: ${({ theme }) => theme.shadows.main}; border: 1px solid ${({ theme }) => theme.colors.border};
    width: 100%; max-width: 500px; margin: 0 auto; padding: 2.5rem; display: flex; flex-direction: column; align-items: center;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { padding: 1.5rem; }
`;

const IllustrationContainer = styled.div`
    width: 140px; height: 140px; margin-bottom: 2rem;
    & > div { width: 100%; height: 100%; } // Ensure WordIllustrationCard fills container
`;

const EmojiDisplay = styled.div`
    font-size: 6rem;
    line-height: 1;
    margin-bottom: 1.5rem;
    animation: ${popIn} 0.3s ease-out;
`;

const WordDetails = styled.div`text-align: center; width: 100%;`;
const WordRow = styled.div`display: flex; align-items: center; justify-content: center; gap: 1rem; margin-bottom: 0.5rem;`;
const WordText = styled.h2`font-size: 2.5rem; color: ${({ theme }) => theme.colors.header}; font-weight: 700; margin: 0;`;
const SpeakButton = styled.button`
    background: none; border: none; cursor: pointer; color: ${({ theme }) => theme.colors.label}; padding: 0.5rem; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    &:hover { color: ${({ theme }) => theme.colors.primary}; background-color: ${({ theme }) => theme.colors.boxBg}; }
`;
const PhoneticText = styled.p`font-size: 1.25rem; color: ${({ theme }) => theme.colors.label}; margin: 0 0 1rem 0;`;
const DefinitionText = styled.p`font-size: 1.5rem; color: ${({ theme }) => theme.colors.text}; font-weight: 500; margin: 0 0 1.5rem 0;`;
const ExampleText = styled.p`font-size: 1.1rem; color: ${({ theme }) => theme.colors.label}; margin: 0; font-style: italic;`;

const FlashcardNav = styled.div`
    display: flex; justify-content: space-between; align-items: center; max-width: 500px; margin: 1.5rem auto 0;
`;
const NavButton = styled.button`
    background-color: ${({ theme }) => theme.colors.cardBg}; border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: 50%; width: 50px; height: 50px;
    display: flex; align-items: center; justify-content: center; color: ${({ theme }) => theme.colors.text}; cursor: pointer; transition: all 0.2s ease;
    &:hover:not(:disabled) { background-color: ${({ theme }) => theme.colors.boxBg}; color: ${({ theme }) => theme.colors.primary}; }
    &:disabled { opacity: 0.5; cursor: not-allowed; }
`;
const ProgressText = styled.span`font-weight: 500; color: ${({ theme }) => theme.colors.label};`;
export const CompleteButton = styled.button<{ $themeColor: string, $secondary?: boolean }>`
    font-family: inherit; font-size: 1rem; font-weight: 600; padding: 0.8rem 2rem; border-radius: 9999px; cursor: pointer; transition: all 0.2s ease;
    border: 2px solid ${({ theme, $themeColor, $secondary }) => $secondary ? (theme.colors[$themeColor] || theme.colors.primary) : 'transparent'};
    background-color: ${({ theme, $themeColor, $secondary }) => $secondary ? 'transparent' : (theme.colors[$themeColor] || theme.colors.primary)};
    color: ${({ theme, $themeColor, $secondary }) => $secondary ? (theme.colors[$themeColor] || theme.colors.primary) : 'white'};
    box-shadow: ${({ theme, $themeColor, $secondary }) => $secondary ? 'none' : `0 4px 10px ${theme.colors[$themeColor] || theme.colors.primary}50`};
    
    &:hover:not(:disabled) { 
        transform: scale(1.05); 
        ${({ $secondary, theme, $themeColor }) => $secondary 
            ? css`background-color: ${theme.colors[$themeColor]}1A;` 
            : css`box-shadow: 0 6px 15px ${theme.colors[$themeColor]}60;`
        }
    }
`;

export default LearnStep;
