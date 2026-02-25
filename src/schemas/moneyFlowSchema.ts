import { z } from "zod";

export const moneyFlowSchema = z.object({
  descricao: z
    .string()
    .min(3, "A descrição deve ter no mínimo 3 caracteres"),

  valor: z
    .number()
    .positive("O valor deve ser maior que zero"),
});

export type MoneyFlowFormData = z.infer<typeof moneyFlowSchema>;