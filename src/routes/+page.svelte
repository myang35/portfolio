<script lang="ts">
	import portrait from '$lib/assets/portrait.jpg';
	import Button from '$lib/ui/button/Button.svelte';
	import SkillBadge from './_ui/skill-badge/SkillBadge.svelte';
</script>

<div>
	<section class="bg-linear-to-b from-bg via-bg-light to-bg-dark">
		<div class="container mx-auto grid gap-8 px-4 py-16 md:grid-cols-2">
			<div class="mx-auto flex flex-col justify-center gap-8">
				<div class="flex flex-col gap-4">
					<h1 class="text-4xl font-bold">Hi, I'm Marvin</h1>
					<p class="text-xl">
						A software developer who enjoys turning ideas into clean, intuitive web experiences. I
						specialize in building modern web applications with tools like Svelte, SvelteKit, and
						TypeScript, and I enjoy working on projects where usability and clarity matter.
					</p>
				</div>
				<div class="flex gap-8">
					<Button
						href="/contact"
						color="primary"
						variant="filled"
						class="flex items-center gap-2 text-lg font-bold"
					>
						<span class="icon-[material-symbols--contact-page-rounded]"></span>
						Get in touch
					</Button>
					<Button
						href="/projects"
						color="bg"
						variant="filled"
						class="flex items-center gap-2 text-lg font-bold"
					>
						<span class="icon-[material-symbols--library-books-rounded]"></span>
						View my work
					</Button>
				</div>
			</div>

			<img src={portrait} alt="portrait" class="mx-auto size-80 rounded-lg" />
		</div>
	</section>

	<section>
		<div class="container mx-auto flex flex-col justify-center gap-6 px-4 py-16">
			<h1 class="text-center text-3xl font-bold">About Me</h1>
			<p class="text-lg">
				My journey started at the University of North Carolina at Charlotte where I studied Computer
				Science with a focus on Web and Mobile Applications. Since then, I've spent several years
				developing real-world applications used by both customers and internal teams, which taught
				me the importance of writing reliable code and understanding user needs. Whether I'm
				building a dashboard, a PWA, or experimenting with a new framework, I'm always focused on
				learning, improving, and shipping thoughtful solutions.
			</p>
			<p class="text-lg">
				Outside of coding, I enjoy experimenting with side projects, learning new tools, and
				refining how I work. I like breaking things down, figuring out how they work, and making
				them better the next time around. I'm naturally curious and enjoy the process just as much
				as the end result.
			</p>
		</div>
	</section>

	<section class="border-t">
		<div class="container mx-auto flex w-fit flex-col gap-8 px-4 py-16">
			<h1 class="text-center text-3xl font-bold">Skills & Technologies</h1>
			<div class="flex flex-col gap-4">
				<h2 class="text-xl font-bold">Frontend Development</h2>
				<div class="flex gap-4">
					<SkillBadge>SvelteKit</SkillBadge>
					<SkillBadge>Svelte</SkillBadge>
					<SkillBadge>Angular</SkillBadge>
					<SkillBadge>Ionic</SkillBadge>
					<SkillBadge>TypeScript</SkillBadge>
					<SkillBadge>JavaScript</SkillBadge>
					<SkillBadge>HTML</SkillBadge>
					<SkillBadge>CSS</SkillBadge>
					<SkillBadge>Tailwind CSS</SkillBadge>
				</div>
			</div>
			<div class="flex flex-col gap-4">
				<h2 class="text-xl font-bold">Backend Development</h2>
				<div class="flex gap-4">
					<SkillBadge>Node.js</SkillBadge>
					<SkillBadge>Express.js</SkillBadge>
					<SkillBadge>Spring Boot</SkillBadge>
					<SkillBadge>Java</SkillBadge>
					<SkillBadge>RPG</SkillBadge>
					<SkillBadge>MongoDB</SkillBadge>
					<SkillBadge>MySQL</SkillBadge>
				</div>
			</div>
			<div class="flex flex-col gap-4">
				<h2 class="text-xl font-bold">Tools & Platforms</h2>
				<div class="flex gap-4">
					<SkillBadge>Git</SkillBadge>
					<SkillBadge>GitHub</SkillBadge>
					<SkillBadge>Jest</SkillBadge>
					<SkillBadge>Playwright</SkillBadge>
					<SkillBadge>Docker</SkillBadge>
				</div>
			</div>
		</div>
	</section>
</div>
