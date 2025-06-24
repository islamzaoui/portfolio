import { STATIC_FORM_API_KEY } from '$env/static/private';
import { actionResult, setMessage, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import type { ContactForm } from '@/schema';

import { contactSchema } from '@/schema';
import { tryCatch } from '@/utils';

import type { RequestHandler } from './$types';

interface StaticForm extends ContactForm {
	accessKey: string;
	replyTo: string;
}

const sendEmail = (staticForm: StaticForm) =>
	fetch('https://api.staticforms.xyz/submit', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(staticForm)
	});

export const POST: RequestHandler = async (event) => {
	const form = await superValidate(event, zod(contactSchema));

	if (!form.valid) {
		return actionResult('failure', { form });
	}

	const { data: res, error } = await tryCatch(
		sendEmail({
			...form.data,
			accessKey: STATIC_FORM_API_KEY,
			replyTo: form.data.email
		})
	);

	if (error) {
		setMessage(form, {
			type: 'error',
			text: 'An unexpected error occurred while sending the email, Please try again later.'
		});
		return actionResult('error', { form });
	}

	if (!res.ok) {
		const { error } = await res.json();
		setMessage(form, {
			type: 'error',
			text: error || 'Failed to send email, Please try again later.'
		});
		return actionResult('failure', { form });
	}

	setMessage(form, {
		type: 'success',
		text: 'Form submitted successfully, we will reach out to you as soon as posible'
	});
	return actionResult('success', { form });
};
