import { z } from "zod"

// Definindo o schema para o login
export const loginSchema = z.object({
    email: z.string()
        .email('Por favor, insira um email válido.')  // Valida um email válido
        .min(5, 'O email deve ter pelo menos 5 caracteres.'),  // Tamanho mínimo
    password: z.string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres.')  // Valida a senha com pelo menos 6 caracteres
        .max(20, 'A senha deve ter no máximo 20 caracteres.'),  // Tamanho máximo
});

export type LoginDataType = z.infer<typeof loginSchema>;