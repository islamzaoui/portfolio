/* eslint-disable no-console */
import alchemy from 'alchemy';
import { SvelteKit } from 'alchemy/cloudflare';

import packageJson from './package.json' with { type: 'json' };

const app = await alchemy(packageJson.name);

export const worker = await SvelteKit('website', {
	name: `portfolio`,
});

console.log(`Started in: ${worker.url}`);

await app.finalize();
