<script>
	export let progressValue;
</script>

<!-- <div class="bg-indigo-500 w-9/12 h-2 rounded pr-1 my-2">
	<div class="bg-green-400 rounded h-2 w-{progressValue}/12" />
</div> -->

<progress max="100" value={progressValue} />
<p class="ml-5">{progressValue}%</p>

<style>
	progress {
		-webkit-appearance: none;
		appearance: none;
		-moz-appearance: none;
		border: none;
		width: 75%;
		height: 0.5em;
		margin: 0.5em;
	}
	progress[value]::-webkit-progress-bar {
		background-color: #6366f1;
		border-radius: 100px;
	}
	progress[value]::-webkit-progress-value {
		background-color: #7affa7;
		border-radius: 100px;
	}
	progress[value]::-moz-progress-bar {
		background-color: #6366f1;
		border-radius: 2px;
	}
</style>
