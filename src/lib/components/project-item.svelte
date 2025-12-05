<script lang="ts">
	import type { Project } from '@/types';

	interface Props {
		project: Project;
	}

	const { project }: Props = $props();
</script>

<a
	href={project.url}
	target="_blank"
	rel="noopener noreferrer"
	class="group flex gap-4 rounded-xl border bg-muted p-4 text-card-foreground transition-all duration-300 hover:border-primary/50"
>
	{#if project.image}
		<div
			class="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-muted"
		>
			<img src={project.image} alt={project.name} class="size-full object-contain p-1" />
		</div>
	{/if}
	<div class="flex flex-col gap-2">
		<h3 class="leading-none font-semibold transition-colors group-hover:text-primary">
			{project.name}
		</h3>
		<p class="text-sm text-muted-foreground">
			{project.description}
		</p>
	</div>
</a>
