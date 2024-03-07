import { PHONE_REG } from '@/shared/constants/regex';
import { z } from 'zod';

export const validationSchema = z.object({
  email: z.string().email('Неверный формат почты'),
  birthDate: z
    .string()
    .optional()
    .transform((e) => (e === '' ? undefined : e)),
  phoneNumber: z
    .string()
    .optional()
    .refine((value) => {
      if (!value) return true;

      return PHONE_REG.test(value);
    }, 'Неверный формат')
    .transform((e) => (e === '' ? undefined : e)),
  password: z
    .string()
    .min(6, 'Минимальная длина: 6 символов')
    .max(100, 'Максимальная длина: 100 символов.')
    .optional()
    .transform((e) => (e === '' ? undefined : e)),
});
