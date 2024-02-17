import { z } from 'zod';

export const validationSchema = z.object({
  email: z.string().min(1, 'Ожидалось значение').email('Неверный формат почты'),
  birthDate: z.string().datetime(),
});
