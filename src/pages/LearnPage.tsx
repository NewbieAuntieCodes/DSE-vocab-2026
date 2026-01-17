
import React, { useState, useEffect } from 'react';
import { styled, keyframes } from 'styled-components';
import { Page, Word } from '../types';
import { wordLists } from '../vocabulary';
import { Step, PracticeMode } from './LearnPage/types';
import { practiceModes, allWords } from './LearnPage/utils';
import { BackArrowIcon } from '../components/Icons';
import LearnStep, { CompleteButton } from '../components/learn/LearnStep';
import PracticeGame from '../components/learn/PracticeGame';
import PracticeStepper from '../components/learn/PracticeStepper';


// --- Main Page Component ---
const LearnPage: React.FC<{ topicId: string, navigateTo: (page: Page) => void }> = ({ topicId, navigateTo }) => {
    const topic = wordLists.find(list => list.id === topicId);
    const [step, setStep] = useState<Step>('selection');
    const [selectedWords, setSelectedWords] = useState<Word[]>([]);
    const [copyStatus, setCopyStatus] = useState(''); // State for copy feedback

    useEffect(() => {
        if (topic) setSelectedWords(topic.words);
    }, [topic]);

    if (!topic) return <PageContainer><p>主题未找到！</p><button onClick={() => navigateTo('home')}>返回主页</button></PageContainer>;
    
    const handleSelectionChange = (word: Word, isSelected: boolean) => {
        setSelectedWords(prev => isSelected ? [...prev, word].sort((a, b) => topic.words.indexOf(a) - topic.words.indexOf(b)) : prev.filter(w => w.word !== word.word));
    };

    const handleSelectAll = (select: boolean) => setSelectedWords(select ? topic.words : []);

    const handleCategorySelection = (wordsToChange: Word[], select: boolean) => {
        setSelectedWords(prevSelected => {
            const wordsToChangeSet = new Set(wordsToChange.map(w => w.word));
            const otherSelectedWords = prevSelected.filter(w => !wordsToChangeSet.has(w.word));
            
            if (select) {
                const newSelection = [...otherSelectedWords, ...wordsToChange];
                return newSelection.sort((a, b) => topic.words.indexOf(a) - topic.words.indexOf(b));
            } else {
                return otherSelectedWords;
            }
        });
    };

    // Function to handle copying selected words
    const handleCopySelectedWords = () => {
        if (selectedWords.length === 0) return;

        const textToCopy = selectedWords
            .map(word => {
                const parts = [word.word, word.phonetic];
                if (word.emoji) {
                    parts.push(word.emoji);
                }
                parts.push(word.definition);
                return parts.join(' ');
            })
            .join('\n');

        navigator.clipboard.writeText(textToCopy).then(
            () => {
                setCopyStatus('已复制！');
                setTimeout(() => setCopyStatus(''), 2000);
            },
            () => {
                setCopyStatus('复制失败');
                setTimeout(() => setCopyStatus(''), 2000);
            }
        );
    };
    
    const topicForLearning = { ...topic, words: selectedWords };

    const getTitle = () => {
        switch (step) {
            case 'selection':
                if (topic.id === 'dse-learning') {
                    return '学习类词汇';
                }
                if (topic.id === 'dse-environmental') {
                    return '环保类词汇';
                }
                const baseTitle = topic.title.replace('DSE口语 - ', '');
                return `${baseTitle}词汇`;
            case 'practice-eng-to-chi': return '练习：英译中';
            case 'practice-chi-to-eng': return '练习：中译英';
            case 'practice-listen-to-eng': return '练习：听音辨词';
            case 'practice-fill-in-the-blank': return '单元综合练习';
            case 'results': return '练习完成!';
            case 'learning': default: return topic.title;
        }
    };

    const renderContent = () => {
        switch (step) {
            case 'selection':
                const hasCategories = topic.words.some(w => w.category);
                const hasGroups = topic.words.some(w => w.group);
                const basicWords = hasCategories ? topic.words.filter(w => w.category !== 'advanced') : [];
                const advancedWords = hasCategories ? topic.words.filter(w => w.category === 'advanced') : [];

                const renderWordCheckboxList = (words: Word[]) => (
                    <WordListContainer>
                        {words.map(word => (
                            <WordItem
                                key={word.word}
                                $level={word.category === 'advanced' ? 'advanced' : word.category === 'basic' ? 'basic' : 'neutral'}
                            >
                                <label>
                                    <WordMain>
                                        <WordTitle>
                                            {word.emoji && <span role="img" aria-hidden="true">{word.emoji} </span>}
                                            {word.word}
                                        </WordTitle>
                                        <WordDefinition>{word.definition}</WordDefinition>
                                    </WordMain>
                                    <input
                                        type="checkbox"
                                        checked={selectedWords.some(sw => sw.word === word.word)}
                                        onChange={(e) => handleSelectionChange(word, e.target.checked)}
                                        aria-label={`选择 ${word.word}`}
                                    />
                                </label>
                            </WordItem>
                        ))}
                    </WordListContainer>
                );

                const renderGroupedWordCheckboxList = (words: Word[]) => {
                    if (!hasGroups) return renderWordCheckboxList(words);

                    const groups: Array<{ title: string; words: Word[] }> = [];
                    const indexByTitle = new Map<string, number>();

                    for (const word of words) {
                        const title = word.group?.trim() || '其他';
                        const existingIndex = indexByTitle.get(title);
                        if (existingIndex === undefined) {
                            indexByTitle.set(title, groups.length);
                            groups.push({ title, words: [word] });
                        } else {
                            groups[existingIndex].words.push(word);
                        }
                    }

                    return (
                        <GroupList>
                            {groups.map(group => {
                                // Sort words within group: Basic before Advanced
                                const sortedWordsInGroup = [...group.words].sort((a, b) => {
                                    const aOrder = a.category === 'advanced' ? 1 : 0;
                                    const bOrder = b.category === 'advanced' ? 1 : 0;
                                    return aOrder - bOrder;
                                });

                                return (
                                    <GroupSection key={group.title}>
                                        <GroupHeader>{group.title}</GroupHeader>
                                        {renderWordCheckboxList(sortedWordsInGroup)}
                                    </GroupSection>
                                );
                            })}
                        </GroupList>
                    );
                };

                return (
                    <SelectionContainer>
                        <SelectionActions>
                            {(!hasCategories || hasGroups) && (
                                <>
                                    <ActionButton onClick={() => handleSelectAll(true)}>全选</ActionButton>
                                    <ActionButton onClick={() => handleSelectAll(false)}>全不选</ActionButton>
                                </>
                            )}
                            {hasGroups && hasCategories && (
                                <>
                                    <ActionButton onClick={() => setSelectedWords(basicWords)}>选基础</ActionButton>
                                    {advancedWords.length > 0 && (
                                        <ActionButton onClick={() => setSelectedWords(advancedWords)}>选进阶</ActionButton>
                                    )}
                                </>
                            )}
                            <ActionButton onClick={handleCopySelectedWords} disabled={selectedWords.length === 0}>
                                复制已选 ({selectedWords.length})
                            </ActionButton>
                            {copyStatus && <CopyStatus>{copyStatus}</CopyStatus>}
                        </SelectionActions>

                        {hasGroups ? (
                            renderGroupedWordCheckboxList(topic.words)
                        ) : hasCategories ? (
                            <div>
                                <SubHeaderContainer>
                                    <SubHeaderText $level="basic">基础词汇</SubHeaderText>
                                    <CategoryActions>
                                        <CategoryActionButton onClick={() => handleCategorySelection(basicWords, true)}>全选</CategoryActionButton>
                                        <CategoryActionButton onClick={() => handleCategorySelection(basicWords, false)}>全不选</CategoryActionButton>
                                    </CategoryActions>
                                </SubHeaderContainer>
                                {renderGroupedWordCheckboxList(basicWords)}
                                
                                {advancedWords.length > 0 && (
                                    <>
                                        <SubHeaderContainer>
                                            <SubHeaderText $level="advanced">进阶词汇</SubHeaderText>
                                            <CategoryActions>
                                                <CategoryActionButton onClick={() => handleCategorySelection(advancedWords, true)}>全选</CategoryActionButton>
                                                <CategoryActionButton onClick={() => handleCategorySelection(advancedWords, false)}>全不选</CategoryActionButton>
                                            </CategoryActions>
                                        </SubHeaderContainer>
                                        {renderGroupedWordCheckboxList(advancedWords)}
                                    </>
                                )}
                            </div>
                        ) : (
                            renderGroupedWordCheckboxList(topic.words)
                        )}

                        <ActionsContainer>
                            <StartButton onClick={() => setStep('learning')} disabled={selectedWords.length === 0} title={selectedWords.length === 0 ? "请至少选择一个单词" : ""} $themeColor="learn">
                                开始学习 ({selectedWords.length})
                            </StartButton>
                             <StartButton onClick={() => setStep('practice-fill-in-the-blank')} disabled={selectedWords.length === 0} title={selectedWords.length === 0 ? "请至少选择一个单词" : ""} $themeColor="practice" $secondary>
                                综合练习 ({selectedWords.length})
                            </StartButton>
                        </ActionsContainer>
                    </SelectionContainer>
                );
            case 'learning':
                return <LearnStep topic={topicForLearning} onComplete={() => setStep('practice-eng-to-chi')} />;
            
            case 'practice-eng-to-chi':
            case 'practice-chi-to-eng':
            case 'practice-listen-to-eng':
            case 'practice-fill-in-the-blank': {
                const currentMode = step.replace('practice-', '') as PracticeMode;
                const handlePracticeComplete = () => {
                    const currentIndex = practiceModes.indexOf(currentMode);
                    if (currentIndex < practiceModes.length - 1) {
                        setStep(`practice-${practiceModes[currentIndex + 1]}`);
                    } else {
                        setStep('results');
                    }
                };
                
                return (
                    <StepContainer>
                        <PracticeGame
                            words={selectedWords}
                            allWords={allWords}
                            mode={currentMode}
                            onComplete={handlePracticeComplete}
                        />
                        <PracticeStepper
                            steps={practiceModes}
                            currentStep={currentMode}
                            onStepClick={(mode) => setStep(`practice-${mode}`)}
                        />
                    </StepContainer>
                );
            }
            case 'results':
                 return (
                    <ResultsContainer>
                        <h2>太棒了!</h2>
                        <p>你已经完成了本主题的所有练习。</p>
                        <ResultsActions>
                            <GameButton onClick={() => setStep('selection')}>重新选择单词</GameButton>
                            <GameButton onClick={() => navigateTo('home')} $secondary>返回主页</GameButton>
                        </ResultsActions>
                    </ResultsContainer>
                );
            default: return null;
        }
    };

    return (
        <PageContainer>
            <PageHeader>
                <BackButton onClick={() => {
                     if (step === 'selection') {
                        navigateTo('home');
                    } else if (step === 'learning') {
                        setStep('selection');
                    }
                     else {
                        setStep('learning');
                    }
                }} aria-label="返回"><BackArrowIcon /></BackButton>
                <h1>{getTitle()}</h1>
            </PageHeader>
            <main>{renderContent()}</main>
        </PageContainer>
    );
};

