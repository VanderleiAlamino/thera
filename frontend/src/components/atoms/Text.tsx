import React from "react";
import { ITextProps } from "../../application/interfaces/text"
import { TagTypes } from "@/application/enums/tags";

const Text: React.FC<ITextProps> = ({ children, className, tag = TagTypes.Paragraph }) => {
  
  const TAG = tag;
  return <TAG className={className}>{children}</TAG>;
};

export default Text;
