import { z } from 'zod';
import { validationSchema } from '../constants/validation';

export type FormFields = z.infer<typeof validationSchema>;
