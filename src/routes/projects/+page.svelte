<script lang="ts">
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
				description="A web application for creating, organizing, and sharing recipes in a simple, visual, and community-friendly way. It’s designed to feel like a digital recipe board — a place where home cooks can save ideas, discover new dishes, and share what they love to make.
"
				githubUrl="https://github.com/myang35/taste-board.git"
				websiteUrl="https://morecipes.com"
				technologies={['Angular', 'Tailwind CSS', 'Node.js', 'Express.js', 'TypeScript', 'MongoDB']}
			></ProjectCard>
			<ProjectCard
				title="Devil's Hexagon"
				description="A fast-paced web game that combines memory, mental math, and quick reactions. Play solo or with friends on multiple devices—just one screen hosts the game while everyone else joins in from their own phone or computer."
				githubUrl="https://github.com/myang35/devils-hexagon"
				websiteUrl="https://devils-hexagon.netlify.app"
				technologies={['SvelteKit', 'Svelte', 'Tailwind CSS', 'TypeScript', 'MongoDB']}
			></ProjectCard>
		</div>
	</section>
</div>
