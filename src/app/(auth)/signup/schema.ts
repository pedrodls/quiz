import { z } from 'zod';

// Definindo o schema de registro com "repetirSenha"
export const signupSchema = z.object({

    email: z.string()
        .email('Por favor, insira um email válido.'),  // Validação do email

    password: z.string()
        .min(8, 'A senha deve ter pelo menos 8 caracteres.')
        .max(20, 'A senha deve ter no máximo 20 caracteres.')
        .regex(/[A-Za-z0-9]/, 'A senha deve conter letras e números.'),

    confirmPassword: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres.')
        .max(20, 'A senha deve ter no máximo 20 caracteres.')
        .regex(/[A-Za-z0-9]/, 'A senha deve conter letras e números.'),
}).refine((data) => data.password === data.confirmPassword, {
    message: "As passwords devem ser iguais",
    path: ["confirmPassword"], // path of error
});

// Exportando o tipo inferido a partir do schema para usar em outras partes do código
export type SignupDataType = z.infer<typeof signupSchema>;
