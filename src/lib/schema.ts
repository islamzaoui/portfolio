import { z } from 'zod';

export const contactSchema = z.object({
	name: z
		.string()
		.trim()
		.min(1, 'Name is required')
		.max(70, 'Name must be less than 70 characters')
		.regex(/^[a-z\s]+$/i, 'Name must only contain letters'),
	email: z.email('A valid email is required'),
	subject: z
		.string()
		.trim()
		.min(1, 'Subject is required')
		.max(60, 'Subject must be less than 60 characters'),
	message: z
		.string()
		.trim()
		.min(1, 'Message is required')
		.max(1000, 'Message must be less than 1000 characters'),
});

export type ContactForm = z.infer<typeof contactSchema>;
