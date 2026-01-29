import { TURNSTILE_SECRET_KEY } from '$env/static/private';

interface TokenValidateResponse {
	'error-codes': string[];
	success: boolean;
	action: string;
	cdata: string;
}

export async function verifyTurnstileToken(token: string): Promise<boolean> {
	const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify({
			response: token,
			secret: TURNSTILE_SECRET_KEY,
		}),
	});

	const data: TokenValidateResponse = await response.json();
	if (!data.success) {
		console.error('Turnstile validation failed:', data['error-codes']);
		return false;
	}

	return true;
}
