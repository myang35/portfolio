<script lang="ts">
	import { NavigationMenu } from 'bits-ui';
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
	} & NavigationMenu.LinkProps;

	let { children, class: classProp, ...rest }: Props = $props();
</script>

<NavigationMenu.Link
	class={[
		'rounded-lg px-3 py-2 transition-colors hover:bg-primary/50 hover:text-primary-text',
		classProp
	]}
	{...rest}
>
	{@render children?.()}
</NavigationMenu.Link>
