<script lang="ts">
	import TechListItem from './tech-list-item/TechListItem.svelte';

	type Props = {
		title: string;
		description: string;
		technologies: string[];
		githubUrl: string;
	};

	let { title, description, technologies, githubUrl }: Props = $props();
</script>

<div class="flex flex-col gap-4 rounded-lg border bg-bg p-8 shadow-lg">
	<h1 class="text-xl font-bold">{title}</h1>
	<p class="text-text-muted">{description}</p>
	<div class="flex flex-wrap gap-x-4 gap-y-2">
		{#each technologies as tech}
			<TechListItem>{tech}</TechListItem>
		{/each}
	</div>
	<a
		href={githubUrl}
		class="flex items-center gap-2 text-secondary transition-colors hover:text-secondary-highlight"
	>
		<span class="icon-[mdi--github] text-2xl"></span>
		<span>View on GitHub</span>
	</a>
</div>
