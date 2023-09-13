import { useQuiz } from '@/QuizContext';
import React from 'react';
import mathQuiz from './quizData';

const Progress = () => {
    const { currentQuestionIndex } = useQuiz();
    const totalQuestions = mathQuiz.length;
    const isCompleted = currentQuestionIndex >= totalQuestions;

    const progress = isCompleted ? 100 : (currentQuestionIndex / totalQuestions) * 100;

    return (
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div
                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{
                    width: progress + '%',
                    transition: 'width 0.5s ease',
                }}
            >
                {Math.round(progress)}%
            </div>
        </div>
    );
};

export default Progress;
