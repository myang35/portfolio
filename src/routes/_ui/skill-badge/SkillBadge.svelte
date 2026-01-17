<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
	};

	let { children }: Props = $props();
</script>

<div
	class="size-fit rounded-full border px-4 py-2 whitespace-nowrap shadow transition-all hover:border-secondary hover:shadow-[0_0_10px_0_var(--tw-shadow-color)] hover:shadow-secondary-highlight"
>
	{@render children?.()}
</div>
