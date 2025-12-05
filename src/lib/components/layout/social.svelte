<script lang="ts">
	import * as Icons from '@/components/icons.svelte';

	const socials = {
		X: {
			link: 'https://x.com/IslamZaouiDev',
			icon: Icons.XIcon,
		},
		github: {
			link: 'https://github.com/IslamZaoui',
			icon: Icons.GithubIcon,
		},
		youtube: {
			link: 'https://www.youtube.com/@IslamZaouiDev',
			icon: Icons.YoutubeIcon,
		},
		linkedin: {
			link: 'https://www.linkedin.com/in/islamzaoui',
			icon: Icons.LinkedinIcon,
		},
	};
</script>

<div class="flex gap-4">
	{#each Object.entries(socials) as [key, value]}
		<a
			href={value.link}
			target="_blank"
			rel="noreferrer"
			class="transition-transform duration-300 ease-in-out hover:scale-[125%]"
			title={`Visit ${key} profile`}
			aria-label={`Visit ${key} profile (opens in new tab)`}
		>
			{@render value.icon({ class: 'size-6' })}
		</a>
	{/each}
</div>
