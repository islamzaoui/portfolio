<script lang="ts">
	import ContactForm from '@/components/contact-form.svelte';
	import ExperienceItem from '@/components/experience-item.svelte';
	import ProjectItem from '@/components/project-item.svelte';
	import { email, experiences, projects } from '@/data';
</script>

<section id="about" class="w-full space-y-4">
	<h2 class="text-2xl font-bold">About Me</h2>
	<p class="text-justify">
		Hi! I’m Islam, a Full-Stack Engineer with a deep focus on backend architecture. Passionate about
		building bulletproof, high-performance systems that power seamless user experiences through
		clean, type-safe, and scalable code.
	</p>
</section>

<section id="experience" class="w-full space-y-4">
	<h2 class="text-2xl font-bold">Experience</h2>
	<ol class="relative border-s border-muted">
		{#each experiences as experience}
			<ExperienceItem {experience} />
		{/each}
	</ol>
</section>

<section id="projects" class="w-full space-y-4">
	<h2 class="text-2xl font-bold">Projects</h2>
	{#each projects as project}
		<ProjectItem {project} />
	{/each}
</section>

<section id="contact" class="w-full space-y-4">
	<h2 class="text-2xl font-bold">Contact</h2>
	<p class="text-justify">
		Have a project idea or a question? Feel free to reach out via
		<a
			aria-label="Send me an email at {email}"
			title="Send me an email at {email}"
			class="anchor"
			href="mailto:{email}"
		>
			email
		</a>
		or social media above. I'm always happy to discuss potential collaborations or help where I can.
	</p>

	<div class="mt-6 md:mt-8">
		<ContactForm />
	</div>
</section>
