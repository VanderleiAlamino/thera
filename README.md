# Thera - Guia de Uso

Bem-vindo ao **Thera**! Este repositório contém tanto a **API backend** quanto o **frontend** para gerenciamento de produtos. A seguir, fornecemos um guia para configurar, executar e interagir com o sistema.

## 🛠️ Tecnologias Utilizadas

- **NestJS** (Backend): Framework para construção de aplicações escaláveis em Node.js.
- **MongoDB** (Backend): Banco de dados NoSQL para armazenamento de dados.
- **Mongoose** (Backend): ODM para MongoDB.
- **Docker** (Backend): Para containerização do ambiente.
- **TypeScript**: Tipagem estática para maior segurança e manutenção do código.
- **Next.js** (Frontend): Framework React para renderização do lado do servidor e geração de páginas estáticas.
- **React Query** (Frontend): Para gerenciamento de estado e consumo de APIs.
- **Tailwind CSS** (Frontend): Framework CSS utilitário para estilização.
- **Jest** e **Testing Library** (Frontend e Backend): Para testes unitários e de integração.

---

## 🔧 Estrutura do Repositório

O repositório contém duas pastas principais: **backend** e **frontend**. Cada uma delas é responsável por uma parte do sistema.

```
Thera/
├── backend/           # API Backend desenvolvida com NestJS e MongoDB
└── frontend/          # Aplicação Frontend desenvolvida com Next.js e Tailwind CSS
```

---

## 📂 Como Usar o Backend

### 1. Clonar o repositório

Clone o repositório e navegue até a pasta `backend`:

```bash
git clone https://github.com/VanderleiAlamino/Thera.git
cd Thera/backend
```

### 2. Configurar o ambiente

Crie o arquivo `.env` na raiz do backend e adicione as configurações necessárias para o MongoDB:

```env
MONGO_URI=mongodb://localhost:27017/thera
PORT=3000
```

Caso utilize o Docker, ajuste a URI para:

```env
MONGO_URI=mongodb://mongo:27017/thera
```

### 3. Instalar dependências

Instale as dependências com o seguinte comando:

```bash
npm install
# ou
yarn install
```

### 4. Rodar a aplicação

Inicie o backend em modo de desenvolvimento:

```bash
npm run start:dev
# ou
yarn start:dev
```

A API estará disponível em: `http://localhost:3000`.

### 5. Testes

Para rodar os testes unitários, use:

```bash
npm test
# ou
yarn test
```

---

## 📂 Como Usar o Frontend

### 1. Clonar o repositório

Clone o repositório e navegue até a pasta `frontend`:

```bash
git clone https://github.com/VanderleiAlamino/Thera.git
cd Thera/frontend
```

### 2. Instalar dependências

Instale as dependências do frontend:

```bash
npm install
# ou
yarn install
```

### 3. Configurar o ambiente

Crie um arquivo `.env.local` na raiz do frontend e adicione a variável de ambiente para o endpoint da API:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### 4. Rodar a aplicação

Inicie o frontend:

```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em: `http://localhost:3000`.

### 5. Testes

Para rodar os testes do frontend:

```bash
npm test
# ou
yarn test
```

---

## 📌 Endpoints da API Backend

A seguir estão os principais endpoints da API para gerenciamento de produtos.

### **Produtos (`/products`)**

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

---

## 📝 Convenções de Código

### Backend (NestJS):
- **Módulos**: Organize a lógica em módulos para manter a modularidade e facilitar a manutenção.
- **Controllers**: Responsáveis por lidar com as requisições HTTP.
- **Services**: Contêm a lógica de negócios.
- **DTOs**: Validação e tipagem dos dados de entrada.

### Frontend (Next.js):
- **Atomic Design**: Organize os componentes em **Átomos**, **Moléculas** e **Organismos**.
- **Arquitetura Hexagonal**: Camadas bem definidas para serviços, estados e utilitários.
- **Nomenclatura**: Utilize `PascalCase` para componentes, `camelCase` para variáveis e funções, e `UPPER_CASE` para constantes.

---

## 📄 Documentação Adicional

- **NestJS**: [Documentação Oficial](https://docs.nestjs.com/)
- **MongoDB**: [Documentação Oficial](https://www.mongodb.com/docs/)
- **Mongoose**: [Documentação Oficial](https://mongoosejs.com/docs/)
- **Next.js**: [Documentação Oficial](https://nextjs.org/docs)
- **Tailwind CSS**: [Documentação Oficial](https://tailwindcss.com/docs)
- **TypeScript**: [Documentação Oficial](https://www.typescriptlang.org/docs/)
