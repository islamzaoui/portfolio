/* eslint-disable node/no-process-env */
/* eslint-disable no-console */
import alchemy from 'alchemy';
import { RedirectRule, SvelteKit } from 'alchemy/cloudflare';
import { GitHubComment } from 'alchemy/github';
import { CloudflareStateStore } from 'alchemy/state';
import { stripIndents } from 'common-tags';
import process from 'node:process';

import packageJson from './package.json' with { type: 'json' };

const app = await alchemy(packageJson.name, {
	phase: process.argv.includes('--destroy') ? 'destroy' : 'up',
	stateStore: (scope) => new CloudflareStateStore(scope),
});

const isProd = app.stage === 'prod';

const domains = isProd ? ['www.islamzaoui.top', 'islamzaoui.top'] : undefined;

export const website = await SvelteKit('website', {
	adopt: true,
	domains,
	url: !isProd,
});

console.log(`Started in: ${website.url}`);

if (isProd) {
	await RedirectRule('apex-to-www', {
		zone: 'islamzaoui.top',
		description: 'Redirect islamzaoui.top to www.islamzaoui.top',
		expression: 'http.host eq "islamzaoui.top"',
		targetUrl: 'https://www.islamzaoui.top',
		statusCode: 301,
		preserveQueryString: true,
	});
}

if (process.env.PULL_REQUEST) {
	await GitHubComment('preview-comment', {
		owner: 'islamzaoui',
		repository: 'portfolio',
		issueNumber: Number(process.env.PULL_REQUEST),
		body: stripIndents`
			## 🚀 Preview Deployed

			Your changes have been deployed to a preview environment:

			**🌐 Website:** ${website.url}

			Built from commit ${process.env.GITHUB_SHA?.slice(0, 7)}

			+---
			<sub>🤖 This comment updates automatically with each push.</sub>`,
	});
}

await app.finalize();
