import { z } from 'zod';

export const createBrandSchema = z.object({
    name: z
        .string({required_error: 'El nombre de la marca fabricante es obligatoria.'})
        .min(2, 'El nombre de la marca fabricante debe tener al menos 2 caracteres.')
        .max(80, 'El nombre de la marca fabricante debe tener maximo 80 caracteres.')
        .trim(),
    country: z
        .string()
        .trim()
        .max(60, 'El país no puede superar los 60 caracteres.')
        .optional(),
    website: z
        .string()
        .url('El sitio web debe tener un formato URL válido.')
        .max(200, 'El sitio web no puede superar los 200 caracteres.')
        .optional()
});