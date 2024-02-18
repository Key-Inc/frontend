import { PHONE_REG } from '@/lib/constants/regex';
import { z } from 'zod';

export const validationSchema = z.object({
  email: z.string().min(1, 'Ожидалось значение').email('Неверный формат почты'),
  birthDate: z.string().datetime(),
  phoneNumber: z.string().regex(PHONE_REG, 'Неверный формат'),
  password: z
    .string()
    .min(1, 'Ожидалось значение')
    .max(100, 'Максимальная длина: 100 символов.'),
});
