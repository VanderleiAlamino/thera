import { InputTypes } from "../enums/input";

export interface IInput {
    name: string;
    id?: string;
    type?: InputTypes;
    className?: string;    
    placeholder?: string;
    required?: boolean;
    value?: any;
    onChange?: any;
}
