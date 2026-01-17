<script lang="ts">
	import Button from '$lib/ui/button/Button.svelte';
	import { NavigationMenu } from 'bits-ui';
	import NavLink from './nav-link/NavLink.svelte';

	let isOpen = $state(false);
</script>

<header class="sticky top-0 z-50 border-b bg-bg-dark/90 backdrop-blur-xs">
	<div class="container">
		<div class="flex items-center justify-between gap-4 py-2">
			<a href="/" class="text-xl font-bold tracking-wide text-secondary">Marvin Yang</a>

			<Button
				variant="text"
				onclick={() => (isOpen = !isOpen)}
				aria-label="Toggle menu"
				class="flex items-center sm:hidden"
			>
				<span class="icon-[material-symbols--menu-rounded] text-2xl"></span>
			</Button>

			<nav class="hidden sm:block">
				<NavigationMenu.Root>
					<NavigationMenu.List class="flex gap-4">
						<NavigationMenu.Item>
							<NavLink href="/">Home</NavLink>
						</NavigationMenu.Item>
						<NavigationMenu.Item>
							<NavLink href="/projects">Projects</NavLink>
						</NavigationMenu.Item>
						<NavigationMenu.Item>
							<NavLink href="/contact">Contact</NavLink>
						</NavigationMenu.Item>
					</NavigationMenu.List>
				</NavigationMenu.Root>
			</nav>
		</div>

		{#if isOpen}
			<nav class="block border-t py-2 transition-all sm:hidden">
				<NavigationMenu.Root>
					<NavigationMenu.List class="flex flex-col">
						<NavigationMenu.Item>
							<NavLink href="/" class="block">Home</NavLink>
						</NavigationMenu.Item>
						<NavigationMenu.Item>
							<NavLink href="/projects" class="block">Projects</NavLink>
						</NavigationMenu.Item>
						<NavigationMenu.Item>
							<NavLink href="/contact" class="block">Contact</NavLink>
						</NavigationMenu.Item>
					</NavigationMenu.List>
				</NavigationMenu.Root>
			</nav>
		{/if}
	</div>
</header>
