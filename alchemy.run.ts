/* eslint-disable node/no-process-env */
/* eslint-disable no-console */
import process from 'node:process';
import alchemy from 'alchemy';
import { SvelteKit } from 'alchemy/cloudflare';
import { GitHubComment } from 'alchemy/github';
import { CloudflareStateStore } from 'alchemy/state';

import packageJson from './package.json' with { type: 'json' };

const app = await alchemy(packageJson.name, {
	stateStore: (scope) => new CloudflareStateStore(scope),
});

export const website = await SvelteKit('website', {
	domains: ['www.islamzaoui.top'],
});

console.log(`Started in: ${website.url}`);

if (process.env.PULL_REQUEST) {
	await GitHubComment('preview-comment', {
		owner: 'islamzaoui',
		repository: 'portfolio',
		issueNumber: Number(process.env.PULL_REQUEST),
		body: `## 🚀 Preview Deployed

Your changes have been deployed to a preview environment:

**🌐 Website:** ${website.url}

Built from commit ${process.env.GITHUB_SHA?.slice(0, 7)}

+---
<sub>🤖 This comment updates automatically with each push.</sub>`,
	});
}

await app.finalize();
