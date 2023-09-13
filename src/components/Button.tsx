import React from 'react';

type ButtonProps = {
    color: keyof typeof colors;
    name: string
    onClick: any;
    disabled?: boolean
};

const colors = {
    blue: 'bg-blue-500',
    pink: 'bg-pink-500',
    orange: 'bg-orange-500',
    red: 'bg-red-500',
};

const Button: React.FC<ButtonProps> = ({ color, name, onClick, disabled }) => {
    const buttonColor = colors[color] || colors.blue;

    return (
        <button
            onClick={onClick}
            value={name}
            disabled={disabled}
            className={`group min-w-[100px]  relative inline-flex items-center px-2.5 py-1.5 rounded shadow-lg outline-none ${buttonColor} text-sm text-white font-medium transition-all duration-200 ease-out hover:text-${color}-500 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none`}
        >
            <span className={`absolute h-0 w-0.5 right-0 top-0 ${buttonColor} transition-all duration-500 ease-out group-hover:h-full`} aria-hidden="true" />
            <span className={`absolute left-0 bottom-0 ${buttonColor} transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full`} aria-hidden="true" />
            {name}
            <span className={`absolute left-0 bottom-0 ${buttonColor} transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full`} aria-hidden="true" />
            <span className={`absolute w-0 h-0.5 right-0 top-0 ${buttonColor} transition-all duration-500 ease-out group-hover:w-full`} aria-hidden="true" />
        </button>
    );
};

export default Button;
