import React from 'react';
import Button from './Button';
import { useQuiz } from '@/QuizContext';
import QuizComponent from './QuizComponent';

const WelcomeScreen = () => {
    const { handleStart } = useQuiz();

    return (
        <main
            style={{
                backgroundImage: `url("./quiz.jpg")`,
            }}
            className='p-5 h-screen bg-cover bg-no-repeat md:p-20'>
            <div className='flex flex-col justify-between items-center h-full'>
                <h1 className='font-extrabold block w-fit text-5xl
          text-transparent bg-clip-text bg-gradient-to-r
          from-blue-400 to-red-600 mx-auto'>
                    Quiz Time!
                </h1>
                <div className='w-1/2'>
                    <p className='text-3xl lg:text-5xl text-center leading-snug font-bold'>
                        Test your math skills and become a math wizard!
                    </p>
                    <p className='text-center mt-5 text-xs md:text-base'>
                        Solve as many equations as you can in a limited time
                    </p>
                </div>
                <Button color='orange' name='Start Quiz' onClick={handleStart} />
            </div>
        </main>
    );
};

const HomePage = () => {
    const { isStarted } = useQuiz()

    return isStarted ? <QuizComponent /> : <WelcomeScreen />;
};

export default HomePage;
