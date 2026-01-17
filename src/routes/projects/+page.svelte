<script>
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

	<section class="border-t">
		<div class="container grid gap-8 py-16 md:grid-cols-2 xl:grid-cols-3">
			<ProjectCard
				title="MoRecipes"
				description="A website where you can create, share, and view other people's recipes."
				githubUrl="https://github.com/myang35/taste-board.git"
				technologies={['Angular', 'Tailwind CSS', 'Node.js', 'Express.js', 'TypeScript', 'MongoDB']}
			></ProjectCard>
		</div>
	</section>
</div>
