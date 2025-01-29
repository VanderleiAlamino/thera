import { ButtonTypes } from "../enums/button";

export interface IButton {
    children: React.ReactNode;    
    className?: string;
    type?: ButtonTypes;
    onClick?: () => void;
}
