import React from "react";
import { IInput } from "@/application/interfaces/input";
import { InputTypes } from "@/application/enums/input";


const Input:React.FC<IInput> = ({
        type = InputTypes.Text, 
        id, 
        className, 
        name, 
        placeholder, 
        onChange
    }) => {

    return (        
        <input
            type={type}
            id={id}
            name={name}
            className={className}
            placeholder={placeholder}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        />
    )
}

export default Input;
