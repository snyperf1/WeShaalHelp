<script lang="ts">
	import MultipleChoice from '$lib/components/report/question/questiontypes/MultipleChoice.svelte';
	import BackButton from '$lib/components/report/question/BackButton.svelte';
	import NextButton from '$lib/components/report/question/NextButton.svelte';
	type TypeQuestion = 'multipleChoice' | 'checkbox' | 'dropdown' | 'true-false';
	let questionPath = {};
	export let currentQuestion;
	export let questionContent: string = 'Q1: Whats your problem?';
	export let questionType: TypeQuestion = 'multipleChoice';
	export let options: string[] = [
		'Teacher missing',
		'Appliance not working',
		'Someone has injury',
		'I need academic help'
	];
</script>

<div>
	{#if questionType == 'multipleChoice'}
		<MultipleChoice {options} {questionContent} />
	{/if}
	<div class="flex justify-between mt-10 ml-10">
		<BackButton />
		<NextButton />
	</div>
</div>
