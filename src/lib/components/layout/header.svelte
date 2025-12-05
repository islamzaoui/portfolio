<script lang="ts">
	import { Separator } from '@/components/ui/separator';

	import LightSwitch from './light-switch.svelte';
	import Social from './social.svelte';
</script>

<div class="my-6 flex flex-col items-start justify-between gap-2">
	<div class="flex w-full flex-col gap-1">
		<enhanced:img class="size-[60px]" src="@/assets/pfp.png" alt="profile" />
		<h1 class="text-lg font-bold">Islam Zaoui</h1>
		<p class="text-muted-foreground">Backend-Focused Full-Stack Engineer</p>
	</div>

	<nav class="my-5 flex w-full items-center justify-between">
		<Social />
		<LightSwitch />
	</nav>
	<Separator orientation="horizontal" />
</div>
