import React from "react";
import { ITextProps } from "../../application/interfaces/text"

const Text: React.FC<ITextProps> = ({ children, className }) => {
  return <p className={`text-gray-700 ${className}`}>{children}</p>;
};

export default Text;
