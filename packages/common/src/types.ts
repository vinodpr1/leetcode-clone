import { z } from "zod";

export const userSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 character"),
    email: z.string().email("Invalid email format"),
    password: z.string().min(5, "Password must be at least 5 character"),
})

export const authSchema = z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(5, "Password must be at least 5 character"),
})