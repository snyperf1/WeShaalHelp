<script>
	import Progress from '$lib/components/report/Progress.svelte';
	import Question from '$lib/components/report/Question.svelte';
	import Intro from '$lib/components/report/Intro.svelte';
	import { prevRoutes } from '$lib/stores';
	import { currentQuestion } from '$lib/stores';
	$prevRoutes = ['Report'];
</script>

<main class="pt-20 ml-64">
	{#if $currentQuestion == []}
		<Intro />
	{:else}
		<div class="text-white flex justify-center mt-5">
			<Progress progressValue="0" />
		</div>
		<div class="pr-20">
			<Question {currentQuestion} />
		</div>
	{/if}
</main>
