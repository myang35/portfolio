import devilsHexagonImageUrl from '$lib/assets/projects/devils-hexagon.png';
import dodgeballImageUrl from '$lib/assets/projects/dodgeball.png';
import morecipesImageUrl from '$lib/assets/projects/morecipes.png';
import portfolioImageUrl from '$lib/assets/projects/portfolio.png';

export const projects = [
	{
		title: 'Portfolio',
		description:
			'A website that introduces who I am as a developer and showcases a selection of my side projects, skills, and experience.',
		imageUrl: portfolioImageUrl,
		githubUrl: 'https://github.com/myang35/portfolio.git',
		websiteUrl: 'https://marvinyang.com',
		technologies: ['SvelteKit', 'Tailwind CSS', 'TypeScript'],
		tags: ['Website']
	},
	{
		title: 'MoRecipes',
		description:
			'A web application for creating and sharing recipes in a simple, visual, and community-friendly way.',
		category: 'app',
		imageUrl: morecipesImageUrl,
		githubUrl: 'https://github.com/myang35/taste-board.git',
		websiteUrl: 'https://morecipes.com',
		technologies: ['Angular', 'Tailwind CSS', 'Node.js', 'Express.js', 'TypeScript', 'MongoDB'],
		tags: ['Web App']
	},
	{
		title: 'Dodgeball',
		description:
			'A simple browser-based, two-player dodgeball game where the goal is to hit the other player with a ball while trying to dodge their balls.',
		category: 'game',
		imageUrl: dodgeballImageUrl,
		githubUrl: 'https://github.com/myang35/dodgeball.git',
		websiteUrl: 'https://dodgeball.marvinyang.com',
		technologies: ['SvelteKit', 'Tailwind CSS', 'TypeScript'],
		tags: ['Game']
	},
	{
		title: "Devil's Hexagon",
		description: `A game influenced from The Devil's Plan, a South Korean reality game show. This is a memory game where one screen hosts the game while everyone joins in from their own phone or computer.`,
		category: 'game',
		imageUrl: devilsHexagonImageUrl,
		githubUrl: 'https://github.com/myang35/devils-hexagon.git',
		websiteUrl: 'https://devils-hexagon.netlify.app',
		technologies: ['SvelteKit', 'Tailwind CSS', 'TypeScript', 'MongoDB'],
		tags: ['Game']
	}
];
