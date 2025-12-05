import { url } from '@/data';

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${url}/sitemap.xml`;

export async function GET() {
	return new Response(robotsTxt, {
		headers: { 'Content-Type': 'text/plain' },
	});
}
