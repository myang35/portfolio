<script lang="ts">
	import { Button } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import type { ClassValue, HTMLButtonAttributes } from 'svelte/elements';

	type Props = {
		children?: Snippet;
		class?: ClassValue;
		color?: 'primary' | 'secondary';
		variant?: 'filled' | 'text';
	} & HTMLButtonAttributes;

	let {
		children,
		class: classProp,
		color = 'primary',
		variant = 'filled',
		...rest
	}: Props = $props();

	const classSets = {
		primary: {
			filled: 'bg-primary text-primary-text hover:bg-primary-highlight',
			text: 'hover:bg-primary/50 hover:text-primary-text'
		},
		secondary: {
			filled: 'bg-secondary text-secondary-text hover:bg-secondary-highlight',
			text: 'hover:bg-secondary/50 hover:text-secondary-text'
		}
	};
</script>

<Button.Root
	class={['rounded-lg px-3 py-2 transition-colors', classSets[color][variant], classProp]}
	{...rest}
>
	{@render children?.()}
</Button.Root>
