import { z } from "zod";

export const contactSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  telefone: z
    .string()
    .regex(/^[0-9]+$/, "Telefone deve conter apenas números")
    .min(1, "Telefone é obrigatório"),
});

export type ContactFormData = z.infer<typeof contactSchema>;