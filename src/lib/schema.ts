import { z } from 'zod';

export const contactSchema = z.object({
	name: z
		.string()
		.trim()
		.min(1, 'Your name is required')
		.max(70, 'Your name must be less than 70 characters')
		.regex(/^[a-z\s]+$/i, 'Your name must only contain letters'),
	email: z.email('A valid email is required'),
	subject: z
		.string()
		.trim()
		.min(1, 'Subject is required')
		.max(50, { message: 'Subject must be less than 100 characters' }),
	message: z.string().trim().min(1, 'Message is required')
});
