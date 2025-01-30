import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import { IInputGroup } from "@/application/interfaces/input-group";

const InputGroup: React.FC<IInputGroup> = ({ input, label, className }) => {
    return (
        <div className={className}>
            <Label 
                htmlFor={label.htmlFor} 
                className={label.className}
            >
                {label.children}
            </Label>
            <Input 
                type={input.type}
                id={input.id}
                name={input.name}
                value={input.value}
                className={input.className}
                placeholder={input.placeholder}
                onChange={input.onChange}
            />                
        </div>
    );
};

export default InputGroup;
