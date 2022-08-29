<script>
	import Card from '$lib/components/statistics/card.svelte';
</script>

<main class="pt-16 ml-80 text-white">
	<h1 class="text-3xl font-extrabold mt-10">Dashboard</h1>
	<h2 class="text-xl font-medium mt-10 mb-5">State of appliances in classes</h2>
	<div class="flex">
		<Card color="bg-red-400" maincolor="#FA6262" opacity="#5b4b5a" value="10" capacity="49" />
		<Card color="bg-yellow-200" maincolor="#fde68a" opacity="#5c6260" value="20" capacity="49" />
		<Card color="bg-green-400" maincolor="#22c55e" opacity="#355c57" value="15" capacity="49" />
	</div>
</main>

<style>
</style>
