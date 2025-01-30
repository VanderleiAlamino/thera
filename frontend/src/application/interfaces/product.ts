export interface IProduct {
    _id?: string;
    name: string;
    category: string;
    price: number;
    description: string;
    image: string;
};

export interface IProductResponse extends IProduct {
    modal: (message: string) => void;
};

export interface IProductProps extends Partial<IProductResponse> {
    modal?: (message: string) => void;
    edit?: boolean;
}