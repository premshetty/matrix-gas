import { useQuiz } from '@/QuizContext';
import React from 'react';
import Button from './Button';

const QuizCompleted = () => {
    const { score, restartQuiz } = useQuiz();

    return (
        <div
            style={{
                backgroundImage: `url("./res.jpg")`,
            }}
            className="p-5 h-screen bg-cover bg-no-repeat md:p-20"
        >
            <div className="flex flex-col justify-between items-center h-full">
                <h1
                    className="font-extrabold block w-fit text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-600 mx-auto"
                >
                    Congratulations!
                </h1>
                <div className="w-1/2">
                    <p className="text-3xl lg:text-5xl text-center leading-snug font-bold">
                        {`You've Completed the Math Quiz`}
                    </p>
                    <p className="text-center mt-5 text-xs md:text-base">
                        {`You've tested your math skills and become a math wizard!`}
                    </p>
                    <p className="text-center mt-3 text-xs md:text-base">
                        Here are your quiz results:
                    </p>

                    <div className="text-center mt-2 text-2xl font-semibold text-blue-500">
                        {`Score: ${score}/30`}
                    </div>

                </div>
                <Button
                    color="red"
                    onClick={restartQuiz}
                    name={'Restart ?'}
                />
            </div>
        </div>
    );
};

export default QuizCompleted;
