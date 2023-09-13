import React, { createContext, useContext, useState, ReactNode } from 'react';
import mathQuiz from '../components/quizData'

type QuizQuestion = {
    question: string;
    options: string[];
    correctAnswer: string;
};


type QuizState = {
    questions: QuizQuestion[];
    currentQuestionIndex: number;
    userAnswers: string[];
    score: number;
    isStarted: boolean,
    isCompleted: boolean
};


type QuizFunctions = {
    handleAnswer: (selectedAnswer: string) => boolean;
    restartQuiz: () => void;
    handleStart: () => void;
};


const QuizContext = createContext<QuizState & QuizFunctions | null>(null);


type QuizProviderProps = {
    children: ReactNode;
};


export const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
    const [quizState, setQuizState] = useState<QuizState>({
        questions: mathQuiz,
        currentQuestionIndex: 0,
        userAnswers: [],
        score: 0,
        isStarted: false,
        isCompleted: false,
    });


    const handleAnswer = (selectedAnswer: string) => {
        const currentQuestion = mathQuiz[quizState.currentQuestionIndex];
        const isCorrect = currentQuestion.correctAnswer === selectedAnswer;
        const newQuestionIndex = quizState.currentQuestionIndex + 1;

        // Check if all questions are answered
        if (newQuestionIndex >= mathQuiz.length) {
            // All questions answered, mark as completed
            setQuizState({
                ...quizState,
                currentQuestionIndex: newQuestionIndex,
                userAnswers: [...quizState.userAnswers, selectedAnswer],
                score: isCorrect ? quizState.score + 1 : quizState.score,
                isCompleted: true,
            });
        } else {
            // Continue to the next question
            setQuizState({
                ...quizState,
                currentQuestionIndex: newQuestionIndex,
                userAnswers: [...quizState.userAnswers, selectedAnswer],
                score: isCorrect ? quizState.score + 1 : quizState.score,
            });
        }

        return isCorrect;
    };

    const handleStart = () => {
        setQuizState({ ...quizState, isStarted: true })
    }

    const restartQuiz = () => {

        setQuizState({
            questions: mathQuiz,
            currentQuestionIndex: 0,
            userAnswers: [],
            score: 0,
            isStarted: false,
            isCompleted: false
        });
    };

    const contextValue: QuizState & QuizFunctions = {
        ...quizState,
        handleAnswer,
        restartQuiz,
        handleStart,
    };

    return (
        <QuizContext.Provider value={contextValue}>
            {children}
        </QuizContext.Provider>
    );
};


export const useQuiz = (): QuizState & QuizFunctions => {
    const context = useContext(QuizContext);
    if (!context) {
        throw new Error('useQuiz must be used within a QuizProvider');
    }
    return context;
};
