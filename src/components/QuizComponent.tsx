import React, { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import { useQuiz } from '@/QuizContext';
import Button from './Button';
import Progress from './Progress';
import QuizCompleted from './QuizCompleted';
import mathQuiz from './quizData';

const QuizComponent = () => {
    const { currentQuestionIndex, handleAnswer, score, restartQuiz, isCompleted } = useQuiz();
    const question = mathQuiz[currentQuestionIndex];
    const [secondsRemaining, setSecondsRemaining] = useState(60);

    const answerCheck = useCallback((ques: string) => {
        const isCorrect = handleAnswer(ques);
        if (isCorrect) {
            toast.success('Correct Answer!', { autoClose: 1500 });
        } else {
            toast.error('Wrong Answer!', { autoClose: 1500 });
        }
        resetTimer();
    }, [handleAnswer]);

    const resetTimer = () => {
        setSecondsRemaining(60);
    };

    useEffect(() => {
        const timerInterval = 1000;

        if (secondsRemaining === 0) {
            answerCheck('');
        } else {
            const timer = setTimeout(() => {
                setSecondsRemaining(secondsRemaining - 1);
            }, timerInterval);

            return () => clearTimeout(timer);
        }
    }, [secondsRemaining, currentQuestionIndex, answerCheck]);

    return (
        isCompleted ? (
            <QuizCompleted />
        ) : (
            <div
                style={{
                    backgroundImage: `url("./matte.jpg")`,
                }}
                className='p-5 h-screen bg-cover bg-no-repeat md:p-20'
            >
                <div className='flex gap-3 flex-row items-center mb-6 md:-mt-14 justify-between'>
                    <p className='text-center mt-5 text-xs md:text-base'>
                        Score: {score}
                    </p>
                    <div className='text-center mt-5 text-xs md:text-base'>
                        Time Left: {secondsRemaining} seconds
                    </div>
                    <Button
                        color="red"
                        onClick={restartQuiz}
                        name='Restart'
                    />
                </div>
                <Progress />

                <div className='flex flex-col justify-around items-center h-full'>
                    <p className='text-3xl lg:text-5xl text-center leading-snug font-bold'>
                        {`${currentQuestionIndex + 1})  ${question.question}`}
                    </p>
                    <div className='flex flex-wrap gap-x-10 gap-y-4 items-center justify-center'>
                        {question.options.map((ques) => (
                            <Button
                                color="pink"
                                onClick={() => answerCheck(ques)}
                                name={ques}
                                key={ques}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    );
};

export default QuizComponent;
