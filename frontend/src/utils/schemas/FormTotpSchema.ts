import { z } from "zod";

export const FormTotpSchema = z.object({
    otpCode: z.string()
        .length(6, { message: "O código TOTP deve ter 6 dígitos." })
        .regex(/^\d+$/, { message: "O código TOTP deve conter apenas números." }),
});
