<script lang="ts">
	export let capacity: number = 30;
	export let value: number = 10;
</script>

<!-- <div class="bg-indigo-500 w-9/12 h-2 rounded pr-1 my-2">
	<div class="bg-green-400 rounded h-2 w-{progressValue}/12" />
</div> -->
<div class="flex flex-col items-center justify-center mt-3">
	<progress class="h-1 mt-3" max="100" value={JSON.stringify((value / capacity) * 100)} />
</div>
<div class="flex justify-between mt-2">
	<p class="text-xs">{value}/{capacity} classes</p>
	<p class="text-xs">{parseInt((value / capacity) * 100)}%</p>
</div>

<style>
	progress {
		-webkit-appearance: none;
		appearance: none;
		-moz-appearance: none;
		border: none;
		width: 100%;
		margin: 0.5em;
	}
	progress[value]::-webkit-progress-bar {
		background-color: var(--opacity-color);
		border-radius: 100px;
	}
	progress[value]::-webkit-progress-value {
		background-color: var(--main-color);
		border-radius: 100px;
	}
	progress[value]::-moz-progress-bar {
		background-color: var(--opacity-color);
		border-radius: 2px;
	}
</style>
