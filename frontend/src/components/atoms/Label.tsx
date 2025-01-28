import React from "react";
import { ILabel } from "@/application/interfaces/label";

const Label:React.FC<ILabel> = ({children, className, htmlFor}) => {
    return (
        <label htmlFor={htmlFor} className={className}>
            {children}
        </label>
    )
}

export default Label;
