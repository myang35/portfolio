<script lang="ts">
	import { Button, type ButtonRootProps } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	type Props = {
		children?: Snippet;
		class?: ClassValue;
		color?: 'bg' | 'primary' | 'secondary';
		variant?: 'filled' | 'text';
	} & ButtonRootProps;

	let { children, class: classProp, color = 'bg', variant = 'filled', ...rest }: Props = $props();

	const classSets = {
		bg: {
			filled: 'bg-bg border text-text hover:bg-bg-light',
			text: 'hover:bg-bg-light'
		},
		primary: {
			filled: 'bg-primary border text-primary-text hover:bg-primary-highlight',
			text: 'hover:bg-primary/50'
		},
		secondary: {
			filled: 'bg-secondary border text-secondary-text hover:bg-secondary-highlight',
			text: 'hover:bg-secondary/50'
		}
	};
</script>

<Button.Root
	class={['rounded-lg px-3 py-2 transition-colors', classSets[color][variant], classProp]}
	{...rest}
>
	{@render children?.()}
</Button.Root>
