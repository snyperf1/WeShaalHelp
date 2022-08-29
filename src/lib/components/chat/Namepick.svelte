<script>
	export let name;
	export let preview;
</script>

<div class="w-72 othergrey h-16 p-5">
	<div class="flex flex-row content-center">
		<div src="" class=" bg-black w-10 h-10 rounded-full" />
		<div class="flex flex-col">
			<strong class="ml-5 text-sm font-semibold text-white">{name}</strong>
			<p class="ml-5 mt-1 text-xs text-slate-400 truncate">{preview}</p>
		</div>
	</div>
</div>

<style>
	.othergrey {
		background-color: #293241;
	}
</style>
