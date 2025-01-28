import React from "react";
import { IInput } from "@/application/interfaces/input";

const Input:React.FC<IInput> = ({type = "text", id, className, name, placeholder}) => {
    return (        
        <input
            type={type}
            id={id}
            name={name}
            className={className}
            placeholder={placeholder}
        />
    )
}

export default Input;
