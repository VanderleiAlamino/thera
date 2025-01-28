import { IProduct } from "@/application/interfaces/product";
  
export const mockProducts: IProduct[] = [
    {
        id: 1,
        name: "Notebook Gamer",
        category: "Eletrônicos",
        price: 5500.0,
        description: "Notebook gamer com placa de vídeo dedicada e 16GB de RAM.",
        image: "https://http2.mlstatic.com/D_NQ_NP_770165-MLA70391145836_072023-B.webp",
    },
    {
        id: 2,
        name: "Smartphone Android",
        category: "Eletrônicos",
        price: 2500.0,
        description: "Smartphone com tela AMOLED de 6.5 polegadas e 128GB de armazenamento.",
        image: "https://img.olx.com.br/images/91/913567480522035.jpg",
    },
    {
        id: 3,
        name: "Mesa de Escritório",
        category: "Móveis",
        price: 800.0,
        description: "Mesa de escritório em madeira maciça com design moderno.",
        image: "https://images.tcdn.com.br/img/img_prod/834500/mesa_para_escritorio_1_50m_x_60cm_153_2_ca6d67ec5dccca0103abd1e92a5bba84.png",
    },
    {
        id: 4,
        name: "Cadeira Ergonômica",
        category: "Móveis",
        price: 1200.0,
        description: "Cadeira ergonômica com ajuste de altura e apoio lombar.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVN4c16IyuQ5Idhtg9JQ62VrOZG5dGUeeaGQ&s",
    },
];