import { z } from 'zod';

export const createReviewSchema = z.object({
    author: z
        .string({required_error: 'El nombre del autor es obligatorio.'})
        .min(2, 'El nombre del autor debe tener al menos 2 caracteres.')
        .max(100, 'El nombre del autor debe tener maximo 100 caracteres.')
        .trim(),
    rating: z
        .number({required_error: 'La calificacion es obligatoria.'})
        .int()
        .positive('La calificacion debe ser positiva (Mayor a 0).')
        .min(1, 'La calificacion debe estar entre 1 y 5.')
        .max(5, 'La calificacion debe estar entre 1 y 5.'),
    comment: z
        .string({required_error: 'El comentario es obligatorio.'})
        .min(10, 'El comentario debe tener al menos 10 caracteres.')
        .max(500, 'El comentario debe tener maximo 500 caracteres.')
})