<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
	};

	let { children }: Props = $props();
</script>

<div class="rounded-full border border-primary bg-primary/50 px-3 py-1 text-sm">
	{@render children?.()}
</div>
