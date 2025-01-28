import { ButtonTypes } from "../enums/button";

export interface IButton {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: ButtonTypes;
}
