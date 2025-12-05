import { invalid } from '@sveltejs/kit';
import { form } from '$app/server';

import { contactSchema } from '@/schema';

export const contactForm = form(contactSchema, async () => {
	return invalid('unimplemented');
});
