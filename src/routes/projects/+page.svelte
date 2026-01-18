<script lang="ts">
	import ProjectCard from './_ui/project-card/ProjectCard.svelte';
	import { getProjects } from './projects.remote';

	const projects = await getProjects();
</script>

<div>
	<section>
		<div class="container flex flex-col gap-2 py-16">
			<h1 class="text-center text-4xl font-bold">My Projects</h1>
			<p class="text-center text-xl text-text-muted">
				A collection of side projects and experiments showcasing my development journey
			</p>
		</div>
	</section>

	<section class="border-t">
		<div class="container grid gap-8 py-16 md:grid-cols-2 xl:grid-cols-3">
			{#each projects as project}
				<ProjectCard
					title={project.title}
					description={project.description}
					githubUrl={project.githubUrl}
					websiteUrl={project.websiteUrl}
					technologies={project.technologies}
				></ProjectCard>
			{/each}
		</div>
	</section>
</div>
