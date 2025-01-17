# Landing

Este é o repositório do projeto **Landing**, desenvolvido com [Next.js](https://nextjs.org/). Siga as instruções abaixo para rodar o projeto localmente.

## Pré-requisitos
Certifique-se de que os seguintes requisitos estão atendidos antes de iniciar:

- Node.js instalado (versão 14 ou superior). [Baixe aqui](https://nodejs.org/).
- Gerenciador de pacotes, como `npm` (instalado com o Node.js) ou `yarn` (opcional, [instale aqui](https://yarnpkg.com/)).
- Git instalado. [Baixe aqui](https://git-scm.com/).

## Passo a passo para rodar o projeto

1. **Clone o repositório**

   Use o comando abaixo para clonar o repositório:
   ```bash
   git clone https://github.com/Pedrorayck/Landing.git
   ```

2. **Acesse o diretório do projeto**

   Entre na pasta do projeto clonado:
   ```bash
   cd Landing
   ```

3. **Instale as dependências**

   Execute um dos comandos abaixo para instalar as dependências do projeto:
   
   Com `npm`:
   ```bash
   npm install
   ```
   
   Ou com `yarn`:
   ```bash
   yarn install
   ```

4. **Configure as variáveis de ambiente**

   Renomeie o arquivo `.env.example` para `.env.local` e ajuste os valores das variáveis de ambiente conforme necessário:
   ```bash
   cp .env.example .env.local
   ```

5. **Inicie o servidor de desenvolvimento**

   Execute o comando para iniciar o servidor local:
   
   Com `npm`:
   ```bash
   npm run dev
   ```
   
   Ou com `yarn`:
   ```bash
   yarn dev
   ```

6. **Acesse o projeto no navegador**

   Abra seu navegador e acesse:
   ```
   http://localhost:3000
   ```

## Scripts disponíveis

- `dev`: Inicia o servidor de desenvolvimento.
- `build`: Compila o projeto para produção.
- `start`: Inicia o servidor da aplicação em modo de produção (necessário rodar o `build` antes).
- `lint`: Verifica o código-fonte em busca de problemas.

## Tecnologias usadas

- **Next.js**: Framework React para renderização no lado do servidor.
- **React**: Biblioteca JavaScript para interfaces de usuário.
- **Tailwind CSS** (se aplicável): Framework CSS utilitário para estilização.

## Contribuição

Se deseja contribuir com o projeto, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma nova branch:
   ```bash
   git checkout -b minha-nova-feature
   ```
3. Commit suas mudanças:
   ```bash
   git commit -m 'Adiciona minha nova feature'
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin minha-nova-feature
   ```
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
