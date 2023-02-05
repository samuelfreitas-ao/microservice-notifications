Um microserviço de notificações

## Tecnologias

Esse projecto foi desenvolvido com as seguintes tecnologias:

- Nodejs
- Nestjs
- TypeScript
- Prisma

## Como executar

- Instale as dependências: `npm install`
- Faça uma copia do arquivo `.env.example` para `.env` ou simplesmente execute o comando `cp .env.example .env` que já vai criar uma cópia.
- Execute `npx prisma migrate dev` para criar o banco de dados e executar as migrations
- Execute `npm run start:dev` para iniciar o servidor.
