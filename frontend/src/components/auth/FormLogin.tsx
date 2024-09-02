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
import { FormComponent } from "../utils/FormComponent"
import { api } from "@/lib/api"
import { useRouter } from "next/navigation"
import { AxiosError } from "axios"
import { setToken } from "@/utils/localStorage"
import { FormSchema } from "@/utils/schemas/FormLoginSchema"

export function FormLogin() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      Email: "",
      Password: ""
    },
  })
  const router = useRouter()

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const { status, data: response } = await api.post('/auth/login', {
        email: data.Email,
        password: data.Password,
      });
      console.log(status);

      if (status === 200 && response?.token) {
        setToken(response.token)

        toast({
          title: "Login efetuado!",
        });

        router.push('/home');
      } else if (status === 200 && response?.totp) {
        router.push(`/auth/totp?id=${response?.totp.idUser}`);
      }
    } catch (error: any) {
      if (error instanceof AxiosError) {
        toast({
          title: "Erro no Login!",
          description: error?.response?.data.message,
        });
      } else {
        toast({
          title: "Erro no Login!",
          description: "Algo deu errado. Tente novamente mais tarde.",
        });
      }
    }
  }

  return (
    <Form {...form}>
      <FormComponent onSubmit={form.handleSubmit(onSubmit)} buttonName="Entrar">
        <FormField
          control={form.control}
          name="Email"
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
          name="Password"
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
      </FormComponent>
    </Form>
  )
}