// --- STYLED COMPONENTS ---

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const popIn = keyframes`0% { opacity: 0; transform: scale(0.9); } 100% { opacity: 1; transform: scale(1); }`;

const PageContainer = styled.div`max-width: 1100px; margin: 0 auto; animation: ${fadeIn} 0.5s ease;`;

const PageHeader = styled.header`
    position: relative; text-align: center; margin-bottom: 2rem; display: flex; align-items: center; justify-content: center;
    h1 { margin: 0; font-size: 2.5rem; font-weight: 700; color: ${({ theme }) => theme.colors.header}; }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { h1 { font-size: 1.75rem; } }
`;

const BackButton = styled.button`
    position: absolute; left: 0; top: 50%; transform: translateY(-50%); background-color: ${({ theme }) => theme.colors.cardBg}; border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 50%; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; color: ${({ theme }) => theme.colors.text}; cursor: pointer; transition: all 0.2s ease;
    box-shadow: ${({ theme }) => theme.shadows.subtle};
    &:hover { background-color: ${({ theme }) => theme.colors.boxBg}; color: ${({ theme }) => theme.colors.primary}; transform: translateY(-50%) scale(1.05); box-shadow: ${({ theme }) => theme.shadows.main}; }
`;

const StepContainer = styled.div`
    animation: ${popIn} 0.3s ease-out;
`;

