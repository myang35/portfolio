<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
	};

	let { children }: Props = $props();
</script>

<div class="rounded-full border bg-bg-light px-3 py-1 text-xs">
	{@render children?.()}
</div>
