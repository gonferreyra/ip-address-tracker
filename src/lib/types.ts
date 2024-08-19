import { z } from 'zod';

export const searchSchema = z.object({
  search: z.string().min(8).max(15, 'IP Address must be 15 characters or less'),
});

export type TSearchSchema = z.infer<typeof searchSchema>;
