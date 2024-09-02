import { z } from "zod";

export const FormUserRegisterSchema = z.object({
    name: z.string().min(1, { message: "Nome é obrigatório." }),
    username: z.string().min(1, { message: "Username é obrigatório." }),
    email: z.string().email({ message: "Endereço de email inválido." }),
    password: z.string().min(6, { message: "A senha deve ter pelo menos 6 caracteres." }),
    confirmPassword: z.string().min(6, { message: "A confirmação de senha deve ter pelo menos 6 caracteres." }),
}).refine(data => data.password === data.confirmPassword, {
  message: "As senhas não coincidem.",
  path: ["ConfirmPassword"],
});