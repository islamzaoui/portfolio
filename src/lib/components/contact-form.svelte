<script lang="ts">
	import { PUBLIC_TURNSTILE_SITE_KEY } from '$env/static/public';
	import Loading from '@lucide/svelte/icons/loader-circle';
	import SendIcon from '@lucide/svelte/icons/send-horizontal';
	import { turnstile } from '@svelte-put/cloudflare-turnstile';
	import { toast } from 'svelte-sonner';

	import { Button } from '@/components/ui/button';
	import { Input } from '@/components/ui/input';
	import { Label } from '@/components/ui/label';
	import { Textarea } from '@/components/ui/textarea';
	import { contactForm } from '@/remote/contact.remote';
	import { contactSchema } from '@/schema';
</script>

<form
	{...contactForm.preflight(contactSchema).enhance(async ({ submit, form }) => {
		try {
			await submit();

			if (contactForm.result!.success) {
				toast.success(contactForm.result!.message);
				form.reset();
				return;
			}

			toast.error(contactForm.result!.message);
		} catch (err) {
			console.error(err);
			toast.error('An unexpected error occurred. Please try again later.');
		}
	})}
	oninput={() => contactForm.validate()}
	class="flex flex-col gap-6"
>
	<div class="flex flex-col gap-4 md:flex-row md:items-start">
		<div class="grid flex-1 gap-2">
			<Label class="mb-1 text-lg font-semibold" for="name">Name</Label>
			<Input {...contactForm.fields.name.as('text')} autocomplete="name" placeholder="John Doe" />
			{#each contactForm.fields.name.issues() as issue}
				<small class="text-destructive">{issue.message}</small>
			{/each}
		</div>

		<div class="grid flex-1 gap-2">
			<Label class="mb-1 text-lg font-semibold" for="email">Email</Label>
			<Input
				{...contactForm.fields.email.as('email')}
				autocomplete="email"
				placeholder="your@email.com"
			/>
			{#each contactForm.fields.email.issues() as issue}
				<small class="text-destructive">{issue.message}</small>
			{/each}
		</div>
	</div>

	<div class="grid gap-2">
		<Label class="mb-1 text-lg font-semibold" for="subject">Subject</Label>
		<Input {...contactForm.fields.subject.as('text')} placeholder="What is this about?" />
		{#each contactForm.fields.subject.issues() as issue}
			<small class="text-destructive">{issue.message}</small>
		{/each}
	</div>

	<div class="grid gap-2">
		<Label class="mb-1 text-lg font-semibold" for="message">Message</Label>
		<Textarea
			rows={7}
			class="resize-none"
			{...contactForm.fields.message.as('text')}
			placeholder="Your message here..."
		/>
		{#each contactForm.fields.message.issues() as issue}
			<small class="text-destructive">{issue.message}</small>
		{/each}
	</div>

	<div class="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
		<Button
			class="w-37.5 space-x-2"
			variant="outline"
			type="submit"
			disabled={contactForm.pending > 0}
		>
			{#if contactForm.pending > 0}
				<Loading class="animate-spin" />
			{:else}
				<SendIcon />
			{/if}
			<span>Submit</span>
		</Button>

		<div
			use:turnstile
			turnstile-sitekey={PUBLIC_TURNSTILE_SITE_KEY}
			turnstile-theme="auto"
			turnstile-size="normal"
			turnstile-language="en"
			turnstile-response-field-name="turnstileToken"
			turnstile-response-field
		></div>
	</div>
</form>
