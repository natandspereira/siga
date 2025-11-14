SIGA — Sistema Integrado de Gestão e Atividades

O SIGA é uma aplicação web moderna, modular e totalmente responsiva, desenvolvida com React + Vite.
O sistema foi projetado para servir como base para plataformas administrativas, dashboards corporativos, sistemas de atividades e ambientes de interação entre usuários.

Com uma arquitetura organizada, componentes reutilizáveis e integração com API interna via Node.js/Express, o SIGA entrega alta performance, escalabilidade e uma experiência fluida tanto em Desktop quanto em Mobile.

📚 Índice

Sobre o Projeto

Tecnologias Utilizadas

Funcionalidades

Arquitetura do Projeto

Estrutura de Pastas

Instalação e Uso

API / Backend Interno

Padronização de Código

Contribuição

Licença

📘 Sobre o Projeto

O SIGA foi projetado como um sistema altamente modular, composto por diversas seções funcionais como Atividades, Gestão, Controle, Relacionamento e telas de seleção (SIGA Desktop/Mobile).

A aplicação utiliza componentes isolados, estilização modular (*.style.jsx) e uma estrutura organizada que facilita manutenção e evolução.

O projeto também inclui um servidor Node.js interno, permitindo autenticação, integrações, rotas personalizadas e expansão futura com banco de dados.

⚙️ Tecnologias Utilizadas
Categoria	Tecnologias
Frontend	React 19, Vite 7, JSX, Hooks
Backend interno	Node.js, Express, CORS, Dotenv, Bcrypt
Comunicação	Axios
Qualidade de código	ESLint
Outros	Vite plugin React, Babel React Compiler
🧩 Funcionalidades

✔️ Interface 100% responsiva

✔️ Layouts separados para Desktop e Mobile

✔️ Módulos organizados por contexto (Gestão, Atividades, Controle…)

✔️ Componentes reutilizáveis e estilizados individualmente

✔️ Consumo de API via Axios

✔️ Mini backend Express integrado

✔️ Estrutura escalável e fácil de manter

✔️ Suporte a imagens, ícones e bandeiras (idiomas)

🏛️ Arquitetura do Projeto

A organização do SIGA segue padrões modernos:

Component-based architecture

Separação por páginas e versões Desktop/Mobile

Estilos modulares para cada componente ou página

Backend isolado em /src/api/server.js

Assets organizados por categorias (imagens, ícones, bandeiras)

Estrutura clara para expansão do sistema

Essa arquitetura torna o projeto ideal para evoluir para um sistema administrativo, CRM, ERP ou dashboard corporativo.

📂 Estrutura de Pastas
src/
  api/                 # Mini backend (Express)
  assets/              # Ícones, imagens e bandeiras
  components/          # Componentes reutilizáveis
  pages/               # Páginas Desktop e Mobile
    atividades/
    controle/
    escolherSiga/
    gestao/
    relacionamento/
  styles/              # Estilos modularizados (quando aplicável)
  App.jsx
  main.jsx

index.html             # HTML principal da aplicação
vite.config.js         # Configuração do Vite
package.json           # Dependências e scripts

💻 Instalação e Uso
1️⃣ Clonar o repositório
git clone https://github.com/seu-usuario/siga.git

2️⃣ Acessar a pasta
cd siga

3️⃣ Instalar dependências
npm install

4️⃣ Rodar o projeto em modo desenvolvimento
npm run dev


O Vite iniciará o servidor e exibirá a URL local.

🔌 API / Backend Interno

O projeto inclui um servidor básico em Express, localizado em:

src/api/server.js


Para rodá-lo manualmente:

node src/api/server.js


O backend está preparado para:

Receber rotas personalizadas

Usar variáveis de ambiente

Implementar autenticação com bcrypt

Integrar banco de dados opcionalmente

🧼 Padronização de Código

O projeto utiliza ESLint com regras atualizadas para React.

Para rodar a verificação:

npm run lint

🤝 Contribuição

Contribuições são bem-vindas!
Siga os passos abaixo:

Faça um fork do projeto

Crie uma nova branch

git checkout -b minha-feature


Commit suas alterações

Envie um Pull Request

📄 Licença

Este projeto está sob a licença MIT.
Você é livre para usar, modificar e distribuir.
