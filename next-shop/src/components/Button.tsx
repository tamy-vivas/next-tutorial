import React from 'react'
import { PropsWithChildren } from 'react';
interface ButtonProps extends PropsWithChildren {
    type: 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({ type, children }) => {
    return (
        <button type={type} className="bg-green-800 rounded text-gray-100 px-4 py-2
            my-2 hover:bg-green-700">
            {children}
        </button>
    )
}

export default Button