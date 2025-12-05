<script lang="ts">
	import type { Experience } from '@/types';

	interface Props {
		experience: Experience;
	}

	const { experience }: Props = $props();

	const background = $derived(experience.isCurrent ? 'bg-primary' : 'bg-muted');
</script>

<li class="ms-4">
	<div class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border {background}"></div>
	<div class="flex flex-row items-center gap-2">
		<div class="text-md font-medium">{experience.title}</div>
		{#if experience.isCurrent}
			<div
				class="inline-block rounded-full border border-muted px-1 py-0 text-xs text-muted-foreground
				uppercase"
			>
				Current
			</div>
		{/if}
	</div>
	<div class="mb-4 text-sm font-normal text-muted-foreground">{experience.at}</div>
</li>
