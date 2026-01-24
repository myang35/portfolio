<script lang="ts">
	import { projects } from './_data/projects';
	import ProjectCard from './_ui/project-card/ProjectCard.svelte';
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

	<section class="border-t border-border-muted">
		<div class="container py-16">
			<div class="space-y-16">
				<div class="flex flex-col gap-4">
					<h1 class="text-3xl font-bold">Web Apps</h1>
					<div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
						{#each projects.webApps as project}
							<ProjectCard {project}></ProjectCard>
						{/each}
					</div>
				</div>
				<div class="flex flex-col gap-4">
					<h1 class="text-3xl font-bold">Games</h1>
					<div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
						{#each projects.games as project}
							<ProjectCard {project}></ProjectCard>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
