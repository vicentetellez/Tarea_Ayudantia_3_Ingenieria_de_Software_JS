import { z } from 'zod';

export const createBrandSchema = z.object({
    name: z
        .string({required_error: 'El nombre de la marca fabricante es obligatoria.'})
        .min(2, 'El nombre de la marca fabricante debe tener al menos 2 caracteres.')
        .max(80, 'El nombre de la marca fabricante debe tener maximo 80 caracteres.')
        .trim(),
    country: z
        .string()
        .optional()
        .trim(),
    website: z
        .string()
        .optional()
        .url()
});