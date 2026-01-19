<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
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
		{@render children()}
	</main>
	<Footer />
</div>
