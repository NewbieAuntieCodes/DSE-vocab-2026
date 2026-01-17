import React from 'react';
import { styled } from 'styled-components';
import { PracticeMode } from '../../pages/LearnPage/types';

const PracticeStepper: React.FC<{
    steps: PracticeMode[];
    currentStep: PracticeMode;
    onStepClick: (step: PracticeMode) => void;
}> = ({ steps, currentStep, onStepClick }) => {
    return (
        <StepperContainer>
            {steps.map((step) => (
                <StepDot
                    key={step}
                    $isActive={step === currentStep}
                    onClick={() => onStepClick(step)}
                    aria-label={`跳转到练习: ${step.replace(/-/g, ' ')}`}
                />
            ))}
        </StepperContainer>
    );
};

// --- STYLED COMPONENTS ---
const StepperContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
`;

const StepDot = styled.button<{ $isActive: boolean }>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: all 0.2s ease;
    background-color: ${({ theme, $isActive }) => $isActive ? theme.colors.learn : theme.colors.border};
    transform: ${({ $isActive }) => $isActive ? 'scale(1.2)' : 'scale(1)'};

    &:hover {
        background-color: ${({ theme }) => theme.colors.learn};
        opacity: 0.7;
    }
`;

export default PracticeStepper;
