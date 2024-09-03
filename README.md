# Login Totp

# Instruções para Rodar o Sistema de Login

Pré-requisitos
  - Docker e Docker Compose instalados.
  - Node.js e npm instalados.

Na raiz do projeto, execute:

```bash 
 docker-compose up
```

O projeto abre [http://localhost:3000](http://localhost:3000)
O back end estará na [http://localhost:3333](http://localhost:3333)


```bash 
 #.env exemplo
MYSQL_HOST=
MYSQL_USER=
MYSQL_PORT=
MYSQL_DATABASE=
MYSQL_ROOT_PASSWORD=
DB_DIALECT=
JWT_SECRET=
EXPIRESIN=
PORT_API=
```


# Tecnologias Utilizadas

# -Frontend:

 - Next.js com TypeScript
 - React Hook Form e Zod para validação
 - Shadcn UI e Tailwind CSS para estilização
 - Redux para gerenciamento de estado

# -Backend:

 - Node.js com Express
 - JWT para autenticação
 - Sequelize para ORM
 - OTPAuth para autenticação de dois fatores
 - Bcrypt para hash de senhas
