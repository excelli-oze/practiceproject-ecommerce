<script>
  import Weather from '../lib/components/Weather.svelte';
</script>

<main class="flex flex-col items-center justify-center min-h-screen bg-gray-600 p-4">
  <h1 class="text-3xl font-bold mb-4 text-gray-200">Weather App</h1>
  <Weather />
</main>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
