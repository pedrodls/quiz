import { z } from "zod"

// Definindo o schema para o login
export const menuSchema = z.object({
    topic: z.string().min(1, 'Você deve selecionar um Tema!'),
    mode: z.string().min(1, 'Você deve selecionar um Modo!'),
  });

export type MenuDataType = z.infer<typeof menuSchema>;