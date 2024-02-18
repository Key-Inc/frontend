import { PHONE_REG } from '@/lib/constants/regex';
import { z } from 'zod';

export const validationSchema = z.object({
  email: z.string().email('Неверный формат почты').optional(),
  birthDate: z.string().datetime().optional(),
  phoneNumber: z.string().regex(PHONE_REG, 'Неверный формат').optional(),
  password: z.string().max(100, 'Максимальная длина: 100 символов.').optional(),
});
