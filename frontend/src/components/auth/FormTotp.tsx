"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormField,
    FormItem,
    FormControl,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { FormComponent } from "../utils/FormComponent"
import { api } from "@/lib/api"
import { useRouter } from "next/navigation"
import { AxiosError } from "axios"
import { setToken } from "@/utils/localStorage"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "../ui/input-otp"
import { FormTotpSchema } from "@/utils/schemas/FormTotpSchema"

export function FormTotp() {
    const form = useForm<z.infer<typeof FormTotpSchema>>({
        resolver: zodResolver(FormTotpSchema),
        defaultValues: {
            otpCode: "",
        },
    })
    const router = useRouter()

    async function onSubmit(data: z.infer<typeof FormTotpSchema>) {
        try {
            const { status, data: response } = await api.post('/auth/totp', data);

            if (status === 200 && response?.token) {
                setToken(response.token)

                toast({
                    title: "TOTP verificado com sucesso!",
                });

                router.push('/home');
            }
        } catch (error: any) {
            if (error instanceof AxiosError) {
                toast({
                    title: "Erro na verificação do TOTP!",
                    description: error?.response?.data.message,
                });
            } else {
                toast({
                    title: "Erro na verificação do TOTP!",
                    description: "Algo deu errado. Tente novamente mais tarde.",
                });
            }
        }
    }

    return (
        <Form {...form}>
            <FormComponent onSubmit={form.handleSubmit(onSubmit)} buttonName="Verificar">
                <FormField
                    control={form.control}
                    name="otpCode"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Código TOTP</FormLabel>
                            <FormControl>
                                <InputOTP maxLength={6} onChange={field.onChange} value={field.value}>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} />
                                        <InputOTPSlot index={1} />
                                        <InputOTPSlot index={2} />
                                    </InputOTPGroup>
                                    <InputOTPSeparator />
                                    <InputOTPGroup>
                                        <InputOTPSlot index={3} />
                                        <InputOTPSlot index={4} />
                                        <InputOTPSlot index={5} />
                                    </InputOTPGroup>
                                </InputOTP>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </FormComponent>
        </Form>
    )
}
