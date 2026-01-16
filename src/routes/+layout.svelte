<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Header from './_ui/header/Header.svelte';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="flex h-screen flex-col">
	<Header />
	{@render children()}
</div>
