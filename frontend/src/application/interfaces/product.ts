export interface IProduct {
    id: number;
    name: string;
    category: string;
    price: number;
    description: string;
    image: string;
}

export interface IProductProps {
    product: IProduct;
}

export interface IProductListProps {
    products: IProduct[];
}
