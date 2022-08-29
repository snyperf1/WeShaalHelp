<script>
	import { prevRoutes } from '$lib/stores';
	import Progress from '$lib/components/report/Progress.svelte';
	$prevRoutes = ['Dashboard'];
	let progressValue = 8;
</script>

<main class="pt-20 ml-64 ">
	<div class="text-white p-5 flex justify-center">
		<Progress {progressValue} />
	</div>
</main>
