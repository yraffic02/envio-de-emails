import { AccordionProps, IActionObj, LinkDropdown } from "./interfaces";
import { FormLogin } from "@/components/auth/FormLogin";
import { FormTotp } from "@/components/auth/FormTotp";
import { FormUser } from "@/components/User/FormUser/FormUser";

export const accordionConstants: AccordionProps = {
    accordionObject: [
        {
            title: 'Next.js:',
            description: 'Framework robusto para React, garantindo performance e otimização.',
        },
        {
            title: 'TypeScript:',
            description: 'Superset do JavaScript que adiciona tipagem estática, ajudando a evitar erros e melhorar a qualidade do código.',
        },
        {
            title: 'React Hook Form:',
            description: 'Biblioteca para lidar com formulários de forma eficiente e fácil, com suporte para validação e gerenciamento de estado.',
        },
        {
            title: 'Zod:',
            description: 'Biblioteca de validação de esquemas TypeScript-first, utilizada para validação de dados no frontend.',
        },
        {
            title: 'Shadcn UI:',
            description: 'Biblioteca de componentes UI, focada em acessibilidade e personalização.',
        },
        {
            title: 'Tailwind CSS:',
            description: 'Framework utilitário de CSS para estilização rápida e responsiva.',
        },
        {
            title: 'Redux:',
            description: 'Biblioteca para gerenciamento de estado global, essencial para aplicações complexas com múltiplos estados interdependentes.',
        },
        {
            title: 'Node.js:',
            description: 'Ambiente de execução JavaScript no lado do servidor, usado para construir APIs e backend escaláveis.',
        },
        {
            title: 'Express:',
            description: 'Framework minimalista para Node.js, utilizado para criar servidores e APIs RESTful.',
        },
        {
            title: 'JWT (JSON Web Token):',
            description: 'Padrão de token seguro para autenticação de usuários entre o frontend e o backend.',
        },
        {
            title: 'Sequelize:',
            description: 'ORM para Node.js, utilizado para interagir com bancos de dados SQL de maneira intuitiva e eficaz.',
        },
        {
            title: 'OTPAuth:',
            description: 'Biblioteca para geração e verificação de códigos de autenticação de dois fatores (2FA).',
        },
        {
            title: 'Bcrypt:',
            description: 'Biblioteca para hash de senhas, garantindo segurança adicional no armazenamento de credenciais.',
        },
    ],
};



export const publicRoutes = ['/', '/auth/login', '/auth/register', '/auth/totp'];

export const linkDropdown: LinkDropdown[] = [
    {
        link:  '#',
        name: 'Perfil'
    },
    {
        link:  '/config',
        name: 'Configuração'
    },
]

export type Action = 'login' | 'register' | 'totp';

export const actionMap: Record<Action, IActionObj> = {
    login: {
      component: FormLogin,
      text: "Não tem um cadastro?",
      linkText: "Criar uma conta",
      linkHref: "/auth/register",
    },
    register: {
      component: FormUser,
      text: "Já tem cadastro?",
      linkText: "Faça login",
      linkHref: "/auth/login",
    },
    totp: {
      component: FormTotp,
      text: null,
      linkText: null,
      linkHref: null,
    },
};