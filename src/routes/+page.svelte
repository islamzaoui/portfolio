<script lang="ts">
	import { ContactForm } from '@/components/contact';
	import ExperienceItem from '@/components/experience-item.svelte';
	import { experiences } from '@/data';
</script>

<section id="about" class="w-full space-y-4">
	<h2 class="text-2xl font-bold">About Me</h2>
	<p class="text-justify">
		Hi! I'm Islam, a Full-Stack Web Developer. Passionate about creating robust tools and web
		applications to empower developers, enhance user experiences, and bring ideas to life through
		clean, secure, and scalable code.
	</p>
</section>

<section id="experience" class="w-full space-y-4">
	<h2 class="text-2xl font-bold">Experience</h2>
	<ol class="border-muted relative border-s">
		{#each experiences as experience, index}
			<ExperienceItem {experience} {index} />
		{/each}
	</ol>
</section>

<section id="contact" class="w-full space-y-4">
	<h2 class="text-2xl font-bold">Contact</h2>
	<p class="text-justify">
		Have a project idea or a question? Feel free to reach out via
		<a
			aria-label="Send me an email at contact@islamzaoui.top"
			title="Send me an email at contact@islamzaoui.top"
			class="anchor"
			href="mailto:contact@islamzaoui.top"
		>
			email
		</a>
		or social media above. I'm always happy to discuss potential collaborations or help where I can.
	</p>

	<div class="mt-6 md:mt-8">
		<ContactForm />
	</div>
</section>
