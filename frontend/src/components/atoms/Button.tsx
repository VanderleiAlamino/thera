import React from "react";
import { IButton } from "@/application/interfaces/button";
import { ButtonTypes } from "@/application/enums/button";


const Button: React.FC<IButton> = ({ children, onClick, className, type=ButtonTypes.Button }) => {
    return (
        <button 
            onClick={onClick} 
            className={className}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button;
