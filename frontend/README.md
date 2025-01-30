# Thera - Frontend

Este projeto é uma aplicação web para gerenciamento de produtos, desenvolvida com **Next.js**, **TypeScript** e **Tailwind CSS**. O objetivo é criar uma interface eficiente e bem estruturada, seguindo boas práticas de desenvolvimento.

## 🛠️ Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor (SSR) e geração de páginas estáticas.
- **TypeScript**: Adiciona tipagem estática ao JavaScript, melhorando a qualidade e a manutenção do código.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.
- **React Query**: Para gerenciamento de estado e consumo de APIs.
- **Jest** e **Testing Library**: Para testes unitários e de snapshot.

## 📂 Estrutura de Pastas

A estrutura de pastas segue os princípios do **Atomic Design** e **Arquitetura Hexagonal**, com foco em modularidade e separação de responsabilidades.

```
frontend/
├── public/                  # Arquivos estáticos (imagens, fonts, etc.)
├── src/
│   ├── atoms/               # Componentes atômicos (botões, inputs, etc.)
│   ├── molecules/           # Componentes moleculares (combinações de átomos)
│   ├── organisms/           # Componentes orgânicos (seções da interface)
│   ├── templates/           # Templates de páginas (estrutura geral)
│   ├── pages/               # Páginas da aplicação (Next.js)
│   ├── services/            # Lógica de negócio e comunicação com APIs
│   ├── hooks/               # Custom Hooks
│   ├── contexts/            # Contextos globais (gerenciamento de estado)
│   ├── utils/               # Funções utilitárias (helpers, formatação, etc.)
│   ├── styles/              # Estilos globais e configurações do Tailwind
│   ├── types/               # Tipos TypeScript (interfaces, tipos globais)
│   ├── tests/               # Testes unitários e de integração
│   └── README.md            # Documentação específica do frontend
├── .env.local               # Variáveis de ambiente
├── .eslintrc.js             # Configuração do ESLint
├── .prettierrc.js           # Configuração do Prettier
├── jest.config.js           # Configuração do Jest
├── next.config.js           # Configuração do Next.js
├── tailwind.config.js       # Configuração do Tailwind CSS
└── README.md                # Este arquivo
```

## 📝 Convenções de Código

### 1. **Nomenclatura de Variáveis e Constantes**
- **Constantes**: Usar `UPPER_CASE` com underscores.
  ```typescript
  const MAX_ITEMS = 10;
  const API_URL = "https://api.example.com";
  ```
- **Variáveis e funções**: Usar `camelCase`.
  ```typescript
  const productName = "Notebook";
  function calculateTotalPrice() {}
  ```

### 2. **Nomenclatura de Componentes**
- **Componentes**: Usar `PascalCase`.
  ```typescript
  const ProductCard = () => {};
  ```
- **Arquivos de componentes**: Usar `PascalCase`.
  ```
  ProductCard.tsx
  ProductList.tsx
  ```

### 3. **Nomenclatura de Pastas**
- Pastas devem seguir `kebab-case`.
  ```
  atoms/
  molecules/
  organisms/
  ```

### 4. **Clean Code**
- Funções e componentes devem ser pequenos e ter uma única responsabilidade.
- Evitar código duplicado (DRY - Don't Repeat Yourself).
- Usar nomes descritivos para variáveis, funções e componentes.

### 5. **Arquitetura Hexagonal**
- **Services**: Camada de serviços para comunicação com APIs externas.
- **Contexts**: Gerenciamento de estado global.
- **Utils**: Funções utilitárias reutilizáveis.

## 🚀 Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/VanderleiAlamino/Thera.git
   cd Thera/frontend
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure as variáveis de ambiente**:
   Crie um arquivo `.env.local` na raiz do projeto e adicione as variáveis necessárias:
   ```env
   NEXT_PUBLIC_API_URL=https://api.example.com
   ```

4. **Execute o projeto**:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. **Acesse a aplicação**:
   Abra o navegador e acesse `http://localhost:3000`.

## 🧪 Testes

Para executar os testes, use o seguinte comando:
```bash
npm test
# ou
yarn test
```

## 📄 Documentação Adicional

- **Tailwind CSS**: [Documentação Oficial](https://tailwindcss.com/docs)
- **Next.js**: [Documentação Oficial](https://nextjs.org/docs)
- **TypeScript**: [Documentação Oficial](https://www.typescriptlang.org/docs/)