// Selection Step Styles
const SelectionContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.cardBg}; border-radius: 24px; box-shadow: ${({ theme }) => theme.shadows.main}; border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 2rem; animation: ${popIn} 0.3s ease-out;
`;

const SelectionActions = styled.div`
    display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center; margin-bottom: 1rem; padding-bottom: 1.5rem; border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const ActionButton = styled.button`
    font-family: inherit; font-size: 0.9rem; font-weight: 600; padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer; transition: all 0.2s ease;
    border: 1px solid ${({ theme }) => theme.colors.border}; background-color: ${({ theme }) => theme.colors.boxBg}; color: ${({ theme }) => theme.colors.header};
    &:hover:not(:disabled) { background-color: ${({ theme }) => theme.colors.border}; }
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

const CopyStatus = styled.span`
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.learn};
    font-weight: 500;
    margin-left: 1rem;
`;

const SubHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.5rem 0 1rem 0;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    &:first-of-type {
        margin-top: 0;
    }
`;

const CategoryActions = styled.div`
    display: flex;
    gap: 0.5rem;
`;

const CategoryActionButton = styled.button`
    font-family: inherit;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0.3rem 0.6rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.label};

    &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.boxBg};
        color: ${({ theme }) => theme.colors.header};
    }
`;


const SubHeaderText = styled.h2<{ $level?: 'basic' | 'advanced' }>`
    font-size: 1.15rem;
    font-weight: 700;
    color: ${({ theme, $level }) =>
        $level === 'basic'
            ? theme.colors.primaryRed
            : $level === 'advanced'
                ? theme.colors.practice
                : theme.colors.header};
    margin: 0;
    padding: 0;
    border: none;
    text-align: left;
`;

