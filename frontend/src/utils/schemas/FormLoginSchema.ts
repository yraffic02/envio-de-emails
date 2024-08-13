import { z } from "zod";

export const FormSchema = z.object({
    Email: z.string().email({ message: "Invalid email address." }),
    Password: z.string().min(6, { message: "Password must be at least 6 characters." }),
})