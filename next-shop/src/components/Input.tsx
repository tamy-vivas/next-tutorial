import React from "react";

interface InputProps {
  type: string
}

const Input: React.FC<InputProps> = ({ type }) => {
  return <input type={type} className="border rounded px-3 py-1 w-80" />;
};

export default Input;
