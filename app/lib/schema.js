import {z} from "zod"
export const accountSchema = z.object({
    name: z.string().min(2 , "Name should be at least two character"),
    type: z.enum(["CURRENT" , "SAVINGS"]),
    balance: z.string().min(1, "Initial balance required"),
    isDefault: z.boolean().default(false)
})