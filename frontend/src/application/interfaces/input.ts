export interface IInput {
    name: string;
    id?: string;
    type?: string;
    className?: string;    
    placeholder?: string;
    required?: boolean;
    value?: any;
    onChange?: () => void;
}
