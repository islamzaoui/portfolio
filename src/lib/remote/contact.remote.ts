import { invalid } from '@sveltejs/kit';
import { form } from '$app/server';

import { email } from '@/data';
import { contactSchema } from '@/schema';
import { resend } from '@/server/resend';

export const contactForm = form(contactSchema, async (data) => {
	const res = await resend.emails.send({
		from: `${data.name} <onboarding@resend.dev>`,
		to: email,
		replyTo: data.email,
		subject: data.subject,
		text: data.message,
	});

	if (res.error) {
		console.error('Resend error:', res.error);
		return invalid('Failed to send contact email, please try again later.');
	}
});
