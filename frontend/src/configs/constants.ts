import { AccordionProps, IActionObj, LinkDropdown } from "./interfaces";
import { FormLogin } from "@/components/auth/FormLogin";
import { FormTotp } from "@/components/auth/FormTotp";
import { FormUser } from "@/components/User/FormUser/FormUser";

export const accordionConstants: AccordionProps = {
    accordionObject: [
        {
            title: 'Next.js:',
            description: 'Framework robusto para React, garantindo performance e otimização.'
        },
        {
            title: 'Shadcn:',
            description: 'Biblioteca de estilização para um design elegante e responsivo.'
        },
    ]
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