# SIGA --- Sistema Integrado de Gestão e Atividades

O **SIGA** é uma aplicação web moderna, modular e totalmente responsiva,
desenvolvida com **React + Vite**.\
O sistema foi projetado para servir como base para plataformas
administrativas, dashboards corporativos, sistemas de atividades e
ambientes de interação entre usuários.

Com uma arquitetura organizada, componentes reutilizáveis e integração
com API interna via Node.js/Express, o SIGA entrega alta performance,
escalabilidade e uma experiência fluida tanto em **Desktop** quanto em
**Mobile**.

## 📚 Índice

-   [Sobre o Projeto](#sobre-o-projeto)
-   [Tecnologias Utilizadas](#tecnologias-utilizadas)
-   [Funcionalidades](#funcionalidades)
-   [Arquitetura do Projeto](#arquitetura-do-projeto)
-   [Estrutura de Pastas](#estrutura-de-pastas)
-   [Instalação e Uso](#instalação-e-uso)
-   [API / Backend Interno](#api--backend-interno)
-   [Padronização de Código](#padronização-de-código)

## 📘 Sobre o Projeto

O SIGA foi projetado como um sistema altamente modular, composto por
diversas seções funcionais como **Atividades**, **Gestão**,
**Controle**, **Relacionamento** e telas de seleção (SIGA
Desktop/Mobile).

A aplicação utiliza componentes isolados, estilização modular
(`*.style.jsx`) e uma estrutura organizada que facilita manutenção e
evolução.

O projeto também inclui um **servidor Node.js interno**, permitindo
autenticação, integrações, rotas personalizadas e expansão futura com
banco de dados.

## ⚙️ Tecnologias Utilizadas

  Categoria                 Tecnologias
  ------------------------- -----------------------------------------
  **Frontend**              React 19, Vite 7, JSX, Hooks
  **Backend interno**       Node.js, Express, CORS, Dotenv, Bcrypt
  **Comunicação**           Axios
  **Qualidade de código**   ESLint
  **Outros**                Vite plugin React, Babel React Compiler

## 🧩 Funcionalidades

-   Interface 100% responsiva\
-   Layouts separados para **Desktop** e **Mobile**\
-   Módulos organizados por contexto\
-   Componentes reutilizáveis\
-   Consumo de API via Axios\
-   Mini backend Express integrado\
-   Estrutura escalável\
-   Suporte a imagens, ícones e bandeiras

## 🏛️ Arquitetura do Projeto

A organização do SIGA segue padrões modernos:

-   **Component-based architecture**\
-   Separação por **páginas** e **versões Desktop/Mobile**
-   Estilos modulares\
-   Backend isolado em `/src/api/server.js`\
-   Estrutura clara para expansão

## 📂 Estrutura de Pastas

    src/
      api/
      assets/
      components/
      pages/
      styles/
      App.jsx
      main.jsx

## 💻 Instalação e Uso

### Clonar o repositório

    git clone https://github.com/seu-usuario/siga.git

### Acessar a pasta

    cd siga

### Instalar dependências

    npm install

### Rodar o projeto

    npm run dev

## 🔌 API / Backend Interno

Para rodar o backend:

    node src/api/server.js


