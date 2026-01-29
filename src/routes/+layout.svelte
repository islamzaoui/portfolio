<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';

	import { Header } from '@/components/layout';

	import { Toaster } from '@/components/ui/sonner';
	import { url } from '@/data';
	import '../app.css';

	const { children } = $props();
</script>

<svelte:head>
	<title>Islam Zaoui - Full-Stack Web Developer</title>

	<meta
		name="description"
		content="Check out my portfolio of projects and experience in software development."
	/>
	<meta
		name="keywords"
		content="Full-Stack Web Developer, Web Development, Software Engineer, Portfolio, Islam Zaoui"
	/>
	<meta name="author" content="Islam Zaoui" />

	<meta property="og:title" content="Islam Zaoui - Full-Stack Web Developer" />
	<meta
		property="og:description"
		content="Check out my portfolio of projects and experience in software development."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:image" content="" />
	<meta property="og:site_name" content="Islam Zaoui" />
	<meta property="og:locale" content="en" />

	<meta name="twitter:title" content="Islam Zaoui - Full-Stack Web Developer" />
	<meta
		name="twitter:description"
		content="Check out my portfolio of projects and experience in software development."
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="" />

	<link rel="canonical" href={url} />
</svelte:head>

<ModeWatcher defaultMode="dark" />
<Toaster position="top-right" />

<div class="contents">
	<div class="min-h-screen px-6 antialiased">
		<div class="mx-auto max-w-3xl space-y-4">
			<Header />
			<main class="flex flex-col gap-16">
				{@render children()}
			</main>
		</div>
	</div>

	<footer class="mt-16 p-4 pb-6 text-center text-sm">
		© {new Date().getFullYear()} - All Rights Reserved -
		<a
			class="anchor"
			href="https://github.com/islamzaoui/portfolio"
			target="_blank"
			rel="noopener noreferrer"
			title="Visit this site github repository"
			aria-label="Visit this site github repository (opens in new tab)"
		>
			Source Code
		</a>
	</footer>
</div>
