# Thera - Backend

Este projeto é a API backend do sistema **Thera**, desenvolvida com **NestJS** e **MongoDB**. Ele fornece endpoints para gerenciamento de produtos, permitindo operações CRUD (Create, Read, Update, Delete).

## 🛠️ Tecnologias Utilizadas

- **NestJS**: Framework para construção de aplicações escaláveis em Node.js.
- **TypeScript**: Tipagem estática para maior segurança e manutenção do código.
- **MongoDB**: Banco de dados NoSQL para armazenamento dos produtos.
- **Mongoose**: ODM para modelagem e interação com o MongoDB.
- **Docker**: Para containerização do ambiente.
- **Jest**: Para testes unitários.

## 📂 Estrutura de Pastas

A estrutura do backend segue as boas práticas do **NestJS**, garantindo modularidade e separação de responsabilidades.

```
backend/
├── src/
│   ├── products/            # Módulo de produtos
│   │   ├── dto/             # Data Transfer Objects (validação de dados)
│   │   ├── schemas/         # Definição do schema do MongoDB
│   │   ├── products.module.ts  # Módulo do NestJS
│   │   ├── products.service.ts # Lógica de negócios
│   │   ├── products.controller.ts # Endpoints da API
│   ├── app.module.ts        # Módulo principal
│   ├── main.ts              # Ponto de entrada da aplicação
├── test/                    # Testes unitários
├── .env                     # Configurações de ambiente
├── .eslintrc.js             # Configuração do ESLint
├── .prettierrc.js           # Configuração do Prettier
├── jest.config.js           # Configuração do Jest
├── Dockerfile               # Configuração para Docker
├── README.md                # Documentação do backend
```

## 🚀 Como Executar o Projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/VanderleiAlamino/Thera.git
cd Thera/backend
```

### 2. Configurar o ambiente
Crie um arquivo `.env` na raiz do projeto e adicione as configurações do MongoDB:
```env
MONGO_URI=mongodb://localhost:27017/thera
PORT=3000
```
Se estiver rodando com Docker, a URI pode ser:
```env
MONGO_URI=mongodb://mongo:27017/thera
```

### 3. Instalar as dependências
```bash
npm install
# ou
yarn install
```

### 4. Rodar a aplicação
```bash
npm run start:dev
# ou
yarn start:dev
```


A API estará disponível em: `http://localhost:3000`

## 📌 Endpoints Disponíveis

### 📍 Produtos (`/products`)

#### 🔹 Criar um produto (POST)
```sh
curl -X POST http://localhost:3000/products \
     -H "Content-Type: application/json" \
     -d '{"name": "Camiseta", "price": 49.90, "stock": 100}'
```

#### 🔹 Listar produtos (GET)
```sh
curl -X GET http://localhost:3000/products
```

#### 🔹 Buscar um produto por ID (GET)
```sh
curl -X GET http://localhost:3000/products/{id}
```

#### 🔹 Atualizar um produto (PATCH)
```sh
curl -X PATCH http://localhost:3000/products/{id} \
     -H "Content-Type: application/json" \
     -d '{"price": 59.90}'
```

#### 🔹 Deletar um produto (DELETE)
```sh
curl -X DELETE http://localhost:3000/products/{id}
```

## 🧪 Testes
Para rodar os testes unitários:
```bash
npm test
# ou
yarn test
```

## 📄 Documentação Adicional

- **NestJS**: [Documentação Oficial](https://docs.nestjs.com/)
- **MongoDB**: [Documentação Oficial](https://www.mongodb.com/docs/)
- **Mongoose**: [Documentação Oficial](https://mongoosejs.com/docs/)

