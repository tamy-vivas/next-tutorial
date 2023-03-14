import React, { ChangeEvent, ChangeEventHandler, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

const Input: React.FC<InputProps> = (props) => {
  return <input {...props}
    className="border rounded px-3 py-1 w-80" />;
};

export default Input;
