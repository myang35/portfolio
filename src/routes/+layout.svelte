<script lang="ts">
	import { page } from '$app/state';
	import favicon from '$lib/assets/favicon.svg';
	import { fly } from 'svelte/transition';
	import Footer from './_ui/footer/Footer.svelte';
	import Header from './_ui/header/Header.svelte';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Marvin Yang</title>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="flex-1">
		{#key page.url}
			<div in:fly={{ y: '2rem', duration: 500 }}>
				{@render children()}
			</div>
		{/key}
	</main>
	<Footer />
</div>
