import React from 'react';

const Button = ({children}) => {
    return (
        <a href="#_" class="rounded relative inline-flex group items-center justify-center px-5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-secondary to-midnight border-primary text-color font-semibold">
            <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-silver rounded-full group-hover:w-24 group-hover:h-24 opacity-10"></span>
            <span class="relative">{children}</span>
        </a>
    );
};

export default Button;