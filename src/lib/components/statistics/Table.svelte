<script>
	let headernames = ['Item', 'Reported by', 'Date reported', 'Status', 'Class'];
	export let data;
	export let status;
</script>

{#if status == 'broken'}
	<h1 class="my-10 text-4xl font-bold text-red-400">Broken appliances</h1>
	<table class="border-b border-red-500 tableborder">
		<tr class="border-b border-red-500">
			{#each headernames as i}
				<th class="px-5 rounded py-2 ">{i}</th>
			{/each}
		</tr>
		{#each data as i}
			<tr class="border border-red-500">
				<td class="text-center p-3 ">{i.item}</td>
				<td class="text-center p-3 ">{i.reportedBy}</td>
				<td class="text-center p-3 ">{i.dateReported}</td>
				<td class="text-center p-3 ">{i.status}</td>
				<td class="text-center p-3 ">{i.class}</td>
			</tr>
		{/each}
	</table>
{:else if status == 'working'}
	<h1 class="my-10 text-4xl font-bold text-green-400">Working appliances</h1>
	<table class="border-b border-green-500 tableborder">
		<tr class="border-b border-green-500">
			{#each headernames as i}
				<th class="px-5 rounded py-2 ">{i}</th>
			{/each}
		</tr>
		{#each data as i}
			<tr class="border border-green-500">
				<td class="text-center p-3 ">{i.item}</td>
				<td class="text-center p-3 ">{i.reportedBy}</td>
				<td class="text-center p-3 ">{i.dateReported}</td>
				<td class="text-center p-3 ">{i.status}</td>
				<td class="text-center p-3 ">{i.class}</td>
			</tr>
		{/each}
	</table>
{:else if status == 'all'}
	<h1 class="my-10 text-4xl font-bold text-white">All appliances</h1>
	<table class=" rounded-3xl">
		<tr class="">
			{#each headernames as i}
				<th class="px-5 rounded py-2 ">{i}</th>
			{/each}
		</tr>
		{#each data as i}
			<tr class="rounded-2xl toptableborder border-t-slate-600 text-zinc-100">
				<td class="text-center p-3 ">{i.item}</td>
				<td class="text-center p-3 ">{i.reportedBy}</td>
				<td class="text-center p-3 ">{i.dateReported}</td>
				<td class="text-center p-3 ">{i.status}</td>
				<td class="text-center p-3 ">{i.class}</td>
			</tr>
		{/each}
	</table>
{/if}

<style>
	.tableborder {
		border-style: solid;
		border-width: 2px;
	}
	.toptableborder {
		border-top-style: solid;
		border-top-width: 2px;
	}
	table {
		background-color: #293241;
		min-width: 90%;
	}
</style>