const GroupList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const GroupSection = styled.section``;

const GroupHeader = styled.h3`
    font-size: 0.95rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.header};
    margin: 0.5rem 0 0.75rem 0;
`;

const WordListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 0.75rem;
    margin-bottom: 0.75rem;
`;

const WordItem = styled.div<{ $level: 'basic' | 'advanced' | 'neutral' }>`
    border-radius: 14px;
    border: 1.5px solid ${({ theme, $level }) =>
        $level === 'advanced' ? theme.colors.practice : $level === 'basic' ? theme.colors.primaryRed : theme.colors.border};
    background-color: ${({ theme, $level }) =>
        $level === 'advanced' ? `${theme.colors.practice}08` : $level === 'basic' ? `${theme.colors.primaryRed}08` : theme.colors.cardBg};
    transition: transform 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease;

    &:has(input:checked) {
        background-color: ${({ theme, $level }) =>
            $level === 'advanced' ? `${theme.colors.practice}14` : $level === 'basic' ? `${theme.colors.primaryRed}14` : theme.colors.boxBg};
        box-shadow: ${({ theme }) => theme.shadows.subtle};
        transform: translateY(-1px);
    }

    label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;
        cursor: pointer;
        padding: 0.65rem 0.75rem;
        border-radius: 14px;
    }

    label:hover {
        background-color: ${({ theme }) => theme.colors.cardBg};
    }

    input[type="checkbox"] {
        width: 22px;
        height: 22px;
        cursor: pointer;
        accent-color: ${({ theme, $level }) =>
            $level === 'advanced' ? theme.colors.practice : $level === 'basic' ? theme.colors.primaryRed : theme.colors.learn};
        flex-shrink: 0;
    }
`;

const WordMain = styled.div`
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
`;

const WordTitle = styled.div`
    font-weight: 800;
    color: ${({ theme }) => theme.colors.header};
    line-height: 1.2;
    word-break: break-word;
`;

const WordDefinition = styled.div`
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.label};
    line-height: 1.25;
`;

const ActionsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1.5rem;
`;

const StartButton = styled(CompleteButton)`
    &:disabled {
        background-color: ${({ $secondary }) => $secondary ? 'transparent' : '#bdc3c7'};
        color: #bdc3c7;
        border-color: #bdc3c7;
        box-shadow: none;
        transform: none;
        cursor: not-allowed;
    }
`;

// Results Styles
const ResultsContainer = styled.div`
    text-align: center; padding: 4rem 2rem; background-color: ${({ theme }) => theme.colors.cardBg}; border-radius: 24px; box-shadow: ${({ theme }) => theme.shadows.main};
    animation: ${popIn} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    h2 { font-size: 2.5rem; color: ${({ theme }) => theme.colors.learn}; margin: 0 0 0.5rem 0; }
    p { font-size: 1.1rem; color: ${({ theme }) => theme.colors.label}; margin: 0 0 2rem 0; }
`;
const ResultsActions = styled.div`display: flex; justify-content: center; gap: 1rem;`;
const GameButton = styled.button<{ $secondary?: boolean }>`
    font-family: inherit; font-size: 1rem; font-weight: 600; padding: 0.8rem 2rem; border-radius: 9999px; cursor: pointer; transition: all 0.2s ease;
    border: ${({ $secondary, theme }) => $secondary ? `2px solid ${theme.colors.border}` : 'none'};
    background-color: ${({ $secondary, theme }) => $secondary ? 'transparent' : theme.colors.learn};
    color: ${({ $secondary, theme }) => $secondary ? theme.colors.header : 'white'};
    &:hover { transform: scale(1.05); }
`;

export default LearnPage;
