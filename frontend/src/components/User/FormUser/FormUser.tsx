"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { FormUserRegisterSchema } from "@/utils/schemas/FormUserSchema"
import { api } from "@/lib/api"
import { FormComponent } from "@/components/utils/FormComponent"
import { AxiosError } from "axios"


export function FormUser() {
    const form = useForm<z.infer<typeof FormUserRegisterSchema>>({
        resolver: zodResolver(FormUserRegisterSchema),
        defaultValues: {
            name: "",
            email: "",
            username: "",
            password: "",
            confirmPassword: ""
        },
    })

    async function onSubmit(data: z.infer<typeof FormUserRegisterSchema>) {

        try {
            const { status } = await api.post('/user/register', data)

            if (status === 201) {
                toast({
                    title: "Usuário registrado!",
                    description: 'Faça login agora.',
                })
                form.reset();
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                toast({
                    title: "Erro ao registrar usuário!",
                    description: error?.response?.data.error,
                });
            } else {
                toast({
                    title: "Erro ao registrar usuário!",
                    description: "Algo deu errado. Tente novamente mais tarde.",
                });
            }
        }
    }

    return (
        <Form {...form}>
            <FormComponent onSubmit={form.handleSubmit(onSubmit)} buttonName="Registrar">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Digite o seu nome</FormLabel>
                            <FormControl>
                                <Input placeholder="Seu nome" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Digite o seu nome de usuário</FormLabel>
                            <FormControl>
                                <Input placeholder="Seu user" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Digite o seu email</FormLabel>
                            <FormControl>
                                <Input placeholder="email@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Digite a sua senha</FormLabel>
                            <FormControl>
                                <Input placeholder="Senha" type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirme a sua senha</FormLabel>
                            <FormControl>
                                <Input placeholder="Confirme a senha" type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </FormComponent>
        </Form>
    )
}
